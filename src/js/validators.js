const REQUIRED_MESSAGE = "Este campo é obrigatório.";

const throwFieldError = (field, message) => {
  throw Object.assign(new Error(message), { field });
};

const assertRequired = (field, value) => {
  if (typeof value !== "string" || value.trim() === "") {
    throwFieldError(field, REQUIRED_MESSAGE);
  }
};

const validateName = (name) => {
  if (name.trim().length < 3) {
    throwFieldError("name", "Informe um nome válido (mínimo 3 caracteres).");
  }
};

const validateUsername = (username) => {
  const normalized = username.trim();

  if (normalized.length < 4 || /\s/.test(normalized)) {
    throwFieldError("username", "Usuário deve ter no mínimo 4 caracteres e não pode conter espaços.");
  }
};

const validatePassword = (password) => {
  if (password.trim().length < 8) {
    throwFieldError("password", "Senha deve ter no mínimo 8 caracteres.");
  }
};

const validateEmail = (email) => {
  const normalized = email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailPattern.test(normalized)) {
    throwFieldError("email", "Informe um email válido.");
  }
};

const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const currentMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();
  const hasBirthdayPassed =
    currentMonth > birthMonth ||
    (currentMonth === birthMonth && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
};

const validateBirthDate = (birthDateValue) => {
  const birthDate = new Date(`${birthDateValue}T00:00:00`);

  if (Number.isNaN(birthDate.getTime()) || calculateAge(birthDate) < 18) {
    throwFieldError("birthDate", "Você precisa ter 18 anos ou mais para se cadastrar.");
  }
};

export const validateRegistrationData = ({ name, username, password, email, birthDate }) => {
  assertRequired("name", name);
  assertRequired("username", username);
  assertRequired("password", password);
  assertRequired("email", email);
  assertRequired("birthDate", birthDate);

  validateName(name);
  validateUsername(username);
  validatePassword(password);
  validateEmail(email);
  validateBirthDate(birthDate);
};