import React from "react";
import styles from './style.module.css'

const Loader = (props) =>
{
    return (
        <div className={styles.contentWrapper}>
            {props.message || "Loading..."}
            <div className={styles.loader}>
                <div className={styles.child}></div>
            </div>
        </div>
    )
}



export default Loader;