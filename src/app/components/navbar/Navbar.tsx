"use client"
import { useState, useEffect } from 'react';

// COMPONENTS
import Image from 'next/image'
import Dropdown from '../dropdown/Dropdown';
import Icon from '../icon/Icon';

// STYLES
import styles from "./navbar.module.css";

export default function Navbar({onLogin}: {onLogin: () => void}) {
    const [user, setUser] = useState<{balance: number, name: string}|null>(null);
    const [bannerTextIndex, setBannerTextIndex] = useState<number>(0);
  
    const BannerTexts = [
      '¡Vive sin preocupaciones! Compra tu boleto y gana $34,000,000 o $188,888 mensuales durante 15 años.',
      'Más efectivo, más especial 🍀 por solo $150 podrías ganar hasta $780,000',
    ];

    useEffect(() => {
      setInterval(() => {
        setBannerTextIndex((bannerTextIndex + 1) % BannerTexts.length);
      }, 8000);
    }, []);
  
    return (
      <nav className={styles.navbar}>
        
        <div className={styles.top_banner}>
          <p className={styles.text}>{BannerTexts[bannerTextIndex]}</p>
        </div>
        
        <Image
          src="https://content.sorteostec.org/sites/default/files/menu_icons/Principal-Blanco_5.png"
          width={130}
          height={28}
          alt="Logo de Sorteos Tec"
          className={styles.logo}
        />
        
        <button className={styles.CTA_button}>
          <Icon icon="ticket" color="#1b3589" className={styles.ticket}/>
          <p className={styles.text}>Comprar boletos</p>
        </button>
  
        <div className={styles.bottom_navbar}>
          {
            !user && (
              <button onClick={() => onLogin()} className={styles.login}>
                <Icon icon="user" color="#1b3589" className={styles.wallet_icon}/>
                <p className={styles.text}>Iniciar Sesión</p>
              </button>
            )
          }

          {/* {
            user && (
              <Dropdown
                button={() => (
                  <div className={styles.wallet}>
                    <p className={styles.text}>${user.balance.toFixed(2)}</p>
                    <Icon icon="coin" color="#1b3589" className={styles.wallet_icon}/>
                  </div>
                )}
                dropdown={() => (
                  <div className={styles.balance_dropdown}>
                  </div>
                )}
              />
            )
          }

          {
            user && (
              <Dropdown
                button={() => (
                  <div className={styles.profile}>
                    <p className={styles.text}>{user.name}</p>
                    <Icon icon="user" color='#1b3589' className={styles.profile_icon}/>
                  </div>
                )}
                dropdown={() => (
                  <div className={styles.profile_dropdown}>
                  </div>
                )}
              />
            )
          } */}
  
       </div>
      </nav>
    )
}