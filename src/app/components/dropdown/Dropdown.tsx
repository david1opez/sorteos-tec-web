"use client"
import { useState } from 'react';

import styles from "./dropdown.module.css";

export default function Dropdown({placeholder, options, onSelectOption, style}: {placeholder: string, options: string[], onSelectOption: (option: string) => void, style?: any}) {
    const [value, setValue] = useState<String|null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div className={styles.dropdownContainer} style={style && style}>
        <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
          {value ? value : placeholder}
        </button>
        {isOpen && (
          <div className={styles.dropdown}>
            {
              options.map(option => (
                <button
                  className={styles.optionButton}
                  onClick={() => {
                    setValue(option);
                    setIsOpen(false);
                    onSelectOption(option);
                  }}
                >
                  { option }
                </button>
              ))
            }
          </div>
        )}
      </div>
    );
};