import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date");

    if (!dateParam) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 });
    }

    // BSA Slots: Morning 9AM-12PM, Evening 4PM-6PM — 30 min intervals
    const allSlots = [
      "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
    ];

    let bookedSlots: string[] = [];

    // Try to fetch booked slots from database
    try {
      const { prisma } = await import("@/lib/prisma");
      const [year, month, day] = dateParam.split('-').map(Number);
      const startOfDay = new Date(year, month - 1, day, 0, 0, 0, 0);
      const endOfDay = new Date(year, month - 1, day, 23, 59, 59, 999);

      const bookedAppointments = await prisma.appointment.findMany({
        where: {
          preferredDate: {
            gte: startOfDay,
            lte: endOfDay,
          },
          status: {
            not: "CANCELLED"
          }
        },
        select: {
          timeSlot: true,
        }
      });

      bookedSlots = bookedAppointments.map((a: { timeSlot: string }) => a.timeSlot);
    } catch (dbError) {
      console.warn("Could not fetch booked slots from database, showing all as available:", (dbError as Error).message);
    }

    const availableSlots = allSlots.map(slot => ({
      slot,
      isBooked: bookedSlots.includes(slot)
    }));

    return NextResponse.json({ slots: availableSlots }, { status: 200 });

  } catch (error: any) {
    console.error("Error fetching slots:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
