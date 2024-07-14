'use client';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import useInViewPort from '@/hooks/useInViewPort';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

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

const ReasonsToBuy = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef);
  return (
    <div
      ref={targetRef}
      className={clsx('container py-[90px]', { 'animate-fade-in-up': inViewport })}
    >
      <StickyScroll content={contents} />
    </div>
  );
};

export default ReasonsToBuy;
