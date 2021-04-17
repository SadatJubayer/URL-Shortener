import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className='py-5 border-b border-gray-600'>
      <nav className='flex items-center'>
        <img
          onClick={() => router.push('/')}
          className='h-12 md:h-16 w-12 md:w-16 bg-purple-50 rounded-full p-1.5 mr-2.5 cursor-pointer hover:bg-purple-100'
          src='/logo.svg'
          alt=''
        />
        <div>
          <h1 className='text-xl md:text-3xl font-bold'>Picchi URL</h1>
          <p className='mt-1 text-base md:text-lg font-thin'>
            Short your links & track them <span className='border-b-2 border-primary'>easily</span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
