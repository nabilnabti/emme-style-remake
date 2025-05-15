
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ColorSelection from '@/components/ColorSelection';
import ProductGrid from '@/components/ProductGrid';

const Index = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <HeroSection />
          </div>
          <div className="col-span-1">
            <ColorSelection />
            <div className="glass-card p-4 mb-4 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600294037881-c80b8c55e147?w=400&auto=format&fit=crop&q=80" 
                alt="X-Bud earphones" 
                className="w-32 h-auto object-contain z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50"></div>
              <div className="mt-4 text-center z-10">
                <h3 className="font-medium">New Gen</h3>
                <p className="text-sm">X-Bud</p>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="glass-card p-4 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1626949256220-89adb316be9d?w=400&auto=format&fit=crop&q=80" 
                alt="VR Headset" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50"></div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <ProductGrid />
      </div>
    </div>
  );
};

export default Index;
