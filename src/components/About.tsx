import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Users, Award, Zap, Play, X } from 'lucide-react';

const HERO_VIDEO_URL = 'https://intouchengineers.com/WEBSITE_DRAFTT.mp4';

const stats = [
  { icon: Target, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '1000+', label: 'Projects Completed' },
  { icon: Zap, value: '99%', label: 'Precision Rate' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding bg-secondary/30" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Video Preview */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                {/* Video thumbnail with auto-play preview */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src={HERO_VIDEO_URL} type="video/mp4" />
                </video>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_hsla(43,85%,52%,0.5)] group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 md:right-8 bg-card p-4 md:p-6 rounded-2xl shadow-xl border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">1000+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                Crafting Precision with{' '}
                <span className="text-gradient-gold">Passion & Expertise</span>
              </h2>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Intouch Engineers is your trusted destination for precision manufacturing and job work services. 
                  Based in Ludhiana, Punjab, we specialize in sheet metal dies, plastic molding dies, jigs, fixtures, 
                  and advanced machining operations.
                </p>
                <p>
                  With a team of skilled engineers and cutting-edge technology, we deliver solutions that drive 
                  your business forward with unmatched precision and reliability.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <motion.div
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="font-display font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  Our Mission
                </h4>
                <p className="text-muted-foreground">
                  To empower your business with reliable engineering solutions, foster long-term partnerships, 
                  and contribute to the growth of the manufacturing industry.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <video
              autoPlay
              controls
              className="w-full rounded-2xl shadow-2xl"
            >
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;
