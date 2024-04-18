import { useState } from 'react';

// STYLES
import styles from './checkbox.module.css';

export default function Checkbox({label, onCheck}: {label: string, onCheck: () => void}) {
    const [checked, setChecked] = useState(false);

    return (
        <div className={styles.container}>
            <button className={`${styles.checkbox} ${checked && styles.checkedCheckbox}`}/>
            <p className={styles.label}>{label}</p>
        </div>
    )
}