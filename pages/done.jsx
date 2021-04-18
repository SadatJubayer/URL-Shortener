import React from 'react';
import Layout from '../components/Layout';
import { useURL } from '../services/context';
import Link from 'next/link';
import { useClipboard } from 'use-clipboard-copy';
import { CopyButton, ErrorMessage } from '../components/Atoms';
import ErrorPage from '../components/ErrorPage';

const DonePage = () => {
  const {
    url: { mainUrl, shortenedUrl },
  } = useURL();

  const clipboard = useClipboard({
    copiedTimeout: 2000,
  });

  const processUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/${shortenedUrl}`;
  const statUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/stats/${shortenedUrl}`;

  const copyToClipBoard = () => {
    clipboard.copy(processUrl);
  };

  if (!shortenedUrl || !mainUrl) {
    return (
      <Layout>
        <ErrorPage text=' NOT a valid URL! 😞' />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='flex flex-col space-y-2 items-center mt-16 text-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-20 w-20 text-green-400'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
          />
        </svg>
        <Link href={`/${mainUrl}`}>
          <a
            className='text-gray-300 underline max-w-full text-center overflow-hidden'
            target='_blank'
            rel='noopener noreferrer'
          >
            {mainUrl}
          </a>
        </Link>
        <p className='text-gray-300'>is now</p>
        <div className='border-gray-100 border bg-gray-600'>
          <Link href={processUrl}>
            <a
              className='text-gray-100 bg-gray-600 text-base md:text-xl px-2 py-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              {processUrl}
            </a>
          </Link>
          <CopyButton onClick={copyToClipBoard}>{clipboard.copied ? 'Copied' : 'Copy'}</CopyButton>
        </div>
        <div className='pt-4 flex flex-col items-center space-x-1'>
          <p>Statistics of the URL: </p>
          <Link href={statUrl}>
            <a target='_blank' rel='noopener noreferrer' className='inline-block hover:underline text-blue-300'>
              {statUrl}
            </a>
          </Link>
        </div>
        <Link href='/'>
          <a className='inline-block pt-5 hover:underline'>Create another</a>
        </Link>
      </div>
    </Layout>
  );
};

export default DonePage;
