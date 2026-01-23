export const validateField = (field, value) => {  
  const errors = {};

  switch (field) {
    case 'name':
    case 'lastname': {
      if (!value || value.length < 2) {
        errors[field] = 'Min. 2 litery';
      }
      break;
    }
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value)) {
        errors[field] = 'Nieprawidłowy email';
      }
      break;
    }
    case 'phone': {
      const phoneRegex = /^\+?[\d\s-]{9,}$/;
      if (!value || !phoneRegex.test(value)) {
        errors[field] = 'Min. 9 cyfr';
      }
      break;
    }
    case 'shop':
      if (!value) {
        errors[field] = 'Wybierz sklep';
      }
      break;
    case 'contact':
        if (!value) {
            errors[field] = "Zgoda na kontakt jest konieczna do złożenia zamówienia";
        }
        break;
    case 'rules':
      if (!value) {
        errors[field] = 'Zaakceptuj regulamin';
      }
      break;
    default:
      break;
  }
  return errors;
};

export const validateForm = (formData) => {
  const errors = {};
  Object.keys(formData).forEach(field => {
    const fieldErrors = validateField(field, formData[field]);
    if (fieldErrors[field]) errors[field] = fieldErrors[field];
  });
  return errors;
};
