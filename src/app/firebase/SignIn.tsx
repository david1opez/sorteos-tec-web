import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, getAdditionalUserInfo, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
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
export const auth = getAuth();

export async function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
    .then((result) => {
        const additionalUserInfo = getAdditionalUserInfo(result)

        return {
            uid: result.user.uid || "",
            isNewUser: additionalUserInfo?.isNewUser || false,
            email: result.user.email || ""
        }
    })
    .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
    });
}

export async function SignInWithFacebook() {
    const provider = new FacebookAuthProvider();

    return signInWithPopup(auth, provider)
    .then((result) => {
        const additionalUserInfo = getAdditionalUserInfo(result)

        return {
            uid: result.user.uid || "",
            isNewUser: additionalUserInfo?.isNewUser || false,
            email: result.user.email || ""
        }
    })
    .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
    });
}

export async function SignInWithEmail(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        return user.uid;
    })
    .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
    });
}

export async function LogInWithEmail(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        return user.uid;
    })
    .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
    });
}
