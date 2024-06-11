import { createContext, useState, useContext } from 'react';

const HashContext = createContext();

export const HashProvider = ({ children }) => {
  const [hash, setHash] = useState('');
  const [viewedSections, setViewedSections] = useState(new Set());

  const markSectionViewed = (section) => {
    setViewedSections(prev => new Set(prev).add(section));
  };

  return (
    <HashContext.Provider value={{ hash, setHash, viewedSections, markSectionViewed }}>
      {children}
    </HashContext.Provider>
  );
};

export const useHash = () => useContext(HashContext);
