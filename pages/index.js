import React, { useState } from 'react';
import { Button, ErrorMessage, Input } from '../components/Atoms';
import Layout from '../components/Layout';
import { isValidUrl } from '../utils/checkUrl';
import { shortUrl } from '../services/api';
import Router from 'next/router';
import { useURL } from '../services/context';

const IndexPage = () => {
  // const router = useRouter();
  const { setUrl } = useURL();
  const [error, setError] = useState('');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate URL
    if (!input || !isValidUrl(input)) {
      setLoading(false);
      return setError('Please enter a valid URL.');
    }

    // Submit the URL
    try {
      const { data, status } = await shortUrl({
        sourceUrl: input,
      });
      console.log(data);
      if (status === 200) {
        Router.push('/done');
        setUrl({
          mainUrl: input,
          shortenedUrl: data.shortenedUrl,
        });
      }
    } catch (error) {
      console.log({ error });
      setError('Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className='flex flex-col mt-24 justify-center items-center md:w-8/12 mx-auto'>
        <form className='flex w-full' onSubmit={HandleSubmit}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            autoFocus
            placeholder='Type/Paste your long URL'
          />
          <Button type='submit' loading={loading}>
            Short it!
          </Button>
        </form>
        {error && <ErrorMessage text={error} />}
      </div>
    </Layout>
  );
};

export default IndexPage;
