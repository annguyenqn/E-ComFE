import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TextLink from '../TextLink';
import './category.css';

const CategoryBanner = () => {
  return (
    <div className='relative p-[10px]'>
      <div className='relative category-container overflow-hidden'>
        <Image
          src='https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/elementor/thumbs/pro-cat-dresse-qh2ydq3obxa6wsgwiesyzf7uzap1alx4nfq21b4jlk.webp'
          alt='banner'
          width={492}
          height={620}
        />
        <div className='gradient-render'></div>
        <div className='absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-between text-center py-[40px] px-[20px] lg:p-[40px] z-10'>
          <Link href='/' className='absolute top-0 right-0 left-0 bottom-0 z-10'></Link>
          <div></div>
          <Link
            href='/'
            className='text-5xl text-white italic z-10 font-medium hover-content-zoom-in'
          >
            <TextLink>Dresses</TextLink>
          </Link>
          <Link href='/' className='text-white z-10 hover-content-zoom-in text-base'>
            <TextLink>VIEW COLLECTION</TextLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
