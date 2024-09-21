import React, { useState } from 'react';
import { assets } from '../assets/assets';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (API request, form validation, etc.)
    alert('Your message has been sent!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${assets.contact_bg})` }}>
          <div className="bg-black opacity-40 absolute inset-0"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-white max-w-2xl">
            We're here to help. Get in touch with us for any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
              placeholder="Subject"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Have any questions? Feel free to reach out to us through any of the following methods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <img src={assets.contact_icon} alt="Phone" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-600 mt-2">+123 456 7890</p>
            </div>

            <div>
              <img src={assets.email_icon} alt="Email" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-600 mt-2">support@example.com</p>
            </div>

            <div>
              <img src={assets.location_icon} alt="Location" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Map Section */}
      <div className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <p className="text-gray-700 mb-6">Visit our office or store at the location below.</p>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
