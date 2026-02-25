import { motion } from 'motion/react';
import { MapPin, Truck, BarChart3, ShieldCheck, Settings, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Géolocalisation Précise",
    description: "Suivez vos véhicules en temps réel avec une précision métrique grâce à nos balises GPS de dernière génération."
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Gestion de Flotte",
    description: "Optimisez l'utilisation de vos véhicules, planifiez les entretiens et prolongez la durée de vie de votre parc."
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Analyse Logistique",
    description: "Générez des rapports détaillés sur les trajets, les temps d'arrêt et les performances de vos chauffeurs."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Sécurité Renforcée",
    description: "Protégez vos actifs avec des alertes de sortie de zone, détection de mouvement non autorisé et blocage moteur."
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Intégration Sur-Mesure",
    description: "Connectez nos solutions à votre ERP ou logiciel métier via notre API ouverte et documentée."
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Application Mobile",
    description: "Gardez le contrôle de votre flotte où que vous soyez avec notre application mobile intuitive pour iOS et Android."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600">
            Des solutions complètes pour répondre à tous vos défis de suivi et de gestion logistique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
                En savoir plus
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
