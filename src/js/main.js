import { validateRegistrationData } from "./validators.js";
import { clearErrors, getFormData, setFormMessage, showFieldError } from "./dom.js";

const form = document.getElementById("registrationForm");

const handleValidationError = (error) => {
  if (error && error.field && error.message) {
    showFieldError(form, error.field, error.message);
    setFormMessage("Revise os dados e tente novamente.", "error");
    return;
  }

  setFormMessage("Ocorreu um erro inesperado. Tente novamente.", "error");
};

const onSubmit = (event) => {
  event.preventDefault();

  clearErrors(form);
  setFormMessage("");

  const data = getFormData(form);

  try {
    validateRegistrationData(data);
    setFormMessage("Cadastro realizado com sucesso!", "success");
    form.reset();
  } catch (error) {
    handleValidationError(error);
  }
};

if (form) {
  form.addEventListener("submit", onSubmit);
}