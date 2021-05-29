import React, {useState} from 'react'
import styles from './category_item.module.css'
import { useEffect } from 'react';

export default function Categoryitem(props) {

    const [theme, settheme] = useState('1');

    useEffect(() => {
        if (props.theme === '1') {
            settheme(true)
        }
        else {
            settheme(false)
        }
    },[props.theme])

    return (
        <div>
            {
                theme ? (
                    <div className={styles.Categoryitem}>
                        <a href={props.link} className={styles.link}>{props.name}</a>
                    </div>
                ) : (
                    <div className={styles.Categoryitem1}>
                        <a href={props.link} className={styles.link}>{props.name}</a>
                    </div>
                )
            }
       </div>
    )
}
