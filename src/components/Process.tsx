import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MessageSquare, 
  PenTool, 
  Factory, 
  Wrench, 
  CheckCircle, 
  Truck 
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation & Requirement Gathering',
    description: 'We begin by understanding your specific engineering needs and project requirements through detailed consultation.',
  },
  {
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Our expert team designs precision dies, jigs, fixtures, and job work plans tailored to your specifications.',
  },
  {
    icon: Factory,
    title: 'Precision Manufacturing',
    description: 'We manufacture sheet metal dies, plastic molding dies, and custom components using advanced technology.',
  },
  {
    icon: Wrench,
    title: 'Machining & Job Work',
    description: 'Our skilled technicians perform surface grinding, VMC machining, press work, and E.D.M. wirecut operations.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous inspection to ensure it meets the highest standards of accuracy.',
  },
  {
    icon: Truck,
    title: 'Delivery & Support',
    description: 'We deliver your finished components on time and provide ongoing support for your continued satisfaction.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Content */}
                <div
                  className={`lg:py-8 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <div
                    className={`glass-card p-6 md:p-8 rounded-2xl inline-block w-full max-w-lg ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    }`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-4xl font-display font-bold text-primary/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className={`text-xl font-display font-bold text-foreground mb-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {step.title}
                    </h3>
                    <p className={`text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
