'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../../ui/badge';
import { Eye, Heart } from 'lucide-react';
import TextLink from '../TextLink';

const ProductCard = () => {
  return (
    <div className='relative p-5'>
      <div className='relative product-container group'>
        <div className='relative overflow-hidden'>
          <div className='absolute top-2.5 left-2.5 z-20'>
            <Badge variant='sale'>50% OFF</Badge>
          </div>
          <Image
            src='https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Dust-Lightweight-Jacket-1-400x500.jpg'
            alt='img1'
            width={400}
            height={500}
          />
          <Image
            src='https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Dust-Lightweight-Jacket-2-400x500.jpg'
            alt='img2'
            width={400}
            height={500}
            className='absolute inset-0 opacity-0 transition-opacity duration-350 ease-in-out transform scale-100 group-hover:opacity-100 group-hover:scale-105'
          />
          <Link href='/' className='absolute inset-0 z-10'></Link>
          <div className='py-3.5 absolute bottom-0 left-0 right-0 bg-background z-10 transform translate-y-full transition-transform duration-300 ease-linear group-hover:translate-y-0'>
            <div className='flex items-center justify-between'>
              <div className='flex-auto px-5'>
                <Heart className='cursor-pointer hover:text-red-500' />
              </div>
              <div className='basis-full text-center uppercase border-x-2'>
                <TextLink>Add to cart</TextLink>
              </div>
              <div className='flex-auto px-5'>
                <Eye className='cursor-pointer hover:text-blue-400' />
              </div>
            </div>
          </div>
        </div>
        <div className='pt-6 text-center'>
          <Link href='/' className='font-medium text-xl'>
            Sunflower Jumpsuit
          </Link>
        </div>
        <span className='pt-1 flex justify-center gap-4 text-center'>
          <span>Price</span>
          <span className='text-red-500'>Price Sale</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
