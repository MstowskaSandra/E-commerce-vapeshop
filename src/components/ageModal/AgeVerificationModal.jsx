import { createPortal } from "react-dom";
import * as S from "./AgeVerificationModal.styles";
import { TriangleAlert } from "lucide-react";

const AgeVerificationModal = ({ onAccept, onReject }) => {
  return createPortal(
    <S.Overlay>
      <S.Backdrop />
      <S.Content>
        <S.Icon>
          <TriangleAlert size={80} strokeWidth={2} />
        </S.Icon>
        <S.Title>Weryfikacja wieku</S.Title>
        <S.Description>
          Sprzedajemy produkty z <strong>nikotyną</strong>. Tylko dla osób
          powyżej <strong>18 lat</strong>.
        </S.Description>
        <S.Buttons>
          <S.Button onClick={onAccept}>Tak, mam 18+ lat</S.Button>
          <S.Button onClick={onReject}>Nie mam 18 lat</S.Button>
        </S.Buttons>
      </S.Content>
    </S.Overlay>,
    document.body,
  );
};

export default AgeVerificationModal;
