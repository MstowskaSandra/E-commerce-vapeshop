import * as S from './OrderSuccessModal.styles';
import { createPortal } from "react-dom";

const OrderSuccessModal = ({ orderNumber, cartItems, phone, onClose }) => {
  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.Title> Dziękujemy za złożenie zamówienia nr {orderNumber}</S.Title>

        <S.ProductsList>
          {cartItems.map((item) => (
            <S.ProductItem key={item.id}>
              <span>{[item.Title, item.Model].filter(Boolean).join(" ")}</span>
              <span>{item.quantity}x</span>
            </S.ProductItem>
          ))}
        </S.ProductsList>

        <S.InfoText>
          Poinformujemy Cię o kolejnych etapach twojego zamówienia w ciągu
          1-7dnii pod podany przez Ciebie numer telefonu: {phone}
        </S.InfoText>
        <S.InfoText>Do usłyszenia! Pozdrawiamy, ekipa GoSmoke</S.InfoText>

        <S.CloseBtn onClick={onClose}>Zamknij</S.CloseBtn>
      </S.ModalCard>
    </S.Overlay>,
    document.body,
  );
};
   

export default OrderSuccessModal;