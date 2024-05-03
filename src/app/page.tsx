"use client"
import { useState, useEffect } from "react";
import { auth } from './firebase/SignIn';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import LoginPopup from "./components/login-popup/LoginPopup";
import RegisterPopup from "./components/register-popup/RegisterPopup";
import Image from "next/image";

// ASSETS
import cartas from "../../public/Images/cartas.png";
import ruleta from "../../public/Images/ruleta.png";
import plinko from "../../public/Images/plinko.png";

// STYLES
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState<any>();

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

      <h1 className={styles.title}>JUEGOS</h1>
      <div className={styles.gamesContainer}>
        <button
          className={styles.gameButton}
          onClick={() => {
            if(!user) {
              alert('Debes iniciar sesión para jugar');
              return
            }
            router.push('/cartas');
          }}
        >
          <Image
            src={cartas}
            alt=""
            className={styles.gameImage}
          />
        </button>

        <button
          className={styles.gameButton}
          onClick={() => {
            if(!user) {
              alert('Debes iniciar sesión para jugar');
              return
            }
            router.push('/ruleta');
          }}
        >
          <Image
            src={ruleta}
            alt=""
            className={styles.gameImage}
          />
        </button>

        <button
          className={styles.gameButton}
          onClick={() => {
            if(!user) {
              alert('Debes iniciar sesión para jugar');
              return
            }
            router.push('/plinko');
          }}
        >
          <Image
            src={plinko}
            alt=""
            className={styles.gameImage}
          />
        </button>
      </div>
    </main>
  );
}
