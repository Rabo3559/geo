import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-white">Geo<span className="text-blue-500">Tracking</span></span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leader dans la géolocalisation GPS et la gestion de flotte. Nous fournissons des solutions innovantes pour optimiser vos opérations et réduire vos coûts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Nos Solutions</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#sectors" className="hover:text-blue-400 transition-colors">Secteurs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Espace Client</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Demander un devis</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Nos Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Géolocalisation Voiture</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gestion de Flotte</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Eco-conduite</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gestion de Carburant</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gestion de Tournées</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Audit et Conseil</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span>contact@geo-tracking-clone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Geo-Tracking Clone. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
