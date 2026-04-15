"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar"; // Adjust path if your Navbar is somewhere else
import styles from "./products.module.css";

// ==========================================
// 1. COMPLETE PRODUCT DATABASE
// ==========================================
const productsData = [
  // Polycarbonate
  { id: 1, name: "Polycarbonate Awning", category: "Polycarbonate Sheets", desc: "High-impact resistance and UV protection for premium outdoor awnings.", img: "/hero-1.webp" },
  { id: 2, name: "Polycarbonate Corrugated Sheets", category: "Polycarbonate Sheets", desc: "Excellent light transmission and weather resistance for industrial & residential roofing.", img: "/hero-2.webp" },
  
  // Tile Roof Sheets
  { id: 3, name: "PVC Tile Roof Sheet", category: "Tile Roof Sheets", desc: "Lightweight, anti-corrosive PVC tiles mimicking traditional aesthetics.", img: "/hero-3.webp" },
  { id: 4, name: "Pre-Coated Tile Roof Sheets", category: "Tile Roof Sheets", desc: "Galvanized steel pre-coated for extreme durability and vibrant colors.", img: "/hero-4.webp" },
  { id: 5, name: "Geo Roof", category: "Tile Roof Sheets", desc: "Advanced engineered roofing tiles for superior thermal insulation.", img: "/home-about-01.webp" },
  
  // Color & Stone Coated
  { id: 6, name: "Color Coated Sheets Tile Roof", category: "Color & Stone Coated", desc: "Weather-resistant color coated sheets offering a sleek, modern finish.", img: "/hero-1.webp" },
  { id: 7, name: "Stone Coated", category: "Color & Stone Coated", desc: "Premium stone-chip coated steel providing a luxury finish and noise reduction.", img: "/hero-2.webp" },
  
  // PVC Products
  { id: 8, name: "VOX PVC Panels", category: "PVC Products", desc: "High-quality European standard PVC panels for ceilings and walls.", img: "/hero-3.webp" },
  { id: 9, name: "PVC Rain Water Hycount", category: "PVC Products", desc: "Durable and leak-proof rainwater harvesting and drainage gutters.", img: "/hero-4.webp" },
  { id: 10, name: "PVC Zalar", category: "PVC Products", desc: "Decorative PVC front-fascia boards for elegant roof edges.", img: "/home-about-01.webp" },
  
  // Acrylic & FRP Sheets
  { id: 11, name: "Acrylic Sheets", category: "Acrylic & FRP Sheets", desc: "Crystal clear, shatter-resistant acrylic for skylights and decor.", img: "/hero-1.webp" },
  { id: 12, name: "FRP Sheets", category: "Acrylic & FRP Sheets", desc: "Fiberglass Reinforced Plastic sheets for harsh industrial environments.", img: "/hero-2.webp" },
  { id: 13, name: "PP Sheets", category: "Acrylic & FRP Sheets", desc: "Chemical-resistant Polypropylene sheets for specialized applications.", img: "/hero-3.webp" },
  
  // Translucent Sheets
  { id: 14, name: "Alabaster Sheets", category: "Translucent Sheets", desc: "Elegant translucent sheets that diffuse harsh sunlight beautifully.", img: "/hero-4.webp" },
  
  // Accessories
  { id: 15, name: "Roof Ventilator", category: "Accessories & Others", desc: "Wind-driven turbo ventilators to exhaust heat and industrial emissions.", img: "/home-about-01.webp" },
  { id: 16, name: "Aluminium Foil, Roll", category: "Accessories & Others", desc: "Reflective thermal insulation foil to drastically reduce indoor temperatures.", img: "/hero-1.webp" },
];

// Dynamically generate unique categories
const categories = ["All Products", ...Array.from(new Set(productsData.map(p => p.category)))];

// Animation configurations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// ==========================================
// 2. INNER COMPONENT (Handles URL Params)
// ==========================================
function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("All Products");

  // Listen for URL changes from the Navbar and update the active tab
  useEffect(() => {
    if (categoryQuery && categories.includes(categoryQuery)) {
      setActiveCategory(categoryQuery);
    } else {
      setActiveCategory("All Products");
    }
  }, [categoryQuery]);

  // Filter products based on selected category
  const filteredProducts = activeCategory === "All Products"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <title>Premium Roofing Sheets & Accessories | Vijay Agency</title>
      <meta name="description" content="Explore Vijay Agency's premium range of Polycarbonate sheets, Tile Roofs, PVC panels, FRP sheets, and roofing accessories in Pune." />

      <main className={styles.wrapper}>
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroGlow}></div>
          <div className={styles.heroPattern}></div>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>Our Product Catalog</h1>
            <p>Engineered for strength. Designed for excellence.</p>
          </motion.div>
        </section>

        {/* MAIN LAYOUT */}
        <div className={styles.layoutContainer}>
          
          {/* SIDEBAR FILTERS (Sticky) */}
          <aside className={styles.sidebar}>
            <div className={styles.stickyWrapper}>
              <h3>Categories</h3>
              <nav className={styles.categoryList}>
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`${styles.catBtn} ${isActive ? styles.activeCat : ""}`}
                    >
                      <span className={styles.catText}>{cat}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="activeSidebarIndicator" 
                          className={styles.activeIndicator}
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* PRODUCT GRID SECTION */}
          <section className={styles.productSection}>
            <div className={styles.sectionHeader}>
              <h2>{activeCategory}</h2>
              <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span>
            </div>

            <motion.div layout className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(4px)" }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 }
                    }}
                    className={styles.productCard}
                  >
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={product.img} 
                        alt={product.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.productImg}
                      />
                      <div className={styles.categoryTag}>{product.category}</div>
                    </div>
                    
                    <div className={styles.cardContent}>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                      
                      <div className={styles.cardFooter}>
                        <button className={styles.detailsBtn}>
                          <span>View Details</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State Fallback (Just in case a category has no products) */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className={styles.emptyState}
              >
                <p>No products found in this category.</p>
              </motion.div>
            )}
          </section>
        </div>

        {/* CALL TO ACTION SECTION */}
        <section className={styles.ctaSection}>
          <motion.div 
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2>Need help choosing the right material?</h2>
            <p>Our experts are ready to provide technical consultation and competitive pricing for your specific project requirements.</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>Contact Sales</a>
              <a href="tel:8888010111" className={styles.outlineBtn}>Call +91 8888010111</a>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}

// ==========================================
// 3. MAIN EXPORT WRAPPED IN SUSPENSE
// ==========================================
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', color: '#1B1B1B', fontWeight: 600 }}>
        Loading Catalog...
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}