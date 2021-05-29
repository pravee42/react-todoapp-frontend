import React from 'react'
import Plus from './plus'
import style from './addtodo.module.css'

export default function Addtodo() {
    return (
        <div>
            <div className={style.addtodo}>
                <a href='/addtodo' className={style.addtodo_text}>Add Todo</a>
                <Plus/>
            </div>
        </div>
    )
}
