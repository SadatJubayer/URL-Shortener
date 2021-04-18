import React from 'react';
import { Button, Input } from './Atoms';

const URLForm = ({ loading, placeholder, value, onChange, onSubmit }) => {
  return (
    <form className='flex w-full my-2.5' onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} type='text' placeholder={placeholder} />
      <Button type='submit' loading={loading}>
        Short it!
      </Button>
    </form>
  );
};

export default URLForm;
