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

export default function ExpertsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <header className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-surface-container-highest rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <motion.h1 
            {...fadeInUp}
            className="font-headline text-4xl md:text-6xl text-on-primary leading-tight font-medium max-w-3xl mx-auto"
          >
            Our Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-on-primary/80 mt-4 text-lg font-body max-w-2xl mx-auto"
          >
            Meet the experienced healers at Brahmasutra Ayurveda who are dedicated to restoring your natural balance.
          </motion.p>
        </div>
      </header>

      {/* Profile Section for Dr. Sushila */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative group"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container sticky top-24">
              <img 
                src="/doctor-profile.jpg" 
                alt="Dr. Sushila Singh"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Credentials, Languages & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold tracking-widest mb-4"
              >
                FOUNDER & SENIOR CONSULTANT
              </motion.span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background mb-2">Dr. Sushila Singh</h2>
              <p className="text-xl text-primary font-semibold mb-6">
                BAMS, CRAV, MD – Panchakarma, PhD Scholar<br/>
                <span className="text-on-surface-variant text-lg font-normal">Senior Ayurvedic Physician & Panchakarma Specialist</span>
              </p>
              <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>
              
              <div className="prose prose-lg text-on-surface-variant max-w-none">
                <p className="font-medium text-on-surface text-xl mb-8 leading-relaxed border-l-4 border-tertiary pl-6 py-4 bg-tertiary/5 rounded-r-xl">
                  With over 15 years of dedicated clinical experience, Dr. Sushila is a leading Ayurvedic physician specializing in the root-cause reversal of complex lifestyle, neuromusculoskeletal, metabolic, autoimmune, degenerative, geriatric, cosmetic, and cancer care support through authentic Panchakarma therapies and precision Ayurvedic herbal protocols.
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">school</span>
                      Academic Excellence
                    </h3>
                    <p className="leading-relaxed">
                      A gold-medalist BAMS graduate, Dr. Sushila holds an MD in Panchakarma, mastering classical Shodhana, Rasayana, and Vajeekarana therapies. Her CRAV certification in Rasayana & Vajikarana strengthens her expertise in anti-aging, immunity, and Saundarya – Ayurvedic aesthetics. As a PhD Scholar, she is researching evidence-based Panchakarma protocols for metabolic, degenerative, and dermatological disorders.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
                      Clinical Expertise
                    </h3>
                    <p className="mb-6 leading-relaxed">
                      Dr. Sushila is renowned for her integrative, stage-wise approach combining Nadi Pariksha, Marma Chikitsa, Panchakarma, and Herbal Dermatology for cases where modern medicine offers limited solutions. Her core specialties include:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Neuromusculoskeletal & Degenerative</strong>
                        <span className="text-sm leading-relaxed block">Sciatica, spondylitis, arthritis, Parkinson’s, paralysis, muscular dystrophy, post-stroke rehab</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Lifestyle & Metabolic</strong>
                        <span className="text-sm leading-relaxed block">Diabetes, thyroid, PCOS, obesity, hypertension, fatty liver, IBS</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Autoimmune Conditions</strong>
                        <span className="text-sm leading-relaxed block">Rheumatoid arthritis, psoriasis, ulcerative colitis, SLE, Hashimoto’s thyroiditis</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Geriatric Care</strong>
                        <span className="text-sm leading-relaxed block">Age-related memory loss, joint degeneration, insomnia, constipation, weakness through Jara Chikitsa</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Ayurvedic Cancer Care Support</strong>
                        <span className="text-sm leading-relaxed block">Panchakarma-based detox post-chemo, Rasayana for Ojas, managing side effects, improving appetite</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                        <strong className="block text-primary mb-2 text-lg">Cosmetic & Skin Care</strong>
                        <span className="text-sm leading-relaxed block">Acne, pigmentation, alopecia, premature aging, psoriasis, eczema via Raktamokshan, Mukha Lepa</span>
                      </li>
                      <li className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                        <strong className="block text-primary mb-2 text-lg">Chronic Pain Management</strong>
                        <span className="text-sm leading-relaxed block">Drug-free relief through Viddhakarma, Agnikarma, Basti, and Marma therapy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-8 rounded-3xl border-l-4 border-primary">
                    <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-2xl">self_improvement</span>
                      Philosophy of Practice
                    </h3>
                    <p className="italic font-medium text-lg text-on-surface mb-4">
                      "True beauty is the reflection of pure blood and balanced doshas. Panchakarma doesn’t just treat disease — it reveals your natural Prabha."
                    </p>
                    <p className="leading-relaxed">
                      Every patient at Brahmasutra Ayurveda receives a Prakriti-Vikriti based, multi-phase plan combining Shodhana, Shamana, Rasayana, Varnya herbs, and lifestyle correction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
                      Beyond the Clinic
                    </h3>
                    <p className="leading-relaxed">
                      Dr. Sushila mentors BAMS doctors in advanced Panchakarma for oncology, neuro, and dermatology cases. She conducts Geriatric Wellness & Ayurvedic Beauty Camps and has presented research on "Panchakarma in Autoimmune & Dermatological Reversal" at national seminars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-outline-variant/20 mt-12">
              <h3 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">translate</span> Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Hindi", "English", "Sanskrit", "Gujrati"].map((lang) => (
                  <span key={lang} className="px-6 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-medium border border-outline-variant/20">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-on-background mb-4">A Message from Our Founder</h2>
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
              href="https://wa.me/919737370959?text=Hello%20Dr.%20Sushila%20Singh,%20I'd%20like%20to%20chat%20about%20my%20health."
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
