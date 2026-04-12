"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointments");
      if (res.ok) {
        const data = await res.json();
        setAppointments(data.appointments);
      }
    } catch {
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        toast.success(`Status updated to ${status}`);
        fetchAppointments();
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-center" />
      <div>
        <h1 className="font-headline text-3xl font-bold text-on-surface">Appointments</h1>
        <p className="text-on-surface-variant font-medium">Manage patient requests and schedules.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-on-surface-variant">Loading appointments...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <th className="p-4">ID</th>
                  <th className="p-4">Patient Info</th>
                  <th className="p-4">Schedule</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((app) => (
                  <tr key={app.id} className="border-b border-outline-variant/10 hover:bg-surface/50 transition-colors">
                    <td className="p-4 align-top">
                      <span className="font-mono text-xs text-primary font-bold">{app.bookingId}</span>
                    </td>
                    <td className="p-4 align-top max-w-xs">
                      <div className="font-semibold text-on-surface text-sm">{app.patientName}</div>
                      <div className="text-xs text-on-surface-variant mb-1">{app.age} yrs • {app.gender}</div>
                      <div className="text-xs text-on-surface-variant">📞 {app.phone}</div>
                      <div className="text-xs text-on-surface-variant truncate">📧 {app.email}</div>
                      {app.complaint && (
                        <div className="mt-2 text-xs text-on-surface-variant bg-surface p-2 rounded border border-outline-variant/10 italic">
                          "{app.complaint}"
                        </div>
                      )}
                    </td>
                    <td className="p-4 align-top text-sm">
                      <div className="font-medium text-on-surface">{format(new Date(app.preferredDate), "MMM dd, yyyy")}</div>
                      <div className="text-xs text-on-surface-variant">{app.timeSlot}</div>
                    </td>
                    <td className="p-4 align-top text-sm text-on-surface">
                      <span className="bg-surface-container px-2 py-1 rounded text-xs">
                        {app.consultationType === "ONLINE" ? "Video" : "Clinic"}
                      </span>
                    </td>
                    <td className="p-4 align-top">
                      <select 
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className={`text-xs font-bold rounded-md border-none ring-0 py-1 pl-2 pr-6 cursor-pointer
                          ${app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${app.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : ''}
                          ${app.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' : ''}
                          ${app.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                        `}
                      >
                        <option value="PENDING" className="bg-white text-black">Pending</option>
                        <option value="CONFIRMED" className="bg-white text-black">Confirmed</option>
                        <option value="COMPLETED" className="bg-white text-black">Completed</option>
                        <option value="CANCELLED" className="bg-white text-black">Cancelled</option>
                      </select>
                    </td>
                    <td className="p-4 align-top text-right space-x-2">
                       <a href={`https://wa.me/${app.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors" title="Message on WhatsApp">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.723-6.812c-.312-.156-1.848-.912-2.134-1.017-.286-.105-.494-.156-.703.156-.208.312-.807 1.017-1.017 1.25-.208.233-.416.26-.728.105-.312-.156-1.318-.485-2.51-1.548-.928-.827-1.554-1.849-1.737-2.161-.182-.312-.02-.481.136-.636.141-.139.312-.364.469-.546.156-.182.208-.312.312-.52.105-.208.052-.39-.026-.546-.078-.156-.703-1.693-.962-2.316-.252-.605-.511-.523-.703-.533-.182-.008-.39-.01-.598-.01s-.546.078-.832.39c-.286.312-1.094 1.069-1.094 2.604s1.12 3.021 1.275 3.229c.156.208 2.204 3.367 5.338 4.721.746.322 1.328.514 1.782.658.75.238 1.433.205 1.973.125.602-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.077-.13-.286-.208-.597-.364z"></path></svg>
                       </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
