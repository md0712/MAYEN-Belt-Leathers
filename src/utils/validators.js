export const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPhone = (phone) => {
  // Accepts digits, plus, hyphens, parentheses, spaces (min 7 chars)
  const cleaned = phone.replace(/[^0-9]/g, '');
  return cleaned.length >= 7 && cleaned.length <= 15;
};

export const isNotEmpty = (val) => {
  return typeof val === 'string' && val.trim().length > 0;
};

export const validateQuoteForm = (values) => {
  const errors = {};

  if (!isNotEmpty(values.fullName)) {
    errors.fullName = "Please enter your full name";
  }

  if (!isNotEmpty(values.email)) {
    errors.email = "Email address is required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please provide a valid business email address";
  }

  if (!isNotEmpty(values.phone)) {
    errors.phone = "Phone or WhatsApp number is required";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Please provide a valid contact number";
  }

  if (!isNotEmpty(values.inquiryType)) {
    errors.inquiryType = "Please select an inquiry type";
  }

  if (!isNotEmpty(values.message)) {
    errors.message = "Please describe your requirements or order volume";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
