"use client";

import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="max-w md:max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-salmon focus:ring-1 focus:ring-salmon"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="company name"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-salmon focus:ring-1 focus:ring-salmon"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e-mail address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 border-black rounded-md focus:outline-none focus:border-salmon focus:ring-1 focus:ring-salmon"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 md:h-64 rounded-md px-3 py-2 border border-black 
      focus:outline-none focus:border-salmon focus:ring-1 focus:ring-salmon
      "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-salmon/40 text-black border border-black px-12 py-2 rounded-md hover:bg-salmon float-right"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
