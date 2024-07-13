'use client';

import React from 'react';
import './text-link.css';

const TextLink = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className='cursor-pointer underline-hover' {...rest}>
      {children}
    </span>
  );
};

export default TextLink;
