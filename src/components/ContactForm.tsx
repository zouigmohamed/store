import { useState } from "react";
import { IFormData } from "../interfaces";
import { formFields } from "../data/index";
import FormField from "./FormField";

const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 lg:rounded-tl-xl  rounded-xl lg:rounded-none w-full border-2 border-slate-400 h-full space-y-4 flex  flex-col justify-around">
      {formFields.map((field) => (
        <FormField key={field.name} {...field} value={formData[field.name]} onChange={handleChange} />
      ))}
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
