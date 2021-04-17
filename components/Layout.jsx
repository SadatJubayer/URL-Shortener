import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  const meta = {
    title: 'Picchi URL - LongURL Shortener',
    description: `Short your long links into short & track them easily`,
    image: 'https://res.cloudinary.com/sadat-jubayer/image/upload/v1618677330/PICCHI_nqtevb.png',
    type: 'website',
  };

  return (
    <div className='min-h-screen bg-gray-700 text-gray-200'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://picchi.pw${router.asPath}`} />
        <link rel='canonical' href={`https://picchi.pw${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Picchi URL' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-10'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
