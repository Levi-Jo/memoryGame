import React from 'react'
import styles from '../css/Navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Memory Game</h1>
        <nav>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar