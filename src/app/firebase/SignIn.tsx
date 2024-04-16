import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyAMqRUTSmaROt1M-lWFasFiOLlVn_a-sY4",
    authDomain: "sorteos-tec-f83b9.firebaseapp.com",
    projectId: "sorteos-tec-f83b9",
    storageBucket: "sorteos-tec-f83b9.appspot.com",
    messagingSenderId: "48705332933",
    appId: "1:48705332933:web:d0bcc33ddf5e8f3a34b2ac",
    measurementId: "G-6Q3FM5JMJT"
};

const app = initializeApp(firebaseConfig);

export async function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export async function SignInWithFacebook() {
    const provider = new FacebookAuthProvider();

    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
    });
}
