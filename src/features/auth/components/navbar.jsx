import { useDispatch } from "react-redux";
import { logout } from "../authSlice";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ onCartClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h1>My Store</h1>
      <div className="navbar-buttons">
        <button  aria-label="Open cart" onClick={()=> navigate("/cart")}>Cart</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;



