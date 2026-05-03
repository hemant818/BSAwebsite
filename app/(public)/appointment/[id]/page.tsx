import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmed | Brahmasutra Ayurveda"
};

export default async function AppointmentSuccessPage({ params }: { params: { id: string } }) {
  const bookingId = params.id;

  // Try to fetch appointment details from DB — gracefully shows booking ID if unavailable
  let appointment: any = null;
  try {
    const { prisma } = await import("@/lib/prisma");
    const result = await prisma.appointment.findUnique({
      where: { bookingId }
    });
    appointment = result;
  } catch {
    // DB unavailable — show success page with just the booking ID
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 px-6 bg-surface">
      <div className="max-w-2xl w-full bg-surface-container-lowest rounded-[2rem] p-10 md:p-16 shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-primary"></div>

        {/* Success Icon */}
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>

        <h1 className="font-headline text-4xl font-bold text-on-surface mb-4">Request Received!</h1>
        <p className="text-on-surface-variant text-lg mb-8">
          {appointment
            ? `Thank you, ${appointment.patientName.split(" ")[0]}. We have securely received your appointment request.`
            : "Your appointment request has been successfully submitted."}
        </p>

        {/* Booking Summary Card */}
        <div className="bg-surface-container-high rounded-2xl p-6 text-left space-y-4 mb-8 border border-outline-variant/30">
          <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
            <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Booking ID</span>
            <span className="font-bold text-primary font-mono">{bookingId}</span>
          </div>

          {appointment ? (
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="block text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">Patient</span>
                <span className="font-medium text-sm">{appointment.patientName}</span>
              </div>
              <div>
                <span className="block text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">Date</span>
                <span className="font-medium text-sm">
                  {new Date(appointment.preferredDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div>
                <span className="block text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">Time</span>
                <span className="font-medium text-sm">{appointment.timeSlot}</span>
              </div>
              <div>
                <span className="block text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">Type</span>
                <span className="font-medium text-sm">
                  {appointment.consultationType === "ONLINE" ? "Video Consultation" : "In-Clinic Visit"}
                </span>
              </div>
            </div>
          ) : (
            <div className="pt-2 text-sm text-on-surface-variant">
              <p>Please save your Booking ID above. Dr. Sushila Singh will confirm your appointment shortly.</p>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between border-t border-outline-variant/20">
            <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Status</span>
            <span className="font-medium text-sm text-yellow-600 bg-yellow-50 px-3 py-1 rounded-md border border-yellow-200">
              ⏳ Pending Confirmation
            </span>
          </div>
        </div>

        <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
          Dr. Sushila Singh will review your request and confirm via WhatsApp / call at the earliest.
          For urgent queries, contact: <strong>+91 98765 43210</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto">
              Return to Home
            </button>
          </Link>
          <a
            href={`https://wa.me/919737370959?text=Hi%2C%20I%20just%20booked%20an%20appointment%20(ID%3A%20${bookingId}).%20Please%20confirm.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.723-6.812c-.312-.156-1.848-.912-2.134-1.017-.286-.105-.494-.156-.703.156-.208.312-.807 1.017-1.017 1.25-.208.233-.416.26-.728.105-.312-.156-1.318-.485-2.51-1.548-.928-.827-1.554-1.849-1.737-2.161-.182-.312-.02-.481.136-.636.141-.139.312-.364.469-.546.156-.182.208-.312.312-.52.105-.208.052-.39-.026-.546-.078-.156-.703-1.693-.962-2.316-.252-.605-.511-.523-.703-.533-.182-.008-.39-.01-.598-.01s-.546.078-.832.39c-.286.312-1.094 1.069-1.094 2.604s1.12 3.021 1.275 3.229c.156.208 2.204 3.367 5.338 4.721.746.322 1.328.514 1.782.658.75.238 1.433.205 1.973.125.602-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.077-.13-.286-.208-.597-.364z"/></svg>
              Confirm on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
