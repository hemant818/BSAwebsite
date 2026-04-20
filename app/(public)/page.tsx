"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-24 linen-texture lotus-bg"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block relative">
            <span className="text-primary font-label tracking-[0.2em] font-bold uppercase text-xs">AYURVEDIC HEALING</span>
            <div className="h-0.5 w-12 bg-tertiary-container mt-1"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="absolute -top-8 -right-8 opacity-20 hidden md:block text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><path d="M50 10 C50 10 30 40 50 70 C70 40 50 10 Z" fill="currentColor"/></svg>
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-headline text-5xl md:text-7xl leading-tight text-on-surface"
          >
            Ancient Wisdom For Modern Healing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed"
          >
            Experience personalized Ayurvedic healthcare that addresses the root cause of your concerns. Authentic Panchakarma treatments for the modern soul.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/book-appointment">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ["0px 0px 0px rgba(199,168,80,0)", "0px 0px 20px rgba(199,168,80,0.4)", "0px 0px 0px rgba(199,168,80,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                Book Your Consultation
                <span className="material-symbols-outlined pb-1">calendar_today</span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-surface-container-high hover:bg-surface-container-highest text-primary border border-outline-variant px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                Chat with Dr. Sushila Singh
                <span className="material-symbols-outlined pb-1">chat</span>
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-xs font-bold">15+</div>
            </div>
            <span className="text-sm font-medium text-on-surface-variant">Trusted for 15+ Years Experience in Ayurveda</span>
          </motion.div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-tertiary-container/10 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl z-10">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.06 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" alt="Ayurvedic Healing" fill priority className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary pb-1">verified_user</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-primary text-xl">MD-Panchkarma</p>
                  <p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Certified Expert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-white/60 backdrop-blur-sm border-y border-surface-variant/30 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-6 gap-8">
          {[
            { icon: "history", text: "15+ Years" },
            { icon: "medical_services", text: "MD-Panchkarma" },
            { icon: "school", text: "PhD Scholar" },
            { icon: "spa", text: "Specialist" },
            { icon: "psychology", text: "Root-Cause" },
            { icon: "eco", text: "No Side Effects" },
          ].map((trust, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={trust.icon} 
              className="flex flex-col items-center text-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-3xl">{trust.icon}</span>
              <span className="text-xs font-bold font-label uppercase tracking-tighter">{trust.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Clinic Highlight */}
      <section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <span className="absolute -top-16 -left-4 font-headline text-[12rem] text-primary/10 leading-none pointer-events-none">“</span>
          <div className="relative bg-surface-container-low p-12 rounded-[2rem] overflow-hidden">
            <div className="absolute bottom-0 right-0 p-8 opacity-10 rotate-12 scale-150">
              <span className="material-symbols-outlined text-primary text-9xl">spa</span>
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-headline text-4xl leading-tight">Authentic Healing is a Journey Home to Yourself.</h2>
              <p className="text-on-surface-variant leading-relaxed italic">
                At Brahmasutra Ayurveda, we don't just treat symptoms; we restore the delicate balance between your body, mind, and spirit using the sacred principles of Vedic medicine.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="h-px bg-primary"
                />
                <span className="font-headline font-bold text-primary">The Brahmasutra Legacy</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 order-1 md:order-2"
        >
          <div className="inline-block relative">
            <span className="text-primary font-label tracking-[0.2em] font-bold uppercase text-xs">OUR PHILOSOPHY</span>
            <div className="h-0.5 w-12 bg-tertiary-container mt-1"></div>
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute -top-8 -right-8 opacity-20 hidden md:block text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><path d="M50 10 C50 10 30 40 50 70 C70 40 50 10 Z" fill="currentColor"/></svg>
            </motion.div>
          </div>
          <h3 className="font-headline text-4xl leading-tight">Tradition meets the Precision of Modern Science.</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Founded on the pillars of purity and compassion, our clinic provides a sanctuary for those seeking sustainable health. We combine traditional Panchakarma protocols with diagnostic excellence to offer comprehensive care for chronic ailments.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-surface-container rounded-2xl">
              <p className="text-3xl font-headline text-primary mb-1">+50000</p>
              <p className="text-sm font-label uppercase">Happy Patients</p>
            </div>
            <div className="p-6 bg-surface-container rounded-2xl">
              <p className="text-3xl font-headline text-primary mb-1">100%</p>
              <p className="text-sm font-label uppercase">Natural Herbs</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ayurvedic Expertise Section */}
      <section className="bg-[#F5F5DC] px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <span className="text-tertiary font-label tracking-[0.2em] font-bold uppercase text-xs">OUR SPECIALTIES</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-primary font-bold">Ayurvedic Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Neuromusculoskeletal Disorders",
                desc: "Holistic treatments for joint pain, arthritis, and spine discrepancies using traditional herbal therapies.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Lifestyle Disorders",
                desc: "Rebalance your life and manage stress-induced ailments with personalized Ayurvedic interventions.",
                img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Metabolic Disorders",
                desc: "Regulate your body's metabolism and address conditions like diabetes and thyroid imbalances naturally.",
                img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Degenerative Changes",
                desc: "Slowing down and managing age-related or wear-and-tear conditions through deep tissue nourishment.",
                img: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Hormonal Imbalances",
                desc: "Restore endocrine harmony with precise dosha-balancing regimens tailored for your constitution.",
                img: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Customised Diet & Nutrition",
                desc: "Nutrition plans rooted in Ayurvedic wisdom to fuel your specific mind-body type effectively.",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba8232f?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Sports Nutrition & Recovery",
                desc: "Accelerate recovery, enhance stamina, and heal sports injuries with specialized plant-based care.",
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Yoga Instructions",
                desc: "Therapeutic yoga sessions aligned with Ayurvedic principles to foster flexibility, strength, and inner peace.",
                img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[12px] shadow-sm flex flex-col items-start transition-transform"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden mb-6">
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="font-headline text-lg font-bold text-tertiary mb-3">{service.title}</h3>
                <p className="font-poppins text-on-surface-variant text-xs leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link href={`/services`} className="text-primary font-bold text-xs hover:underline mt-auto">Explore &gt;</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Highlight */}
      <section className="bg-primary px-8 py-32 text-on-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full p-4 border-2 border-tertiary-container relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary relative">
                <Image src="/doctor-home.jpg" alt="Dr. Sushila Singh" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-on-primary/10 rounded-full animate-pulse"></div>
          </motion.div>
          <div className="space-y-8">
            <div className="inline-block relative">
              <span className="text-tertiary-container font-label tracking-[0.2em] font-bold uppercase text-xs">CHIEF PHYSICIAN</span>
              <div className="h-0.5 w-12 bg-tertiary-container mt-1"></div>
            </div>
            <h2 className="font-headline text-5xl">Meet Dr. Sushila Singh</h2>
            <p className="text-primary-fixed-dim text-xl leading-relaxed font-headline italic">
              "Ayurveda is not a medicine, it is a way of life that aligns our internal rhythm with the universe."
            </p>
            <p className="text-on-primary opacity-80 leading-relaxed">
              With over 15 years of clinical expertise, Dr. Sushila Singh (BAMS, CRAV, MD Panchkarma , PhD Scholar) is a renowned expert in treating complex metabolic disorders, skin conditions, and autoimmune diseases through personalized detoxification and rejuvenation therapies.
            </p>
            <Link href="/book-appointment">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-tertiary-container hover:bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-xl font-bold flex items-center gap-3 transition-all shadow-xl"
              >
                Consult with Dr. Sushila Singh
                <span className="material-symbols-outlined pb-1">arrow_forward</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-surface-container-low px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20 relative">
            <span className="text-primary font-label tracking-[0.2em] font-bold uppercase text-xs">TESTIMONIALS</span>
            <h2 className="font-headline text-4xl md:text-5xl">Healing Stories From Our Patients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The Panchakarma treatment here was life-changing. I had chronic back pain for 5 years that vanished after 14 days of dedicated treatment with Dr. Sushila.",
                initials: "RK",
                name: "Rajesh Kumar",
                type: "Chronic Pain Management"
              },
              {
                text: "Dr. Sushila Singh's diagnosis is incredibly precise. She caught the root cause of my skin allergies that modern medicine kept masking with steroids.",
                initials: "MS",
                name: "Meera Sharma",
                type: "Dermatology Care"
              },
              {
                text: "The atmosphere of the clinic is so peaceful. You start feeling better the moment you walk in. Truly the modern sage of Ayurvedic wellness.",
                initials: "AJ",
                name: "Amit Jain",
                type: "Wellness Program"
              }
            ].map((t, index) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-10 rounded-[2rem] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex text-tertiary-container">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined">star</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">{t.initials}</div>
                  <div>
                    <p className="font-bold text-on-surface">{t.name}</p>
                    <p className="text-xs text-on-surface-variant">{t.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="px-8 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary/5 to-surface pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-label tracking-[0.2em] font-bold uppercase text-xs"
            >
              WHAT DRIVES US
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-tertiary-container mx-auto mt-4 rounded-full"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "verified",
                title: "Authenticity & Integrity",
                desc: "Staying true to the classical principles of Ayurveda while maintaining the highest ethical standards in every interaction.",
              },
              {
                icon: "diamond",
                title: "Quality & Purity (Sattva)",
                desc: "Ensuring every herb, treatment, and formulation meets the purest standards — rooted in the Sattvic principle of clarity and goodness.",
              },
              {
                icon: "eco",
                title: "Sustainability & Respect for Nature",
                desc: "Honoring nature as the source of all healing. Our practices are ecologically conscious and aligned with environmental harmony.",
              },
              {
                icon: "volunteer_activism",
                title: "Seva (Community Service)",
                desc: "A commitment to improving the well-being of others and contributing positively to society through accessible and compassionate care.",
              },
              {
                icon: "handshake",
                title: "Transparency & Trust",
                desc: "Building lasting relationships through honest communication, transparent practices, and unwavering dedication to patient welfare.",
              },
              {
                icon: "balance",
                title: "Holistic Well-being & Balance",
                desc: "Promoting a balanced lifestyle — not just treating symptoms but supporting the harmony of body, mind and soul for lasting wellness.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg group hover:bg-primary transition-colors duration-500 border border-outline-variant/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-on-primary/20 flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-on-primary transition-colors">{value.title}</h3>
                <p className="text-sm text-on-surface-variant group-hover:text-on-primary/80 leading-relaxed transition-colors">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
