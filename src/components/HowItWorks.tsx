import { motion } from 'motion/react';
import { ClipboardList, Cpu, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: "Analyse des besoins",
    description: "Nous étudions votre flotte et vos objectifs pour vous proposer la solution la plus adaptée."
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Installation & Setup",
    description: "Nos techniciens installent les boîtiers GPS certifiés et configurent votre plateforme personnalisée."
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Suivi & Optimisation",
    description: "Vous commencez à collecter des données et à optimiser vos trajets et votre consommation."
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: "Support Continu",
    description: "Notre équipe vous accompagne au quotidien pour maximiser votre retour sur investissement."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600">
            Un processus simple et efficace pour transformer la gestion de votre flotte en quelques jours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-12 z-0"></div>
          
          {index_steps()}
        </div>
      </div>
    </section>
  );

  function index_steps() {
    return steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 bg-white border-4 border-blue-500 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
          {step.icon}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    ));
  }
}
