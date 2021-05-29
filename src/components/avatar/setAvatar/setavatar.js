import React, { useState } from 'react'
import styles from './setavatar.module.css'

export default function Setavatar() {
    const [avatar, setAvatar] = useState("")

    const saveData = () => {
        localStorage.setItem('avatar', avatar);
    };

    return (
        <div className={styles.avatar_container}>
            <input type="text" onChange={e => setAvatar(e.target.value)} placeholder="Enter avatar Link as a cloud link" />
            <button onClick={ saveData }>Update Avatar Image</button>
        </div>
    )
}
