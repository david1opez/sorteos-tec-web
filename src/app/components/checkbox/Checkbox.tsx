import { useState } from 'react';

// STYLES
import styles from './checkbox.module.css';

export default function Checkbox({label, onCheck, style}: {label: string, onCheck: () => void, style?: string}) {
    const [checked, setChecked] = useState(false);

    return (
        <div className={`${styles.container} ${style && style}`}>
            <button
                className={`${styles.checkbox} ${checked && styles.checkedCheckbox}`}
                onClick={() => {
                    setChecked(!checked);
                    onCheck();
                }}  
            />
            <p className={styles.label}>{label}</p>
        </div>
    )
}