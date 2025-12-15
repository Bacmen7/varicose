"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link
            href="/our-approach"
            className="font-semibold hover:opacity-80 tracking-wide"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif', fontSize: '14px', lineHeight: '17px', color: '#026460' }}
          >
            OUR APPROACH
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 font-semibold hover:opacity-80 tracking-wide cursor-pointer"
              style={{ fontFamily: '"Proxima Nova", Arial, sans-serif', fontSize: '14px', lineHeight: '17px', color: '#026460' }}
            >
              WHO WE SERVE
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  href="/individuals"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Individuals
                </Link>
                <Link
                  href="/employers"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Employers
                </Link>
                <Link
                  href="/health-plans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Health Plans
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/resources"
            className="font-semibold hover:opacity-80 tracking-wide"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif', fontSize: '14px', lineHeight: '17px', color: '#026460' }}
          >
            RESOURCES
          </Link>

          <Link
            href="/success-stories"
            className="font-semibold hover:opacity-80 tracking-wide"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif', fontSize: '14px', lineHeight: '17px', color: '#026460' }}
          >
            SUCCESS STORIES
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-[#0d7377]"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-[#0d7377] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0a5c5f] transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/our-approach"
              className="font-semibold py-2 text-[#026460]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR APPROACH
            </Link>
            <Link
              href="/individuals"
              className="font-semibold py-2 text-[#026460]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WHO WE SERVE
            </Link>
            <Link
              href="/resources"
              className="font-semibold py-2 text-[#026460]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESOURCES
            </Link>
            <Link
              href="/success-stories"
              className="font-semibold py-2 text-[#026460]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SUCCESS STORIES
            </Link>
            <hr className="border-gray-200" />
            <Link
              href="/login"
              className="font-medium py-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-[#0d7377] text-white px-6 py-3 rounded-full text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
