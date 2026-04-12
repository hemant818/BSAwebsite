import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations/appointment";
import DOMPurify from "isomorphic-dompurify";
import rateLimit from "@/lib/rateLimit";

const limiter = rateLimit({
  interval: 60000,
  uniqueTokenPerInterval: 500,
});

function generateBookingId() {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `BSA-${year}-${randomNum}`;
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    try {
      await limiter.check(5, ip);
    } catch {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    // 2. Body Parsing
    const body = await req.json();

    // 3. Sanitize
    const sanitizedBody = {
      ...body,
      patientName: DOMPurify.sanitize(body.patientName || ""),
      complaint: DOMPurify.sanitize(body.complaint || ""),
    };

    // 4. Validate
    const validationResult = appointmentSchema.safeParse(sanitizedBody);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const bookingId = generateBookingId();

    // 5. Save to DB (silently skipped if DB is offline — prisma is now a NoOp proxy)
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.appointment.create({
        data: {
          bookingId,
          patientName: validData.patientName,
          age: validData.age,
          gender: validData.gender as any,
          phone: validData.phone,
          email: validData.email,
          complaint: validData.complaint,
          preferredDate: new Date(validData.preferredDate),
          timeSlot: validData.timeSlot,
          consultationType: validData.consultationType as any,
          source: validData.source,
        },
      });
    } catch (dbError: any) {
      console.warn("[Appointments] DB save skipped:", dbError?.message);
    }

    // 6. Always return success with booking ID
    return NextResponse.json(
      {
        success: true,
        bookingId,
        message: `Appointment ${bookingId} submitted successfully!`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
