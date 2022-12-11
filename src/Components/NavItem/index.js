import React from 'react';
import styles from './styles.module.css';
import {NavLink} from 'react-router-dom';
import { Colors } from '../../Constants';


function Navitem(props) {

    const {name, link} = props;
    return (
        <NavLink style={({isActive}) => (isActive ? {
            backgroundColor: Colors.dark,
            color: Colors.text,
            borderColor: Colors.text,
        
        } : null)} to={link || "#"} className={styles.item}>{name || "link"}</NavLink>
    )
} 


export default Navitem;