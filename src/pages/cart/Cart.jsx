import * as S from "./Cart.styles";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { setCartForOrder } from "../../reducers/orderSlice";
import CartItem from "../../components/cartItem/CartItem";

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
    <S.CartSection>
      <h1>Twój koszyk ({cartItems.length} produkty)</h1>
      <S.CartContainer>
        <S.CartItems>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onRemove={() => dispatch(removeFromCart(item.id))}
            />
          ))}
        </S.CartItems>
        <S.CartTotal>
          <h2>Suma: {total.toFixed(2)} zł</h2>
          <button className="checkout-btn" onClick={handleCheckout}>
            Przejdź do zamówienia
          </button>
        </S.CartTotal>
      </S.CartContainer>
    </S.CartSection>
  );
};

export default Cart;
