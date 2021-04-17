import Link from 'next/link';
import React from 'react';
import ErrorPage from '../components/ErrorPage';
import Layout from '../components/Layout';

import { breakUrl } from '../services/api';

const RedirectPage = () => {
  return (
    <Layout>
      <ErrorPage text='Invalid URL!' />
      <Link href='/'>
        <a className='flex justify-center mt-5 hover:underline'>Go to Home</a>
      </Link>
    </Layout>
  );
};

export default RedirectPage;

export async function getServerSideProps({ query, res }) {
  try {
    const { data } = await breakUrl(query.url);
    if (data.url?.sourceUrl) {
      res.writeHead(301, { location: data.url.sourceUrl });
      res.end();
    }
  } catch (error) {
    // console.log(error);
  }

  return {
    props: {},
  };
}
