
import React from 'react';
import { Search, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="glass-card flex items-center justify-between px-6 py-4 mb-4">
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <span className="text-2xl font-bold">N</span>
          <span className="text-lg">itec.</span>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="pl-4 pr-10 py-2 rounded-full bg-white/60 focus:outline-none w-64"
          />
          <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" className="rounded-full">
          <ShoppingBag className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full">
          <Heart className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm">Ryman Alex</span>
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
