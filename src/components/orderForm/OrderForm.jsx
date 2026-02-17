import * as S from "./OrderForm.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  goToSummary,
  updateFormField,
  clearErrors,
  setErrors,
} from "../../reducers/orderSlice";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/validation";
import { ArrowLeft } from "lucide-react";

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

  const handleBack = () => {
    navigate("/koszyk");
  };

  return (
    <S.FormContainer>
      <S.Header>
        <S.BackBtn onClick={handleBack}>
          <ArrowLeft size={48} strokeWidth={2} />
        </S.BackBtn>
        <h2>Formularz danych do zamówienia</h2>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Imię"
        />
        {errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}

        <S.Input
          type="text"
          value={formData.lastname}
          onChange={(e) => handleChange("lastname", e.target.value)}
          placeholder="Nazwisko"
        />
        {errors.lastname && <S.ErrorText>{errors.lastname}</S.ErrorText>}

        <S.Input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />
        {errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}

        <S.Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="Telefon"
        />
        {errors.phone && <S.ErrorText>{errors.phone}</S.ErrorText>}

        <S.Select
          value={formData.shop}
          onChange={(e) => handleChange("shop", e.target.value)}
        >
          <option value="">Wybierz sklep:</option>
          <option value="Olawa">Oława, Pl. Gimnazjalny 9</option>
          <option value="Strzelin">Strzelin, Rynek 2a</option>
        </S.Select>
        {errors.shop && <S.ErrorText>{errors.shop}</S.ErrorText>}

        <S.CheckboxContainer>
          <S.CheckboxLabel>
            <S.CheckboxInput
              type="checkbox"
              checked={formData.contact}
              onChange={(e) => handleChange("contact", e.target.checked)}
            />
            Wyrażam zgodę na kontakt w sprawie mojego zamówienia.
          </S.CheckboxLabel>
          {errors.contact && <S.ErrorText>{errors.contact}</S.ErrorText>}

          <S.CheckboxLabel>
            <S.CheckboxInput
              type="checkbox"
              checked={formData.rules}
              onChange={(e) => handleChange("rules", e.target.checked)}
            />
            Akceptuję <strong>regulamin</strong>
          </S.CheckboxLabel>
          {errors.rules && <S.ErrorText>{errors.rules}</S.ErrorText>}
        </S.CheckboxContainer>

        <S.Button type="submit" disabled={!isValid}>
          Przejdź do podsumowania
        </S.Button>
      </S.Form>
    </S.FormContainer>
  );
};

export default OrderForm;
