import { Button } from '@/components/ui/button';
// import { ImagesSlider } from '@/components/ui/images-slider';
import { ImagesSlider } from '@/components/shared/Slider';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import React from 'react';
import '@/styles/sticky-scroll-reveal.css';
import ProductCard from '@/components/shared/Product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const images = ['/slider-1-scaled.webp', 'slider-2.webp'];

const items = [
  {
    quote: 'This is a quote',
    name: 'John Doe',
    title: 'CEO'
  },
  {
    quote: 'This is a quote',
    name: 'John Doe1',
    title: 'CEO1'
  }
];

const contents = [
  {
    title: 'Title 1',
    description:
      'Description 1Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <Image
        src='https://i.pinimg.com/564x/a0/33/a6/a033a6d215cfdc41dbfd92c5ac5dc8cf.jpg'
        alt='image'
        fill
      />
    )
  },
  {
    title: 'Title 2',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.'
  },
  {
    title: 'Title 3',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions."
  }
];

const tabs = [
  {
    title: 'New',
    value: 'new',
    content: <div className='bg-slate-400'>New Products</div>
    // list: ['product1', 'product2', 'product3']
    // content: <ProductList list={list} />
  },
  {
    title: 'Hot',
    value: 'hot',
    content: <div>Hot Products</div>
  },
  {
    title: 'Sale',
    value: 'sale',
    content: <div>Sale Products</div>
  }
];

const Home = () => {
  return (
    <>
      <div className='h-screen'>
        <ImagesSlider images={images}>
          <div className='flex flex-col items-center justify-center h-full text-white z-10 '>
            <h1 className='text-3xl font-bold'>Welcome to our website</h1>
            <p className='text-lg'>We are happy to have you here</p>
            <Button className='font-semibold p-6'>SHOP NOW</Button>
          </div>
        </ImagesSlider>
      </div>
      <div className='container pt-[100px]'>
        <div className='pb-[20px]'>
          <div className='text-center text-base pb-[10px]'>NEW AND EXTRAORDINARY</div>
          <div className='text-center text-4xl font-medium'>Featured Products</div>
        </div>
        <div className='grid grid-cols-4 -mx-[20px]'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='container mx-auto'>
        <Tabs defaultValue={tabs[0].value} className='text-center'>
          <TabsList className='bg-transparent'>
            {tabs.map((tab, index) => {
              return (
                <TabsTrigger key={`${tab.title}-${index}`} value={tab.value}>
                  {tab.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {tabs.map((tab, index) => {
            return (
              <TabsContent key={`${tab.title}-${index}`} value={tab.value}>
                {tab.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
      <div className='container my-[40px]'>
        <StickyScroll content={contents} />
      </div>
      <InfiniteMovingCards items={items} />
      <div className='h-[1000px]'></div>
    </>
  );
};

export default Home;
