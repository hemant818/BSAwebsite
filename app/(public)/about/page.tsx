"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function About() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1 }}
          className="font-label text-tertiary font-bold mb-4"
        >
          ESTABLISHED IN TRADITION
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl text-on-background max-w-4xl leading-tight"
        >
          Born from lived wisdom. Built for the world.
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-tertiary-container mt-8"
        ></motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_12px_40px_rgba(27,29,14,0.06)]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                alt="Traditional Ayurvedic Ritual"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container rounded-2xl p-6 flex flex-col justify-end text-on-primary shadow-xl hidden md:flex">
              <span className="font-headline text-4xl font-bold">15+</span>
              <span className="font-label text-xs tracking-wider opacity-80 uppercase">
                Years of Clinical Mastery
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="font-headline text-4xl text-on-background">
              Our Legacy
            </motion.h2>
            <div className="font-body text-lg leading-relaxed text-on-surface-variant space-y-6">
              <motion.p variants={fadeUp}>
                Brahmasutra Ayurveda was founded by a father and daughter whose relationship with healing was never academic — it was personal, lived, and deeply rooted in tradition.
              </motion.p>
              <motion.p variants={fadeUp}>
                <span className="font-headline text-primary font-bold">Mr. Indraj Singh</span>, a retired Indian Army officer and sports professional, has practiced yoga for over 30 years. Today, at 79, his body defies his age — a living testament to the transformative power of a disciplined, conscious lifestyle. For him, yoga was never just exercise. It became a philosophy, a way of being.
              </motion.p>
              <motion.p variants={fadeUp}>
                <span className="font-headline text-primary font-bold">Dr. Sushila Singh</span> grew up watching her mother heal — not with prescriptions, but with herbs from the kitchen, ancient spice combinations, and the intuitive touch of Marma therapy. Those early memories of neighbours, relatives, and family members finding relief through nature's intelligence planted a seed that never stopped growing.
              </motion.p>
              <motion.p variants={fadeUp}>
                After one and a half decades of clinical experience, research, and unwavering commitment, Dr. Sushila knew it was time to bring this wisdom to the world — not in fragments, but as one unified platform.
                <span className="block mt-4 font-headline text-2xl italic text-on-background">
                  Brahmasutra Ayurveda was born.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why BSA Founded Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-label text-tertiary font-bold tracking-[0.2em] mb-4 block">OUR FOUNDATION</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-background">Why BSA Was Founded</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "spa",
                title: "Holistic Healing",
                desc: "To provide holistic healing that balances mind, body and soul through practices like Panchkarma, herbs and yoga.",
                color: "bg-primary",
              },
              {
                icon: "health_and_safety",
                title: "Preventive Care",
                desc: "To promote preventive care and meet growing global demand for natural wellness.",
                color: "bg-tertiary",
              },
              {
                icon: "psychology",
                title: "Root-Cause Treatment",
                desc: "To treat lifestyle disorders, stress and chronic ailments from their root causes rather than just managing symptoms.",
                color: "bg-primary",
              },
              {
                icon: "sync_alt",
                title: "Bridging Tradition & Modernity",
                desc: "To bridge tradition and modern wellness needs — making ancient Ayurvedic wisdom accessible and relevant for today's world.",
                color: "bg-tertiary",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-md flex gap-6 items-start transition-all duration-300 border border-outline-variant/10"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-background mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-label text-tertiary font-bold tracking-[0.2em] mb-4 block">OUR PURPOSE</span>
          <h2 className="font-headline text-4xl md:text-5xl text-on-background">What We Stand For</h2>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-on-surface-variant">
            At BSA, we believe ancient wisdom and modern science are not opposites — they are partners. Our mission is to make holistic well-being accessible, credible, and deeply personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "person", title: "Personalised Wellness", desc: "Solutions tailored to your unique mind-body constitution." },
            { icon: "science", title: "Evidence-Backed Ayurveda", desc: "Bridging classical knowledge with modern clinical research." },
            { icon: "public", title: "Global Education", desc: "Spreading the science of life beyond borders." },
            { icon: "eco", title: "Nature-First Products", desc: "Crafted with integrity: supplements, skincare, and functional foods." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg group hover:bg-primary transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl mb-3 group-hover:text-on-primary">{item.title}</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="font-headline text-3xl text-primary italic">Two generations. One purpose. Timeless healing.</p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="font-label text-tertiary font-bold tracking-[0.2em] mb-4 block">GUIDING LIGHTS</span>
            <h2 className="font-headline text-4xl text-on-background">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-surface-container p-8 rounded-2xl flex flex-col justify-between border-b-4 border-tertiary-container"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 border border-outline-variant">
                <img alt="Authentic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611073615830-4e53c4e50523?auto=format&fit=crop&q=80&w=400" />
              </div>
              <h4 className="font-headline text-2xl mb-2">Authenticity</h4>
              <p className="text-sm opacity-80">Upholding the classical protocols defined in the Charaka Samhita without compromise.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-surface-container p-8 rounded-2xl flex flex-col justify-between border-b-4 border-primary"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 border border-outline-variant">
                <img alt="Root-Cause" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400" />
              </div>
              <h4 className="font-headline text-2xl mb-2">Root-Cause</h4>
              <p className="text-sm opacity-80">Moving beyond the surface to identify and eliminate the origin of imbalance.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-surface-container p-8 rounded-2xl flex flex-col justify-between border-b-4 border-tertiary-container"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 border border-outline-variant">
                <img alt="Patient-First" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400" />
              </div>
              <h4 className="font-headline text-2xl mb-2">Patient-First</h4>
              <p className="text-sm opacity-80">A commitment to compassionate care that treats the human, not just the ailment.</p>
            </motion.div>

            <div className="md:col-span-3 bg-surface-container-high p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-outline-variant">
                <img alt="Holistic Wellness" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" />
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-2">Holistic Wellness</h4>
                <p className="text-sm opacity-80">Integrating diet, breathwork, herbal medicine, and daily rituals for total transformation.</p>
              </div>
            </div>

            <div className="md:col-span-3 bg-surface-container-high p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-outline-variant">
                <img alt="Integrity" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=400" />
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-2">Integrity</h4>
                <p className="text-sm opacity-80">Transparent sourcing, ethical pricing, and unwavering professional ethics in all we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-8 leading-tight">
            Ready to rewrite your story with the wisdom of the Sages?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-tertiary-container text-on-tertiary-container px-10 py-4 rounded-xl font-bold hover:brightness-110 shadow-lg"
              >
                Consult Our Doctors
              </motion.button>
            </Link>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-on-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:bg-white/10 shadow-sm"
              >
                Explore Our Blogs
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
