"use client"

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLES
import styles from "./page.module.css";

export default function Dashboard() {

  return (
    <main className={styles.main}>
      <iframe
        title="Dashboard"
        width="600"
        height="373.5"
        src="https://app.powerbi.com/view?r=eyJrIjoiMzZkMTFiZDYtZTNlZC00NmI0LWE5MzktNDMyNjVmNWFkOGVjIiwidCI6ImM2NWEzZWE2LTBmN2MtNDAwYi04OTM0LTVhNmRjMTcwNTY0NSIsImMiOjR9"
        className={styles.iframe}
    ></iframe>
    </main>
  );
}
