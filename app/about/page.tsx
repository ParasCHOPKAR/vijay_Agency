"use client";

import styles from "./about.module.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

// UPGRADED ANIMATIONS: Added blur and Apple-style smooth spring easing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// Reusable viewport config so it triggers EVERY time you scroll past it
const viewportSettings = { once: false, amount: 0.1 };

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.wrapper}>
        
        {/* ================= HERO SECTION ================= */}
        <section className={styles.hero}>
          <div className={styles.heroPattern}></div>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>Our Legacy</h1>
            <p>Delivering premium roofing & infrastructure solutions since 1982.</p>
          </motion.div>
        </section>

        {/* ================= COMPANY OVERVIEW ================= */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            
            {/* LEFT IMAGE WITH MODERN OFFSET DECORATION */}
            <motion.div 
              className={styles.imageCol}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src="/home-about-01.webp" 
                  alt="Vijay Agency Facility" 
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.mainImage}
                />
                {/* Decorative floating element */}
                <div className={styles.floatingBadge}>
                  <span className={styles.badgeNumber}>1982</span>
                  <span className={styles.badgeText}>Year Established</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT TEXT CONTENT */}
            <motion.div 
              className={styles.contentCol}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                <span className={styles.subtitle}>WHO WE ARE</span>
                <h2>The Ultimate House of <br/><span>Superior Roofing</span></h2>
              </motion.div>

              <motion.div variants={fadeInUp} className={styles.textContent}>
                <p>
                  Based in the heart of <strong>Bhawani Peth, Pune</strong>, Vijay Agency has been a pioneering force in the wholesale trading, retailing, and importing of premium roofing and decorative sheets for over four decades.
                </p>
                <p>
                  We don't just supply materials; we engineer the protective envelopes that secure the region's infrastructure. From the industrial strength of <strong>Tata Durashine</strong> to elegant polycarbonate solutions, our curated range is built for those who refuse to compromise on quality.
                </p>
                <p>
                  With a robust infrastructure, an expert procurement team, and an efficient warehousing network, we guarantee timely delivery and uncompromising customer satisfaction across Maharashtra.
                </p>
              </motion.div>

              {/* STATS ROW */}
              <motion.div variants={fadeInUp} className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h4>40+</h4>
                  <p>Years Experience</p>
                </div>
                <div className={styles.statItem}>
                  <h4>5000+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className={styles.statItem}>
                  <h4>Top</h4>
                  <p>Brands Partner</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className={styles.missionVision}>
          <div className={styles.mvContainer}>
            <motion.div 
              className={`${styles.mvCard} ${styles.missionCard}`}
              initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={viewportSettings}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower builders, architects, and industries by delivering superior roofing and cladding materials with uncompromising reliability, aggressive pricing, and profound technical expertise. We strive to protect your vision with products that last a lifetime.
              </p>
            </motion.div>

            <motion.div 
              className={`${styles.mvCard} ${styles.visionCard}`}
              initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={viewportSettings}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBoxAlt}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To be the universally recognized leader and most trusted procurement partner in India's structural materials sector. We aim to drive innovation, champion sustainable building practices, and set the gold standard for customer service in the roofing industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className={styles.whySection}>
          <motion.div 
            className={styles.whyHeader}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <h2>The Pillars of <span>Our Success</span></h2>
            <p>What separates Vijay Agency from the rest of the industry.</p>
          </motion.div>

          <motion.div 
            className={styles.featuresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4>Premium Quality</h4>
              <p>We source only from certified, top-tier manufacturers ensuring unmatched durability.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4>Extensive Range</h4>
              <p>From industrial sheets to decorative tiles, find everything under one massive roof.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4>Timely Delivery</h4>
              <p>Our robust logistics network ensures your materials arrive precisely when needed.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4>Expert Consultation</h4>
              <p>Get professional advice to choose the perfect roofing solution for your specific project.</p>
            </motion.div>
          </motion.div>
        </section>

      </main>
    </>
  );
}