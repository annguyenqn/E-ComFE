import { Button } from '@/components/shared/Button';
import { ImagesSlider } from '@/components/shared/Slider';
import React from 'react';
import '@/styles/sticky-scroll-reveal.css';
import { Metadata } from 'next';
import FeaturedProducts from './featuredProducts';
import ListCategories from './listCategories';
import TabProducts from './tabProducts';
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
            <div className='mb-[40px]'>
              <TextGenerateEffect words='So Fashionable,True Elegant' />
            </div>
            <Button variant='white'>MUA HÀNG</Button>
          </div>
        </ImagesSlider>
      </div>
      <FeaturedProducts />
      <ListCategories />
      <TabProducts />
      <GalleryProducts />
    </>
  );
};

export default Home;
