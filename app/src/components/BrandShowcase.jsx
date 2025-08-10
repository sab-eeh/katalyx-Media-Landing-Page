"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

export default function BrandsShowcase() {
  const brands = [
    {
      name: "Malazgirt Tiles & Renovations",
      instagram: "https://www.instagram.com/malazgirt_tile/", // Replace with actual link
      videos: [
        "/videos/Tile-1.mp4", // Replace with embed URLs
        "/videos/Tile-2.mp4",
      ],
    },
    {
      name: "Lamro Construction",
      instagram: "https://www.instagram.com/lamroconstruction.ltd/", // Replace with actual link
      videos: [
        "/videos/Lamro-1.mp4",
        "/videos/Lamro-2.mp4",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by top renovation experts — explore their work and get in
            touch directly.
          </p>
        </motion.div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col"
            >
              {/* Brand Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {brand.name}
              </h3>

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-500 hover:underline"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brand.videos.map((video, vIdx) => (
                  <div key={vIdx} className=" overflow-hidden rounded-xl shadow-md">
                     <video
                    key={vIdx}
                    src={video}
                    controls
                    className="rounded-xl border border-gray-200 shadow-sm w-full h-56 object-cover"
                  />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
