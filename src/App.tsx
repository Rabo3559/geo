/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrackingLeader from './components/TrackingLeader';
import Services from './components/Services';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Sectors from './components/Sectors';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TrackingLeader />
        <Features />
        <Services />
        <HowItWorks />
        <Solutions />
        <Sectors />
        <Testimonials />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
