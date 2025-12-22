"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Conditions", href: "/conditions" },
    { label: "Treatments", href: "/treatments" },
    { label: "Our Clinics", href: "/clinics" },
    { label: "Learn", href: "/blog" },
  ];

  return (
    <nav className="bg-white py-4 px-4 md:px-6 border-b border-gray-100 relative" style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4L4 28h8l4-8 4 8h8L16 4z"
              fill="#0d7377"
            />
            <path
              d="M16 4L12 12l4 8 4-8-4-8z"
              fill="#2dd4bf"
            />
          </svg>
          <span className="text-xl font-bold text-[#023936]">Varicose</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-primary cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold hover:opacity-80 tracking-wide"
              style={{ fontFamily: '"Proxima Nova", Arial, sans-serif', fontSize: '14px', lineHeight: '17px', color: '#026460' }}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Book Appointment Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Link
            href="/book-appointment"
            className="bg-[#0d7377] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0a5c5f] transition-colors"
          >
            Book An Appointment
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semibold py-2 text-[#026460]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="bg-[#0d7377] text-white px-6 py-3 rounded-full text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
