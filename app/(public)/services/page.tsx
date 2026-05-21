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
                <strong className="text-lg text-tertiary">Anuvasan Basti</strong>
                <p className="text-sm mb-2">Anuvasan Basti is a medicated oil enema therapy and a key part of Panchakarma. In this gentle procedure, warm herbal oils or ghee are administered through the rectum in small quantity. Unlike purgation, it stays inside to lubricate, nourish, and balance aggravated Vata dosha.</p>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Chronic constipation, dry colon, lower back pain, sciatica, arthritis, osteoporosis, neurological disorders, infertility, and dry skin. Excellent for elderly and weak patients.</p>
                <div className="mt-2">
                  <span className="font-semibold text-sm">Key Benefits at Brahmasutra Ayurveda:</span>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                    <li><span className="font-semibold">Lubricates Colon:</span> Ends chronic dry constipation from the root</li>
                    <li><span className="font-semibold">Strengthens Nerves & Joints:</span> Reduces pain, stiffness, numbness</li>
                    <li><span className="font-semibold">Rejuvenates Body:</span> Improves strength, sleep, and ojas</li>
                    <li><span className="font-semibold">Safe & Comfortable:</span> Given in small dose, no discomfort, no weakness</li>
                  </ul>
                </div>
                <p className="text-sm mt-2"><span className="font-semibold">Our Method:</span> At Brahmasutra Ayurveda, we use classical oils like Ksheerbala Taila, Dhanwantaram Taila, or medicated ghee based on your Nadi Pariksha. Done after Abhyanga & Swedana for best results. Performed by trained male/female therapists under Vaidya supervision.</p>
                <p className="text-sm mt-1"><span className="font-semibold">Duration:</span> 15-20 mins procedure | Course of 8, 15, or 30 days as advised</p>
                <p className="text-sm mt-1 italic text-tertiary">Important: Always done after doctor consultation. Not advised in diarrhea, bleeding piles, or immediately after food.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Niruha Basti</strong>
                <p className="text-sm mb-2">Niruha Basti, also called Asthapana Basti, is a medicated decoction enema and a key part of Panchakarma. In this therapy, a large quantity of herbal decoction mixed with honey, salt, oils, and herbal paste is administered through the rectum. It does not stay inside — it cleanses by inducing proper elimination.</p>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Severe constipation, bloating, IBS, sciatica, paralysis, joint pain, obesity, neurological disorders, and high Vata conditions. Known as Ardha-Chikitsa — half the treatment for all Vata diseases.</p>
                <div className="mt-2">
                  <span className="font-semibold text-sm">Key Benefits at Brahmasutra Ayurveda:</span>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                    <li><span className="font-semibold">Deep Colon Detox:</span> Flushes out deep-seated toxins & metabolic waste</li>
                    <li><span className="font-semibold">Reduces Pain & Stiffness:</span> Best for back pain, arthritis, and nerve issues</li>
                    <li><span className="font-semibold">Improves Digestion & Metabolism:</span> Clears Ama, boosts Agni, aids weight loss</li>
                    <li><span className="font-semibold">Balances Vata:</span> Calms anxiety, improves sleep, strengthens body</li>
                  </ul>
                </div>
                <p className="text-sm mt-2"><span className="font-semibold">Our Method:</span> At Brahmasutra Ayurveda, we prepare fresh Dashmool or Erandamool decoction daily as per classical texts. Combined with Abhyanga & Swedana for maximum effect. Done under expert Vaidya supervision with complete hygiene.</p>
                <p className="text-sm mt-1"><span className="font-semibold">Duration:</span> 30-40 mins procedure | Usually given in alternate cycles with Anuvasan Basti</p>
                <p className="text-sm mt-1 italic text-tertiary">Important: Only done after proper doctor assessment. Avoid in weakness, diarrhea, or rectal bleeding.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Nasya – Nasal Administration</strong>
                <p className="text-sm"><span className="font-semibold">Best for:</span> Sinusitis, migraine, hair fall, memory issues, insomnia, stress</p>
                <p className="text-sm"><span className="font-semibold">Process:</span> Instillation of medicated ghee/oil drops in nostrils</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> 7-14 days</p>
                <p className="text-sm"><span className="font-semibold">Benefits:</span> Clears sinuses, improves brain function, better sleep, reduces hair fall</p>
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
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQ Section for Website</h4>
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
                <strong className="text-sm text-tertiary">Q3. What diet should I follow?</strong>
                <p className="text-sm">Light, warm, freshly cooked food. No cold, junk, or heavy meals. We provide a diet chart.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary-container text-center">
            <h4 className="text-lg font-bold mb-2">Ready to Reset Your Health?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 flex-wrap">
              <a href="/book-appointment" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-colors">Book Consultation Call</a>
              <a href="https://wa.me/919510250323?text=Panchakarma%20Package%20Details" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">forum</span> WhatsApp Us for Package Details</a>
              <a href="#" className="bg-tertiary text-on-tertiary px-6 py-2 rounded-lg font-bold shadow-md hover:bg-tertiary/90 transition-colors">Download Panchakarma Brochure</a>
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
      desc: "Yoga That Heals — Designed by Vaidyas, Taught by Acharyas. At Brahmasutra Ayurveda, we practice Ayurvedic Yoga Chikitsa. That means no random asanas. Every breath, every pose is selected by our doctors to balance your doshas and heal your health issues.",
      icon: "self_improvement",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What Makes Our Yoga Different?</h4>
            <p className="text-sm mb-3">In most studios, 25 people do the same Surya Namaskar. Here, your mat is your prescription.</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Doctor + Yoga Teacher Team:</strong> Our BAMS/MD Vaidyas & certified Yoga instructors jointly design your routine.</li>
              <li><strong className="text-tertiary">Prakriti-Based Practice:</strong> Vata needs grounding. Pitta needs cooling. Kapha needs movement. We teach accordingly.</li>
              <li><strong className="text-tertiary">Medical Yoga:</strong> Safe for slip disc, knee pain, BP, diabetes, pregnancy. We modify, not force.</li>
              <li><strong className="text-tertiary">Goal-Oriented:</strong> Weight loss, pain relief, stress, hormonal balance — we track progress like a treatment plan.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Signature Yoga Programs</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-lg text-tertiary">Ayurvedic Therapeutic Yoga – 1-on-1 Healing Sessions</strong>
                <p className="text-sm"><span className="font-semibold">For:</span> Back pain, Sciatica, Cervical, Arthritis, PCOS, Thyroid, Diabetes, Anxiety, Insomnia</p>
                <p className="text-sm mt-1"><span className="font-semibold">How it works:</span> 45-min personal session. We combine asana + pranayama + marma points + meditation based on your Nadi Pariksha report.</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Panchakarma Support Yoga</strong>
                <p className="text-sm"><span className="font-semibold">Purpose:</span> Prepare body before detox + restore strength after</p>
                <p className="text-sm"><span className="font-semibold">Practices:</span> Lymphatic flows, gentle twists, restorative breathing</p>
                <p className="text-sm italic mt-1 bg-surface-container inline-block px-2 py-1 rounded">Note: Included free with 7-day+ Panchakarma plans</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Corporate & Workplace Yoga</strong>
                <p className="text-sm"><span className="font-semibold">Focus:</span> Neck/back pain, eye strain, focus, team energy</p>
                <p className="text-sm mt-1"><span className="font-semibold">Bonus:</span> We also conduct monthly "Ayurveda + Yoga" wellness talks</p>
              </div>
              <div>
                <strong className="text-lg text-tertiary">Pranayama & Meditation Intensive</strong>
                <p className="text-sm"><span className="font-semibold">Learn:</span> Nadi Shodhana for anxiety, Bhramari for sleep, Kapalbhati for weight, Yoga Nidra for deep rest</p>
                <p className="text-sm mt-1"><span className="font-semibold">Best for:</span> Mental health, focus, high BP, students</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Conditions We Specially Work With</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20">Issue</th>
                    <th className="p-2 border border-primary/20">Yoga Approach at Brahmasutra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20 font-medium">Spine: Sciatica, Slip Disc, Spondylitis</td><td className="p-2 border border-primary/20">Traction-based asanas, no forward bends, core activation</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Joints: Knee Pain, Arthritis</td><td className="p-2 border border-primary/20">Chair yoga, props, marma-based joint rotations</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Hormonal: PCOS, Thyroid, Menopause</td><td className="p-2 border border-primary/20">Pelvic flows, Bhramari, cooling pranayama</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Lifestyle: Diabetes, BP, Obesity</td><td className="p-2 border border-primary/20">Metabolic sequences, stress-reducing breathwork</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Mind: Anxiety, Depression, Insomnia</td><td className="p-2 border border-primary/20">Grounding asanas, Yoga Nidra, alternate nostril breathing</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Ahmedabad Trusts Brahmasutra Ayurveda for Yoga</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Authentic Lineage:</strong> Classical Hatha + Ayurveda from Charak Samhita, not gym yoga</li>
              <li><strong className="text-tertiary">Medical Safety:</strong> Every instructor trained in contraindications for 20+ diseases</li>
              <li><strong className="text-tertiary">Clean Shala:</strong> Washed mats, sanitized props, airy hall</li>
              <li><strong className="text-tertiary">Results-Oriented:</strong> 87% patients report pain relief/sleep improvement in 21 days*</li>
              <li><strong className="text-tertiary">Transparent:</strong> No hidden charges. No forcing yearly memberships</li>
            </ul>
            <p className="text-xs mt-2 italic text-on-surface-variant">*Based on internal patient feedback 2025-2026</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQs from Our Patients</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Q. I have never done yoga. Can I start at 50?</strong>
                <p className="text-sm">Absolutely. 60% of our students are 40+ with knee/back issues. We start on chair.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q. Will yoga interfere with my medicines?</strong>
                <p className="text-sm">No. It supports them. But keep your doctor informed. We coordinate if needed.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q. Do you teach power yoga for weight loss?</strong>
                <p className="text-sm">We teach sustainable weight loss. Kapha-balancing dynamic yoga + metabolism pranayama + mitahara diet works better than jumping.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q. Can I do it during periods/pregnancy?</strong>
                <p className="text-sm">Yes, with modifications. We have special prenatal & menstrual sequences.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary-container text-center">
            <h4 className="text-lg font-bold mb-2">Brahmasutra Ayurveda – Yoga & Panchakarma Center</h4>
            <p className="text-sm mb-1"><strong>Timings:</strong> 6:00 AM – 6:00 PM | Sunday Closed</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a href="/book-appointment" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-colors">Book Your Trial Class Today →</a>
              <a href="https://wa.me/919510250323?text=YOGA" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">forum</span> WhatsApp "YOGA" for Free Consultation</a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Yoga is a complementary therapy. Always practice under trained guidance. Consult physician before starting if you have severe medical conditions.</p>
          </div>
        </div>
      )
    },
    {
      title: "Nadi Pariksha (Pulse Diagnosis)",
      desc: "Your Pulse Speaks. We Listen. Ancient Diagnosis for Modern Healing. Nadi Pariksha is Ayurveda’s 5000-year-old diagnostic science. Through the pulse at your wrist, our expert Vaidyas understand your body type, current imbalances, and hidden health issues. Special Nadi Pariksha camp every Thursday morning 8 to 10 am.",
      icon: "monitor_heart",
      image: "/nadi-pariksha.png",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What is Nadi Pariksha?</h4>
            <p className="text-sm mb-3">Nadi Pariksha means "Pulse Examination." In Ayurveda, your pulse carries the vibration of Vata, Pitta, and Kapha doshas. By placing three fingers on your radial artery, a trained Vaidya can detect:</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Your Prakriti:</strong> Your natural birth constitution</li>
              <li><strong className="text-tertiary">Your Vikriti:</strong> Current dosha imbalance causing disease</li>
              <li><strong className="text-tertiary">Organ Health:</strong> Status of heart, liver, kidney, digestion, hormones</li>
              <li><strong className="text-tertiary">Mental State:</strong> Stress, anxiety, emotional blocks</li>
              <li><strong className="text-tertiary">Future Tendencies:</strong> What diseases you're prone to</li>
            </ul>
            <p className="text-sm mt-3 italic font-semibold">It's not guesswork. It's science your body has been recording since birth.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Get Nadi Pariksha at Brahmasutra Ayurveda?</h4>
            <p className="text-sm mb-3 italic">Most places do Nadi Pariksha in 2 minutes. We don't.</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Authentic Classical Method:</strong> As described in Sharangdhar Samhita & Yoga Ratnakar. No machines, no shortcuts.</li>
              <li><strong className="text-tertiary">Experienced Vaidyas:</strong> Our doctors have 10+ years of daily Nadi Pariksha practice with 5000+ patients.</li>
              <li><strong className="text-tertiary">30-Min Deep Analysis:</strong> We check 7 levels of pulse + tongue, eyes, voice, and ask detailed questions.</li>
              <li><strong className="text-tertiary">Written Report:</strong> You get a Prakriti-Vikriti chart + explanation in simple Hindi/English.</li>
              <li><strong className="text-tertiary">Treatment Link:</strong> Your Nadi report directly decides your diet, herbs, Panchakarma & Yoga plan.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What Can Nadi Pariksha Detect?</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20">System</th>
                    <th className="p-2 border border-primary/20">What We Can Sense in Your Pulse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20 font-medium">Digestive</td><td className="p-2 border border-primary/20">Weak Agni, Ama/toxins, acidity, IBS, liver sluggishness</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Hormonal</td><td className="p-2 border border-primary/20">Thyroid imbalance, PCOS, diabetes tendency, menopause stage</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Heart & Circulation</td><td className="p-2 border border-primary/20">BP tendency, cholesterol, blockage risk, stress on heart</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Joints & Bones</td><td className="p-2 border border-primary/20">Vata accumulation, early arthritis, calcium deficiency</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Mental Health</td><td className="p-2 border border-primary/20">Anxiety, depression, sleep quality, overthinking patterns</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Reproductive</td><td className="p-2 border border-primary/20">Fertility issues, low ojas, menstrual irregularities</td></tr>
                  <tr><td className="p-2 border border-primary/20 font-medium">Immunity</td><td className="p-2 border border-primary/20">Low ojas, recurring infections, autoimmune tendencies</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3 italic bg-surface-container inline-block px-3 py-2 rounded">Note: Nadi Pariksha shows functional imbalances often before blood tests show disease. It's preventive diagnosis.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Who Should Get Nadi Pariksha?</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Chronic Issues:</strong> If reports are normal but you still feel unwell</li>
              <li><strong className="text-tertiary">Unexplained Symptoms:</strong> Fatigue, bloating, mood swings, hair fall with no clear cause</li>
              <li><strong className="text-tertiary">Before Starting Treatment:</strong> To know root cause before Panchakarma, diet, or herbs</li>
              <li><strong className="text-tertiary">Preventive Health Check:</strong> Once every 6 months to catch imbalance early</li>
              <li><strong className="text-tertiary">Confused Between Options:</strong> Allopathy vs Ayurveda — know what your body actually needs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Your Nadi Pariksha Session at Brahmasutra Ayurveda: Step by Step</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Step 1: Preparation – 5 mins</strong>
                <p className="text-sm">Sit quietly. No tea/coffee 1 hour before. We take pulse on empty stomach or 2 hrs after food for accuracy.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Step 2: Pulse Reading – 15 mins</strong>
                <p className="text-sm">Our Vaidya checks your pulse on both wrists. First to know Prakriti, then Vikriti. We check speed, rhythm, movement, temperature.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Step 3: Correlation – 10 mins</strong>
                <p className="text-sm">We ask about sleep, digestion, emotions, energy to confirm pulse findings. Check tongue, eyes, nails.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Step 4: Your Health Map – Report + Counseling</strong>
                <p className="text-sm mb-1">You receive:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>Prakriti Type:</strong> Vata-Pitta-Kapha % chart</li>
                  <li><strong>Current Imbalance:</strong> Which dosha is high/low & where</li>
                  <li><strong>Organ Report:</strong> Which systems need support</li>
                  <li><strong>Root Cause:</strong> Why your issue started — food, sleep, stress, or past illness</li>
                  <li><strong>Next Steps:</strong> Diet, lifestyle, herbs, yoga, or Panchakarma plan</li>
                </ul>
              </div>
              <p className="text-sm font-semibold">Total Duration: 30-40 minutes</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Nadi Pariksha vs Modern Tests</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20">Nadi Pariksha</th>
                    <th className="p-2 border border-primary/20">Blood Test/X-Ray</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20">Shows functional imbalance</td><td className="p-2 border border-primary/20">Shows structural damage</td></tr>
                  <tr><td className="p-2 border border-primary/20">Detects disease tendency early</td><td className="p-2 border border-primary/20">Detects disease after it forms</td></tr>
                  <tr><td className="p-2 border border-primary/20">Body-mind-emotion together</td><td className="p-2 border border-primary/20">Only physical parameters</td></tr>
                  <tr><td className="p-2 border border-primary/20">Personalized root-cause</td><td className="p-2 border border-primary/20">Standardized normal ranges</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3 italic font-semibold">Best approach: Use both. We often ask for reports to correlate with Nadi findings.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Important Guidelines for Accurate Nadi Pariksha</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Do:</strong> Come with calm mind, empty stomach or 2 hrs after light meal</li>
              <li><strong className="text-tertiary">Avoid:</strong> Tea, coffee, heavy exercise 2 hrs before | Don't come in fever/just after meal</li>
              <li><strong className="text-tertiary">Best Time:</strong> Morning 7-10 AM when doshas are stable</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQs</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Q1. Is Nadi Pariksha accurate?</strong>
                <p className="text-sm">Yes, in trained hands. It's been used for 5000 years. Accuracy depends on Vaidya's experience & your state during check. That's why we keep 30 mins per patient.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q2. Can it detect cancer/tumor?</strong>
                <p className="text-sm">Nadi shows tissue-level imbalance and low ojas which are risk factors. It's not a replacement for biopsy/scans. We use it for early prevention.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q3. Will you tell future diseases?</strong>
                <p className="text-sm">We tell tendencies. Example: "Your pulse shows Pitta in liver + weak digestion → high risk of acidity/skin issues if lifestyle not corrected." You can prevent it.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q4. Do I need to stop medicines before?</strong>
                <p className="text-sm">No. Continue your allopathic medicines. Tell us what you're taking so we factor it in.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary-container text-center">
            <h4 className="text-lg font-bold mb-2">Visit: Brahmasutra Ayurveda</h4>
            <p className="text-sm mb-1"><strong>Address:</strong> Neelkanth Kutir Bunglows, Vatva Gamdi Road, Gamdi Gam, Ahmedabad, Gujarat, India - 382435</p>
            <p className="text-sm mb-1"><strong>Timings:</strong> 10:00 AM – 12:00 PM & 4:00 PM – 6:00 PM | By appointment only</p>
            <p className="text-sm mb-4 font-bold text-tertiary">Special Nadi Pariksha Camp every Thursday morning 8:00 AM to 10:00 AM</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a href="/book-appointment" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-colors">Book Nadi Pariksha →</a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Nadi Pariksha is an Ayurvedic assessment tool. It is complementary to modern diagnosis and not a replacement for emergency medical care or lab investigations when needed.</p>
          </div>
        </div>
      )
    },
    {
      title: "Raktamokshan",
      desc: "Purify Your Blood, Heal Your Skin – Classical Bloodletting Therapy. Raktamokshan is the 5th Panchakarma therapy designed to remove impure, toxin-laden blood from the body. At Brahmasutra Ayurveda, we use safe, classical methods to treat chronic skin & blood disorders at the root.",
      icon: "bloodtype",
      image: "/raktamokshan.png",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What is Raktamokshan?</h4>
            <p className="text-sm mb-4">Raktamokshan means "bloodletting" or "blood purification." When Pitta dosha and toxins — Rakta dushti — accumulate in blood, they cause skin diseases, inflammation, and heat-related disorders. This therapy removes small, controlled amounts of vitiated blood to cleanse the system.</p>
            
            <h5 className="text-lg font-bold text-tertiary mb-2">Methods We Use at Brahmasutra Ayurveda:</h5>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Jalaukavacharana – Leech Therapy:</strong> Most common & safest. Medicinal leeches suck only impure blood. Painless, best for skin diseases & local inflammation.</li>
              <li><strong className="text-tertiary">Siravedha – Venesection:</strong> Small vein puncture for systemic blood purification. Done for severe Pitta disorders.</li>
              <li><strong className="text-tertiary">Prachhanna:</strong> Multiple small pricks for localized blood issues like acne, boils.</li>
            </ul>
            <p className="text-sm mt-3 italic font-semibold">We select the method based on your disease, age, and Nadi Pariksha.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Best For These Conditions:</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Skin Diseases:</strong> Psoriasis, eczema, urticaria, acne, vitiligo, fungal infections</li>
              <li><strong className="text-tertiary">Blood Disorders:</strong> Gout, varicose veins, non-healing ulcers, abscess</li>
              <li><strong className="text-tertiary">Pitta Disorders:</strong> Hypertension, chronic headaches, red eyes, burning sensation</li>
              <li><strong className="text-tertiary">Liver Issues:</strong> As supportive therapy in fatty liver, jaundice</li>
              <li><strong className="text-tertiary">Hair Problems:</strong> Alopecia areata, dandruff with inflammation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Key Benefits:</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Clears Chronic Skin Issues:</strong> Removes root toxins causing recurring eczema/psoriasis</li>
              <li><strong className="text-tertiary">Reduces Inflammation & Heat:</strong> Calms redness, burning, itching immediately</li>
              <li><strong className="text-tertiary">Improves Complexion:</strong> Purifies blood for natural, healthy glow</li>
              <li><strong className="text-tertiary">Prevents Recurrence:</strong> When combined with diet & herbs, gives long-term relief</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Safe Process at Brahmasutra Ayurveda:</h4>
            <div className="space-y-3">
              <p className="text-sm"><strong className="text-tertiary">Step 1: Vaidya Consultation</strong><br/>We check if Raktamokshan is suitable via Nadi Pariksha & blood reports</p>
              <p className="text-sm"><strong className="text-tertiary">Step 2: Preparation</strong><br/>Light diet, local Snehana-Swedana if needed</p>
              <p className="text-sm"><strong className="text-tertiary">Step 3: Procedure</strong><br/>Sterile, single-use equipment. Medicinal leeches from certified farms only. Painless & hygienic.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 4: Post Care</strong><br/>Turmeric dressing, herbal medicines, diet plan to build pure blood</p>
            </div>
            <div className="mt-4 p-3 bg-tertiary/10 rounded-lg border border-tertiary/20 text-sm">
              <p><span className="font-semibold text-tertiary">Duration:</span> 30-60 mins per sitting | 3-7 sittings based on condition</p>
              <p className="mt-1"><span className="font-semibold text-tertiary">Safety:</span> Done only by trained BAMS doctors. We never remove excess blood. No weakness if done correctly.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Important Guidelines:</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Do Before:</strong> Come on light stomach. Avoid curd, fish, alcohol 2 days prior.</li>
              <li><strong className="text-tertiary">Avoid If:</strong> Anemia, pregnancy, bleeding disorders, extreme weakness, children &lt;12 years</li>
              <li><strong className="text-tertiary">After Care:</strong> Rest, avoid sun exposure, follow Pathya diet given by us</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary-container text-center">
            <h4 className="text-lg font-bold mb-2">Suffering from Skin Issues That Don’t Go Away?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a href="/book-appointment" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-colors">Book Raktamokshan Consultation</a>
              <a href="https://wa.me/919510250323?text=BLOOD%20PURIFY" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">forum</span> WhatsApp: Send "BLOOD PURIFY" for details</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Raktamokshan is a medical procedure. It should only be done after proper Ayurvedic diagnosis and under qualified Vaidya supervision.</p>
          </div>
        </div>
      )
    },
    {
      title: "Agnikarma",
      desc: "A controlled heat treatment using a heated metal rod (Shalaka) to provide targeted relief from chronic pain, musculoskeletal disorders, and localized conditions with precision.",
      icon: "local_fire_department",
      image: "/agnikarma.png",
    },
    {
      title: "Viddhakarma",
      desc: "Precision Puncture Therapy – Ayurveda’s Needle-Free Acupuncture. Viddhakarma is one of the 8 types of Raktamokshan described in Sushruta Samhita. At Brahmasutra Ayurveda, we use this subtle puncture technique to release trapped Vata, pain, and toxins without medicines.",
      icon: "healing",
      image: "/viddhakarma.png",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What is Viddhakarma?</h4>
            <p className="text-sm mb-3">Viddha means "to puncture" and Karma means "procedure." In Viddhakarma, specific Marma or Vedhya points are punctured using a sterile needle or specialized instrument to:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
              <li>Release obstructed Vata causing pain and stiffness</li>
              <li>Drain localized impure blood in cysts, boils, or swelling</li>
              <li>Stimulate nerve points to restore function</li>
            </ul>
            <p className="text-sm italic font-semibold">Think of it as Ayurvedic acupuncture, but with a deeper diagnostic basis — we puncture only after Nadi Pariksha confirms which channel is blocked.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Best For These Conditions at Brahmasutra Ayurveda:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20 font-semibold">Condition</th>
                    <th className="p-2 border border-primary/20 font-semibold">How Viddhakarma Helps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Sciatica & Gridhrasi</strong></td><td className="p-2 border border-primary/20">Releases trapped Vata at specific points on buttock/leg</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Frozen Shoulder, Tennis Elbow</strong></td><td className="p-2 border border-primary/20">Reduces local inflammation & improves joint movement</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Headache, Migraine</strong></td><td className="p-2 border border-primary/20">Specific points on head/temple to release vascular spasm</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Cysts, Lipoma, Abscess</strong></td><td className="p-2 border border-primary/20">Drains impure blood/fluid accumulation safely</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Trigeminal Neuralgia</strong></td><td className="p-2 border border-primary/20">Stimulates facial nerve points to reduce electric-shock pain</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Heel Pain, Calcaneal Spur</strong></td><td className="p-2 border border-primary/20">Puncture at foot marma to release plantar Vata</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Choose Brahmasutra Ayurveda for Viddhakarma?</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Sushruta-Based Technique:</strong> Done exactly as per Vedhya Sira locations in classical texts</li>
              <li><strong className="text-tertiary">Zero Medication Approach:</strong> Ideal for patients who can’t take painkillers or want drug-free relief</li>
              <li><strong className="text-tertiary">Sterile & Painless:</strong> Single-use disposable needles, 27-30G ultra-fine. Most patients feel only a prick</li>
              <li><strong className="text-tertiary">Vaidya-Performed Only:</strong> No therapists. Done personally by BAMS/MD doctors with marma expertise</li>
              <li><strong className="text-tertiary">Instant Relief Cases:</strong> Many patients report 50-70% pain reduction in 1-2 sittings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Viddhakarma Process – Step by Step</h4>
            <div className="space-y-3">
              <p className="text-sm"><strong className="text-tertiary">Step 1: Diagnosis</strong><br/>We locate the exact Vedhya point via Nadi, palpation, and your pain pattern</p>
              <p className="text-sm"><strong className="text-tertiary">Step 2: Preparation</strong><br/>Local Snehana-Swedana to relax the area + sterile cleaning</p>
              <p className="text-sm"><strong className="text-tertiary">Step 3: Puncture</strong><br/>Quick, precise puncture at calculated depth. Sometimes 1-2 drops of blood may ooze out — that’s the vitiated blood</p>
              <p className="text-sm"><strong className="text-tertiary">Step 4: Post Care</strong><br/>Turmeric/haridra dressing. No bandage needed usually. Avoid water for 2 hours.</p>
            </div>
            <div className="mt-4 p-3 bg-tertiary/10 rounded-lg border border-tertiary/20 text-sm">
              <p><span className="font-semibold text-tertiary">Duration:</span> 10-15 mins | <span className="font-semibold text-tertiary">Sittings:</span> 1-5 based on chronicity | <span className="font-semibold text-tertiary">Fee:</span> ₹600 per sitting</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Viddhakarma vs Acupuncture vs Injection</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Viddhakarma</th>
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Acupuncture</th>
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Pain Injection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20">Based on Ayurvedic marma & dosha</td><td className="p-2 border border-primary/20">Based on Chinese meridians</td><td className="p-2 border border-primary/20">Chemical drug delivery</td></tr>
                  <tr><td className="p-2 border border-primary/20">Releases vitiated blood/Vata</td><td className="p-2 border border-primary/20">Stimulates energy flow</td><td className="p-2 border border-primary/20">Blocks pain temporarily</td></tr>
                  <tr><td className="p-2 border border-primary/20">Root-cause approach</td><td className="p-2 border border-primary/20">Symptomatic</td><td className="p-2 border border-primary/20">Symptomatic</td></tr>
                  <tr><td className="p-2 border border-primary/20">No medicine inside body</td><td className="p-2 border border-primary/20">No medicine</td><td className="p-2 border border-primary/20">Steroid/analgesic drugs</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Important Safety Notes:</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Avoid if:</strong> Bleeding disorders, on blood thinners, pregnancy, severe anemia, active infection at site</li>
              <li><strong className="text-tertiary">After Care:</strong> Don’t lift heavy weight for 24 hrs. Report if excess bleeding — though rare</li>
              <li><strong className="text-tertiary">Myth Buster:</strong> It’s NOT painful like an injection. The needle is thinner than insulin needle.</li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Viddhakarma is an Ayurvedic parasurgical procedure. Must be done only after proper diagnosis and by trained Ayurvedic physicians. Not a replacement for emergency care.</p>
          </div>
        </div>
      )
    },
    {
      title: "Marma Therapy",
      desc: "Unlock Your Body’s 107 Healing Points – Ancient Science of Instant Relief. Marma Therapy is Ayurveda’s 5000-year-old secret for pain relief, energy flow, and deep healing. At Brahmasutra Ayurveda, we use precise touch, pressure, and oils on vital energy points to unblock your body’s natural pharmacy.",
      icon: "touch_app",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      detailedContent: (
        <div className="space-y-6 text-on-surface">
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">What is Marma Therapy?</h4>
            <p className="text-sm mb-3">Marma points are vital energy junctions where muscles, veins, ligaments, bones, and joints meet. Described in Sushruta Samhita, these 107 points are the control switches of your body’s Prana – life force.</p>
            <p className="text-sm mb-3">When Marma points get blocked due to injury, stress, or wrong posture, Vata gets trapped. Result: Pain, numbness, weakness, anxiety.</p>
            <p className="text-sm mb-2">Marma Chikitsa gently stimulates these points using finger pressure, herbal oils, or Agnikarma to:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
              <li><span className="font-semibold">Release Blocked Energy:</span> Like pressing a reset button for pain</li>
              <li><span className="font-semibold">Improve Blood & Nerve Flow:</span> To organs, joints, and brain</li>
              <li><span className="font-semibold">Balance Doshas Instantly:</span> Especially Vata disorders</li>
              <li><span className="font-semibold">Activate Self-Healing:</span> Body starts repairing without heavy medicines</li>
            </ul>
            <p className="text-sm italic font-semibold">It’s not massage. It’s medical science. Used by warriors in ancient India to revive injured soldiers on battlefields.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Conditions We Treat with Marma Therapy</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20 font-semibold">Body System</th>
                    <th className="p-2 border border-primary/20 font-semibold">Conditions We Help</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Pain & Joints</strong></td><td className="p-2 border border-primary/20">Frozen shoulder, sciatica, cervical spondylitis, knee pain, tennis elbow, backache, arthritis</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Neurological</strong></td><td className="p-2 border border-primary/20">Paralysis, facial palsy, trigeminal neuralgia, migraine, vertigo, numbness in hands/feet</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Stress & Mind</strong></td><td className="p-2 border border-primary/20">Anxiety, depression, insomnia, panic attacks, brain fog, low energy</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Digestive</strong></td><td className="p-2 border border-primary/20">IBS, chronic constipation, acidity, bloating from stress</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Respiratory</strong></td><td className="p-2 border border-primary/20">Asthma, sinusitis, allergic rhinitis</td></tr>
                  <tr><td className="p-2 border border-primary/20"><strong className="text-tertiary">Women’s Health</strong></td><td className="p-2 border border-primary/20">PCOS pain, menstrual cramps, menopausal joint pain</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Why Brahmasutra Ayurveda for Marma Therapy?</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Classical Marma Training:</strong> Our Vaidyas are trained in Marma Shastra as per Sushruta & Vagbhata. We know exact location, depth & angle for each of 107 points.</li>
              <li><strong className="text-tertiary">Nadi + Marma Diagnosis:</strong> We don’t do random massage. First we check Nadi Pariksha to know which Marma is blocked for your disease.</li>
              <li><strong className="text-tertiary">Medicated Oil Specific:</strong> Ksheerbala for nerve Marma, Dhanwantaram for joint Marma, Brahmi oil for head Marma – selected as per your condition.</li>
              <li><strong className="text-tertiary">Safe & Non-Invasive:</strong> No needles, no machines, no side effects. Safe for elderly, children above 8 years.</li>
              <li><strong className="text-tertiary">Instant Feedback Therapy:</strong> 70% patients feel change in pain, movement, or calmness in first session itself.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Our Marma Therapy Process – Step by Step</h4>
            <div className="space-y-3">
              <p className="text-sm"><strong className="text-tertiary">Step 1: Marma Assessment – 15 mins</strong><br/>We identify blocked Marma points via pulse, pain mapping, and posture analysis. Each disease has specific Marma keys.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 2: Preparation – Snehana & Swedana</strong><br/>Warm herbal oil application + light steam to open channels. Makes Marma points receptive.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 3: Marma Stimulation – 30-40 mins</strong><br/>Precise thumb/finger pressure, circular motions, or gentle tapping on points. Sequence is important – wrong order can aggravate Vata.</p>
              <p className="text-sm"><strong className="text-tertiary">Step 4: Integration Rest</strong><br/>5 mins quiet rest with Shankhnaad or Om chanting to let Prana settle. Followed by herbal tea.</p>
            </div>
            <div className="mt-4 p-3 bg-tertiary/10 rounded-lg border border-tertiary/20 text-sm">
              <p><span className="font-semibold text-tertiary">Duration:</span> 45-60 mins per session | <span className="font-semibold text-tertiary">Course:</span> 7, 14, or 21 days for chronic issues</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Types of Marma Therapy at Our Center</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><span className="font-semibold">Ruksha Marma:</span> Dry pressure for Kapha disorders, obesity, stiffness</li>
              <li><span className="font-semibold">Snigdha Marma:</span> With warm oils for Vata pain, paralysis, dryness</li>
              <li><span className="font-semibold">Agnikarma Marma:</span> Gentle heat on specific points for severe chronic pain</li>
              <li><span className="font-semibold">Suchi Viddha Marma:</span> Ultra-fine needle touch on Marma for nerve issues</li>
              <li><span className="font-semibold">Mukh Marma:</span> Facial Marma for stress, migraine, beauty & anti-aging</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Marma Therapy vs Physiotherapy vs Acupressure</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Marma Chikitsa</th>
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Physiotherapy</th>
                    <th className="p-2 border border-primary/20 font-semibold text-tertiary">Acupressure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-primary/20">Based on 107 vital points + dosha</td><td className="p-2 border border-primary/20">Based on muscle & joint anatomy</td><td className="p-2 border border-primary/20">Based on Chinese points</td></tr>
                  <tr><td className="p-2 border border-primary/20">Releases Prana blockage</td><td className="p-2 border border-primary/20">Strengthens muscles</td><td className="p-2 border border-primary/20">Stimulates energy meridians</td></tr>
                  <tr><td className="p-2 border border-primary/20">Root-cause for Vata disorders</td><td className="p-2 border border-primary/20">Rehabilitation focus</td><td className="p-2 border border-primary/20">Symptomatic relief</td></tr>
                  <tr><td className="p-2 border border-primary/20">Uses medicated oils + mantra</td><td className="p-2 border border-primary/20">Uses machines, exercises</td><td className="p-2 border border-primary/20">Dry pressure mostly</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Important Guidelines</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong className="text-tertiary">Best Time:</strong> Morning empty stomach or 3 hrs after food</li>
              <li><strong className="text-tertiary">Avoid If:</strong> Fever, acute infection, pregnancy first trimester, open wounds, immediately after heavy meal</li>
              <li><strong className="text-tertiary">After Session:</strong> No AC/cold wind for 1 hour. Drink warm water. Rest for 30 mins.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">FAQs</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-sm text-tertiary">Q1. Is Marma Therapy painful?</strong>
                <p className="text-sm">No. It’s gentle pressure. You may feel tender points – those are blocked Marmas. Pain reduces as we release them.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q2. How is it different from massage?</strong>
                <p className="text-sm">Massage works on muscles. Marma works on Prana points that control muscles, nerves & organs. 1 Marma point can relieve entire leg pain.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q3. Can it cure paralysis?</strong>
                <p className="text-sm">In early stages, Marma + Basti + herbs give excellent results. We’ve helped many stroke patients regain movement. Chronic cases need longer therapy.</p>
              </div>
              <div>
                <strong className="text-sm text-tertiary">Q4. Do you teach Marma for self-use?</strong>
                <p className="text-sm">Yes. After 7 sessions, we teach 3-4 safe Marma points for your daily home practice.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <p className="text-sm italic text-center text-tertiary">Disclaimer: Marma Therapy is a specialized Ayurvedic procedure. Should be performed only by trained Vaidyas. Not a replacement for emergency medical care</p>
          </div>
        </div>
      )
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
            Consult with Brahmasutra Ayurveda to design a personalized wellness blueprint that honors your nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-appointment"
              className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold hover:shadow-lg transform active:scale-95 transition-all"
            >
              Book Your Consultation
            </Link>
            <a
              href="https://wa.me/919510250323?text=Hello%20Brahmasutra%20Ayurveda,%20I'd%20like%20to%20know%20more%20about%20your%20services."
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
