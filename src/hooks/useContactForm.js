import { useState } from 'react';
import { validateQuoteForm } from '../utils/validators';

export function useContactForm(initialValues = {}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    inquiryType: 'custom_manufacturing', // custom_manufacturing, wholesale_catalog, private_label, sample_request
    estimatedQuantity: '100-500',
    preferredCategory: 'all',
    message: '',
    ...initialValues
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      inquiryType: 'custom_manufacturing',
      estimatedQuantity: '100-500',
      preferredCategory: 'all',
      message: '',
      ...initialValues
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const { isValid, errors: validationErrors } = validateQuoteForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return false;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API submission delay
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSubmitted(true);
      return true;
    } catch (err) {
      setSubmitError("Failed to submit inquiry. Please try again or reach out directly via WhatsApp.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm
  };
}
