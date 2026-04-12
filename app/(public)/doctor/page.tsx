"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DoctorProfile() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <header className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-surface-container-highest rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-widest mb-6"
          >
            SENIOR CONSULTANT
          </motion.span>
          <motion.h1 
            {...fadeInUp}
            className="font-headline text-4xl md:text-6xl text-on-primary leading-tight font-medium max-w-3xl"
          >
            Dr. Sushila Singh, MD-Panchkarma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-on-primary/80 mt-4 text-lg font-body max-w-xl"
          >
            Harnessing the ancient wisdom of Ayurveda to restore modern metabolic and spiritual balance.
          </motion.p>
        </div>
      </header>

      {/* Profile Overview Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Photo & Credential Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Sushila Singh"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Overlapping Credential Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Experience</p>
                  <p className="text-xl font-headline font-bold text-primary">15+ Years</p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Specialized in chronic lifestyle disorders and Panchkarma detoxification.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Credentials, Languages & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <h2 className="font-headline text-3xl font-bold text-on-background mb-4">Integrative Healing Specialist</h2>
              <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Dr. Sushila Singh is a visionary in the field of Panchkarma, dedicated to bridge the gap between traditional Vedic protocols and contemporary health challenges. Her approach is rooted in the belief that true healing occurs when the Doshas are aligned with the rhythms of nature.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">translate</span> Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Hindi", "Gujarati"].map((lang) => (
                  <span key={lang} className="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant font-medium border border-outline-variant/20">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">school</span>
                <h4 className="font-headline text-lg font-bold mb-2">Education</h4>
                <p className="text-sm text-on-surface-variant">BAMS & MD (Panchkarma) from Gujarat Ayurved University, Jamnagar.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">clinical_notes</span>
                <h4 className="font-headline text-lg font-bold mb-2">Specialization</h4>
                <p className="text-sm text-on-surface-variant">Metabolic Disorders, Spine Health, and Stress Management.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background">Career Milestones</h2>
            <p className="text-on-surface-variant mt-2 font-body italic">A journey of dedication and healing.</p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { year: "2018 — PRESENT", title: "Senior Consultant", org: "Brahmasutra Ayurveda", desc: "Leading the Panchkarma department and overseeing holistic wellness transformations for over 5,000 patients.", align: "right" },
                { year: "2014 — 2018", title: "Lead Ayurvedic Physician", org: "AyurGen Health Center", desc: "Pioneered personalized nutrition and detox programs integrated with Yoga therapy.", align: "left" },
                { year: "2010 — 2014", title: "Resident Doctor", org: "Veda Vidya Ayurvedic Institute", desc: "Started clinical practice focusing on botanical formulations and traditional pulse diagnosis (Nadi Pariksha).", align: "right" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${item.align === "left" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`md:w-1/2 ${item.align === "right" ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} mt-4 md:mt-0`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                      <h4 className="text-primary font-bold text-lg">{item.title}</h4>
                      <p className="text-on-background font-medium">{item.org}</p>
                      <p className="text-sm text-on-surface-variant mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary border-4 border-surface rounded-full -translate-x-1/2 z-10 hidden md:block"></div>
                  <div className={`md:w-1/2 ${item.align === "right" ? "md:pl-12" : "md:pr-12"} order-first`}>
                    <span className="text-primary font-bold tracking-tighter text-sm">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-on-background mb-4">A Message from Dr. Singh</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Understanding the philosophy of "The Modern Sage" and how we approach your unique biological constitution.</p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80&w=1200" 
            alt="Clinic room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl font-fill">play_arrow</span>
            </button>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white font-headline text-xl italic font-medium">"Ayurveda is not a treatment, it is a way of remembering who you truly are."</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-headline text-3xl md:text-5xl text-on-primary font-bold mb-6 max-w-3xl mx-auto">Ready to start your healing journey?</h2>
          <p className="text-on-primary/80 text-lg mb-10 max-w-2xl mx-auto">Consult with Dr. Sushila Singh to design a personalized wellness blueprint that honors your nature.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/book-appointment"
              className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold hover:shadow-lg transform active:scale-95 transition-all"
            >
              Book Your Consultation
            </Link>
            <a 
              href="https://wa.me/917202844844?text=Hello%20Dr.%20Sushila%20Singh,%20I'd%20like%20to%20chat%20about%20my%20health."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/10 backdrop-blur-md border border-surface/20 text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-surface/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">forum</span> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
