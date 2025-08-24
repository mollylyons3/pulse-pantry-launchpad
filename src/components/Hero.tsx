import WaitlistForm from './WaitlistForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Smart Sauces for Bold,{' '}
            <span className="text-primary">Better Eating</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover high-protein, creamy sauces made from clean, plant-based ingredients. 
            No additives, no compromise - just seriously good flavor.
          </p>
          
          <WaitlistForm />
        </div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;