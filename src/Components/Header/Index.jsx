import {Link} from "react-router-dom"
import styles from './Header.module.css'
import { useState } from "react"

function Header () {
  const [ showMenu, setShowmenu] = useState (false)
  const toggleMenu = ()=> {
     setShowmenu (!showMenu)
  }


  return (
    <header className={styles.header}>
      <Link to="/">      

        <span>Diogo dev</span>

      </Link>
        <nav className={`${styles.menusand} ${showMenu ? styles.show : ''}`} onClick={toggleMenu}>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contatos">Contatos</Link>
        </nav>
        <div className={styles.menubotao} onClick={toggleMenu}>
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>      
        </div>

    </header>
  )
}

export default Header