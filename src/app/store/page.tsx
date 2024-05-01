"use client"
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import localFont from 'next/font/local'
import { loadStripe } from '@stripe/stripe-js';

// COMPONENTS
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import BuyItemCard from "./components/BuyItemCard";
import { Elements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

// ASSETS
import coin from '../../../public/Images/coin.png';
import coins from '../../../public/Images/coins.png';
import bag from '../../../public/Images/bag.png';
import chest from '../../../public/Images/chest.png';
import heart from '../../../public/Images/heart.png';
import hearts from '../../../public/Images/hearts.png';
import bunchOfHearts from '../../../public/Images/bunchOfHearts.png';

const shabo = localFont({ src: '../../../public/schabo.woff' });
const stripePromise = loadStripe('pk_live_51Ka2NsFUCvKMavOlnyFagBhmDgbE9xdQwupoYgdGJOeny8hmIpEtUlUkVXdAzRsi411BuqMEVsIBmW86852LjHqW00xvfAtfTK');

// STYLES
import styles from "./page.module.css";
import Icon from "../components/icon/Icon";

export default function Store() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const buy = searchParams.get('buy') == "coins" ? "coins" : 'hearts';

  const [clientSecret, setClientSecret] = useState();
  const [amount, setAmount] = useState(45);
  const [name, setName] = useState('David Lopez');
  const [email, setEmail] = useState('degl0412@gmail.com');

  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    fetch(`https://sorteos-tec-api.vercel.app/createStripeClient?name=${name}&secret=${email}`)
    .then(async response => await response.json())
    .then(data => {
      fetch(`https://sorteos-tec-api.vercel.app/getClientSecret?amount=${amount}&id=${data.id}`)
      .then(async response => await response.json())
      .then(data => {
        setClientSecret(data.client_secret);
      });
    });
  }, []);

  return (
    <main className={`${styles.main} ${shabo.className}`}>
      <Navbar/>

      <div className={styles.balanceContainer}>
        <button className={`${styles.button} ${shabo.className}`}>
          <Image
            src={coin}
            alt=""
            className={styles.balanceIcon}
          />
          <p className={styles.text}>500</p>
        </button>

        <button className={`${styles.button} ${shabo.className}`}>
          <Image
            src={heart}
            alt=""
            className={styles.balanceIcon}
          />
          <p className={styles.text}>5</p>
        </button>
      </div>

      <button className={`${styles.button} ${styles.backButton} ${shabo.className}`}>
        <Icon
          className={styles.returnIcon}
          icon="back"
          color={"#fff"}
        />
        <p className={styles.text}>REGRESAR</p>
      </button>

      <h1 className={styles.title}>{buy == "coins" ? "MONEDAS" : "VIDAS"}</h1>

      <div className={styles.cardsContainer}>
        <BuyItemCard
          image={buy == "coins" ? coins : heart}
          type={buy}
          quantity={buy == "coins" ? 1000 : 1}
          price={buy == "coins" ? 15 : 15}
          onBuy={() => setShowPayment(true)}
        />

        <BuyItemCard
          image={buy == "coins" ? bag : hearts }
          type={buy}
          quantity={buy == "coins" ? 5000 : 3}
          price={buy == "coins" ? 30 : 30}
          onBuy={() => setShowPayment(true)}
        />

        <BuyItemCard
          image={buy == "coins" ? chest : bunchOfHearts}
          type={buy}
          quantity={buy == "coins" ? 10000 : 10}
          price={buy == "coins" ? 55 : 55}
          onBuy={() => setShowPayment(true)}
        />
      </div>

      {
        showPayment && clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{clientSecret}}
          >
            <form className={styles.formContainer}>
              <PaymentElement/>
              <button className={styles.payButton}>PAGAR</button>
            </form>
          </Elements>
        )
      }

    </main>
  );
}
