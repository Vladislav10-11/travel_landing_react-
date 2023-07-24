import styles from "./Header.module.scss"
import logo from "./../../assets/Union.svg"
import buttonicon from "./../../assets/Vector.svg"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navWrapper}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
                <p>Salty</p>
            </div>
            
            <nav>
                <ul className={styles.menuwrapper}>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li><li>
                        <a href="">Destinations</a>
                    </li><li>
                        <a href="">Tours</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </nav>
            </div>
            <div className={styles.buttonwrapper}>
                <p>
                    Book Now
                </p>
                <img src={buttonicon} alt="" />

            </div>
         </div>
    )
}

export default Header