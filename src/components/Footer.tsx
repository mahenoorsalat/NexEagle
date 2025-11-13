import { Mail, Phone, MessageCircle } from "lucide-react";
import nexeagleLogo from "@/assets/nexeagle-logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Products", href: "#products" },
    { label: "Why NexEagle", href: "#why-nexeagle" },
    { label: "Pricing", href: "#pricing" },
    { label: "Careers", href: "#careers" },
    { label: "Team", href: "#team" },
    { label: "FAQs", href: "#faqs" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Data Protection", href: "#data-protection" },
  ];

  return (
    <footer className="bg-cream/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={nexeagleLogo} alt="NexEagle Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NexEagle
                </span>
                <span className="text-xs text-muted-foreground">HEALTHCARE AI</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered healthcare OS that helps clinics and hospitals focus on patient care, not paperwork.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@nexeagle.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@nexeagle.com
              </a>
              <a 
                href="tel:+918074906808"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 8074906808
              </a>
              <a 
                href="https://wa.me/918074906808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 NexEagle. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">🔒 Data encrypted</span>
              <span className="flex items-center gap-1">🇮🇳 Made in India</span>
              <span className="flex items-center gap-1">📄 GST invoicing</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Built with ❤️ for Indian healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
