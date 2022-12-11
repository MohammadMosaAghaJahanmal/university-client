import React from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.css'
const Navbar = (props) =>
{

  const routes = [
    {name: "About Us", link: "/about"},
    {name: "Home", link: "/"},
  ];

  const menuButtons = routes.map((route, index) => {
    return (
    <NavLink 
      key={(route.name + index)} 
      style={({isActive}) => (isActive ? {} : {})} 
      to={route.link || "#"} 
      className={styles.item}
      >
      {route.name || "link"}
    </NavLink>
  )})

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav} data-aos="fade-down">
        {menuButtons}
      </nav>
    </div>
  )
}



export default Navbar