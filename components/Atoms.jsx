import React from 'react';

export const Button = (props) => {
  const { children, loading, ...rest } = props;
  return (
    <button {...rest} className='focus:outline-none bg-primary font-semibold text-base md:text-xl px-2 md:px-5 py-3'>
      {loading ? 'Working...' : children}
    </button>
  );
};

export const Input = (props) => {
  return <input {...props} className='focus:outline-none bg-gray-800 text-base md:text-xl px-2 md:px-5 py-3 flex-1' />;
};

export const ErrorMessage = ({ text }) => {
  return <span className='text-red-400 self-start font-thin pl-2 md:pl-5'>{text}</span>;
};

export const CopyButton = (props) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className='focus:outline-none bg-primary text-base md:text-xl px-2 py-1'>
      {children}
    </button>
  );
};
