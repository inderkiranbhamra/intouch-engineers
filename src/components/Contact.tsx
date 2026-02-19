import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9814944610',
    href: 'tel:+919814944610',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'intouchengineers@yahoo.com',
    href: 'mailto:intouchengineers@yahoo.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'B-XXX-785 Sherpur Bypass, Grand Trunk Rd, Ludhiana, Punjab 141010',
    href: 'https://www.google.com/maps/search/?api=1&query=Intouch+Engineers%2C+Ludhiana',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // State for form fields
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    // Basic client-side validation
    if (
      !form.name ||
      !form.businessName ||
      !form.contactNumber ||
      !form.email ||
      !form.message
    ) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://tie-up-form-api.vercel.app/submit_form',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();
      
      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        setForm({
          name: '',
          businessName: '',
          contactNumber: '',
          email: '',
          message: '',
        });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out to us for any queries, suggestions, or support. We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.title === 'Address' ? '_blank' : undefined}
                    rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-5 p-6 glass-card rounded-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-5 p-6 glass-card rounded-xl">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card p-8 md:p-10 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>

              {/* Status Messages */}
              {success && (
                <p className="text-green-500 text-sm mt-4 text-center font-medium">
                  {success}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-4 text-center font-medium">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;