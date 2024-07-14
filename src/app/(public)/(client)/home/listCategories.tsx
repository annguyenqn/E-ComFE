'use client';
import CategoryBanner from '@/components/shared/Category';
import useInViewPort from '@/hooks/useInViewPort';
import React from 'react';
import clsx from 'clsx';

const ListCategories = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef);

  return (
    <div
      ref={targetRef}
      className={clsx(
        'grid md:grid-cols-3 sm:grid-cols-2 place-items-center md:px-[40px] pt-[110px] pb-[10px]',
        { 'lg:animate-left-to-right': inViewport }
      )}
    >
      <CategoryBanner />
      <CategoryBanner />
      <CategoryBanner />
    </div>
  );
};

export default ListCategories;
