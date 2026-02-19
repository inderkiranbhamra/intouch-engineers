import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Sheet Metal Dies',
  'Plastic Molding Dies',
  'Jigs & Fixtures',
  'Surface Grinding',
  'VMC Job Work',
  'E.D.M. Wirecut',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-steel-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Intouch Engineers" className="h-12 mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your trusted partner for precision manufacturing and job work services. 
              Excellence in sheet metal dies, plastic molding, and advanced machining.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-foreground text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-foreground text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-foreground text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919814944610"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span>+91 9814944610</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:intouchengineers@yahoo.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <span>intouchengineers@yahoo.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Intouch+Engineers%2C+Ludhiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm">
                    B-XXX-785 Sherpur Bypass, Grand Trunk Rd, Ludhiana, Punjab 141010
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Intouch Engineers. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Precision Engineering Excellence from Ludhiana, Punjab
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
