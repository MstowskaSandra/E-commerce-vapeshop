import { useSelector, useDispatch } from "react-redux";
import  { resetForm, updateField } from '../../reducers/orderFormSlice';

const OrderForm = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.orderForm);

    const handleChange = (field, value) => {
        dispatch(updateField({ field, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit:', formData);
        dispatch(resetForm());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Imię"
                required
            />

            <input
                type="text"
                value={formData.lastname}
                onChange={(e) => handleChange('lastname', e.target.value)}
                placeholder="Nazwisko"
                required
            />

            <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Email"
                required
            />

            <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Telefon"
                required
            />

            <select  
                value={formData.shop}
                onChange={(e) => handleChange('shop', e.target.value)}
                required
            >
                <option value="">Wybierz sklep:</option>
                <option value="Olawa">Oława, Pl. Gimnazjalny 9</option>
                <option value="Strzelin">Strzelin, Rynek 2a</option>
            </select>

            <label>
                <input
                type="checkbox"
                checked={formData.contact}
                onChange={(e) => handleChange('contact', e.target.checked)}
                />
                Wyrażam zgodę na kontakt w sprawie mojego zamówienia.
            </label>

            <label>
                <input
                type="checkbox"
                checked={formData.rules}
                onChange={(e) => handleChange('rules', e.target.checked)}
                required
                />
                Akceptuję <strong>regulamin</strong>.
            </label>

            <button type="submit">Realizuj zamówienie</button>
        </form>
    );
};

export default OrderForm;