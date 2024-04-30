"use client"
import { useState } from "react";
import { SignInWithGoogle, SignInWithFacebook, LogInWithEmail } from '../../firebase/SignIn'

// STYLES
import styles from './login-popup.module.css'

// COMPONENTS
import Icon from '../icon/Icon'

export default function LoginPopup({onClose, onLogin, onRegister}: {onClose: () => void, onLogin: (result: {uid: string, isNewUser: boolean, email: string}) => void, onRegister: () => void}) {
    const [emailPassword, setEmailPassword] = useState({email: "", password: ""});

    async function SignInWith(provider: 'email' | 'google' | 'facebook') {
        if (provider === 'google') {
            const uid = await SignInWithGoogle();
            if(uid) onLogin(uid);
        } else if (provider === 'facebook') {
            const uid = await SignInWithFacebook();
            if(uid) onLogin(uid);
        } else if (provider === 'email') {
            const uid = await LogInWithEmail(emailPassword.email, emailPassword.password);
            if(uid) onLogin({uid, isNewUser: false, email: emailPassword.email});
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.popup}>
                <div className={styles.closeButtonContainer}>
                    <button className={styles.closeButton} onClick={() => onClose()}>
                        <Icon icon='close' color={'#1b3589'} className={styles.closeIcon}/>
                    </button>
                </div>
                <h1 className={styles.title}>Bienvenido</h1>
                <p className={styles.description}>
                    Ingresa con tu correo electrónico o registrate
                    si aún no haz creado una cuenta.
                </p>
                
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    className={styles.input}
                    onChange={(e) => setEmailPassword({...emailPassword, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className={styles.input}
                    onChange={(e) => setEmailPassword({...emailPassword, password: e.target.value})}
                />

                <a className={styles.forgotPassword}>¿Olvidaste tu contraseña?</a>

                <button 
                    className={styles.registerButton}
                    onClick={() => onRegister()}
                >
                    REGISTRATE
                </button>
                <button
                    className={styles.loginButton}
                    onClick={() => SignInWith('email')}
                >
                    INICAR SESIÓN
                </button>

                <div className={styles.divider}>
                    <div className={styles.line}></div>
                    <p className={styles.text}>O INICIA SESIÓN CON</p>
                    <div className={styles.line}></div>
                </div>

                <button className={styles.googleLogin} onClick={() => SignInWith('google')}>
                    <Icon icon='google' className={styles.icon}/>
                    <p className={styles.text}>Continuar con Google</p>
                </button>
            </div>
        </div>
    )
}