import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full border-t border-surface-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Brahmasutra Ayurveda Logo" width={40} height={40} className="object-contain rounded-sm" />
            <span className="font-headline text-xl font-bold text-primary">Brahmasutra Ayurveda</span>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant">
            Redefining traditional wellness through authentic Ayurvedic practices and personalized care for the modern individual.
          </p>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919510250323?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Sushila%20Singh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block">Home</Link></li>
            <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block">About Us</Link></li>
            <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block">Services</Link></li>
            <li><Link href="/doctor" className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block">Dr. Sushila Singh</Link></li>
            <li><Link href="/book-appointment" className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block">Book Appointment</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-3 items-start text-sm">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
              <span className="text-on-surface-variant">Neelkanth Kutir Bunglows, Gamdi Gam,<br />Vatva Gamdi Road, Ahmedabad<br />Gujarat, India - 382435</span>
            </div>
            <div className="flex gap-3 items-center text-sm">
              <span className="material-symbols-outlined text-primary text-base">call</span>
              <a href="tel:+919510250323" className="text-on-surface-variant hover:text-primary transition-colors">
                +91 9510250323
              </a>
            </div>
            <div className="flex gap-3 items-center text-sm">
              <span className="material-symbols-outlined text-primary text-base">mail</span>
              <a href="mailto:brahmasutraayurveda@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
                brahmasutraayurveda@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Clinic Hours</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start gap-4">
              <span className="font-medium text-on-surface">Monday – Friday</span>
              <span className="text-on-surface-variant text-right">10:00 AM – 12:00 PM<br />4:00 PM – 6:00 PM</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-medium text-primary italic">Sat & Sun</span>
              <span className="text-on-surface-variant">Closed</span>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/book-appointment">
              <button className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-container transition-colors">
                Book Appointment →
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-surface-variant/30 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-sm text-on-surface-variant">
          © 2025 Brahmasutra Ayurveda. Ancient Wisdom For Modern Healing.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
