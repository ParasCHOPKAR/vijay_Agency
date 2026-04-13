"use client";

import styles from "./Floating.module.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Floating() {
  return (
    <div className={styles.wrapper}>
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/91982355814"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a href="tel:9823555581" className={styles.call}>
        <FaPhoneAlt />
      </a>

    </div>
  );
}