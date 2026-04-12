"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      title: "Keshya Chikitsa",
      category: "Hair & Scalp",
      desc: "Advanced Ayurvedic hair restoration using herbal infusions and Sirodhara to strengthen follicles and calm the mind.",
      points: ["Deep scalp nourishment", "Natural shine restoration"],
      icon: "brush",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mukha Lepam",
      category: "Skin & Face",
      desc: "Radiance-boosting facial therapies using botanical lepas (masks) tailored to your specific skin Dosha for eternal glow.",
      points: ["Pore detoxification", "Herbal skin brightening"],
      icon: "face",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Agni Balance",
      category: "Digestive Health",
      desc: "Ignite your digestive fire (Agni) through holistic dietetics and customized herbal lehyams to resolve gut issues.",
      points: ["Metabolic regulation", "Microbiome restoration"],
      icon: "nutrition",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sandhi Raksha",
      category: "Joint & Mobility",
      desc: "Targeted oil pooling (Vasti) and heat therapy (Potali) to alleviate chronic joint pain and improve skeletal flexibility.",
      points: ["Inflammation reduction", "Lubrication therapy"],
      icon: "accessibility_new",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Stree Swasthya",
      category: "Hormonal Health",
      desc: "Comprehensive endocrine balance programs using Ashwagandha and Shatavari protocols to manage stress and cycles.",
      points: ["Stress-cortisol balance", "Reproductive wellness"],
      icon: "self_improvement",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sirodhara Ritual",
      category: "Nervous System",
      desc: "A continuous stream of warm medicated oil on the 'third eye' to alleviate insomnia, anxiety, and mental fatigue.",
      points: ["Sleep quality enhancement", "Mental clarity & focus"],
      icon: "psychology",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const filters = ["All", "Hair & Scalp", "Skin & Face", "Hormonal Health", "Digestive", "Joint & Mobility", "Panchakarma"];

  return (
    <main className="pt-20 bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            className="w-full h-full object-cover"
            alt="Ayurvedic therapies"
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
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
              Our Ayurvedic Services
            </h1>
            <p className="mt-4 font-body text-on-primary/80 text-lg max-w-xl">
              Discover a harmonious blend of ancient wisdom and modern vitality through our curated wellness pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-surface/90 backdrop-blur-md py-4 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 overflow-x-auto">
          <div className="flex space-x-3 whitespace-nowrap scrollbar-hide">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-md ${
                  i === 0
                    ? "bg-primary text-on-primary font-semibold shadow-lg"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Service (Bento Highlight) */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-[2rem] bg-surface-container-low shadow-[0_12px_40px_rgba(27,29,14,0.06)] group"
        >
          <div className="grid md:grid-cols-2 items-stretch min-h-[500px]">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Panchakarma treatment"
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/90 to-transparent hidden md:block"></div>
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container font-label text-[10px] uppercase tracking-widest rounded-full w-fit mb-6">
                Panchakarma Exclusive
              </span>
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">spa</span>
                <h2 className="font-headline text-4xl text-tertiary">Panchakarma Detox</h2>
              </div>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                Our signature 5-step deep cellular purification therapy designed to eliminate toxins, restore metabolic fire, and rejuvenate the nervous system from within.
              </p>
              <ul className="space-y-4 mb-10">
                {["Comprehensive Vamana & Virechana protocols", "Personalized medicated oil treatments (Basti)", "Pre-detox preparation and post-care diet plan"].map((point, id) => (
                  <li key={id} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5">check_circle</span>
                    <span className="text-on-surface font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-appointment">
                  <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-xl font-bold shadow-md hover:shadow-xl transition-all">
                    Book Consultation
                  </button>
                </Link>
                <button className="text-primary font-bold flex items-center gap-2 px-4 group/link">
                  Learn More 
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
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
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{service.icon}</span>
                  <h3 className="font-headline text-2xl text-tertiary">{service.title}</h3>
                </div>
                <p className="text-on-surface-variant font-body mb-6 flex-grow text-sm leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8 text-sm font-medium">
                  {service.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      <span className="text-on-surface-variant">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <a className="text-primary text-sm font-bold hover:underline underline-offset-4" href="#">
                    Learn More
                  </a>
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
    </main>
  );
}
