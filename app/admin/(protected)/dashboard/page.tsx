import { format } from "date-fns";

async function getStats() {
  try {
    const { prisma } = await import("@/lib/prisma");
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

    const [todayAppointments, pendingAppointments, totalAppointments] = await Promise.all([
      prisma.appointment.count({
        where: {
          preferredDate: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      }),
      prisma.appointment.count({
        where: { status: "PENDING" },
      }),
      prisma.appointment.count(),
    ]);

    const recentAppointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    return { todayAppointments, pendingAppointments, totalAppointments, recentAppointments, dbError: false };
  } catch (e) {
    console.warn("Dashboard: DB unavailable:", (e as Error).message);
    return { todayAppointments: 0, pendingAppointments: 0, totalAppointments: 0, recentAppointments: [], dbError: true };
  }
}

export default async function AdminDashboard() {
  const { todayAppointments, pendingAppointments, totalAppointments, recentAppointments, dbError } = await getStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-on-surface">Overview</h1>
        <p className="text-on-surface-variant font-medium">Welcome back, Dr. Sushila Singh. Here&apos;s what&apos;s happening today.</p>
      </div>

      {dbError && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-yellow-800 text-sm">
          <strong>⚠️ Database Offline:</strong> Live data is unavailable. Displaying placeholder values. Check your database connection.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Today&apos;s Sessions</p>
            <p className="font-headline text-4xl font-bold text-primary">{todayAppointments}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined">today</span>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Pending Review</p>
            <p className="font-headline text-4xl font-bold text-tertiary">{pendingAppointments}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Total Bookings</p>
            <p className="font-headline text-4xl font-bold text-secondary">{totalAppointments}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined">library_books</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline text-xl font-bold text-on-surface">Recent Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                <th className="pb-3 pr-4">Patient</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Type</th>
                <th className="pb-3 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.length > 0 ? (
                recentAppointments.map((app: any) => (
                  <tr key={app.id} className="border-b border-outline-variant/10 hover:bg-surface/50 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="font-semibold text-on-surface text-sm">{app.patientName}</div>
                      <div className="text-xs text-on-surface-variant">{app.age} yrs &bull; {app.gender}</div>
                    </td>
                    <td className="py-4 pr-4 text-sm text-on-surface">
                      {format(new Date(app.preferredDate), "MMM dd")} <span className="text-on-surface-variant text-xs">at {app.timeSlot}</span>
                    </td>
                    <td className="py-4 pr-4 text-sm text-on-surface">
                      {app.consultationType === "ONLINE" ? "Video" : "Clinic"}
                    </td>
                    <td className="py-4 pr-4">
                      {app.status === "PENDING" && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-bold">Pending</span>}
                      {app.status === "CONFIRMED" && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-md font-bold">Confirmed</span>}
                      {app.status === "COMPLETED" && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-bold">Completed</span>}
                      {app.status === "CANCELLED" && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-md font-bold">Cancelled</span>}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-sm text-on-surface-variant">No recent appointments.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
