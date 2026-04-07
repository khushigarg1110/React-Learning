import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#222",
      color: "white"
    }}>
      <h2>My Store</h2>
      <h3>🛒 {totalItems}</h3>
    </div>
  );
}

export default Navbar;