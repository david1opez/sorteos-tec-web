"use client"
import { useState, useEffect } from "react";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import LoginPopup from "./components/login-popup/LoginPopup";

// STYLES
import styles from "./page.module.css";

export default function Home() {

  const callAPI = async () => {
    try {
      const res = await fetch("https://sorteos-tec-api.vercel.app/datos");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callAPI();
  }, []);

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <main className={styles.main}>
      <Navbar onLogin={() => setShowLoginPopup(true)}/>
      {
        showLoginPopup && (
          <LoginPopup
            onClose={() => setShowLoginPopup(false)}
            // onRegister={() => setShowRegisterPopup(true)}
          />
        )
      }
    </main>
  );
}
