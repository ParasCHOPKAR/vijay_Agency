"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

// 1. Updated Data Structure: Explicitly defining the href to match your folder names perfectly.
const productCategories = [
  {
    title: "Polycarbonate Sheets",
    path: "/products?category=Polycarbonate Sheets", // You can change this if you create a specific category overview page
    items: [
      { name: "Polycarbonate Awning", href: "/products/polycarbonate-awning" },
      { name: "Polycarbonate Corrugated Sheets", href: "/products/polycarbonate-corrugated-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "Tile Roof Sheets",
  path: "/products?category=Tile Roof Sheets",
    items: [
      { name: "PVC Tile Roof Sheet", href: "/products/pvc-tile-roof-sheet" },
      { name: "Pre-Coated Tile Roof Sheets", href: "/products/pre-coated-tile-roof-sheets" },
      { name: "Geo Roof", href: "/products/geo-roof" },
    ],
    hasMore: false,
  },
  {
    title: "Color & Stone Coated",
  path: "/products?category=Color %26 Stone Coated" ,
// Note: Use %26 instead of & to ensure the URL doesn't break,
    items: [
      { name: "Color Coated Sheets Tile Roof", href: "/products/color-coated-sheets-tile-roof" },
      { name: "Stone Coated", href: "/products/stone-coated" },
    ],
    hasMore: false,
  },
  {
    title: "PVC Products",
  path: "/products?category=PVC Products",
    items: [
      { name: "VOX PVC Panels", href: "/products/vox-pvc-panels" },
      { name: "PVC Rain Water Hycount", href: "/products/pvc-rain-water-hycount" },
      { name: "PVC Zalar", href: "/products/pvc-zalar" },
    ],
    hasMore: false,
  },
  {
    title: "Acrylic & FRP Sheets",
    path: "/products?category=Acrylic %26 FRP Sheets",
// Note: Use %26 instead of &,
    items: [
      { name: "Acrylic Sheets", href: "/products/acrylic-sheets" },
      { name: "FRP Sheets", href: "/products/frp-sheets" },
      { name: "PP Sheets", href: "/products/pp-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "Translucent Sheets",
   path: "/products?category=Translucent Sheets",
    items: [
      { name: "Alabaster Sheets", href: "/products/alabaster-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "Accessories & Others",
   path: "/products?category=Accessories %26 Others",
// Note: Use %26 instead of &,
    items: [
      { name: "Roof Ventilator", href: "/products/roof-ventilator" },
      { name: "Aluminium Foil, Roll", href: "/products/aluminium-foil-roll" },
    ],
    hasMore: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = () => {
    setHideDropdown(true);
    setTimeout(() => setHideDropdown(false), 200); 
  };

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
                  
                  {isProducts && (
                    <svg className={styles.dropdownIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>

                {isProducts && (
                  <div className={styles.megaMenuWrapper} style={{ display: hideDropdown ? 'none' : '' }}>
                    <div className={styles.megaMenu}>
                      <div className={styles.megaGrid}>
                        
                        {productCategories.map((category, index) => (
                          <div key={index} className={styles.megaCol}>
                            <h4 className={styles.megaTitle}>
                              <Link href={category.path} className={styles.megaTitleLink} onClick={handleDropdownClick}>
                                {category.title}
                              </Link>
                            </h4>
                            <ul className={styles.megaList}>
                              {/* 2. Updated map to use the new item object structure */}
                              {category.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={item.href} className={styles.megaItem} onClick={handleDropdownClick}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {category.hasMore && (
                              <Link href={category.path} className={styles.moreLink} onClick={handleDropdownClick}>
                                ...more
                              </Link>
                            )}
                          </div>
                        ))}

                        <div className={styles.megaColAll}>
                          <Link href="/products" className={styles.viewAllBtn} onClick={handleDropdownClick}>
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

        <div className={styles.ctaContainer}>
          <button className={styles.quoteBtn}>
            REQUEST QUOTE
          </button>
        </div>

      </div>
    </nav>
  );
}



