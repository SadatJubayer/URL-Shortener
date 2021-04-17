import { createContext, useContext, useState } from 'react';

const urlContext = createContext();

export const URLContext = ({ children }) => {
  const [url, setUrl] = useState({});

  return <urlContext.Provider value={{ url, setUrl }}>{children}</urlContext.Provider>;
};

export const useURL = () => {
  return useContext(urlContext);
};
