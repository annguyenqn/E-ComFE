'use client';
import { Button } from '@/components/shared/Button';
import ProductCard from '@/components/shared/Product';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shared/Tabs';
import useInViewPort from '@/hooks/useInViewPort';
import clsx from 'clsx';
import React from 'react';

const tabs = [
  {
    title: 'HOT ITEMS',
    value: 'hot',
    content: (
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center xl:-mx-[20px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    )
    // list: ['product1', 'product2', 'product3']
    // content: <ProductList list={list} />
  },
  {
    title: 'NEW ARRIVALS',
    value: 'new',
    content: (
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center xl:-mx-[20px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    )
  },
  {
    title: 'ON SALE',
    value: 'sale',
    content: (
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center xl:-mx-[20px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    )
  }
];

const TabProducts = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef);
  return (
    <div
      ref={targetRef}
      className={clsx('container pt-[90px] pb-[90px] px-[10px]', {
        'lg:animate-fade-in-up': inViewport
      })}
    >
      <Tabs defaultValue={tabs[0].value} className='text-center'>
        <TabsList className='bg-transparent'>
          {tabs.map((tab, index) => {
            if (tab.value === 'sale') {
              return (
                <TabsTrigger
                  key={`${tab.title}-${index}`}
                  value={tab.value}
                  className='data-[state=active]:border-b-2 data-[state=active]:text-[#ff0000] text-[#ff0000] border-b-[#ff0000]'
                >
                  {tab.title}
                </TabsTrigger>
              );
            }
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
      <div className='flex justify-center items-center pt-[20px]'>
        <Button variant='white'>Xem tất cả</Button>
      </div>
    </div>
  );
};

export default TabProducts;
