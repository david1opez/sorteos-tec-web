import { useState } from 'react';
import { SignInWithGoogle, SignInWithFacebook, SignInWithEmail } from '../../firebase/SignIn';

// STYLES
import styles from './register-popup.module.css'

// COMPONENTS
import Icon from '../icon/Icon'
import TextInput from '../text-input/TextInput'
import Checkbox from '../checkbox/Checkbox'
import Dropdown from '../dropdown/Dropdown'

export default function LoginPopup({registerWithProvider, onClose, onRegister}: {registerWithProvider?: {email: string, uid: string}, onClose: () => void, onRegister: (uid: string | undefined) => void}) {
    const [userData, setUserData] = useState<{[key: string]: string}>({
        uid: registerWithProvider?.uid ? registerWithProvider.uid : "",
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        pais: "",
        estado: "",
        correo_electronico: registerWithProvider?.email ? registerWithProvider.email : "",
        dias_conectados: "0",
        ultima_conexion: "",
        telefono: "",
        contraseña: "",
        confirmarContraseña: "",
        mayorDeEdad: "false",
        INE: "false",
        terminosYCondiciones: "false",
    });

    const validate = (option: 'email' | 'google' | 'facebook') => {
        if(userData.nombre === "") {
            alert('Ingresa tu nombre');
            return false;
        } else if(userData.apellidoPaterno === "") {
            alert('Ingresa tu apellido paterno');
            return false;
        } else if(userData.apellidoMaterno === "") {
            alert('Ingresa tu apellido materno');
            return false;
        } else if(userData.correo_electronico === "" && option == "email") {
            alert('Ingresa tu correo electrónico');
            return false;
        } else if(userData.telefono === "") {
            alert('Ingresa tu teléfono');
            return false;
        } else if(userData.pais === "") {
            alert('Selecciona un país');
            return false;
        } else if(userData.estado === "") {
            alert('Selecciona un estado');
            return false;
        } else if(userData.contraseña === "" && option === 'email') {
            alert('Ingresa una contraseña');
            return false;
        } else if(userData.confirmarContraseña === "" && option === 'email') {
            alert('Confirma tu contraseña');
            return false;
        } else if(userData.contraseña !== userData.confirmarContraseña && option === 'email') {
            alert('Las contraseñas no coinciden');
            return false;
        } else if (userData.mayorDeEdad === "false") {
            alert('Debes ser mayor de 18 años para registrarte');
            return false;
        } else if (userData.INE === "false") {
            alert('Debes confirmar que los datos ingresados son iguales a los de tu INE');
            return false;
        } else if (userData.terminosYCondiciones === "false") {
            alert('Debes aceptar los términos y condiciones y políticas de privacidad');
            return false;
        }

        return true;
    }

    const registerWith = async (option: 'email' | 'google') => {
        if(validate(option)) {
            if(option === 'email') {
                SignInWithEmail(userData.correo_electronico, userData.contraseña)
                .then((uid) => {
                    if(uid) setUserData({...userData, uid: uid});
                })
            }

            delete userData.contraseña;
            delete userData.confirmarContraseña;

            fetch('https://sorteos-tec-api.vercel.app/crearUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            }).then(() => {
                onRegister(userData.uid);
            })
        }
    };
    
    return (
        <div className={styles.background}>
            <div className={styles.popup}>

                <div className={styles.closeButtonContainer}>
                    <button className={styles.closeButton} onClick={() => onClose()}>
                        <Icon icon='close' color={'#1b3589'} className={styles.closeIcon}/>
                    </button>
                </div>

                <h1 className={styles.title}>Crea tu cuenta</h1>
                <p className={styles.subtitle}>
                    Para brindarte mayor seguridad durante tu compra,
                    crea una cuenta llenando todos los datos requeridos.
                </p>

                <Checkbox
                    onCheck={() => setUserData({...userData, mayorDeEdad: userData.mayorDeEdad === "true" ? "false" : "true"})}
                    label="Confirmo que soy mayor de 18 años"
                />

                <div className={styles.inputsContainer}>
                    <TextInput
                        placeholder="Nombre"
                        type="text"
                        style={styles.inputMargin}
                        onChange={(value) => setUserData({...userData, nombre: value})}
                    />

                    <TextInput
                        placeholder="Apellido paterno"
                        type="text"
                        style={`${styles.lastnameInput1} ${styles.inputMargin}`}
                        onChange={(value) => setUserData({...userData, apellidoPaterno: value})}
                    />
                    <TextInput
                        placeholder="Apellido materno"
                        type="text"
                        style={`${styles.lastnameInput2} ${styles.inputMargin}`}
                        onChange={(value) => setUserData({...userData, apellidoMaterno: value})}
                    />

                    {
                        !registerWithProvider && (
                            <TextInput
                                placeholder="Correo electrónico"
                                type="e-mail"
                                style={styles.inputMargin}
                                onChange={(value) => setUserData({...userData, correo_electronico: value})}
                            />
                        )
                    }

                    <TextInput
                        placeholder="Teléfono móvil"
                        type="text"
                        style={styles.inputMargin}
                        onChange={(value) => setUserData({...userData, telefono: value})}
                    />

                    <Dropdown
                        placeholder="Selecciona un país"
                        options={["México"]}
                        onSelectOption={(option) => setUserData({...userData, pais: option})}
                        style={{marginRight: '1vw'}}
                    />

                    <Dropdown
                        placeholder="Selecciona un estado"
                        options={["Coahuila", "Nuevo León"]}
                        onSelectOption={(option) => setUserData({...userData, estado: option})}
                    />

                    {
                        !registerWithProvider && (
                            <TextInput
                                placeholder="Contraseña"
                                type="password"
                                style={styles.inputMargin}
                                onChange={(value) => setUserData({...userData, contraseña: value})}
                            />
                        )
                    }

                    {
                        !registerWithProvider && (
                            <TextInput
                                placeholder="Confirma tu contraseña"
                                type="password"
                                style={styles.inputMargin}
                                onChange={(value) => setUserData({...userData, confirmarContraseña: value})}
                            />
                        )
                    }
                </div>

                <Checkbox
                    onCheck={() => setUserData({...userData, INE: userData.INE === "true" ? "false" : "true"})}
                    label="Confirmo que los datos ingresados son iguales a los de mi INE."
                    style={styles.checkboxMargin}
                />

                <Checkbox
                    onCheck={() => setUserData({...userData, terminosYCondiciones: userData.terminosYCondiciones === "true" ? "false" : "true"})}
                    label="He leído y acepto los términos y condiciones y políticas de privacidad."
                />

                <button
                    className={styles.registerButton}
                    onClick={() => {
                        registerWith(registerWithProvider ? 'google' : 'email')
                    }}
                >
                    CREAR CUENTA
                </button>
            </div>
        </div>
    )
}
