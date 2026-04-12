import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Try DB — graceful fallback to empty array if offline
    try {
      const { prisma } = await import("@/lib/prisma");
      const appointments = await prisma.appointment.findMany({
        orderBy: { createdAt: "desc" }
      });
      return NextResponse.json({ appointments }, { status: 200 });
    } catch (dbError: any) {
      console.warn("[Appointments GET] DB unavailable:", dbError?.message);
      return NextResponse.json({ appointments: [], offline: true }, { status: 200 });
    }
  } catch (error: any) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
