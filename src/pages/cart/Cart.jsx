import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { setCartForOrder } from "../../reducers/orderSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0,
  );

  const handleIncrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: Math.max(0, item.quantity - 1) }));
  };

  const handleCheckout = () => {
    dispatch(setCartForOrder({ items: cartItems, total: total }));
    navigate("/form");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Twój koszyk jest pusty</h1>
        <p>
          Dodaj produkty z <a href="/produkty">katalogu</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Koszyk ({cartItems.length} produkty)</h1>
      <ul className="cart-items">
        {cartItems.map((item) => {
          console.log("Koszyk items:", cartItems);
          console.log("Item data:", item);
          const image = item.Image?.[0] || {};
          const title = item.Model ? item.Model : item.Title || item.Brand;
          return (
            <li key={item.id} className="cart-item">
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
                alt="product"
                width="80"
              />
              <div>
                <h3>{title}</h3>
                <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div>
                  {item.Price} zł x {item.quantity} ={" "}
                  {(item.Price * item.quantity).toFixed(2)} zł
                </div>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Usuń
              </button>
            </li>
          );
        })}
      </ul>
      <div className="cart-total">
        <h2>Suma: {total.toFixed(2)} zł</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Przejdź do zamówienia
        </button>
      </div>
    </div>
  );
};

export default Cart;