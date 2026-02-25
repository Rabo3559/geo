import { motion } from 'motion/react';
import { MapPin, Map, ShieldAlert, Maximize, Flame, User, Gauge, Thermometer } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Suivi en temps réel de votre véhicule"
  },
  {
    icon: <Map className="w-12 h-12" />,
    title: "Historique bien détaillé des trajets parcourus par votre véhicule"
  },
  {
    icon: <ShieldAlert className="w-12 h-12" />,
    title: "Blocage moteur (arrêt immédiat du véhicule) en cas de vol à distance"
  },
  {
    icon: <Maximize className="w-12 h-12" />,
    title: "Alerte lors des entrées/sorties de zone"
  },
  {
    icon: <Flame className="w-12 h-12" />,
    title: "Contrôle de carburant"
  },
  {
    icon: <User className="w-12 h-12" />,
    title: "Détection de fatigue"
  },
  {
    icon: <Gauge className="w-12 h-12" />,
    title: "Limitation de vitesse"
  },
  {
    icon: <Thermometer className="w-12 h-12" />,
    title: "Contrôle de température"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-[#333333] mb-6">
            Fonctionnalités
          </h2>
          <p className="text-gray-600 mb-4">
            Que diriez-vous d'un pack de solutions de géolocalisation voiture qui vous permet de piloter votre activité et de réduire efficacement vos coûts au quotidien ?
          </p>
          <p className="text-gray-600">
            Geo-Tracking est une entreprise spécialisée dans la vente des solutions de suivi gps et de géolocalisation de véhicules depuis de longues années.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#1b3b5c] to-[#1ca3ec] p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center min-h-[240px] hover:shadow-xl transition-shadow"
            >
              <div className="text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
