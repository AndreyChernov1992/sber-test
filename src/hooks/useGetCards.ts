import axios from 'axios';
import { useState, useEffect } from 'react';
import { fetchCards } from '~/store/api/fetchCards';
import useSearchParamsStore from '~/store/searchParamsStore/searchParams';
import { ICardResults } from '~/types/card';

export const useGetCards = () => {
  const { language, page } = useSearchParamsStore();
  const [data, setData] = useState<ICardResults | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      setError(null);
      try {
        const result = await fetchCards({ language, page });
        setData(result);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'An error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsFetching(false);
      }
    };

    getData();
  }, [language, page]);

  return { data, isFetching, error };
};
