import * as S from './OrderSuccessModal.styles';
import { createPortal } from "react-dom";

const OrderSuccessModal = ({ onClose }) => {
  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.Title> Dziękujemy!</S.Title>
        <S.InfoText>
          Zamówienie zostało zapisane w trybie demonstracyjnym.
        </S.InfoText>
        <S.InfoText>
          To projekt portfolio – nie obsługuje rzeczywistej sprzedaży ani
          płatności.
        </S.InfoText>
        <S.CloseBtn onClick={onClose}>Zamknij</S.CloseBtn>
      </S.ModalCard>
    </S.Overlay>,
    document.body,
  );
};
   

export default OrderSuccessModal;