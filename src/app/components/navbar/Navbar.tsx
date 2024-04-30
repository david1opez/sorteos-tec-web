"use client"
import { useState, useEffect } from 'react';

// COMPONENTS
import Image from 'next/image'
import Dropdown from '../dropdown/Dropdown';
import Icon from '../icon/Icon';

// STYLES
import styles from "./navbar.module.css";

export default function Navbar({info, onLogin}: {info: any, onLogin?: () => void}) {
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
            !info && (
              <button onClick={() => onLogin && onLogin()} className={styles.login}>
                <Icon icon="user" color="#1b3589" className={styles.wallet_icon}/>
                <p className={styles.text}>Iniciar Sesión</p>
              </button>
            )
          }

          {
            info && (
              <Dropdown
                button={() => (
                  <div className={styles.wallet}>
                    <p className={styles.text}>${0.00}</p>
                    <Icon icon="coin" color="#1b3589" className={styles.wallet_icon}/>
                  </div>
                )}
                dropdown={() => (
                  <div className={styles.balanceDropdown}>
                    <div className={styles.row}>
                      <p className={styles.topRowText}>Mi saldo actual</p>
                      <p className={styles.topRowText}>$0.00</p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.row}>
                      <p className={styles.rowText}>Saldo abonado</p>
                      <p className={styles.rowText}>$0.00</p>
                    </div>

                    <div className={styles.row}>
                      <p className={styles.rowText}>Premios por cobrar</p>
                      <p className={styles.rowText}>$0.00</p>
                    </div>

                    <button className={styles.button1}>Mi E-Wallet</button>
                    <button className={styles.button2}>Abonar saldo</button>
                  </div>
                )}
              />
            )
          }

          {
            info && (
              <button className={styles.profile}>
                  <p className={styles.text}>{info.nombre} {info.apellidoPaterno}</p>
                  <Icon icon="user" color='#1b3589' className={styles.profile_icon}/>
              </button>
            )
          }
  
       </div>
      </nav>
    )
}