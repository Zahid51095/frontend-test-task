import styles from './Navbar.module.scss';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Logo</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Courses</a>
          <span className={styles.arrow}>▼</span>
        </li>
        <li>
          <a href="#">Instructors</a>
          <span className={styles.arrow}>▼</span>
        </li>
        <li>
          <a href="#">Blogs</a>
          <span className={styles.arrow}>▼</span>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.cart}>
          <FaShoppingCart /> {/* Cart icon */}
        </button>
        <button className={styles.signup}>Log In</button>
      </div>
    </nav>
  );
}
