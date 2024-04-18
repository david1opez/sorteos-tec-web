import { SignInWithGoogle, SignInWithFacebook } from '../../firebase/SignIn'

// STYLES
import styles from './register-popup.module.css'

// COMPONENTS
import Icon from '../icon/Icon'
import TextInput from '../text-input/TextInput'
import Checkbox from '../checkbox/Checkbox'

export default function LoginPopup({registerWithProvider, onClose, onRegister, onLogin}: {registerWithProvider?: boolean, onClose: () => void, onRegister: (uid: string | undefined) => void, onLogin: () => void}) {
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
                    onCheck={() => {}}
                    label="Confirmo que soy mayor de 18 años"
                />

                <TextInput
                    placeholder="Nombre"
                    type="text"
                />

                <TextInput
                    placeholder="Apellido paterno"
                    type="text"
                    style={styles.lastnameInput1}
                />
                <TextInput
                    placeholder="Apellido materno"
                    type="text"
                    style={styles.lastnameInput2}
                />

                {
                    !registerWithProvider && (
                        <TextInput
                            placeholder="Correo electrónico"
                            type="e-mail"
                        />
                    )
                }

                <TextInput
                    placeholder="Teléfono móvil"
                    type="text"
                />

                {/* <Dropdown
                    placeholder="Selecciona un país"
                    options={countries}
                    onSelectOption={(option) => setCountry(option)}
                />

                <Dropdown
                    placeholder="Selecciona un estado"
                    options={states}
                    onSelectOption={(option) => setState(option)}
                /> */}

                {
                    !registerWithProvider && (
                        <TextInput
                            placeholder="Contraseña"
                            type="password"
                        />
                    )
                }

                {
                    !registerWithProvider && (
                        <TextInput
                            placeholder="Confirma tu contraseña"
                            type="password"
                        />
                    )
                }

                <Checkbox
                    onCheck={() => {}}
                    label="Confirmo que los datos ingresados son iguales a los de mi INE."
                />

                <Checkbox
                    onCheck={() => {}}
                    label="He leído y acepto los términos y condiciones y políticas de privacidad."
                />

            </div>
        </div>
    )
}
