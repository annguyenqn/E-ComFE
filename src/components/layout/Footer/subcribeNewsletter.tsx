'use client';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import Link from 'next/link';
import React from 'react';

const SubcribeNewsletter = () => {
  return (
    <div className='pt-[90px] pb-[70px] px-[10px]'>
      <div className='lg:container flex flex-wrap p-[10px]'>
        <div className='flex flex-col lg:w-1/4 sm:w-2/4 w-full justify-center items-center'>
          <div className='text-center text-2xl mb-[10px]'>Contact Us</div>
          <Link href='mailto:name@gmail.com' className='mb-[4px]'>
            Email: name@gmail.com
          </Link>
          <Link href='tel:093939xxxx'>Phone: 093939xxxx</Link>
        </div>
        <div className='lg:w-1/4 sm:w-2/4 lg:hidden block w-full'>
          <div className='text-2xl'>Our store</div>
          <Link href='#'>Địa chỉ</Link>
        </div>
        <div className='lg:w-2/4 w-full'>
          <div className='text-5xl text-center font-medium'>
            Subcribe To
            <br />
            Our Newsletter
          </div>
          <div className='flex'>
            <Input className='' placeholder='Email của bạn' />
            <Button className=''>SUBCRIBE</Button>
          </div>
        </div>
        <div className='lg:w-1/4 sm:w-2/4 hidden lg:block w-full'>Our store</div>
      </div>
    </div>
  );
};

export default SubcribeNewsletter;
