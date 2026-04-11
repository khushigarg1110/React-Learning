import { useDispatch } from "react-redux";
import { logout } from "../authSlice";
import { useNavigate } from "react-router-dom";

function Navbar({ onCartClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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
        <button onClick={()=> navigate("/cart")}>Cart</button>

        {/* 🔐 Logout Button */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;