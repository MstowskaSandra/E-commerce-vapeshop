import * as S from "./OrderSummary.styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm, sendOrder } from "../../reducers/orderSlice";
import { clearCart } from "../../reducers/cartSlice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, cartItems, totalAmount, orderNumber } = useSelector(
    (state) => state.order,
  );

  const handleSendOrder = async () => {
    // try {
    //     await fetch('/api/send-order', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ formData, cartItems, totalAmount })
    //     });
    dispatch(sendOrder());
    console.log("📧 Mock email");
    alert(`✅ Zamówienie #${orderNumber} wysłane na gosmoke email!`);
    dispatch(resetForm());
    dispatch(clearCart());
    navigate("/");
    // } catch (error) {
    //     alert('Błąd wysyłania zamówienia.')
    // }
  };

  return (
    <S.SummaryContainer>
      <h2>Podsumowanie zamówienia nr #{orderNumber}</h2>

      <S.ColumnsContainer>
        <S.LeftColumn>
          <S.ClientData>
            <h3>Dane klienta:</h3>
            <p>
              {formData.name} {formData.lastname}
            </p>
            <p>{formData.email}</p>
            <p>Tel: {formData.phone}</p>
            <p>
              Sklep:{" "}
              {formData.shop === "Olawa"
                ? "Oława, pl. Gimnazjalny 9"
                : "Strzelin, Rynek 2a"}
            </p>
          </S.ClientData>

          <S.InfoSection>
            <h3>Informacja dotycząca zamówienia:</h3>
            <p>
              Zamówienie ma charakter rezerwacyjny – poinformujemy Państwa o
              kolejnych etapach jego przygotowania.
            </p>
            <p>
              Przy odbiorze osobistym w sklepie stacjonarnym zostanie ponownie
              sprawdzony dokument tożsamości w celu{" "}
              <strong>potwierdzenia pełnoletności</strong> osoby odbierającej.
            </p>
          </S.InfoSection>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ProductsSection>
            <h3>Zamówienie:</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <p>
                    {item.Title} || {item.Model}
                  </p>
                  <p>
                    {item.quantity} x {item.Price}zł –{" "}
                    {(item.Price * item.quantity).toFixed(2)} zł
                  </p>
                </li>
              ))}
            </ul>
          </S.ProductsSection>

          <S.Total>
            <strong>Suma: {totalAmount.toFixed(2)} zł</strong>
          </S.Total>
        </S.RightColumn>
      </S.ColumnsContainer>

      <S.Button onClick={handleSendOrder}>Wyślij zamówienie</S.Button>
    </S.SummaryContainer>
  );
};

export default OrderSummary;
