"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.container}>

        {/* LEFT - COMPANY */}
        <div className={styles.col}>
          <h2 className={styles.logo}>Vijay Agency</h2>
          <p>
            House of Roofing Sheets. We provide premium quality roofing
            solutions including polycarbonate sheets, metal roofing,
            ventilators, and more.
          </p>

          {/* SOCIAL */}
          <div className={styles.social}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* PRODUCTS */}
        <div className={styles.col}>
          <h3>Products</h3>
          <Link href="#">Polycarbonate Sheets</Link>
          <Link href="#">Roofing Sheets</Link>
          <Link href="#">Tile Roof Sheets</Link>
          <Link href="#">Stone Coated Roofing</Link>
          <Link href="#">Roof Ventilators</Link>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 8888010111</p>
          <p><FaEnvelope /> vijayagency@gmail.com</p>
          <p>Pune, Maharashtra, India</p>

          <Link href="/contact" className={styles.cta}>
            Get Quote
          </Link>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Vijay Agency. All Rights Reserved.</p>
        <p>Developed BY DW Innovation PVT LTD</p>
      </div>

    </footer>
  );
}