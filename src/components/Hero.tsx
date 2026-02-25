import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Image and Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/banniere.jpg"
                alt="Flotte de véhicules"
                className="w-full h-[500px] object-cover bg-gray-200"
              />
            </div>
            {/* Badge Overlay */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 rounded-3xl shadow-2xl border-4 border-gray-50 max-w-[280px] z-10">
              <h3 className="text-[#0099ff] font-bold text-xl mb-2 text-center uppercase tracking-wide">
                GEO-TRACKING
              </h3>
              <p className="text-2xl font-extrabold text-black text-center leading-tight">
                Leader de la Géolocalisation Flotte véhicule En Afrique
              </p>
            </div>
          </motion.div>

          {/* Right side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pl-0 lg:pl-4 mt-16 lg:mt-0"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight mb-6">
              Solution de Géolocalisation GPS et Gestion de Flotte
            </h1>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Que diriez-vous d'un pack de solutions de géolocalisation voiture qui vous permet de piloter votre activité et de réduire efficacement vos coûts au quotidien ?
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Geo-Tracking est une entreprise spécialisée dans la vente des solutions de suivi gps et de <strong className="text-gray-800">géolocalisation</strong> de <strong className="text-gray-800">véhicules</strong> depuis de longues années.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Son expérience dans le domaine de la gestion de la flotte la dispose à exceller dans son métier et à fournir des solutions clés en main à ses clients.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Géolocalisation voiture et gestion de flotte",
                "Gestion d'activité et gestion de tournée",
                "Eco conduite et economie de carburant",
                "Gestion de carburant",
                "Audit et conseil en gestion de flotte"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0099ff] mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#0099ff] hover:bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-lg transition-colors shadow-lg shadow-blue-500/30">
              Obtenir une démo
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
