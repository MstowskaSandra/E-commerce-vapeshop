import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { resetForm, sendOrder } from "../../reducers/orderSlice";
import { clearCart } from "../../reducers/cartSlice";


const OrderSummary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { formData, cartItems, totalAmount } = useSelector(state => state.order);

    const handleSendOrder = async () => {
        try {
            await fetch('/api/send-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formData, cartItems, totalAmount })
            });
            dispatch(sendOrder());
            dispatch(resetForm());
            dispatch(clearCart());
            navigate('/');
        } catch (error) {
            alert('Błąd wysyłania zamówienia.')
        }
    };

    return (
        <div>
            <h2>Podsumowanie zamówienia:</h2>
            <section>
                <h3>Dane klienta</h3>
                <p>{formData.name} {formData.lastname}</p>
                <p>{formData.email} | {formData.phone}</p>
                <p>Sklep: {formData.shop}</p>
            </section>

            <section>
                <h3>Produkty</h3>
                <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                    {item.Title} x {item.quantity} – {(item.Price * item.quantity).toFixed(2)} zł
                    </li>
                ))}
                </ul>
                <p><strong>Suma: {totalAmount.toFixed(2)} zł</strong></p>
            </section>

            <button onClick={handleSendOrder}>Wyślij zamówienie</button>
        </div>
    );
};

export default OrderSummary;