import { Mail, MessageCircle, Phone, Linkedin } from "lucide-react";
import Image from "@/compat/Image";
import Link from "@/compat/Link";

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

export default function Footer() {
  return (
    <footer className="w-full bg-accent-light py-12 md:py-14">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-[1.25fr_1fr] md:gap-16 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Sira Vascular"
              width={180}
              height={60}
              className="mb-4 h-auto w-[150px] md:w-[180px]"
            />
            <p className="max-w-xs text-gray-600 leading-relaxed font-medium md:max-w-md">
              Restoring comfort and confidence with expert vein care.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 text-gray-600 font-medium md:items-start">
              <a href="tel:+919833943177" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone size={18} className="text-primary" />
                <span>+91 9833943177</span>
              </a>
              <a href="mailto:chirag@navighealth.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail size={18} className="text-primary" />
                <span>chirag@navighealth.com</span>
              </a>
            </div>

            <div className="mt-7 flex justify-center gap-4 md:justify-start">
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

          <div className="border-t border-secondary/10 pt-8 md:border-t-0 md:pt-0">
            <h2 className="mb-5 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-secondary">
              Pages
            </h2>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:flex-col md:justify-start md:gap-4">
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

        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-secondary/10 pt-6 text-sm text-gray-500 md:mt-12 md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} Sira Vascular. All rights reserved.</span>
          <span>Made with care, for your vein health.</span>
        </div>
      </div>
    </footer>
  );
}
