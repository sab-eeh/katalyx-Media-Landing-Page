"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="/"
      className="relative min-h-screen bg-fixed bg-center bg-cover py-5"
      style={{ backgroundImage: "url('/kitchen.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <section className="container mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Get{" "}
              <span className="text-primary">
                10 Qualified Quotation Appointments
              </span>{" "}
              in 30 Days – or You Don’t Pay.
            </h1>
            <p className="text-lg text-gray-200 max-w-md">
              We find, qualify, and book exclusive homeowner consultations for
              your remodeling business.
            </p>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-full bg-primary text-white text-lg font-semibold shadow-lg transition-transform"
            >
              Start My 30-Day Guarantee
            </motion.a>
          </motion.div>

          {/* Right Booking Calendly Embed */}
          <motion.div
            id="booking"
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/30 blur-3xl rounded-2xl opacity-20"></div>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl lg:my-8 p-4 md:p-6">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                Book Your Free Consultation
              </h3>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/setterkatalyx?hide_event_type_details=1&primary_color=00b7c3"
                style={{ minWidth: "320px", height: "500px" }}
              ></div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
