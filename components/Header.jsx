import React from 'react';

const Header = () => {
  return (
    <header className='py-5'>
      <nav className='flex items-center'>
        <img className='h-12 md:h-16 w-12 md:w-16 bg-white rounded-full p-1.5 mr-2.5' src='/logo.svg' alt='' />
        <div>
          <h1 className='text-xl md:text-3xl font-bold'>GET in SHORT</h1>
          <p className='mt-1 text-base md:text-lg font-thin'>
            Simplify your links & track them <span className='border-b-2 border-primary'>easily</span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
