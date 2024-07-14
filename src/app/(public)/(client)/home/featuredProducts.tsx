'use client';
import ProductCard from '@/components/shared/Product';
import { Button } from '@/components/shared/Button';
import React from 'react';
import useInViewPort from '@/hooks/useInViewPort';
import clsx from 'clsx';

const FeaturedProducts = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef);
  return (
    <div className={clsx('container pt-[100px]', { 'lg:animate-fade-in-up': inViewport })}>
      <div className='pb-[20px]' ref={targetRef}>
        <div className='text-center text-base pb-[10px]'>NEW AND EXTRAORDINARY</div>
        <div className='text-center text-4xl font-medium'>Featured Products</div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center xl:-mx-[20px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='flex justify-center items-center pt-[20px]'>
        <Button variant='white'>Xem tất cả</Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
