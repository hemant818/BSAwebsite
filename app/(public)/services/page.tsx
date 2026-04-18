"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const services = [
    {
      title: "Ayurvedic Consultations",
      desc: "Personalized health assessments rooted in ancient Ayurvedic wisdom. Our expert evaluates your Prakriti (constitution), identifies imbalances, and creates a holistic roadmap for lasting wellness.",
      icon: "stethoscope",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Panchkarma Treatment",
      desc: "Comprehensive detoxification, rejuvenation, and cosmetic therapies using the classical five-fold purification system — Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
      icon: "spa",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Customized Diet & Lifestyle Plans",
      desc: "Tailored nutrition and daily routine guidance aligned with your unique Dosha constitution. We design sustainable plans that integrate Ayurvedic dietetics with your modern lifestyle.",
      icon: "restaurant",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Yoga Instructions",
      desc: "Guided yoga sessions designed to complement your Ayurvedic treatment plan. From asanas to pranayama, our practice targets specific health goals and enhances overall vitality.",
      icon: "self_improvement",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Nadi Pariksha (Pulse Diagnosis)",
      desc: "An ancient diagnostic technique where the physician reads your radial pulse to identify the state of your Doshas, organ health, and deep-seated imbalances with remarkable accuracy.",
      icon: "monitor_heart",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Raktamokshan",
      desc: "A specific blood-letting para-surgical process used to purify blood and treat conditions like skin disorders, varicose veins, and localized inflammations through controlled therapeutic methods.",
      icon: "bloodtype",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Agnikarma",
      desc: "A controlled heat treatment using a heated metal rod (Shalaka) to provide targeted relief from chronic pain, musculoskeletal disorders, and localized conditions with precision.",
      icon: "local_fire_department",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Viddhakarma",
      desc: "A precise piercing or puncturing technique at specific therapeutic points on the body to release blocked energy, alleviate pain, and restore natural balance in affected areas.",
      icon: "healing",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734314?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Marma Therapy",
      desc: "Therapeutic manipulation of 107 vital energy points (Marma) on the body to remove energy blockages, promote holistic well-being, and stimulate the body's natural healing mechanisms.",
      icon: "touch_app",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <main className="pt-20 bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            className="w-full h-full object-cover"
            alt="Ayurvedic therapies"
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <nav className="flex mb-6 text-sm font-label uppercase tracking-widest text-on-primary/70">
            <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span className="mx-3 text-tertiary-fixed opacity-50">/</span>
            <span className="text-on-primary">Services</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex mb-6 items-center gap-2 text-on-primary">
              <span className="material-symbols-outlined text-4xl">spa</span>
              <span className="font-headline text-2xl font-bold tracking-tighter">Brahmasutra Ayurveda</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl text-on-primary leading-tight max-w-3xl">
              Our Services
            </h1>
            <p className="mt-4 font-body text-on-primary/80 text-lg max-w-xl">
              Discover a harmonious blend of ancient wisdom and modern vitality through our curated wellness pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col bg-surface-container rounded-3xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container font-label text-[10px] uppercase tracking-widest rounded-full font-bold shadow-sm">
                    {service.title.split(" ")[0]}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{service.icon}</span>
                  <h3 className="font-headline text-xl text-tertiary">{service.title}</h3>
                </div>
                <p className="text-on-surface-variant font-body mb-6 flex-grow text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link href="/book-appointment">
                    <button className="bg-primary hover:bg-primary-container transition-colors text-on-primary px-5 py-2.5 rounded-lg text-sm font-bold shadow-md">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-headline text-3xl md:text-5xl text-on-primary font-bold mb-6 max-w-3xl mx-auto">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-on-primary/80 text-lg mb-10 max-w-2xl mx-auto">
            Consult with Dr. Sushila Singh to design a personalized wellness blueprint that honors your nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-appointment"
              className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold hover:shadow-lg transform active:scale-95 transition-all"
            >
              Book Your Consultation
            </Link>
            <a
              href="https://wa.me/919510250323?text=Hello%20Dr.%20Sushila%20Singh,%20I'd%20like%20to%20know%20more%20about%20your%20services."
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
