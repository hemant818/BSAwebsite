import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-surface-container flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col fixed h-full z-20 shadow-sm">
        <div className="p-6 border-b border-outline-variant/30">
          <div className="font-headline text-xl font-bold text-primary mb-1">Dr. Sushila Singh</div>
          <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Admin Portal</div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors font-semibold text-sm text-on-surface">
            <span className="material-symbols-outlined pb-1">dashboard</span>
            Dashboard
          </Link>
          <Link href="/admin/appointments" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors font-semibold text-sm text-on-surface">
            <span className="material-symbols-outlined pb-1">calendar_month</span>
            Appointments
          </Link>
        </nav>

        <div className="p-4 border-t border-outline-variant/30">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto w-full min-h-screen relative">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
