import React from 'react'
import style from './header.module.css'

export default function Header() {
    return (
        <div className={style.class_header}>
            <div className={style.class_t}>
                <p className={style.class_t_text}>T</p>
            </div>
            <p className={style.class_text}>asks</p>
        </div>
    )
}
