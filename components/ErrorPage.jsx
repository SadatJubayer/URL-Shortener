import React from 'react';

const ErrorPage = ({ text }) => {
  return (
    <div className='text-lg md:text-2xl font-semibold bg-red-200 text-red-700 p-5 mt-16 text-center rounded-sm'>
      {text}
    </div>
  );
};

export default ErrorPage;
