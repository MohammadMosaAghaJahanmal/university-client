import React from "react";
import { NavLink } from "react-router-dom";
import { Colors } from "../../Constants";
import styles from './style.module.css'
import { IoClose } from "react-icons/io5";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
const Navbar = (props) =>
{

  const globalState = useStore(false)[0];
  const routes = [
    {name: "About Us", link: "/about"},
    {name: "Home", link: "/"},
  ];

  const colors = [
    "rgb(32, 26, 26)",
    "rgb(29, 32, 26)",
    "rgb(26, 32, 31)",
    "rgb(26, 26, 32)",
    "rgb(32, 26, 32)",
    "rgb(32, 26, 26)",
    "rgb(48, 48, 66)"
  ];

  [].forEach(category => {
    routes.push({
      name: category.name,
      link: `products/${category._id}`
    });

  });

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