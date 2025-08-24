
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            About Pulse Pantry
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              We're revolutionizing the way families think about healthy eating. Our high-protein, 
              creamy sauces are carefully crafted from clean, plant-based ingredients that deliver 
              exceptional nutrition without sacrificing the bold flavors your whole family craves.
            </p>
            
            <p>
              Every Pulse Pantry sauce is made with a clean label promise – no artificial additives, 
              no preservatives, no compromises. Just pure, wholesome ingredients transformed into 
              the creamy, delicious sauces that make every meal an adventure in better eating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;