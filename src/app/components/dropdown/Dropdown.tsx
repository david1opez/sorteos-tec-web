"use client"
import { useState } from 'react';

import styles from "./dropdown.module.css";

interface BaseProps {
  onSelectOption?: (option: string) => void;
  style?: any;
}

interface OptionsProps extends BaseProps {
  options: string[];
  placeholder?: string;
  button?: never;
  dropdown?: never;
}

interface ButtonProps extends BaseProps {
  button: () => JSX.Element;
  dropdown: () => JSX.Element;
  options?: never;
  placeholder?: never;
}

type DropdownType = OptionsProps | ButtonProps;


export default function Dropdown({placeholder, options, onSelectOption, style, button, dropdown}: DropdownType) {
    const [value, setValue] = useState<String|null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div className={styles.dropdownContainer} style={style && style}>
        {
          options && (
            <>
              <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
                {value ? value : placeholder}
              </button>
              {
                isOpen && (
                  <div className={styles.dropdown}>
                    {
                      options.map(option => (
                        <button
                          className={styles.optionButton}
                          onClick={() => {
                            setValue(option);
                            setIsOpen(false);
                            onSelectOption && onSelectOption(option);
                          }}
                        >
                          { option }
                        </button>
                      ))
                    }
                  </div>
                )
              }
            </>
          )
        }
        {
          button && (
            <>
              {
                <button className={styles.buttonContainer} onClick={() => setIsOpen(!isOpen)}>
                  { button() }
                </button>
              }
              {
                isOpen && ( dropdown() )
              }
            </>
          )
        }
      </div>
    );
};