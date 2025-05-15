
import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  image: string;
  subtitle?: string;
  rating?: number;
  isPopular?: boolean;
  showHeart?: boolean;
  isBigCard?: boolean;
  downloadCount?: string;
  reviewCount?: string;
}

const ProductCard = ({ 
  title, 
  image, 
  subtitle,
  rating,
  isPopular = false,
  showHeart = false,
  isBigCard = false,
  downloadCount,
  reviewCount
}: ProductCardProps) => {
  return (
    <div className={`product-card relative ${isBigCard ? 'p-6' : 'p-4'} h-full`}>
      {isPopular && (
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <Heart className="h-3 w-3 fill-red-500 text-red-500" />
          <span>Popular</span>
        </div>
      )}
      
      {showHeart && (
        <div className="absolute top-4 right-4">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/20">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      {!isBigCard && (
        <img src={image} alt={title} className="w-full h-32 object-contain mb-3" />
      )}
      
      {isBigCard && (
        <div className="flex flex-col items-center justify-center">
          {downloadCount && (
            <>
              <div className="w-20 h-20 rounded-full bg-nitec-blue text-white flex flex-col items-center justify-center mb-4">
                <div className="text-xl font-bold">{downloadCount}</div>
                <div className="text-xs">Downloads</div>
              </div>
              {reviewCount && (
                <div className="text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-nitec-lime"></span>
                  <span>{reviewCount} reviews</span>
                </div>
              )}
            </>
          )}
          {image && <img src={image} alt={title} className="w-full h-24 object-contain my-3" />}
        </div>
      )}
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          {rating && (
            <div className="mt-1 flex items-center gap-1">
              <span className="inline-block w-4 h-4 text-yellow-400">⭐</span>
              <span className="text-sm">{rating}</span>
            </div>
          )}
        </div>
        
        <Button size="icon" variant="outline" className="rounded-full">
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
