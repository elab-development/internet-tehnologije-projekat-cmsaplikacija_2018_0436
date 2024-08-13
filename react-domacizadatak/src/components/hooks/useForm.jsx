import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input change and update state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e, callback) => {
    e.preventDefault();
    if (validateForm()) {
      callback(); // Callback function (e.g., for form submission)
      setFormData(initialValues); // Reset form data
      setErrors({}); // Reset errors
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = validate(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
