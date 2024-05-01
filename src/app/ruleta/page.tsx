"use client"
import { Unity, useUnityContext } from "react-unity-webgl";

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLES
import styles from "./page.module.css";

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/ruleta/build.loader.js",
    dataUrl: "/ruleta/webgl.data",
    frameworkUrl: "/ruleta/build.framework.js",
    codeUrl: "/ruleta/build.wasm",
  });

  return (
    <main className={styles.main}>
      <Navbar hide/>

      <Unity unityProvider={unityProvider} style={{ width: 1050, height: 600 }} />
    </main>
  );
}
