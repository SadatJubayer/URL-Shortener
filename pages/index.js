import React, { useState, useEffect } from 'react';
import { ErrorMessage } from '../components/Atoms';
import Layout from '../components/Layout';
import { isValidUrl } from '../utils/checkUrl';
import { shortUrl } from '../services/api';
import Router from 'next/router';
import { useURL } from '../services/context';
import URLForm from '../components/URLForm';

const IndexPage = () => {
  const { setUrl } = useURL();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  const [mainUrl, setMainUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');

  // Showing custom URL Form
  useEffect(() => {
    if (mainUrl.length > 5) {
      setShowCustom(true);
      setError(false);
    } else setShowCustom(false);
  }, [mainUrl]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate URL
    if (!mainUrl || !isValidUrl(mainUrl)) {
      setLoading(false);
      return setError('Please enter a valid URL.');
    }

    // Submit the URL
    try {
      const { data, status } = await shortUrl({
        sourceUrl: mainUrl,
        shortenedUrl: customUrl,
      });
      console.log(data);
      if (status === 200) {
        Router.push('/done');
        setUrl({
          mainUrl: mainUrl,
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

  const isVisible = !error && showCustom;

  return (
    <Layout>
      <div className='flex flex-col mt-24 justify-center items-center md:w-8/12 mx-auto'>
        <URLForm
          onSubmit={HandleSubmit}
          value={mainUrl}
          onChange={(e) => setMainUrl(e.target.value)}
          placeholder='Type/Paste your long URL'
          loading={loading}
        />
        {error && <ErrorMessage text={error} />}

        {/* Custom URL Name form */}
        <div
          className={`transition-all duration-500 w-full mt-10 transform ${
            isVisible ? 'translate-y-0 opacity-1' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className='text-center text-lg font-medium '>Need Custom URL? 🤑 </h2>
          <URLForm
            onSubmit={HandleSubmit}
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder='Write your custom name'
            loading={loading}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
