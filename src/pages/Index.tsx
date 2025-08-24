import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Index;
