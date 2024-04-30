"use client"
import { Unity, useUnityContext } from "react-unity-webgl";

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLES
import styles from "./page.module.css";

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/plinko/build.loader.js",
    dataUrl: "/plinko/webgl.data",
    frameworkUrl: "/plinko/build.framework.js",
    codeUrl: "/plinko/build.wasm",
  });

  return (
    <main className={styles.main}>
      <Navbar/>

      <Unity unityProvider={unityProvider} style={{ width: 1050, height: 600 }} />
    </main>
  );
}
