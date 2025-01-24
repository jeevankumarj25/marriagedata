import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Popup state

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
      };

      // Send email via EmailJS (Replace with your actual keys)
      await emailjs.send(
        'service_p1jky1o',  // Replace with your service ID
        'template_8y6j9mq',  // Replace with your template ID
        templateParams,
        '87xywZj5X-hCG4KKF'  // Replace with your user ID
      );

      setIsSubmitted(true); // Display the success popup
      setFormData({ name: '', contact: '', email: '' }); // Clear form

      // Redirect to homepage after 3 seconds
      setTimeout(() => {
        window.location.href = '/'; // Adjust this based on your routing
      }, 9000);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  // Close the popup
  const handleClosePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-4xl w-full bg-gradient-to-br from-[#121212] via-[#4649b2] to-[#0c0d0d] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
      {/* Section Heading Outside the Form */}
      <div className="text-center mb-6 px-4">
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-200">
  Share Your Details and Let's Start a Conversation
</h3>

      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none"
          />
        </div>

        {/* Contact Field */}
        <div>
          <label htmlFor="contact" className="block text-lg font-medium text-gray-300">Contact Number (Optional)</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="lg:col-span-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center lg:col-span-2">
          <button
            type="submit"
            className="bg-[#4649b2] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#3c3e99] transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-gradient-to-br from-[#121212] via-[#4649b2] to-[#0c0d0d] p-8 rounded-lg shadow-xl text-center max-w-lg w-full">
            <h2 className="text-xl font-bold text-gray-200">Thank you for submitting your details!</h2>
            <p className="mt-4 text-gray-300">I will get back to you soon.</p>
            <button
              onClick={handleClosePopup}
              className="mt-6 px-6 py-3 bg-[#4649b2] text-white rounded-lg font-semibold hover:bg-[#3c3e99]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
