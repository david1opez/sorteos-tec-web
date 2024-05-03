"use client"
import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { auth } from '../firebase/SignIn';
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';

// COMPONENTS
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";

// ASSETS
import tienda from "../../../public/Images/tienda.png";

// STYLES
import styles from "./page.module.css";

export default function Cartas() {
  const router = useRouter();
  
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "/cartas/cartas.loader.js",
    dataUrl: "/cartas/webgl.data",
    frameworkUrl: "/cartas/cartas.framework.js",
    codeUrl: "/cartas/cartas.wasm",
  });

  const [user, setUser] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        const uid = user.uid;

        const res = await fetch(`https://sorteos-tec-api.vercel.app/getUser?uid=${uid}`);
        const data = await res.json();

        setUser(data[0]);
      } else {
      }
    });
  }, []);

  useEffect(() => {
    if(user) {
      sendMessage('userManager', 'setUser', user?.usuarioID);
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <Navbar hide/>

      <Image
        src={tienda}
        alt=""
        className={styles.gameImage}
        onClick={() => router.push('/store')}
      />

      <Unity unityProvider={unityProvider} style={{ width: 1050, height: 600 }} />
    </main>
  );
}