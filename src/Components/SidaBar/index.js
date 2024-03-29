import React from 'react';
import styles from './styles.module.css';
import {NavLink} from 'react-router-dom';
import languages from '../../localization';


function SideBar(props) {

    const links = props?.links?.map((link, index) => (
        <NavLink  to={link.link} className={({isActive})=> [styles.link, (isActive && styles.active)].join(" ")} key={(link.link + link.name + index)}>
            <span>{link.name}</span>
        </NavLink>
    )) || [];

    links.unshift(        
    <NavLink  to={"/"} className={styles.link} key={`university${props.links?.length}`}>
        <span>{languages.home}</span>
    </NavLink>
)


    return (
        <div className={styles.sideMenu}>
            <p className={styles.relations}>{props.title || languages.related}</p>
            {links}
      </div>
    )
} 


export default SideBar;