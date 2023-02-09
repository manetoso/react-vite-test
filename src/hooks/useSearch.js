import { useEffect, useRef, useState } from 'react';

export const useSearch = () => {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError('The title is required!');
      return;
    }
    if (search.length < 3) {
      setError('Must have 3 carcaters at least!');
      return;
    }
    setError(null)
  }, [search]);

  return {
    search,
    updateSearch,
    error,
  };
};
