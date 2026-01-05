import React from 'react'
import styles from '../css/Navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Memory Game</h1>
        <nav>
            <ul>
                <li><NavLink className={isActive ? styles.link+styles.active : styles.link} to="/home">Home</NavLink></li>
                <li><NavLink className={isActive ? styles.link+styles.active : styles.link} to="/about">About</NavLink></li>
                <li><NavLink className={isActive ? styles.link+styles.active : styles.link} to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar