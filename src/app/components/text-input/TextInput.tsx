// STYLES
import styles from './text-input.module.css'

// COMPONENTS
import Icon from '../icon/Icon'

export default function TextInput({placeholder, type, disabled, onChange, style}: {placeholder?: string, type: string, disabled?: boolean, onChange?: (value: string) => void, style?: string}) {
    return(
        <input
            type={type}
            placeholder={placeholder}
            className={`${styles.input} ${disabled && styles.disabled} ${style && style}`}
            onChange={(e) => onChange && onChange(e.target.value)}
            disabled={disabled}
        />
    )
}