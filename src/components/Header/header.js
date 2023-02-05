import Link from "next/link";
import React from "react";

import styles from "@/styles/Home.module.css";

export default function Header() {
  const text = `{ js }`;
  return (
    <div>
      <div className={styles.flexHeader}>
        <div className={styles.name}>{text}</div>
        <div className="button">
          <Link href="mailto:rushidorinel@gmail.com">
            <button className={styles.buttonOne}>Hire Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
