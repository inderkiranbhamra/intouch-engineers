import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Wrench, 
  Cog, 
  Hammer, 
  Layers, 
  Box, 
  Settings2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Sheet Metal Dies',
    description: 'Precision-engineered sheet metal dies for high-performance manufacturing with tight tolerances.',
    features: ['Progressive Dies', 'Compound Dies', 'Transfer Dies'],
  },
  {
    icon: Box,
    title: 'Plastic Molding Dies',
    description: 'Custom plastic molding dies crafted to your exact specifications for optimal production.',
    features: ['Injection Molds', 'Blow Molds', 'Compression Molds'],
  },
  {
    icon: Wrench,
    title: 'Jigs & Fixtures',
    description: 'Tailored jigs and fixtures for enhanced accuracy and productivity in manufacturing.',
    features: ['Welding Jigs', 'Assembly Fixtures', 'Inspection Gauges'],
  },
  {
    icon: Cog,
    title: 'Surface Grinding & VMC',
    description: 'Advanced surface grinding and VMC machining for flawless finishes and precision.',
    features: ['CNC Grinding', '5-Axis VMC', 'Mirror Finish'],
  },
  {
    icon: Hammer,
    title: 'Hydraulic Press Work',
    description: 'Comprehensive hydraulic press work for demanding industrial applications.',
    features: ['Deep Drawing', 'Blanking', 'Forming'],
  },
  {
    icon: Settings2,
    title: 'E.D.M. Wirecut',
    description: 'Precision E.D.M. wirecut solutions for intricate components and complex geometries.',
    features: ['Micro Cutting', 'Complex Profiles', 'Hardened Steel'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Comprehensive <span className="text-gradient-gold">Engineering Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From concept to completion, we deliver excellence in every project with cutting-edge technology and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsla(43,85%,52%,0.3)] transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="relative space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <a href="#contact" className="relative inline-flex items-center gap-2 text-primary font-medium text-sm group/link">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
