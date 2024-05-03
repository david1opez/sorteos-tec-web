"use client"
import { useEffect, useState } from "react";
import { auth } from '../firebase/SignIn';
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLES
import styles from "./page.module.css";

const gameObjects = [
    'Canica',
    '',
    'Fuego',
    'Monedas',
    '',
    'Vida',
    'Bporrego',
    'Pollo',
    'Elexir',
    'Aguacate',
    'Ticket educacional',
    'Ticket mi sueÑo',
    'Ticket aventurat',
    'Ticket tradicional'
]

export default function Plinko() {
  const router = useRouter();

  const [user, setUser] = useState<any>();
  const [objects, setObjects] = useState<any[]>([]);

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
      console.log(user)
        for (let i = 1; i <= 14; i++) {
            if(i == 2 || i == 5) continue;
            fetch(`https://sorteos-tec-api.vercel.app/getObjectQuantity`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.usuarioID,
                    object_id: i
                })
        }).then(response => response.json())
            .then(data => {
                setObjects(prev => [...prev, {id: i, name: gameObjects[i-1], quantity: data.cantidad}]);
            })
        }
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <Navbar hide/>

      {
        user && objects && (
            <div>
                {
                    objects.map(object => {
                        return (
                            <div key={object.id} className={styles.object}>
                                <h1>{object.name}</h1>
                                <p>{object.quantity}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
      }
    </main>
  );
}
