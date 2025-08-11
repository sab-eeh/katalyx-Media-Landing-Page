"use client";
import React from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };


  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "/" },
                { label: "How it Works", id: "how-it-works" },
                { label: "Guarantee", id: "guarantee" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contac" },

              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563899468930#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/katalyx.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@smma_lakshpuri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <SiTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+1 (647) 627-3109</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>setterkatalyx@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
