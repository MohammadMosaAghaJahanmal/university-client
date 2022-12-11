import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const FourOFour = (props) =>
{
    // const navigate = useNavigate();
    // useEffect(() =>
    // {
    //     setTimeout(() => {
    //         navigate('/', {replace: true})
    //     }, 5000)

    // }, [])
    return (
        <div className={styles.container}>
            404
        </div>
    )
}


export default FourOFour