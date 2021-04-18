import Link from 'next/link';
import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import Layout from '../../components/Layout';
import StatCard from '../../components/StatCard';

import { getStats } from '../../services/api';

const StatPage = ({ stats, url }) => {
  console.log(stats);

  if (!stats) {
    return (
      <Layout>
        <ErrorPage text='Invalid URL!' />
        <Link href='/'>
          <a className='flex justify-center mt-5 hover:underline'>Go to Home</a>
        </Link>
      </Layout>
    );
  }

  const clientURL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${url}`;

  return (
    <Layout>
      <div className='flex flex-col mt-10'>
        <h2 className='text-xl font-medium text-gray-300'>
          &rarr; &nbsp; Status of the URL{' '}
          <Link href={clientURL}>
            <a target='_blank' className='underline text-blue-400' rel='noopener noreferrer'>
              {clientURL}
            </a>
          </Link>
        </h2>
        {/* TODO: Get hits by day, week month form API */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
          <StatCard count={stats?.totalHits} text='Clicks' color='#03203C' topText='Today' />
          <StatCard count={stats?.totalHits} text='Clicks' color='#1C8D73' topText='This week' />
          <StatCard count={stats?.totalHits} text='Clicks' color='#A77B06' topText='This month' />
          <StatCard count={stats?.totalHits} text='Clicks' color='#6A1B4D' topText='All time' />
        </div>

        <h2 className='mt-10 text-xl font-medium text-gray-300'>&rarr; &nbsp; Clicks from countries</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
          {stats?.stats?.Country?.map((c) => (
            <StatCard key={c.name} count={c.hits} text={c.name} color='#8D3DAF' />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StatPage;

export async function getServerSideProps({ query }) {
  try {
    const { data } = await getStats(query.url);
    return {
      props: {
        stats: data.stats,
        url: query.url,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
