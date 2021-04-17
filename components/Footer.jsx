import React from 'react';

const Footer = () => {
  return (
    <div className='mt-auto fixed bottom-0 left-0 right-0 bg-gray-800 text-center py-2.5 text-gray-400'>
      Made with ❤ by{' '}
      <a href='http://dev3.cf' target='_blank' className='font-semibold hover:underline' rel='noopener noreferrer'>
        DEV3
      </a>
    </div>
  );
};

export default Footer;
