import localFont from 'next/font/local'

//STYLES
import styles from './buy-item-card.module.css';

// COMPONENTS
import Image, { StaticImageData } from "next/image";

// ASSETS
import coin from '../../../../public/Images/coin.png';
import heart from '../../../../public/Images/heart.png';

const shabo = localFont({ src: '../../../../public/schabo.woff' });

export default function BuyItemCard ({image, type, quantity, price, onBuy}: {image: StaticImageData, type: 'coins' | 'hearts', quantity: number, price: number, onBuy: () => void}) {
    return (
      <div className={styles.outsideBorder}>
        <div className={styles.container}>

          <Image
            className={styles.image}
            src={image}
            alt=""
          />
  
          <div className={styles.quantityContainer}>
            <Image
              className={styles.icon}
              src={type === 'coins' ? coin : heart}
              alt=""
            />
            <p className={styles.quantity}>{quantity}</p>
          </div>
  
          <button className={`${styles.button} ${shabo.className}`}>
            <p className={styles.price}>$ {price}.00 MXN</p>
          </button>
          
        </div>
      </div>
    )
}