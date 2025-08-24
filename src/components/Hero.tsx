import WaitlistForm from './WaitlistForm';
import { Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Top vine decoration - more organic and petal-like */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20">
        <svg
          className="w-full h-full text-primary opacity-20"
          viewBox="0 0 1200 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Main curvy vine stem */}
          <path
            d="M-50 48 C50 38, 100 52, 150 45 C200 38, 250 54, 300 46 C350 38, 400 52, 450 45 C500 38, 550 54, 600 46 C650 38, 700 52, 750 45 C800 38, 850 54, 900 46 C950 38, 1000 52, 1050 45 C1100 38, 1150 54, 1250 46"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          
          {/* Secondary vine intertwining */}
          <path
            d="M-30 52 C70 58, 120 42, 170 50 C220 58, 270 42, 320 50 C370 58, 420 42, 470 50 C520 58, 570 42, 620 50 C670 58, 720 42, 770 50 C820 58, 870 42, 920 50 C970 58, 1020 42, 1070 50 C1120 58, 1170 42, 1230 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          
          {/* Realistic petal shapes */}
          <g transform="translate(100, 40)">
            <path d="M0,0 C-8,-3 -8,-12 0,-15 C8,-12 8,-3 0,0" fill="currentColor" opacity="0.4" transform="rotate(25)"/>
            <path d="M2,2 C-6,0 -6,-8 2,-10 C10,-8 10,0 2,2" fill="currentColor" opacity="0.3" transform="rotate(45)"/>
          </g>
          
          <g transform="translate(250, 48)">
            <path d="M0,0 C-10,-4 -10,-15 0,-18 C10,-15 10,-4 0,0" fill="currentColor" opacity="0.5" transform="rotate(-30)"/>
            <path d="M3,3 C-5,-1 -5,-9 3,-11 C11,-9 11,-1 3,3" fill="currentColor" opacity="0.3" transform="rotate(-50)"/>
          </g>
          
          <g transform="translate(400, 44)">
            <path d="M0,0 C-9,-3 -9,-13 0,-16 C9,-13 9,-3 0,0" fill="currentColor" opacity="0.4" transform="rotate(40)"/>
            <path d="M-2,2 C-7,0 -7,-10 -2,-12 C8,-10 8,0 -2,2" fill="currentColor" opacity="0.3" transform="rotate(60)"/>
          </g>
          
          <g transform="translate(550, 50)">
            <path d="M0,0 C-10,-4 -10,-15 0,-18 C10,-15 10,-4 0,0" fill="currentColor" opacity="0.5" transform="rotate(-45)"/>
            <path d="M2,3 C-6,-1 -6,-10 2,-13 C10,-10 10,-1 2,3" fill="currentColor" opacity="0.3" transform="rotate(-65)"/>
          </g>
          
          <g transform="translate(700, 42)">
            <path d="M0,0 C-8,-3 -8,-12 0,-15 C8,-12 8,-3 0,0" fill="currentColor" opacity="0.4" transform="rotate(20)"/>
            <path d="M3,2 C-5,0 -5,-8 3,-10 C11,-8 11,0 3,2" fill="currentColor" opacity="0.3" transform="rotate(40)"/>
          </g>
          
          <g transform="translate(850, 48)">
            <path d="M0,0 C-9,-4 -9,-14 0,-17 C9,-14 9,-4 0,0" fill="currentColor" opacity="0.5" transform="rotate(-35)"/>
            <path d="M-2,3 C-7,-1 -7,-11 -2,-14 C8,-11 8,-1 -2,3" fill="currentColor" opacity="0.3" transform="rotate(-55)"/>
          </g>
          
          <g transform="translate(1000, 45)">
            <path d="M0,0 C-10,-3 -10,-13 0,-16 C10,-13 10,-3 0,0" fill="currentColor" opacity="0.4" transform="rotate(30)"/>
            <path d="M2,2 C-6,0 -6,-9 2,-11 C10,-9 10,0 2,2" fill="currentColor" opacity="0.3" transform="rotate(50)"/>
          </g>
          
          {/* Small curly tendrils */}
          <path d="M180 45 Q185 40, 182 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M330 48 Q335 53, 332 58" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M480 44 Q485 39, 482 34" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M630 49 Q635 54, 632 59" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M780 43 Q785 38, 782 33" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M930 47 Q935 52, 932 57" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>

      {/* Bottom vine decoration - white and organic */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20">
        <svg
          className="w-full h-full text-white opacity-30"
          viewBox="0 0 1200 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Main curvy vine stem */}
          <path
            d="M-50 48 C50 58, 100 42, 150 50 C200 58, 250 42, 300 50 C350 58, 400 42, 450 50 C500 58, 550 42, 600 50 C650 58, 700 42, 750 50 C800 58, 850 42, 900 50 C950 58, 1000 42, 1050 50 C1100 58, 1150 42, 1250 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          
          {/* Secondary vine intertwining */}
          <path
            d="M-30 44 C70 38, 120 54, 170 46 C220 38, 270 54, 320 46 C370 38, 420 54, 470 46 C520 38, 570 54, 620 46 C670 38, 720 54, 770 46 C820 38, 870 54, 920 46 C970 38, 1020 54, 1070 46 C1120 38, 1170 54, 1230 46"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          
          {/* Realistic petal shapes */}
          <g transform="translate(150, 52)">
            <path d="M0,0 C-10,-4 -10,-15 0,-18 C10,-15 10,-4 0,0" fill="currentColor" opacity="0.6" transform="rotate(-25)"/>
            <path d="M3,3 C-5,-1 -5,-9 3,-11 C11,-9 11,-1 3,3" fill="currentColor" opacity="0.4" transform="rotate(-45)"/>
          </g>
          
          <g transform="translate(300, 46)">
            <path d="M0,0 C-9,-3 -9,-13 0,-16 C9,-13 9,-3 0,0" fill="currentColor" opacity="0.5" transform="rotate(35)"/>
            <path d="M-2,2 C-7,0 -7,-10 -2,-12 C8,-10 8,0 -2,2" fill="currentColor" opacity="0.3" transform="rotate(55)"/>
          </g>
          
          <g transform="translate(450, 51)">
            <path d="M0,0 C-10,-4 -10,-15 0,-18 C10,-15 10,-4 0,0" fill="currentColor" opacity="0.6" transform="rotate(-40)"/>
            <path d="M2,3 C-6,-1 -6,-10 2,-13 C10,-10 10,-1 2,3" fill="currentColor" opacity="0.4" transform="rotate(-60)"/>
          </g>
          
          <g transform="translate(600, 45)">
            <path d="M0,0 C-8,-3 -8,-12 0,-15 C8,-12 8,-3 0,0" fill="currentColor" opacity="0.5" transform="rotate(45)"/>
            <path d="M3,2 C-5,0 -5,-8 3,-10 C11,-8 11,0 3,2" fill="currentColor" opacity="0.3" transform="rotate(65)"/>
          </g>
          
          <g transform="translate(750, 53)">
            <path d="M0,0 C-9,-4 -9,-14 0,-17 C9,-14 9,-4 0,0" fill="currentColor" opacity="0.6" transform="rotate(-30)"/>
            <path d="M-2,3 C-7,-1 -7,-11 -2,-14 C8,-11 8,-1 -2,3" fill="currentColor" opacity="0.4" transform="rotate(-50)"/>
          </g>
          
          <g transform="translate(900, 47)">
            <path d="M0,0 C-10,-3 -10,-13 0,-16 C10,-13 10,-3 0,0" fill="currentColor" opacity="0.5" transform="rotate(25)"/>
            <path d="M2,2 C-6,0 -6,-9 2,-11 C10,-9 10,0 2,2" fill="currentColor" opacity="0.3" transform="rotate(45)"/>
          </g>
          
          <g transform="translate(1050, 50)">
            <path d="M0,0 C-8,-4 -8,-14 0,-17 C8,-14 8,-4 0,0" fill="currentColor" opacity="0.6" transform="rotate(-35)"/>
            <path d="M3,3 C-5,-1 -5,-10 3,-13 C11,-10 11,-1 3,3" fill="currentColor" opacity="0.4" transform="rotate(-55)"/>
          </g>
          
          {/* Small curly tendrils */}
          <path d="M220 48 Q225 43, 222 38" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M370 51 Q375 56, 372 61" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M520 47 Q525 42, 522 37" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M670 52 Q675 57, 672 62" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M820 46 Q825 41, 822 36" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M970 50 Q975 55, 972 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
        </svg>
      </div>

      {/* Main content container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left column - Content */}
        <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="relative z-10 w-full max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Smart Sauces for<br />
              <span className="text-primary">Bold, Better Eating</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Discover high-protein, creamy sauces made from clean, plant-based ingredients. 
              No additives, no compromise - <span className="text-primary font-bold">just seriously good flavor.</span>
            </p>
            
            <WaitlistForm />
            
            {/* Follow Us button */}
            <div className="mt-12 text-center">
              <a
                href="https://instagram.com/pulsepantry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                aria-label="Follow Pulse Pantry on Instagram"
              >
                <Instagram size={20} />
                Follow Us
              </a>
            </div>
          </div>
        </div>

        {/* Right column - Logo with green background, positioned higher */}
        <div className="relative bg-primary flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-12">
          <div className="relative z-10">
            <img 
              src="/pulse-pantry-logo-real.png" 
              alt="Pulse Pantry Logo" 
              className="w-full max-w-2xl h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;