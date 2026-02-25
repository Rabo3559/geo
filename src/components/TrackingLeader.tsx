import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function TrackingLeader() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333]">
            Solution de tracking N°1 en afrique
          </h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer max-w-5xl mx-auto"
        >
          {/* Using a placeholder that represents tracking/fleet management */}
          <img 
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Interface de tracking" 
            className="w-full h-[500px] object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-20 h-20 bg-[#eab308] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1 fill-current" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
