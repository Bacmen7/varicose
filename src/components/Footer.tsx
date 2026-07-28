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
    <footer className="w-full bg-accent-light py-14">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16">
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
            <h2 className="mb-5 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-secondary">
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

        </div>
      </div>
    </footer>
  );
}
