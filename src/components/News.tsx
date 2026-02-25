import { motion } from 'motion/react';

const newsItems = [
  {
    title: "Jauge de Carburant",
    date: "mars 12, 2025 /",
    excerpt: "Jauge de Carburant Accueil / Blog / Jauge de Carburant Capteur de Niveau de Carburant : Tout ce que Vous Devez Savoir Optimisez la...",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Suivi des Véhicules de Chantier",
    date: "janvier 20, 2025 /",
    excerpt: "Suivi des Véhicules de Chantier Accueil / Blog / Suivi des Véhicules de Chantier Suivi des Véhicules de Chantier avec les Traceurs GPS Certifiés IP67...",
    image: "https://images.unsplash.com/photo-1541888086925-eb3225f6cebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "ADAS Prévention des Collisions",
    date: "janvier 20, 2025 /",
    excerpt: "ADAS Prévention des Collisions Accueil / Blog / ADAS Prévention des Collisions ADAS - Système d'Aide à la Conduite avec Prévention des Collisions Une...",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333] mb-8">
            Actualités et Insights
          </h2>
          <button className="bg-[#0099ff] hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Toutes les catégories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2 group-hover:text-[#0099ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3 italic">
                {item.date}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {item.excerpt}
              </p>
              <a 
                href={item.link} 
                className="text-[#0099ff] font-medium hover:text-blue-800 transition-colors inline-flex items-center"
              >
                Lire Plus
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
