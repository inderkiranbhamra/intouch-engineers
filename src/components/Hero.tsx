import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_VIDEO_URL = 'https://intouchengineers.com/WEBSITE_DRAFTT.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster=""
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated sparks overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_6px_2px_hsla(43,85%,52%,0.6)]"
            style={{
              left: `${5 + (i * 4.5)}%`,
              bottom: '10%',
            }}
            animate={{
              y: [0, -200 - Math.random() * 300],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Precision Engineering Excellence
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Partner with us and{' '}
            <br className="hidden md:block" />
            experience the{' '}
            <span className="text-gradient-gold relative">
              Intouch advantage
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold-glow to-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            World-class precision manufacturing, sheet metal dies, plastic molding, 
            and advanced machining services from Ludhiana, Punjab.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#contact">
              <Button variant="hero" size="lg" className="group text-lg px-10 h-16">
                Get InTouch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="group text-lg px-10 h-16">
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-primary">15+</span>
              <span className="text-sm">Years of<br />Excellence</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-primary">500+</span>
              <span className="text-sm">Happy<br />Clients</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-primary">99%</span>
              <span className="text-sm">Precision<br />Rate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
