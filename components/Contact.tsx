"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          Contact Me
        </motion.h2>
        <motion.div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Get in Touch</h3>
              <p className="text-gray-700 mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-2" size={20} />
                  <a href="mailto:arnavmenon@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    arnavmenon@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-2" size={20} />
                  <span className="text-gray-700">(916) 693-5343</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-2" size={20} />
                  <span className="text-gray-700">Pittsburgh, PA</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.4 } }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center mt-4">
                    {errorMessage || "Failed to send message. Please try again."}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}