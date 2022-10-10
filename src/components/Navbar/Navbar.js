import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div>
      <div className={styles.menu}>
        <Link to="/home">Home</Link>
        <Link to="">Wishlist</Link>
        <Link to="">MyOrders</Link>
        <Link to="">Profile</Link>
      </div>
      <div className="seperator"></div>
    </div>
  );
}
export default Navbar;
