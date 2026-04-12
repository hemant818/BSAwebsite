"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DOCTOR_WHATSAPP = "917202844844"; // Doctor's WhatsApp number

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
];

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function getMaxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split("T")[0];
}

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    concern: "",
    date: getTodayDate(),
    time: "",
    type: "In-Clinic Visit",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.age || isNaN(Number(form.age))) newErrors.age = "Valid age required";
    if (!form.gender) newErrors.gender = "Please select gender";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone number required";
    if (!form.concern.trim()) newErrors.concern = "Please describe your health concern";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time slot";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Format date for display
    const dateObj = new Date(form.date + "T00:00:00");
    const formattedDate = dateObj.toLocaleDateString("en-IN", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });

    // Build WhatsApp message
    const message = `🌿 *New Appointment Request - Brahmasutra Ayurveda*

👤 *Patient:* ${form.name}
🎂 *Age:* ${form.age} yrs  |  *Gender:* ${form.gender}
📞 *Phone:* ${form.phone}
🏥 *Type:* ${form.type}
📅 *Date:* ${formattedDate}
⏰ *Time:* ${form.time}

🩺 *Health Concern:*
${form.concern}

_Please confirm this appointment at your earliest. Thank you!_`;

    const whatsappUrl = `https://wa.me/${DOCTOR_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Trust bar */}
      <div className="bg-primary-container text-on-primary-container py-3 text-center pt-[88px]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="material-symbols-outlined text-sm">verified_user</span>
          <p className="font-body text-sm font-medium tracking-wide">
            All appointment requests go directly to Dr. Sushila Singh via WhatsApp for instant confirmation.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── FORM ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_12px_40px_rgba(27,29,14,0.07)]">

              {/* Header */}
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-surface-container-high relative">
                    <Image
                      src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&auto=format&fit=crop"
                      alt="Dr. Sushila Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#25D366] text-white p-1.5 rounded-full border-2 border-surface-container-lowest">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                </div>
                <h1 className="font-headline text-3xl font-bold text-on-surface mb-1">
                  Book with Dr. Sushila Singh
                </h1>
                <p className="font-body text-on-surface-variant text-sm max-w-sm">
                  Fill in your details — your request will be sent directly to the doctor on WhatsApp for instant confirmation.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Full Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Enter your full name"
                    type="text"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>

                {/* Age + Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Age *</label>
                    <input
                      name="age" value={form.age} onChange={handleChange}
                      type="number" min="1" max="120"
                      className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="e.g. 35"
                    />
                    {errors.age && <p className="text-red-500 text-xs mt-1 ml-1">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Gender *</label>
                    <select
                      name="gender" value={form.gender} onChange={handleChange}
                      className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1 ml-1">{errors.gender}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">WhatsApp / Phone Number *</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    type="tel"
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Consultation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["In-Clinic Visit", "Video Consultation"].map((t) => (
                      <label
                        key={t}
                        className={`cursor-pointer rounded-xl p-3.5 border-2 transition-all text-center text-sm font-bold select-none ${
                          form.type === t
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-surface-container-high border-transparent text-on-surface"
                        }`}
                      >
                        <input
                          type="radio" name="type" value={t}
                          checked={form.type === t} onChange={handleChange}
                          className="hidden"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Health Concern */}
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Health Concern *</label>
                  <textarea
                    name="concern" value={form.concern} onChange={handleChange}
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Describe your symptoms, health goals, or any specific concerns..."
                    rows={3}
                  />
                  {errors.concern && <p className="text-red-500 text-xs mt-1 ml-1">{errors.concern}</p>}
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Preferred Date *</label>
                    <input
                      name="date" type="date"
                      value={form.date} onChange={handleChange}
                      min={getTodayDate()} max={getMaxDate()}
                      className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1 ml-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 ml-1">Preferred Time *</label>
                    <select
                      name="time" value={form.time} onChange={handleChange}
                      className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Select Time</option>
                      {TIME_SLOTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1 ml-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Submit → WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-body font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Send to Doctor on WhatsApp
                  </button>
                  <p className="text-center text-xs text-on-surface-variant mt-3">
                    Clicking will open WhatsApp with your details pre-filled. The doctor will confirm your appointment directly.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-8">

            {/* How it works */}
            <div className="bg-surface-container-low rounded-3xl p-8 space-y-6">
              <h3 className="font-headline text-xl font-bold text-primary">How It Works</h3>
              <div className="space-y-5">
                {[
                  { step: "1", icon: "edit_note", title: "Fill the Form", desc: "Enter your name, health concern, and preferred date & time." },
                  { step: "2", icon: "send", title: "Send on WhatsApp", desc: "Your details are sent directly to Dr. Sushila Singh's WhatsApp." },
                  { step: "3", icon: "check_circle", title: "Get Confirmed", desc: "The doctor confirms your slot and you're all set!" },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-lg">{s.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-on-surface text-sm">{s.title}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp button */}
              <a
                href={`https://wa.me/${DOCTOR_WHATSAPP}?text=${encodeURIComponent("Hello Dr. Sushila Singh, I would like to book an appointment. Please guide me.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-surface text-primary border border-primary/30 py-3 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.216 1.441 5.44 0 9.863-4.424 9.866-9.864.001-2.638-1.03-5.118-2.905-6.993-1.875-1.875-4.355-2.903-6.992-2.903-5.44 0-9.863 4.424-9.866 9.865-.001 1.902.547 3.757 1.584 5.372l-1.011 3.693 3.784-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat Directly with Doctor
              </a>
            </div>

            {/* Clinic Info */}
            <div className="bg-surface-container-low rounded-3xl p-8 space-y-5">
              <h3 className="font-headline text-lg font-bold text-on-surface">Clinic Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                  <span className="text-on-surface-variant">Neelkanth Kutir Bunglows, Gamdi Gam,<br />Vatva Gamdi Road, Ahmedabad<br />Gujarat, India - 382435</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <a href="tel:+917202844844" className="text-on-surface-variant hover:text-primary">+91 7202844844</a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <a href="mailto:sushinaina@gmail.com" className="text-on-surface-variant hover:text-primary">sushinaina@gmail.com</a>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 space-y-2 text-sm">
                <div className="flex justify-between items-start gap-4">
                  <span className="font-medium">Wed, Thu, Fri</span>
                  <span className="text-on-surface-variant text-right">9:00 AM – 12:00 PM<br />4:00 PM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium italic text-primary">Other Days</span>
                  <span className="text-on-surface-variant mt-1">Closed</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-surface-container-low rounded-3xl p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary/20 mb-2 block">format_quote</span>
              <p className="font-headline text-lg italic font-medium text-on-surface leading-relaxed">
                &ldquo;Ayurveda is not a treatment, it is a way of remembering who you truly are.&rdquo;
              </p>
              <p className="text-xs text-primary font-bold mt-3 uppercase tracking-wider">Dr. Sushila Singh</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
