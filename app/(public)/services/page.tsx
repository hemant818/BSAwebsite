"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Ayurvedic Consultations",
      desc: "We offers a personalised comprehensive health assessment by qualified experts( Vaidya) focusing on your unique mind-body constitution (Prakriti) and current imbalances( Vikriti ). We uses traditional diagnostic techniques such as pulse diagnosis ( Nadi Pariksha ), tongue/eye examination and detailed questioning about diet and lifestyle to create a tailored wellness plan. Our recommendations often include herbomineral formulations, Panchkarma therapies, dietary changes, yoga and lifestyle adjustments. Along with that our consultations include check-ins to track progress and adjust treatments.",
      icon: "stethoscope",
      image: "/ayurvedic-consultation.png",
    },
    {
      title: "Panchkarma Treatment",
      desc: "Deep Cleanse Your Body, Mind & Soul with Panchakarma . Panchakarma is Ayurveda’s 5-fold bio-cleansing therapy designed to remove deep-rooted toxins, balance doshas, and restore natural health. At Brahmasutra Ayurveda , we offer classical Panchakarma tailored to your body type and health condition under expert Vaidya supervision.",
      icon: "spa",
      image: "/panch-karma.png",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Panchakarma Services</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-lg text-tertiary">Vamana – Therapeutic Emesis</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Kapha disorders, asthma, chronic cold, skin diseases, obesity</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Medicated vomiting to eliminate excess Kapha from upper GI tract</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> 7-14 days including pre & post care</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Clears congestion, improves breathing, reduces weight, glowing skin</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Virechana – Therapeutic Purgation</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Pitta disorders, acidity, liver issues, skin problems, piles</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Controlled purgation using herbal medicines to cleanse small intestine & liver</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> 7-14 days</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Detoxifies liver, improves digestion, balances hormones, manages diabetes</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Basti – Medicated Enema</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Vata disorders, joint pain, constipation, paralysis, IBS, infertility</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Herbal oil/decoction enema to cleanse colon and nourish tissues</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> 8, 15, or 30 days course</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Best treatment for back pain, arthritis, neurological issues, rejuvenates body</p>
                <p className="text-sm"><span className="font-semibold">Types Offered:</span> Anuvasana Basti, Niruha Basti, Matra Basti</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Nasya – Nasal Administration</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Sinusitis, migraine, hair fall, memory issues, insomnia, stress</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Instillation of medicated ghee/oil drops in nostrils</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> 7-14 days</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Clears sinuses, improves brain function, better sleep, reduces hair fall</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Raktamokshana – Bloodletting</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Skin diseases, eczema, psoriasis, gout, hypertension</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Removal of impure blood using leech therapy or other classical methods</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> As per condition</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Purifies blood, reduces inflammation, gives clear skin</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Associated Purvakarma & Supportive Therapies</h4>
            <p className="text-sm mb-4">We don’t start Panchakarma directly. Proper preparation ensures safety & better results.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20">Therapy</th>
                    <th className="p-2 border border-primary/20">Purpose</th>
                    <th className="p-2 border border-primary/20">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20 font-medium">Snehana</td><td className="p-2 border border-primary/20">Internal & external oleation with medicated ghee/oil</td><td className="p-2 border border-primary/20">3-7 days</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Swedana</td><td className="p-2 border border-primary/20">Herbal steam to loosen toxins</td><td className="p-2 border border-primary/20">3-7 days</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Abhyanga</td><td className="p-2 border border-primary/20">Full body warm oil massage</td><td className="p-2 border border-primary/20">45-60 min/session</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Shirodhara</td><td className="p-2 border border-primary/20">Continuous oil stream on forehead</td><td className="p-2 border border-primary/20">45-60 min</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Pizhichil</td><td className="p-2 border border-primary/20">Royal oil bath for joints & nerves</td><td className="p-2 border border-primary/20">60-90 min</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Kati Basti</td><td className="p-2 border border-primary/20">Oil pooling for back pain</td><td className="p-2 border border-primary/20">30-45 min</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Janu Basti</td><td className="p-2 border border-primary/20">Oil pooling for knee pain</td><td className="p-2 border border-primary/20">30-45 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Panchakarma Process: How It Works</h4>
            <div className="space-y-3">
              <p className="text-sm"><strong className="text-tertiary">Step 1: Consultation & Prakriti Analysis</strong><br/>Detailed pulse, tongue, and dosha assessment by our Ayurvedic doctor to decide which Karma is right for you.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 2: Purvakarma – Preparation</strong><br/>3-7 days of Snehana + Swedana to mobilize toxins from tissues to GI tract.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 3: Pradhan Karma – Main Procedure</strong><br/>The selected Panchakarma therapy performed with utmost hygiene and care.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 4: Paschat Karma – Post Care</strong><br/>Special diet, lifestyle, and Rasayana medicines to rebuild strength and immunity.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-primary mb-3">Who Should Opt for Panchakarma?</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><span className="font-semibold">Chronic lifestyle disorders:</span> Diabetes, BP, Thyroid, Obesity</li>
                <li><span className="font-semibold">Joint & Spine issues:</span> Arthritis, Sciatica, Spondylitis</li>
                <li><span className="font-semibold">Skin & Hair problems:</span> Psoriasis, Eczema, Hair fall</li>
                <li><span className="font-semibold">Stress & Sleep disorders:</span> Anxiety, Insomnia, Migraine</li>
                <li><span className="font-semibold">Digestive issues:</span> IBS, Constipation, Acidity</li>
                <li><span className="font-semibold">Seasonal Detox:</span> Preventive health every 6 months</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary mb-3">Who Should Avoid?</h4>
              <p className="text-sm">Pregnant women, very weak patients, during fever/infection, children below 7. Always done after doctor consultation.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Choose Brahmasutra Ayurveda for Panchakarma?</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Authentic Classical Approach:</strong> As per Charak & Sushruta Samhita</li>
              <li><strong className="text-tertiary">Expert Vaidyas:</strong> BAMS/MD Ayurveda doctors with 15+ years experience</li>
              <li><strong className="text-tertiary">Customized Plans:</strong> No one-size-fits-all. Treatment based on your Prakriti</li>
              <li><strong className="text-tertiary">Hygienic Setup:</strong> Clean, private therapy rooms with trained male/female therapists</li>
              <li><strong className="text-tertiary">Medicines:</strong> We use in-house prepared, pure herbal oils & medicines</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQ Section</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Q1. Is Panchakarma painful?</strong>
                <p className="text-sm">No. It’s a gentle cleansing process. You may feel tired for 1-2 days, which is normal.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q2. How many days do I need?</strong>
                <p className="text-sm">Minimum 7 days, ideal 14-21 days for full benefits. We also offer 3-day mini detox plans.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q3. Can I do it while working?</strong>
                <p className="text-sm">Light work is okay, but rest is recommended. We have day-care & residential options.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q4. What diet should I follow?</strong>
                <p className="text-sm">Light, warm, freshly cooked food. No cold, junk, or heavy meals. We provide a diet chart.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Note: Panchakarma should only be done under qualified Ayurvedic physician supervision. Results vary per individual.</p>
          </div>
        </div>
      )
    },
    {
      title: "Customized Diet & Lifestyle Plans",
      desc: "Your Body is Unique. Your Diet & Lifestyle Should Be Too. At Brahmasutra Ayurveda, we don’t believe in one-size-fits-all diet charts. We design your food, sleep, and daily routine based on your Prakriti, health issues, and life goals — as Ayurveda intended.",
      icon: "restaurant",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Choose Our Customised Plans?</h4>
            <p className="text-sm">Unlike trending diets, Ayurveda first understands <strong className="text-tertiary">you</strong>. Our Vaidyas assess your body-mind type, current imbalance, digestion strength, work routine, and season before creating your plan.</p>
            <p className="text-sm mt-2 italic text-tertiary">This is not a diet. This is your personal health blueprint.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What’s Included in Your Personalised Plan?</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-lg text-tertiary">Prakriti & Vikriti Analysis</strong>
                <p className="text-sm"><span className="font-semibold">Purpose:</span> Identify your natural body type - Vata, Pitta, Kapha - and current imbalances.</p>
                <p className="text-sm"><span className="font-semibold">Method:</span> Detailed consultation with Nadi Pariksha, tongue analysis, and lifestyle questionnaire by our expert Vaidyas.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Customised Aahar Plan – Your Food as Medicine</strong>
                <p className="text-sm font-semibold mb-1">What you get:</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-2">
                  <li><span className="font-semibold">Foods to Favor & Avoid:</span> Based on your dosha and health condition</li>
                  <li><span className="font-semibold">Meal Timings:</span> Aligned with your digestive fire - Agni</li>
                  <li><span className="font-semibold">Cooking Methods:</span> Which spices, oils, and combinations suit you</li>
                  <li><span className="font-semibold">Seasonal Adjustments:</span> What to eat in summer vs monsoon vs winter</li>
                  <li><span className="font-semibold">Disease-Specific Diet:</span> For diabetes, PCOS, thyroid, IBS, skin issues, joint pain</li>
                </ul>
                <p className="text-sm italic text-surface-variant bg-surface-container p-3 rounded-lg border border-outline/20">Example: A Pitta person with acidity gets cooling foods like ghee, coconut water, and avoids spicy, fermented items.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Vihar Plan – Daily & Seasonal Routine</strong>
                <p className="text-sm font-semibold mb-1">What you get:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><span className="font-semibold">Dinacharya:</span> Ideal wake-up time, exercise, oil massage, meditation schedule</li>
                  <li><span className="font-semibold">Ratricharya:</span> Night routine for deep sleep and hormone balance</li>
                  <li><span className="font-semibold">Sleep Hygiene:</span> When to sleep, how to improve sleep quality</li>
                  <li><span className="font-semibold">Exercise Guidance:</span> Yoga, walk, or gym - what suits your body type</li>
                  <li><span className="font-semibold">Stress Management:</span> Pranayama, meditation techniques for your mind type</li>
                </ul>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Ritucharya Guidance</strong>
                <p className="text-sm"><span className="font-semibold">Purpose:</span> Adapt your diet & lifestyle as seasons change to prevent diseases.</p>
                <p className="text-sm"><span className="font-semibold">What you get:</span> A seasonal calendar with do’s & don’ts for Varsha, Sharad, Hemant, etc.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Ongoing Support</strong>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><span className="font-semibold">Follow-up Calls:</span> Track progress and modify plan every 15 days</li>
                  <li><span className="font-semibold">WhatsApp Support:</span> For quick doubts on food choices</li>
                  <li><span className="font-semibold">Recipe Booklet:</span> Easy Ayurvedic recipes for your dosha</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="text-lg font-bold text-primary mb-3">Who Needs a Customised Plan?</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><span className="font-semibold">Chronic Issues:</span> Diabetes, BP, PCOS, Thyroid, Arthritis, Migraine</li>
                <li><span className="font-semibold">Gut Problems:</span> IBS, Acidity, Constipation, Bloating</li>
                <li><span className="font-semibold">Weight Management:</span> Healthy weight loss or gain without crash diets</li>
                <li><span className="font-semibold">Skin & Hair:</span> Acne, Psoriasis, Hair fall, Premature greying</li>
                <li><span className="font-semibold">Mental Health:</span> Anxiety, Insomnia, Low energy, Brain fog</li>
                <li><span className="font-semibold">Preventive Health:</span> If you want to stay disease-free as per your Prakriti</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our 4-Step Process at Brahmasutra Ayurveda</h4>
            <div className="space-y-3">
              <p className="text-sm"><strong className="text-tertiary">Step 1: Deep Consultation – 45 mins</strong><br/>One-on-one with our BAMS/MD Ayurveda doctor. We understand your health history, lifestyle, and goals.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 2: Prakriti Assessment Report</strong><br/>You receive a detailed report of your body type and current dosha imbalance.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 3: Your Personal Health Chart</strong><br/>Get a PDF booklet with your Aahar-Vihar plan, recipes, yoga, and daily schedule.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 4: Follow-ups & Fine-Tuning</strong><br/>We track your progress and adjust the plan as your body heals and seasons change.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Brahmasutra Ayurveda’s Plans Work</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Root-Cause Focus:</strong> We don’t suppress symptoms, we correct your lifestyle</li>
              <li><strong className="text-tertiary">Practical & Easy:</strong> No exotic foods. We use local, seasonal, kitchen ingredients</li>
              <li><strong className="text-tertiary">No Starving:</strong> Ayurveda believes in nourishing, not depriving</li>
              <li><strong className="text-tertiary">Doctor-Guided:</strong> Created and monitored by qualified Ayurvedic physicians</li>
              <li><strong className="text-tertiary">Holistic:</strong> Food + Sleep + Stress + Exercise - all addressed together</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Sample Plan Snapshot</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20">For Vata Type Person with Insomnia</th>
                    <th className="p-2 border border-primary/20">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20 font-medium">Wake Up</td><td className="p-2 border border-primary/20">6:30 AM, avoid alarm shock</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Breakfast</td><td className="p-2 border border-primary/20">Warm oats porridge with ghee, dates, cardamom</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Lunch</td><td className="p-2 border border-primary/20">Moong dal khichdi + ghee + cumin</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Dinner</td><td className="p-2 border border-primary/20">Light soup + 1 phulka by 7:30 PM</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Abhyanga</td><td className="p-2 border border-primary/20">Daily warm sesame oil massage before bath</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Sleep</td><td className="p-2 border border-primary/20">Brahmi ghee nasya + warm milk with nutmeg at 10 PM</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium text-red-500">Avoid</td><td className="p-2 border border-primary/20">Raw salads, cold drinks, late nights, excess screen</td></tr>
                </tbody>
              </table>
              <p className="text-xs mt-2 italic text-on-surface-variant">Note: Your actual plan will be 100% unique to you after consultation.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQ</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Q1. Is this a weight loss diet?</strong>
                <p className="text-sm">Weight balance happens naturally when your doshas are balanced. Focus is health, not just kilos.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q2. Do I have to eat only Ayurvedic food?</strong>
                <p className="text-sm">No. We modify your regular home food with Ayurvedic principles. No boring food.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q3. How long before I see results?</strong>
                <p className="text-sm">Energy & digestion improve in 7-10 days. For chronic issues, give it 6-12 weeks.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q4. Is it online or offline?</strong>
                <p className="text-sm">Both. Visit Brahmasutra Ayurveda in Ahmedabad or book online video consultation from anywhere.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Ayurvedic diet & lifestyle plans are supportive in nature. They are not a replacement for medical treatment. Please consult your doctor before making major changes, especially if you have serious health conditions.</p>
          </div>
        </div>
      )
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
      image: "/nadi-pariksha.png",
    },
    {
      title: "Raktamokshan",
      desc: "A specific blood-letting para-surgical process used to purify blood and treat conditions like skin disorders, varicose veins, and localized inflammations through controlled therapeutic methods.",
      icon: "bloodtype",
      image: "/raktamokshan.png",
    },
    {
      title: "Agnikarma",
      desc: "A controlled heat treatment using a heated metal rod (Shalaka) to provide targeted relief from chronic pain, musculoskeletal disorders, and localized conditions with precision.",
      icon: "local_fire_department",
      image: "/agnikarma.png",
    },
    {
      title: "Viddhakarma",
      desc: "A precise piercing or puncturing technique at specific therapeutic points on the body to release blocked energy, alleviate pain, and restore natural balance in affected areas.",
      icon: "healing",
      image: "/viddhakarma.png",
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
                  <h3 className="font-headline text-xl font-bold" style={{ color: "#6B7645" }}>{service.title}</h3>
                </div>
                <p className="text-on-surface-variant font-body mb-6 flex-grow text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  {(service as any).detailedContent ? (
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-primary hover:text-primary-container font-bold text-sm transition-colors border border-primary/30 hover:border-primary px-4 py-2.5 rounded-lg flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">info</span>
                      Details
                    </button>
                  ) : (
                    <div />
                  )}
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
              href="https://wa.me/919737370959?text=Hello%20Dr.%20Sushila%20Singh,%20I'd%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/10 backdrop-blur-md border border-surface/20 text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-surface/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">forum</span> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-surface rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <div className="p-6 border-b border-outline/20 flex justify-between items-center bg-surface-container sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">{selectedService.icon}</span>
                  <h3 className="font-headline text-2xl font-bold" style={{ color: "#6B7645" }}>
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto">
                {selectedService.detailedContent}
              </div>
              <div className="p-6 border-t border-outline/20 bg-surface-container flex justify-end gap-4 sticky bottom-0 z-10">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl font-bold text-primary hover:bg-primary/10 transition-colors"
                >
                  Close
                </button>
                <Link href="/book-appointment">
                  <button className="bg-primary hover:bg-primary-container transition-colors text-on-primary px-6 py-2.5 rounded-xl font-bold shadow-md">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
