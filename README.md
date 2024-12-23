Form Validation Component
A robust React form validation component built with React and Tailwind CSS, featuring real-time validation, custom input components, and a responsive design.

🚀 Features
Real-time form validation
Custom input components
Responsive design
Multiple input types support
Error handling and display
Form state management
Custom validation rules
📋 Validation Rules
Full Name: Must contain at least 3 words
Email: Must be a valid email format
Password: Minimum 8 characters, must include:
At least one number
At least one special character
Phone: Exactly 10 digits
Age: Must be between 18 and 65
Country: Must be selected from provided options
Terms: Must be agreed to
🛠️ Installation
Clone the repository:

git clone [https://github.com/CyberMan010/Form-task.git]
Install dependencies:

npm install
Run the development server:

npm run dev
💻 Usage

import CustomForm from './components/CustomForm';

function App() {
  return (
    <div>
      <CustomForm />
    </div>
  );
}
🧩 Components
CustomForm
The main form component that handles:

Form state management
Validation logic
Form submission
CustomInput
A reusable input component that supports:

Text input
Email input
Password input
Number input
Select dropdown
Checkbox
Error display
CustomButton
A reusable button component with:

Disabled state
Custom styling
Click handling
📦 Component Props
CustomInput Props

interface CustomInputProps {
  label: string;
  type?: string;
  name: string;
  value: string | boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  options?: string[];
}
CustomButton Props

interface CustomButtonProps {
  label: string;
  onClick: (e: MouseEvent) => void;
  disabled?: boolean;
  customStyles?: string;
}
🎨 Styling
This project uses Tailwind CSS for styling. Key style features include:

Responsive design
Form layout
Input styling
Error states
Button states
Custom animations
📝 Form Data Structure

interface FormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  age: string;
  country: string;
  agreeToTerms: boolean;
}
✨ Validation Logic
The form implements the following validation patterns:

Real-time field validation
Form-level validation
Custom validation rules per field
Error message display
Submit button enabling/disabling
🔄 State Management
The component uses React's useState and useEffect hooks to manage:

Form data
Error states
Form validity
Field-level validation
📱 Responsive Design
The form is fully responsive and works well on:

Mobile devices
Tablets
Desktop screens
🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request


👥 Authors
Mohamad Hasoun - CyberMan010
🙏 Acknowledgments
React.js
Tailwind CSS
Form validation patterns
React Hooks
📞 Support
For support, email mohamahasoun60@gmail.com or create an issue in the repository.