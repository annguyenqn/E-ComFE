'use client';

import React from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../../ui/badge';
import './product.css';
import { Eye, Heart } from 'lucide-react';
import TextLink from '../TextLink';

const ProductCard = () => {
  return (
    <div className='relative p-[20px]'>
      <div className='relative product-container'>
        <div className='relative overflow-hidden'>
          <div className='absolute top-[10px] left-[10px] z-20'>
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
            className='second-image'
          />
          <Link href='/' className='absolute top-0 left-0 right-0 bottom-0 z-10'></Link>
          <div className='py-[15px] absolute bottom-0 left-0 right-0 bg-background purchase-bar z-10'>
            <div className='flex items-center justify-between'>
              <div className='flex-auto px-[20px]'>
                <Heart className='cursor-pointer hover:text-red-500' />
              </div>
              <div className='basis-full text-center uppercase box-border border-x-2'>
                <TextLink
                  handleClick={() => {
                    alert('test');
                  }}
                >
                  Add to cart
                </TextLink>
              </div>
              <div className='flex-auto px-[20px]'>
                <Eye className='cursor-pointer hover:text-blue-400' />
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[25px] text-center'>
          <Link href='/' className=' font-medium text-xl'>
            Sunflower Jumpsuit
          </Link>
        </div>
        <span className='pt-[5px] flex justify-center gap-4 text-center'>
          <span>Price</span>
          <span className='text-[#ff0000]'>Price Sale</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
