import React from 'react';

export const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className='focus:outline-none bg-primary font-semibold text-base md:text-xl px-2 md:px-5 py-3'>
      {children}
    </button>
  );
};

