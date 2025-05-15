
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="glass-card p-8 mb-4 relative overflow-hidden">
      <div className="flex">
        <div className="w-1/2">
          <div className="text-sm mb-3 inline-block px-2 py-1 bg-gray-100 rounded-full">🎵 Music is Classic</div>
          <h1 className="text-5xl font-bold mb-2">Sequoia Inspiring Musico.</h1>
          
          <div className="mt-12 mb-6">
            <div className="text-lg font-semibold">Clear Sounds</div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-5xl text-gray-200 font-bold">01</span>
              <div className="w-64 h-0.5 bg-gray-200"></div>
              <div className="text-sm text-gray-500">
                Making your dream music come true<br />
                stay with Sequios Sounds!
              </div>
            </div>
          </div>
          
          <Button className="mt-4 bg-nitec-lime text-black hover:bg-nitec-lime/90 rounded-full px-8 py-6 flex items-center gap-3 group">
            View All Products 
            <div className="bg-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </Button>
          
          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-2">Follow us on:</p>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs">𝕏</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs">TT</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" 
            alt="Blue headphones" 
            className="mx-auto h-96 object-contain z-10 relative"
          />
          
          {/* Floating dots */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-gray-200 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-gray-300 animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-nitec-blue/20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
