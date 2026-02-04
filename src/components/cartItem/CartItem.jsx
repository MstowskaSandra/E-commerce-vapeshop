import * as S from './CartItem.styles';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  const image = item.Image?.[0] || {};
  const title = item.Model ? item.Model : item.Title || item.Brand;

  return (
    <S.CartItemLi> 
      <img
        src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
        alt={title}
        width="80"
      />
      <div>
        <h3>{title}</h3>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrement}>+</button>
        </div>
        <div>
          {item.Price} zł x {item.quantity} = {(item.Price * item.quantity).toFixed(2)} zł
        </div>
      </div>
      <button onClick={onRemove}>Usuń</button>
    </S.CartItemLi>
  );
};


export default CartItem;