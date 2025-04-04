
import { motion } from "framer-motion";
import { Shield, Truck, Award, Users } from "lucide-react"; // Import icons

const About = () => {
  return (
    <section id="about" className="section bg-white py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative z-10">
              <img 
                src="https://zimcompass.ap-south-1.linodeobjects.com/zimcompass-product_e9b0638619660990409380.jpg" 
                alt="Fanice Ice Cream making process" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-mint rounded-lg -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-softPink rounded-full -z-0 opacity-60"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-6">Our Story</span>
              <h2 className="text-3xl font-serif font-bold mb-6"></h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  Since our establishment, Adejola & Sons Distribution Company has been revolutionizing ice cream distribution 
                  across Nigeria. As the authorized distributor for Fanice and other premium brands, we've built a reputation 
                  for reliability and excellence in cold chain logistics.
                </p>
                <p className="leading-relaxed">
                  Our commitment to Danone's One Planet, One Health vision drives us to maintain sustainable practices 
                  while ensuring the highest quality standards in ice cream distribution. We utilize advanced cold chain 
                  technology and a modern fleet to guarantee product integrity from warehouse to delivery.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="feature-card">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-charcoal/70">Temperature-controlled storage and transport systems</p>
              </div>
              <div className="feature-card">
                <Truck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Nationwide Network</h3>
                <p className="text-sm text-charcoal/70">Extensive distribution coverage across Nigeria</p>
              </div>
              <div className="feature-card">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-charcoal/70">Trained professionals in cold chain management</p>
              </div>
              <div className="feature-card">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Industry Leader</h3>
                <p className="text-sm text-charcoal/70">Multiple awards for distribution quality and excellence</p>
              </div>
            </div>

            {/* Statistics */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Add these styles to your CSS file
const styles = `
.feature-card {
  @apply p-4 rounded-lg bg-white shadow-soft hover:shadow-md transition-shadow duration-300;
}

.stat-card {
  @apply text-center p-4 rounded-lg bg-cream/50 hover:bg-cream/60 transition-colors duration-300;
}
`;

export default About;
