import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
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
      <ContactSection />
    </main>
  );
}
