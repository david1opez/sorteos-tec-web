"use client"
import { useState, useEffect } from "react";
import { auth } from './firebase/SignIn';
import { onAuthStateChanged } from "firebase/auth";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import LoginPopup from "./components/login-popup/LoginPopup";
import RegisterPopup from "./components/register-popup/RegisterPopup";

// STYLES
import styles from "./page.module.css";

export default function Home() {
  const [user, setUser] = useState<any>();

  const callAPI = async () => {
    try {
      const res = await fetch("https://sorteos-tec-api.vercel.app/getUsuarios");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const HandleLogin = async (uid: string) => {
    const res = await fetch(`https://sorteos-tec-api.vercel.app/getUser?uid=${uid}`);
    const data = await res.json();

    setUser(data[0]);
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        console.log(user?.uid);
        const uid = user.uid;

        const res = await fetch(`https://sorteos-tec-api.vercel.app/getUser?uid=${uid}`);
        const data = await res.json();

        setUser(data[0]);
      } else {
      }
    });
  }, []);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState<{uid: string, email: string}|'register'|undefined>();

  return (
    <main className={styles.main}>
      <Navbar info={user} onLogin={() => setShowLoginPopup(true)}/>
      {
        showLoginPopup ? (
          <LoginPopup
            onClose={() => setShowLoginPopup(false)}
            onLogin={(result) => {
              HandleLogin(result.uid);

              if(result.isNewUser) {
                setShowLoginPopup(false);
                setShowRegisterPopup({uid: result.uid, email: result.email});
              } else {
                setShowLoginPopup(false);
              }
            }}
            onRegister={() => {
              setShowLoginPopup(false);
              setShowRegisterPopup('register');
            }}
          />
        )
        : showRegisterPopup && (
          <RegisterPopup
            registerWithProvider={showRegisterPopup === 'register' ? undefined : showRegisterPopup}
            onClose={() => setShowRegisterPopup(undefined)}
            onRegister={(uid) => {                            
              if(uid) {
                setShowRegisterPopup(undefined);
                HandleLogin(uid)
              }
            }}
          />
        )
      }
    </main>
  );
}
