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
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

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
            <p className='text-xl'>We are happy to have you here</p>
            <div className='mb-3'><TextGenerateEffect words='So Fashionable,True Elegant' /></div>
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
