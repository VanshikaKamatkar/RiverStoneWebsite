import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FounderSection from './components/FounderSection';
import ProductsSection from './components/ProductsSection';
import PresenceSection from './components/PresenceSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#111111] font-['Metropolis','Montserrat','Inter',sans-serif] selection:bg-[#713411]/15 selection:text-[#713411] flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Homepage Sections */}
      <main className="flex-1 space-y-4">
        <Hero />
        <AboutSection />
        <FounderSection />
        <ProductsSection />
        <PresenceSection />
        <ClientsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
