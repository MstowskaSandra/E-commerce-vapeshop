import { createPortal } from "react-dom";
import * as S from "./AgeVerificationModal.styles";

const AgeVerificationModal = ({ onAccept, onReject }) => {
  return createPortal(
    <S.Overlay>
      <S.Backdrop />
      <S.Content>
        <S.Icon>🔞</S.Icon>
        <S.Title>Weryfikacja wieku</S.Title>
        <S.Description>
          Sprzedajemy produkty z <strong>nikotyną</strong>. Tylko dla osób
          powyżej <strong>18 lat</strong>.
        </S.Description>
        <S.Buttons>
          <S.AcceptBtn onClick={onAccept}>✅ Tak, mam 18+ lat</S.AcceptBtn>
          <S.RejectBtn onClick={onReject}>❌ Nie mam 18 lat</S.RejectBtn>
        </S.Buttons>
      </S.Content>
    </S.Overlay>,
    document.body,
  );
};

export default AgeVerificationModal;
