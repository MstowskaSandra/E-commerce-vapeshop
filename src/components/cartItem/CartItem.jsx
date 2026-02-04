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
      <S.Content>
        <h3>{title}</h3>

        <S.QuantityWrapper>
          <S.QuantityBtn onClick={onDecrement}>-</S.QuantityBtn>
          <span>{item.quantity}</span>
          <S.QuantityBtn onClick={onIncrement}>+</S.QuantityBtn>
        </S.QuantityWrapper>

        <S.Total>
          {item.Price} zł x {item.quantity} ={" "}
          {(item.Price * item.quantity).toFixed(2)} zł
        </S.Total>
        <S.RemoveBtn onClick={onRemove}>Usuń</S.RemoveBtn>
      </S.Content>
    </S.CartItemLi>
  );
};


export default CartItem;