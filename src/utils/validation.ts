
const isValidEmail = (email: string): boolean => {
  const validRegex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
  return email.length === 0 || !email.match(validRegex);
}

const isValidPassword = (password: string): boolean => {
  return password.length === 0;
}

export { isValidEmail, isValidPassword };