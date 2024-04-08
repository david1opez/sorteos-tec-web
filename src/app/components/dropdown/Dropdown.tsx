"use client"
import { useState } from 'react';

import styles from "./dropdown.module.css";

export default function Dropdown({button, dropdown}: {button: () => JSX.Element, dropdown: () => JSX.Element}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div className={styles.dropdown}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {button()}
        </button>
        {isOpen && dropdown()}
      </div>
    );
};