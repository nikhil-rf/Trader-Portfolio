import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';


function Contact() {
  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl font-semibold text-[#2C5530] mb-4">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Ready to transform your trading approach? Reach out to discuss how we can work together to develop your trading mindset and strategy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <form className="bg-white shadow p-6 rounded space-y-4">
          <input className="w-full border px-4 py-2 rounded" placeholder="Your full name" />
          <input className="w-full border px-4 py-2 rounded" placeholder="Your email address" />
          <input className="w-full border px-4 py-2 rounded" placeholder="What is this regarding?" />
          <textarea className="w-full border px-4 py-2 rounded" placeholder="Tell me more about your trading goals and challenges" rows="4" />
          <button className="bg-[#2C5530] text-white px-6 py-2 rounded hover:bg-green-800">Send Message</button>
        </form>

        <div className="space-y-6">
          <div className="bg-white shadow p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-5 h-5 text-green-700" />
              <span>michael@tradingmindset.com</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-5 h-5 text-green-700" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-green-700" />
              <span>New York, NY</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-green-700 hover:text-green-900" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-green-700 hover:text-green-900" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-green-700 hover:text-green-900" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5 text-green-700 hover:text-green-900" /></a>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded text-center">
            <h3 className="text-lg font-semibold mb-2">Schedule a Consultation</h3>
            <p className="text-gray-600 mb-4">Book a 30-minute discovery call to discuss your trading goals and how I can help you develop a more consistent approach.</p>
            <button className="bg-[#2C5530] text-white px-6 py-2 rounded hover:bg-green-800">Book Your Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
