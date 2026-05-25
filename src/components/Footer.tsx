import { Mail, MessageCircle, Phone, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { icon: Phone, href: "tel:+919833943177", label: "Call" },
  { icon: Mail, href: "mailto:chirag@navighealth.com", label: "Email" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Message" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Conditions", href: "/conditions" },
  { label: "Treatments", href: "/treatments-overview" },
  { label: "Learn", href: "/blog" },
];

const resourceLinks = [
  { label: "Disease Overview", href: "/disease-overview" },
  { label: "Blog Overview", href: "/blog-overview" },
  { label: "Varicose Veins", href: "/conditions/varicose-veins" },
  { label: "EVLT Treatment", href: "/treatments/evlt" },
  { label: "RFA Treatment", href: "/treatments/rfa" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#E6F3F1] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_1fr_1fr] md:gap-16">
          <div>
            <Image
              src="/logo.png"
              alt="Sira Vascular"
              width={180}
              height={60}
              className="mb-4 h-auto w-[180px]"
            />
            <p className="max-w-md text-gray-600 leading-relaxed font-medium">
              Restoring comfort and confidence with expert vein care.
            </p>

            <div className="mt-6 space-y-3 text-gray-600 font-medium">
              <a href="tel:+919833943177" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone size={18} className="text-primary" />
                <span>+91 9833943177</span>
              </a>
              <a href="mailto:chirag@navighealth.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail size={18} className="text-primary" />
                <span>chirag@navighealth.com</span>
              </a>
            </div>

            <div className="mt-7 flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-primary hover:text-white text-secondary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Pages
            </h2>
            <nav className="flex flex-col gap-4">
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 font-medium leading-none transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Resources
            </h2>
            <nav className="flex flex-col gap-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 font-medium leading-none transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
