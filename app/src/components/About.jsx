"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Meet <span className="text-primary">Laksh Puri</span>
          </h2>
          <h3 className="text-lg text-gray-600 font-semibold mt-2">
            Founder & CEO of Katalyx Media
          </h3>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed"
        >
          <p>
            I’m Laksh, the founder and CEO of{" "}
            <span className="font-semibold text-gray-900">Katalyx Media</span> — a marketing agency dedicated to helping remodelers consistently
            book more high-quality projects. Our mission is simple: connect
            construction and renovation businesses with real homeowners ready to
            move forward, while removing the stress and guesswork from lead generation.
          </p>
          <p>
            I started Katalyx Media with a passion for building systems that actually
            work and produce results. Outside of business, I’m a big fan of chess,
            tennis, and soccer, and I value time with friends and family above all else.
            That same focus on connection and strategy carries into the way we work with
            our clients — building strong relationships and crafting marketing campaigns
            that put them ahead of the competition.
          </p>
          <p>
            At Katalyx Media, we use proven strategies and modern tools to bring our
            clients the appointments they need to grow. The goal is always the same: give
            every business the opportunities and systems they need to thrive, establish a
            strong market presence, and make a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
