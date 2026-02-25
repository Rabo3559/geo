import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    title: "Géolocalisation et gestion de flotte",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    points: [
      "Suivi en temps réel 24/7",
      "Rapports d'activité détaillés",
      "Maintenance préventive",
      "Gestion des conducteurs"
    ]
  },
  {
    title: "Eco-conduite et économie",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    points: [
      "Analyse du comportement au volant",
      "Réduction de la consommation",
      "Diminution des émissions CO2",
      "Baisse des coûts d'assurance"
    ]
  },
  {
    title: "Gestion d'activité et tournées",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    points: [
      "Optimisation des itinéraires",
      "Planification des missions",
      "Preuve de passage/livraison",
      "Communication avec les chauffeurs"
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions Métier
          </h2>
          <p className="text-lg text-gray-600">
            Des solutions adaptées à vos besoins spécifiques pour améliorer la rentabilité et la sécurité de votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-blue-50 text-blue-700 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
