import { Phone, Mail, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Phone, href: "#" },
  { icon: Mail, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-[#E6F3F1]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Left Side: Brand & Description */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="font-heading text-3xl font-bold mb-4 text-secondary">
              Varicose Care
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Restoring comfort and confidence with expert vein care.
            </p>
          </div>

          {/* Right Side: Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-primary hover:text-white text-secondary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-primary font-semibold text-lg hover:underline cursor-pointer">
              (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Varicose Care. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
