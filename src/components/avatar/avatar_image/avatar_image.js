import React from 'react';
import styles from './avatar_image.module.css';
export default function Avatarimage(props) {
    return (
        <div>
            <a href={props.link}>
                <img src={props.image} className={styles.avatarimage} alt="avatar" />
            </a>
        </div>
    );
}
