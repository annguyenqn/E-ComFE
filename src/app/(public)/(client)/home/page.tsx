import { Button } from '@/components/shared/Button';
import { ImagesSlider } from '@/components/shared/Slider';
import React from 'react';
import '@/styles/sticky-scroll-reveal.css';
import { Metadata } from 'next';
import FeaturedProducts from './featuredProducts';
import ListCategories from './listCategories';
import TabProducts from './tabProducts';
import ReasonsToBuy from './reasonsToBuy';
import GalleryProducts from './galleryProducts';

const images = ['/slider-1-scaled.webp', 'slider-2.webp'];

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang bán hàng thời trang trực tuyến'
};

const Home = () => {
  return (
    <>
      <div className='lg:h-[700px] md:h-[600px] h-[650px]'>
        <ImagesSlider images={images}>
          <div className='flex flex-col items-center justify-center h-full text-white z-10 '>
            <h1 className='text-3xl font-bold'>Welcome to our website</h1>
            <p className='text-lg'>We are happy to have you here</p>
            <Button variant='white'>MUA HÀNG</Button>
          </div>
        </ImagesSlider>
      </div>
      <FeaturedProducts />
      <ListCategories />
      <TabProducts />
      <GalleryProducts />
      <div className='h-[500px]'></div>
    </>
  );
};

export default Home;
