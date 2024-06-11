export const updateHash = (hash, setHash, markSectionViewed) => {
    if (window.location.hash !== `#${hash}`) {
      window.history.pushState(null, null, `#${hash}`);
      if (typeof setHash === 'function') {
        setHash(hash);
      }
      if (typeof markSectionViewed === 'function') {
        markSectionViewed(hash);
      }
    }
  };
  