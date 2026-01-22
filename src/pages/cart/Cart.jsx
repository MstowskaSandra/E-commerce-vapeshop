import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0,
  );

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
          const image = item.Image?.[0] || {};
          return (
            <li key={item.id} className="cart-item">
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
                alt={item.Title}
                width="80"
              />
              <div>
                <h3>{item.Title}</h3>
                <p>
                  {item.Price} zł x
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: parseInt(e.target.value) || 0,
                        }),
                      )
                    }
                    style={{ width: "60px" }}
                  />
                </p>
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
        <button className="checkout-btn">Przejdź do zamówienia</button>
      </div>
    </div>
  );
};

export default Cart;
