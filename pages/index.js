import React, { useEffect, useRef, useState } from 'react';
import { Button, ErrorMessage, Input } from '../components/Atoms';
import Layout from '../components/Layout';
import { isValidUrl } from '../utils/checkUrl';
const IndexPage = () => {
  const [error, setError] = useState('');
  const [input, setInput] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate URL
    if (!input || !isValidUrl(input)) {
      return setError('Please enter a valid URL.');
    }

    // Submit the URL
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
          <Button type='submit'>Short it!</Button>
        </form>
        {error && <ErrorMessage text={error} />}
      </div>
    </Layout>
  );
};

export default IndexPage;
