// import * as S from './AgeVerificationModal.styles';

const AgeVerificationModal = ({ onAccept, onReject }) => {
  return (
    <div>
      <div />
      <div>
        <div>
          <div>🔞</div>
          <h2>Weryfikacja wieku</h2>
          <p>
            Sprzedajemy produkty z <strong>nikotyną</strong>.<br />
            Tylko dla osób powyżej <strong>18 lat</strong>.
          </p>
          <div>
            <button onClick={onAccept}>
              ✅ Tak, mam 18+ lat
            </button>
            <button onClick={onReject}>
              ❌ Nie mam 18 lat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;

