"use client"
import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { auth } from '../firebase/SignIn';
import { onAuthStateChanged } from "firebase/auth";

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLES
import styles from "./page.module.css";

export default function Plinko() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "/plinko/plinko.loader.js",
    dataUrl: "/plinko/webgl.data",
    frameworkUrl: "/plinko/plinko.framework.js",
    codeUrl: "/plinko/plinko.wasm",
  });

  const [user, setUser] = useState<any>();

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

  useEffect(() => {
    if(user) {
      sendMessage('BumpSpawn', 'setUser', user?.usuarioID);
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <Navbar hide/>

      <Unity unityProvider={unityProvider} style={{ width: 1050, height: 600 }} />
    </main>
  );
}
