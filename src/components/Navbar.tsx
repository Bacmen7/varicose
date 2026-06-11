"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments-overview" },
  { label: "Our Clinics", href: "/clinics" },
  { label: "Learn", href: "/blog" },
];

const megaMenuColumns = [
  {
    title: "Information",
    links: [
      { label: "All About Varicose Veins", href: "/conditions/varicose-veins" },
      { label: "Varicose Vein Symptoms", href: "/conditions/varicose-veins#symptoms" },
      { label: "Spider Veins", href: "/conditions" },
      { label: "Chronic Venous Insufficiency", href: "/conditions" },
      { label: "DVT Awareness", href: "/conditions" },
      { label: "Venous Leg Ulcers", href: "/conditions/varicose-veins#when-to-see" },
      { label: "Post-Pregnancy Veins", href: "/conditions" },
    ],
  },
  {
    title: "Treatment",
    links: [
      { label: "Treatment Overview", href: "/treatments-overview" },
      { label: "EVLT - Laser Treatment", href: "/treatments/evlt" },
      { label: "RFA - Radiofrequency Ablation", href: "/treatments/rfa" },
      { label: "VenaSeal - Glue Closure", href: "/treatments-overview#treatments" },
      { label: "Sclerotherapy", href: "/treatments-overview#treatments" },
      { label: "Foam Sclerotherapy", href: "/treatments-overview#treatments" },
      { label: "Compression Therapy", href: "/treatments-overview#treatments" },
    ],
  },
  {
    title: "From the Blog",
    links: [
      { label: "Why Varicose Veins Happen", href: "/blog/why-varicose-veins-happen" },
      { label: "Early Warning Signs", href: "/blog/early-warning-signs" },
      { label: "When to See a Specialist", href: "/blog/when-to-see-doctor" },
      { label: "Recovery After Treatment", href: "/blog" },
      { label: "Prevention & Daily Care", href: "/blog" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Treatment Pricing", href: "/pricing" },
      { label: "Procedure Price Comparison", href: "/pricing" },
      { label: "Insurance Coverage", href: "/pricing" },
      { label: "Refer a Patient", href: "/book-appointment" },
      { label: "Book Consultation - Rs.500 CTA", href: "/book-appointment" },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConditionsOpen, setIsConditionsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsConditionsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsConditionsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setIsConditionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  if (pathname === "/pricing") {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-gray-100 bg-white px-4 py-4 md:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center" onClick={closeMenus}>
          <Image src="/logo.png" alt="Sira Vascular" width={120} height={80} priority />
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="cursor-pointer p-2 text-gray-700 hover:text-primary lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/about"
            className="text-sm font-semibold tracking-wide text-[#026460] hover:opacity-80"
            onClick={closeMenus}
          >
            ABOUT US
          </Link>
          <button
            type="button"
            onClick={() => setIsConditionsOpen((open) => !open)}
            className="flex cursor-pointer items-center gap-1 text-sm font-semibold tracking-wide text-[#026460] hover:opacity-80"
            aria-expanded={isConditionsOpen}
            aria-controls="conditions-mega-menu"
          >
            CONDITIONS
            <ChevronDown
              size={15}
              className={`transition-transform ${isConditionsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className="text-sm font-semibold tracking-wide text-[#026460] hover:opacity-80"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href="/book-appointment"
            onClick={closeMenus}
            className="rounded-full bg-[#0d7377] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0a5c5f]"
          >
            Book An Appointment
          </Link>
        </div>
      </div>

      {isConditionsOpen && (
        <div
          id="conditions-mega-menu"
          className="absolute left-0 right-0 top-full hidden border-t border-[#dde9e8] bg-white shadow-[0_10px_24px_rgba(22,53,55,0.08)] lg:block"
        >
          <div className="mx-auto max-w-7xl px-8 pb-8 pt-8">
            <div className="grid grid-cols-4 gap-10">
              {megaMenuColumns.map((column) => (
                <div key={column.title}>
                  <h2 className="font-heading border-b border-[#dbe7e6] pb-4 text-xl font-medium text-secondary">
                    {column.title}
                  </h2>
                  <div className="divide-y divide-[#edf3f2]">
                    {column.links.map((link) => (
                      <Link
                        key={`${column.title}-${link.label}`}
                        href={link.href}
                        onClick={closeMenus}
                        className={
                          link.label.startsWith("Book Consultation")
                            ? "mt-4 inline-flex min-h-[40px] items-center rounded-full bg-[#f26932] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#df5924]"
                            : "block py-3 text-sm font-medium leading-snug text-[#4f6267] transition-colors hover:text-primary"
                        }
                      >
                        {link.label.startsWith("Book Consultation")
                          ? "Book Consultation - Rs.500"
                          : link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col gap-3 p-4">
            <Link href="/about" className="py-2 font-semibold text-[#026460]" onClick={closeMenus}>
              ABOUT US
            </Link>
            <button
              type="button"
              onClick={() => setIsConditionsOpen((open) => !open)}
              className="flex items-center justify-between py-2 font-semibold text-[#026460]"
            >
              CONDITIONS
              <ChevronDown
                size={18}
                className={`transition-transform ${isConditionsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isConditionsOpen && (
              <div className="max-h-[52vh] overflow-y-auto rounded-xl bg-[#f7fbfa] px-4 py-2">
                {megaMenuColumns.map((column) => (
                  <div key={column.title} className="py-3">
                    <p className="font-heading mb-2 text-lg font-medium text-secondary">{column.title}</p>
                    {column.links.map((link) => (
                      <Link
                        key={`${column.title}-${link.label}`}
                        href={link.href}
                        onClick={closeMenus}
                        className={
                          link.label.startsWith("Book Consultation")
                            ? "mt-2 inline-flex min-h-[40px] items-center rounded-full bg-[#f26932] px-5 py-2.5 text-center text-sm font-semibold text-white"
                            : "block py-2 text-sm font-medium text-[#596b70]"
                        }
                      >
                        {link.label.startsWith("Book Consultation")
                          ? "Book Consultation - Rs.500"
                          : link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 font-semibold text-[#026460]"
                onClick={closeMenus}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="rounded-full bg-[#0d7377] px-6 py-3 text-center font-medium text-white"
              onClick={closeMenus}
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
