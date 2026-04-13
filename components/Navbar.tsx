"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const productCategories = [
  {
    title: "Polycarbonate Sheets",
    items: [
      "Polycarbonate Awning",
      "Polycarbonate Corrugated Sheets",
    ],
    hasMore: false,
  },
  {
    title: "Tile Roof Sheets",
    items: [
      "PVC Tile Roof Sheet",
      "Pre-Coated Tile Roof Sheets",
      "Geo Roof",
    ],
    hasMore: false,
  },
  {
    title: "Color & Stone Coated",
    items: [
      "Color Coated Sheets Tile Roof",
      "Stone Coated",
    ],
    hasMore: false,
  },
  {
    title: "PVC Products",
    items: [
      "VOX PVC Panels",
      "PVC Rain Water Hycount",
      "PVC Zalar",
    ],
    hasMore: false,
  },
  {
    title: "Acrylic & FRP Sheets",
    items: [
      "Acrylic Sheets",
      "FRP Sheets",
      "PP Sheets",
    ],
    hasMore: false,
  },
  {
    title: "Translucent Sheets",
    items: [
      "Alabaster Sheets",
    ],
    hasMore: false,
  },
  {
    title: "Accessories & Others",
    items: [
      "Roof Ventilator",
      "Aluminium Foil, Roll",
    ],
    hasMore: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
 
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.png" 
            alt="Vijay Agency"
            width={180}
            height={80}
            priority
            className={styles.logo}
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className={styles.navMenu}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.name === "HOME" && pathname === "/");
            const isProducts = link.name === "PRODUCTS";

            return (
              <li 
                key={link.name} 
                className={`${styles.navItem} ${isProducts ? styles.hasDropdown : ""}`}
              >
                <Link 
                  href={link.path} 
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.name}
                  
                  {/* DROPDOWN ARROW ICON */}
                  {isProducts && (
                    <svg 
                      className={styles.dropdownIcon} 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>

                {/* MEGA MENU DROPDOWN */}
                {isProducts && (
                  <div className={styles.megaMenuWrapper}>
                    <div className={styles.megaMenu}>
                      <div className={styles.megaGrid}>
                        
                        {productCategories.map((category, index) => (
                          <div key={index} className={styles.megaCol}>
                            <h4 className={styles.megaTitle}>{category.title}</h4>
                            <ul className={styles.megaList}>
                              {category.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/products`} className={styles.megaItem}>
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {category.hasMore && (
                              <Link href="/products" className={styles.moreLink}>
                                ...more
                              </Link>
                            )}
                          </div>
                        ))}

                        <div className={styles.megaColAll}>
                          <Link href="/products" className={styles.viewAllBtn}>
                            View All Categories
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* CALL TO ACTION BUTTON */}
        <div className={styles.ctaContainer}>
          <button className={styles.quoteBtn}>
            REQUEST QUOTE
          </button>
        </div>

      </div>
    </nav>
  );
}