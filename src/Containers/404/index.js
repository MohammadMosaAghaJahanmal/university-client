import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const FourOFour = (props) =>
{
    const navigate = useNavigate();
    useEffect(() =>
    {
        let nav = setTimeout(() => {
            navigate('/', {replace: true})
        }, 5000);


        return () => {
            clearTimeout(nav);
        };

    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.textContent}>
                404
                <br />
                Page Not Found
            </div>
        </div>
    )
}


export default FourOFour