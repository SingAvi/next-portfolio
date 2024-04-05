import styles from './navbar.module.css'

const MENUS = ['Home','Work', 'Skills', 'Contact']

const NavBar = () => {

    return(
        <nav className={styles.nav_wrapper}>
            <p className={styles.logo}>SingAvi</p>
            <div className={styles.menu_wrapper}>
                {MENUS.map((menu) => (<span className={styles.menu_items} key={menu} >{menu}</span>))}
            </div>
        </nav>
    )
}

export default NavBar