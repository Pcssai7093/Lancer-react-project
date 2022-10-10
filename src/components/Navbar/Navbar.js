import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.menu}>
        <Link to="/home">Home</Link>
        <Link to="">Wishlist</Link>
        <Link to="">Profile</Link>
        <Link to="">Post</Link>
      </div>
      <div className="seperator"></div>
    </div>
  );
}
export default Navbar;
