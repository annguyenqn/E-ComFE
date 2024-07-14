'use client';
import { GalleryMoving } from '@/components/shared/GalleryMoving';
import clsx from 'clsx';
import React from 'react';

const items = [
  {
    path: '',
    url1: 'https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Dust-Lightweight-Jacket-1-400x500.jpg',
    url2: 'https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Dust-Lightweight-Jacket-2-400x500.jpg'
  },
  {
    path: '',
    url1: 'https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Karatima-Outerwear-1-400x500.jpg',
    url2: 'https://demo.cmssuperheroes.com/themeforest/chani/wp-content/uploads/Karatima-Outerwear-2-400x500.jpg'
  }
];

const GalleryProducts = () => {
  return (
    <div className={clsx('pt-[90px] pb-[50px] bg-[#f3f2ed]')}>
      <GalleryMoving items={items} />
    </div>
  );
};

export default GalleryProducts;
