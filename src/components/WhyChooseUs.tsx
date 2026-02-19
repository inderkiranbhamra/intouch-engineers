import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import sheetMetalDie from '@/assets/sheet-metal-die.png';
import jigsFixtures from '@/assets/jigs-fixtures.png';
import surfaceGrinding from '@/assets/surface-grinding.png';
import vmcJobwork from '@/assets/vmc-jobwork.png';
import hydraulicPress from '@/assets/hydraulic-press.png';
import edmWirecut from '@/assets/edm-wirecut.png';
import { Button } from '@/components/ui/button';

const features = [
  { image: sheetMetalDie, title: 'Precision Sheet Metal & Plastic Dies' },
  { image: jigsFixtures, title: 'Custom Jigs & Fixtures Solutions' },
  { image: surfaceGrinding, title: 'Advanced Surface Grinding' },
  { image: vmcJobwork, title: 'VMC Job Work' },
  { image: hydraulicPress, title: 'Hydraulic Press Expertise' },
  { image: edmWirecut, title: 'E.D.M. Wirecut Services' },
];

const benefits = [
  'State-of-the-art CNC machinery',
  'Strict quality control protocols',
  'On-time delivery guarantee',
  'Competitive pricing',
  'Expert technical support',
  'Custom solutions for every need',
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Why Choose <span className="text-gradient-gold">Intouch Engineers?</span>
          </h2>
        </motion.div>

        {/* Features Carousel */}
        <div className="relative mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
              The <span className="text-gradient-gold">Intouch Advantage</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="relative p-10 rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(43, 85%, 52%) 0%, hsl(35, 90%, 42%) 100%)',
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                Ready to elevate your manufacturing?
              </h3>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Partner with Intouch Engineers today and experience precision engineering excellence.
              </p>
              <a href="tel:+919814944610">
                <Button className="bg-background text-foreground hover:bg-background/90 font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Contact Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
