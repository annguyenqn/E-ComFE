import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TextLink from '../TextLink';

const CategoryBanner = () => {
  return (
    <div className='relative p-2.5'>
      <div className='relative overflow-hidden group'>
        <Image
          src='https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/elementor/thumbs/pro-cat-dresse-qh2ydq3obxa6wsgwiesyzf7uzap1alx4nfq21b4jlk.webp'
          alt='banner'
          width={492}
          height={620}
          className='transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out'
        />
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gray-800 bg-opacity-40 z-10'></div>
        <div className='absolute inset-0 rounded transition-all duration-700'>
          <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-0 transition-opacity duration-400'></div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 opacity-40 group-hover:opacity-60 transition-opacity duration-700'></div>
        </div>
        <div className='absolute inset-0 flex flex-col justify-between text-center py-10 px-5 lg:p-10 z-10'>
          <Link href='/' className='absolute inset-0 z-10'></Link>
          <div></div>
          <Link
            href='/'
            className='text-5xl text-white italic z-10 font-medium transform scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-transform duration-700'
          >
            <TextLink>Dresses</TextLink>
          </Link>
          <Link href='/' className='text-white z-10 text-base transform scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-transform duration-700'>
            <TextLink>VIEW COLLECTION</TextLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
