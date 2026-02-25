import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Car, Truck, Bus, Tractor, Zap, CheckCircle2, Send, Plane, Bike, Ship } from 'lucide-react';

const assetTypes = [
  { id: 'voitures', label: 'Voitures de tourisme', icon: <Car className="w-8 h-8 text-blue-400" /> },
  { id: 'fourgonnettes', label: 'Fourgonnettes', icon: <Truck className="w-8 h-8 text-blue-400" /> },
  { id: 'hydrocarbures', label: 'Camions Hydrocarbures', icon: <Truck className="w-8 h-8 text-blue-400" /> },
  { id: 'benne', label: 'Camions Benne', icon: <Truck className="w-8 h-8 text-blue-400" /> },
  { id: 'autres_camions', label: 'Autres Camions', icon: <Truck className="w-8 h-8 text-blue-400" /> },
  { id: 'autobus', label: 'Autobus', icon: <Bus className="w-8 h-8 text-blue-400" /> },
  { id: 'remorques', label: 'Remorques', icon: <Truck className="w-8 h-8 text-blue-400" /> },
  { id: 'groupe_electro', label: 'Groupe électrogène', icon: <Zap className="w-8 h-8 text-blue-400" /> },
  { id: 'engins', label: 'Engins', icon: <Tractor className="w-8 h-8 text-blue-400" /> },
  { id: 'autre', label: 'Autre', icon: <div className="flex space-x-1"><Plane className="w-4 h-4 text-blue-400"/><Bike className="w-4 h-4 text-blue-400"/><Ship className="w-4 h-4 text-blue-400"/></div> }
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const toggleAsset = (id: string) => {
    setSelectedAssets(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600">
            Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé ou plus d'informations.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-2xl shadow-lg text-center border border-green-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h3>
            <p className="text-gray-600 mb-8">
              Notre équipe vous contactera dans les plus brefs délais pour discuter de vos besoins.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
          >
            {/* Asset Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Pour nous aider à mieux comprendre vos besoins, avec quel(s) type(s) d'actifs travaillez-vous ?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {assetTypes.map((asset) => (
                  <div 
                    key={asset.id}
                    onClick={() => toggleAsset(asset.id)}
                    className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all ${
                      selectedAssets.includes(asset.id) 
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="mb-3 h-10 flex items-center justify-center">
                      {asset.icon}
                    </div>
                    <div className="flex items-center w-full">
                      <input 
                        type="checkbox" 
                        checked={selectedAssets.includes(asset.id)}
                        onChange={() => {}} // Handled by parent div click
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                      />
                      <span className="text-sm font-medium text-gray-700">{asset.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 mb-10" />

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input required type="text" id="nom" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                <input required type="text" id="prenom" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Votre prénom" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="votre@email.com" />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input required type="tel" id="telephone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+33 6 00 00 00 00" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
              <input required type="text" id="sujet" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Sujet de votre demande" />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center mx-auto group">
                Envoyer ma demande
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
