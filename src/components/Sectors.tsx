import { motion } from 'motion/react';

const sectors = [
  { 
    name: "Agricole", 
    image: "/images/agriculture.jpg" 
  },
  { 
    name: "Miniére et BTP", 
    image: "/images/btp.jpg" 
  },
  { 
    name: "Service et SAV", 
    image: "/images/services.jpg" 
  },
  { 
    name: "Transit et Maritime", 
    image: "/images/transit.jpg" 
  },
  { 
    name: "Transport Routier", 
    image: "/images/transport.jpg" 
  },
  { 
    name: "Transport marchandise", 
    image: "/images/marchandise.jpg" 
  },
  { 
    name: "Transport Frigorifique", 
    image: "/images/frigo.jpg" 
  },
  { 
    name: "Transport Hydrocarbures", 
    image: "/images/hydrocarbures.jpg" 
  },
  { 
    name: "Transport Voyageur Et Touristique", 
    image: "/images/voyageur.jpg" 
  }
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-[#0099ff] font-bold uppercase tracking-wider mb-4">
            SECTEURS
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333] mb-6">
            Des solutions adaptées à votre secteur d'activité
          </h2>
          <p className="text-gray-600 mb-2">
            Tirez profit du meilleur logiciel de gestion de flotte de véhicules pour votre entreprise.
          </p>
          <p className="text-gray-600">
            Géo-Tracking propose des systèmes de géolocalisation de haute qualité adaptés à votre réalité!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden group cursor-pointer w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] h-64 md:h-80"
            >
              <img 
                src={sector.image} 
                alt={sector.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white font-bold text-lg leading-tight">
                  {sector.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
