import React, { useState } from "react";
const Contact = () => {
    return (
        <div className="w-full bg-gray-50 min-h-[calc(100vh-120px)]">
            {/* Full-display hero header */}
            <header className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">Contact SwiftCourier</h1>
                    <p className="mt-4 text-lg md:text-xl text-blue-100/90">Have questions? We're here to help you 24/7 — get in touch or send us a message.</p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a href="#contact-form" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95 transition">Send Message</a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Dak+Sthan+Gonawa+Nawada+805110" target="_blank" rel="noreferrer" className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">View on Map</a>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Office</h2>
                            <p className="text-gray-600">Dak Sthan Gonawa, Nawada 805110</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h2>
                            <p className="text-gray-700">Phone: <a href="tel:+918709669804" className="text-blue-600">+91 8709669804</a></p>
                            <p className="text-gray-700 mt-2">Email: <a href="mailto:support@swiftcourier.com" className="text-blue-600">support@swiftcourier.com</a></p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hours</h2>
                            <p className="text-gray-600">Mon - Sat: 9:00 AM to 8:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div id="contact-form" className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                        <form className="grid grid-cols-1 gap-4">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <textarea name="message" rows={6} placeholder="Your Message" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            <div className="flex items-center gap-4">
                                <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
                                <button type="reset" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Reset</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
