import React from 'react';

const StatCard = ({ count, text, color, topText }) => {
  return (
    <div
      className='bg-blue-900 px-5 py-8 text-2xl uppercase flex flex-col space-y-2.5 rounded text-center relative'
      style={{ backgroundColor: color }}
    >
      {topText && (
        <span
          className='absolute right-0 top-0 text-xs sm:text-sm font-semibold bg-white text-gray-600 p-1 lowercase'
          style={{ color }}
        >
          {topText}
        </span>
      )}
      <h3 className='text-5xl sm:text-7xl font-bold text-white'>{count}</h3>
      <p className='font-medium text-base md:text-2xl truncate'> {text}</p>
    </div>
  );
};

export default StatCard;
