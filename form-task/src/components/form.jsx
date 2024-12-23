import { useState, useEffect } from "react";
import CustomButton from "./button";
import CustomInput from "./input";

function CustomForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    country: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const countryOptions = ["Syria", "Jordan", "Germany", "Libya", "China", "Spain"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));

    // Validate the specific field
    validateField(name, fieldValue);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim() || value.split(" ").length < 3) {
          error = "Full name must be at least 3 words.";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email.";
        }
        break;

      case "password":
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(value)) {
          error =
            "Password must be at least 8 characters long and include a number and a special character.";
        }
        break;

      case "phone":
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value)) {
          error = "Phone number must be exactly 10 digits.";
        }
        break;

      case "age":
        if (!value || value < 18 || value > 65) {
          error = "Age must be between 18 and 65.";
        }
        break;

      case "country":
        if (!value) {
          error = "Please select a country.";
        }
        break;

      case "agreeToTerms":
        if (!value) {
          error = "You must agree to the terms.";
        }
        break;

      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const isFormValidCheck = () => {
    // Check if there are no errors and all fields are valid
    const hasErrors = Object.values(errors).some((error) => error !== "");
    const allFieldsFilled = Object.keys(formData).every(
      (key) => formData[key] !== "" && formData[key] !== false
    );

    return !hasErrors && allFieldsFilled;
  };

  useEffect(() => {
    // Update form validity whenever formData or errors change
    setIsFormValid(isFormValidCheck());
  }, [formData, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation before submission
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) {
        newErrors[key] = errors[key];
      }
    });

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        country: "",
        agreeToTerms: false,
      });
      setErrors({});
      setIsFormValid(false);
    }
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Validation Form
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Please fill in all the required fields to enable the submit button
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 mb-6">
            <CustomInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Rami Malek"
              error={errors.fullName}
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Hamza@any.com"
              error={errors.email}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.password}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput
              label="Phone Number"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0798765432"
              error={errors.phone}
            />
            <CustomInput
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="25"
              error={errors.age}
              required
            />
          </div>

          <CustomInput
            label="Country"
            name="country"
            type="select"
            value={formData.country}
            options={countryOptions}
            onChange={handleChange}
            error={errors.country}
          />

          <div className="mt-6">
            <CustomInput
              label=""
              type="checkbox"
              name="agreeToTerms"
              value={formData.agreeToTerms}
              onChange={handleChange}
              placeholder="I agree to the terms and conditions"
              error={errors.agreeToTerms}
            />
          </div>

          <div className="mt-8">
            <CustomButton
              label={isFormValid ? "Submit Form" : "Please Fill All Fields"}
              onClick={handleSubmit}
              disabled={!isFormValid}
              customStyles="transition-all duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomForm;