export const clearErrors = (form) => {
  const errors = form.querySelectorAll(".error");
  errors.forEach((element) => {
    element.textContent = "";
  });
};

export const showFieldError = (form, field, message) => {
  const errorElement = form.querySelector(`[data-error-for="${field}"]`);

  if (errorElement) {
    errorElement.textContent = message;
  }
};

export const setFormMessage = (message, type = "") => {
  const formMessage = document.getElementById("formMessage");

  if (!formMessage) {
    return;
  }

  formMessage.textContent = message;
  formMessage.classList.remove("success", "error");

  if (type) {
    formMessage.classList.add(type);
  }
};

export const getFormData = (form) => {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") || ""),
    username: String(formData.get("username") || ""),
    password: String(formData.get("password") || ""),
    email: String(formData.get("email") || ""),
    birthDate: String(formData.get("birthDate") || "")
  };
};