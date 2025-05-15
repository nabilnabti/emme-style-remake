
import React from 'react';
import ProductCard from './ProductCard';
import { Heart } from 'lucide-react';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="glass-card p-6 h-full">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="font-medium">More Products</h3>
            <p className="text-sm text-gray-500">460 plus items.</p>
          </div>
          <Heart className="h-5 w-5 text-red-500" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&auto=format&fit=crop&q=80" 
            alt="Product 1" 
            className="rounded-lg h-20 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1600294037881-c80b8c55e147?w=200&auto=format&fit=crop&q=80" 
            alt="Product 2" 
            className="rounded-lg h-20 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1562184552-997c461abbe6?w=200&auto=format&fit=crop&q=80" 
            alt="Product 3" 
            className="rounded-lg h-20 w-full object-cover"
          />
        </div>
      </div>
      
      <ProductCard 
        title="5m+"
        image="https://randomuser.me/api/portraits/men/32.jpg"
        isBigCard={true}
        downloadCount="5m+"
        reviewCount="4.8 reviews"
      />
      
      <ProductCard 
        title="Listening Has Been Released"
        image="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&auto=format&fit=crop&q=80"
        isPopular={true}
        rating={4.7}
      />
      
      <ProductCard 
        title="New Gen X-Bud"
        image="https://images.unsplash.com/photo-1600294037881-c80b8c55e147?w=300&auto=format&fit=crop&q=80"
      />
      
      <ProductCard 
        title="Light Grey Surface Headphone"
        subtitle="Boosted with bass"
        image="https://images.unsplash.com/photo-1626949256220-89adb316be9d?w=300&auto=format&fit=crop&q=80"
      />
    </div>
  );
};

export default ProductGrid;
