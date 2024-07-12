'use client';

import React from 'react';
import './text-link.css';

const TextLink = ({
  children,
  handleClick
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <span
      className='cursor-pointer underline-hover'
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </span>
  );
};

export default TextLink;
