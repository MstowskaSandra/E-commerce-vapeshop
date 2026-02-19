import * as S from './OrderSuccessModal.styles';
import { createPortal } from "react-dom";

const OrderSuccessModal = ({ onClose }) => {
  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.Title> Dziękujemy za złożenie zamówienia</S.Title>
        <S.InfoText>
          Poinformujemy Cię o kolejnych etapach twojego zamówienia w ciągu 1-7
          dni pod podany przez Ciebie numer telefonu lub mailowo.
        </S.InfoText>
        <S.InfoText>Do usłyszenia! Pozdrawiamy, ekipa GoSmoke</S.InfoText>

        <S.CloseBtn onClick={onClose}>Zamknij</S.CloseBtn>
      </S.ModalCard>
    </S.Overlay>,
    document.body,
  );
};
   

export default OrderSuccessModal;