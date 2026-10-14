import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Products />
            <Services />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
        
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;