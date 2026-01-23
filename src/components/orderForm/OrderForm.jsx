import { useSelector, useDispatch } from "react-redux";
import {
  goToSummary,
  updateFormField,
  clearErrors,
  setErrors,
} from "../../reducers/orderSlice";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/validation";

const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, errors, isValid } = useSelector((state) => state.order);

  const handleChange = (field, value) => {
    dispatch(updateFormField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", formData);

    const formErrors = validateForm(formData);
    console.log("Form errors:", formErrors);

    if (Object.keys(formErrors).length > 0) {
      dispatch(setErrors(formErrors));
      return;
    }

    dispatch(clearErrors());
    dispatch(goToSummary());
    navigate("/podsumowanie");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Imię"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="text"
        value={formData.lastname}
        onChange={(e) => handleChange("lastname", e.target.value)}
        placeholder="Nazwisko"
      />
      {errors.lastname && <span className="error">{errors.lastname}</span>}

      <input
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        placeholder="Telefon"
      />
      {errors.phone && <span className="error">{errors.phone}</span>}

      <select
        value={formData.shop}
        onChange={(e) => handleChange("shop", e.target.value)}
      >
        <option value="">Wybierz sklep:</option>
        <option value="Olawa">Oława, Pl. Gimnazjalny 9</option>
        <option value="Strzelin">Strzelin, Rynek 2a</option>
      </select>
      {errors.shop && <span>{errors.shop}</span>}

      <label>
        <input
          type="checkbox"
          checked={formData.contact}
          onChange={(e) => handleChange("contact", e.target.checked)}
        />
        Wyrażam zgodę na kontakt w sprawie mojego zamówienia.
        {errors.contact && <span>{errors.contact}</span>}
      </label>

      <label>
        <input
          type="checkbox"
          checked={formData.rules}
          onChange={(e) => handleChange("rules", e.target.checked)}
        />
        Akceptuję <strong>regulamin</strong>.
        {errors.rules && <span>{errors.rules}</span>}
      </label>

      <button type="submit" disabled={!isValid}>
        Przejdź do podsumowania
      </button>
    </form>
  );
};

export default OrderForm;