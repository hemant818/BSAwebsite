import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full border-t border-surface-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Brahmasutra Ayurveda Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-headline text-xl font-bold text-primary leading-tight">
              Brahmasutra<br />Ayurveda
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant">
            Redefining traditional wellness through authentic Ayurvedic practices
            and personalized care for the modern individual.
          </p>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919510250323?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Sushila%20Singh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Dr. Sushila Singh", href: "/doctor" },
              { label: "Book Appointment", href: "/book-appointment" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-3 items-start text-sm">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
              <span className="text-on-surface-variant">12, Lotus Plazza, Sector 5,<br />Vasant Kunj, Delhi – 110070</span>
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

        {/* Hours */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface">Clinic Hours</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start gap-4">
              <span className="font-medium text-on-surface">Monday – Friday</span>
              <span className="text-on-surface-variant text-right">10:00 AM – 12:00 PM<br />4:00 PM – 6:00 PM</span>
            </div>
            <div className="flex justify-between">
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
