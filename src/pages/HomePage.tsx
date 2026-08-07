import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FounderSection from '../components/FounderSection';
import ProductsSection from '../components/ProductsSection';
import PresenceSection from '../components/PresenceSection';
import ClientsSection from '../components/ClientsSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <FounderSection />
      <ProductsSection />
      <PresenceSection />
      <ClientsSection />
    </main>
  );
}
