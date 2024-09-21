import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${assets.about_bg})` }}>
          <div className="bg-black opacity-40 absolute inset-0"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg text-white max-w-2xl">
            Learn more about our journey, our values, and what makes us your go-to destination for premium products.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          Established in 2024, UrbanElegance was born from a passion for quality and craftsmanship. Our mission is to
          bring the best products to our customers, with a commitment to excellence and innovation. We believe in providing
          a seamless shopping experience that delights every customer.
        </p>

        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          From humble beginnings, we have grown into a reputable brand that values sustainability, customer satisfaction,
          and premium quality. Every product is carefully selected, ensuring that we only offer the best in the market.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <img src={assets.quality_icon} alt="Quality" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-gray-600 mt-2">
                We pride ourselves on offering only the best quality products, ensuring longevity and customer satisfaction.
              </p>
            </div>

            <div className="text-center">
              <img src={assets.support_icon} alt="Customer Service" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Exceptional Customer Service</h3>
              <p className="text-gray-600 mt-2">
                Our customer service team is dedicated to making sure you have the best experience, from start to finish.
              </p>
            </div>

            <div className="text-center">
              <img src={assets.sustainability_icon} alt="Sustainability" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-600 mt-2">
                We are committed to sustainable practices, ensuring that our products are both ethically sourced and eco-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-gray-700 mb-6">Explore our collection and discover products that match your lifestyle.</p>
        <Link to="/collection" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default About;

