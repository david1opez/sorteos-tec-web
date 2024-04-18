"use client"
import { useState, useEffect } from "react";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import LoginPopup from "./components/login-popup/LoginPopup";
import RegisterPopup from "./components/register-popup/RegisterPopup";
// STYLES
import styles from "./page.module.css";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const callAPI = async () => {
    try {
      const res = await fetch("https://sorteos-tec-api.vercel.app/getUsuarios");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callAPI().then((data) => setUsers(data));
  }, []);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  return (
    <main className={styles.main}>
      <Navbar onLogin={() => setShowLoginPopup(true)}/>
      {
        showLoginPopup ? (
          <LoginPopup
            onClose={() => setShowLoginPopup(false)}
            onLogin={(uid) => {
              setShowLoginPopup(false);
            }}
            onRegister={() => {
              setShowLoginPopup(false);
              setShowRegisterPopup(true);
            }}
          />
        ) : showRegisterPopup && (
          <RegisterPopup
            onClose={() => setShowRegisterPopup(false)}
            onRegister={(uid) => {
              setShowRegisterPopup(false);
            }}
            onLogin={() => {
              setShowRegisterPopup(false);
              setShowLoginPopup(true);
            }}
          />
        )
      }
    </main>
  );
}
