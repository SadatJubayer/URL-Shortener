import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-700 text-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-10'>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
