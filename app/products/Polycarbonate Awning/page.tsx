import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { FaShieldAlt, FaSun, FaWeightHanging } from "react-icons/fa";

// Sub-categories data matching your Navbar structure
const subProducts = [
  {
    id: "awning",
    title: "Polycarbonate Awning",
    description: "Elegant and durable awning solutions perfect for doors, windows, and patios. Provides excellent protection from rain and direct sunlight while allowing natural light.",
    image: "/images/polycarbonate-awning.jpg", // Make sure to add these images to your /public folder
    link: "/products/polycarbonate-awning",
  },
  {
    id: "corrugated",
    title: "Polycarbonate Corrugated Sheets",
    description: "High-impact resistant corrugated sheets ideal for industrial roofing, skylights, and agricultural enclosures. Exceptional light transmission and UV protection.",
    image: "/images/polycarbonate-corrugated.jpg",
    link: "/products/polycarbonate-corrugated-sheets",
  },
  {
    id: "multiwall",
    title: "Multiwall Polycarbonate",
    description: "Thermal insulating multiwall sheets designed for conservatories, canopies, and architectural glazing. Lightweight yet incredibly strong.",
    image: "/images/polycarbonate-multiwall.jpg",
    link: "/products/polycarbonate-multiwall", // Add this folder later if needed
  }
];

export default function PolycarbonateSheetsPage() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Premium <span>Polycarbonate</span> Sheets
        </h1>
        <p className={styles.heroDescription}>
          Discover our extensive range of high-quality polycarbonate roofing and cladding solutions. 
          Engineered for maximum durability, UV protection, and superior light transmission.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className={styles.container}>
        
        <h2 className={styles.sectionTitle}>Explore Our Range</h2>

        {/* PRODUCT GRID */}
        <div className={styles.productGrid}>
          {subProducts.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {/* Fallback structural div if image is missing, otherwise use next/image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                
                <Link href={product.link} className={styles.learnMoreBtn}>
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* WHY CHOOSE POLYCARBONATE (Benefits) */}
        <h2 className={styles.sectionTitle} style={{ marginTop: '40px' }}>Why Choose Polycarbonate?</h2>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <FaShieldAlt />
            </div>
            <h4 className={styles.benefitTitle}>High Impact Resistance</h4>
            <p className={styles.benefitDesc}>
              Virtually unbreakable, offering 200 times the impact strength of glass, ensuring safety and longevity.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <FaSun />
            </div>
            <h4 className={styles.benefitTitle}>UV Protection</h4>
            <p className={styles.benefitDesc}>
              Coated to block harmful UV rays while allowing excellent natural light transmission into your space.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <FaWeightHanging />
            </div>
            <h4 className={styles.benefitTitle}>Lightweight</h4>
            <p className={styles.benefitDesc}>
              Significantly lighter than traditional glass roofing, making handling, transportation, and installation easier and cost-effective.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}