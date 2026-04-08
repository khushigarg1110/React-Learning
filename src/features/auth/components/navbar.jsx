import { useDispatch } from "react-redux";
import { logout } from "../authSlice";

function Navbar({ onCartClick }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#222",
      color: "#fff"
    }}>
      
      <h2>My Store</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onCartClick}>Cart</button>

        {/* 🔐 Logout Button */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;