import SignInWithGoogle from '../../firebase/SignInWithGoogle'

// STYLES
import styles from './login-popup.module.css'

// COMPONENETS
import Icon from '../icon/Icon'

export default function LoginPopup({onClose}: {onClose: () => void}) {
    return (
        <div className={styles.background}>
            <div className={styles.popup}>
                <h1 className={styles.title}>Bienvenido</h1>
                <p className={styles.description}>
                    Ingresa con tu correo electrónico o registrate
                    si aún no haz creado una cuenta.
                </p>
                
                <input type="text" placeholder="Correo electrónico" className={styles.input}/>
                <input type="text" placeholder="Contraseña" className={styles.input}/>

                <a className={styles.forgotPassword}>¿Olvidaste tu contraseña?</a>

                <button className={styles.registerButton}>REGISTRATE</button>
                <button className={styles.loginButton}>INICAR SESIÓN</button>

                <div className={styles.divider}>
                    <div className={styles.line}></div>
                    <p className={styles.text}>O INICIA SESIÓN CON</p>
                    <div className={styles.line}></div>
                </div>

                <button className={styles.googleLogin} onClick={() => SignInWithGoogle()}>
                    <Icon icon='google' className={styles.icon}/>
                    <p className={styles.text}>Continuar con Google</p>
                </button>

                <button className={styles.facebookLogin}>
                    <Icon icon='facebook' className={styles.icon}/>
                    <p className={styles.text}>Continuar con Facebook</p>
                </button>
            </div>
        </div>
    )
}