import { useEffect, useState } from 'react';
import { findUsersByName } from '../api/services/usersApi';

function useAppMembers(input: string) {
  const [isLoadingMembers, setIsLoadingMembers] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<{ id: string }[] | null>(
    null
  );

  useEffect(() => {
    const abortController = new AbortController();
    const findMembers = async () => {
      try {
        setIsLoadingMembers(true);
        const { data } = await findUsersByName(input, abortController);
        if (data != null) {
          setSearchResult(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingMembers(false);
      }
    };

    findMembers();
    return () => {
      abortController.abort();
    };
  }, [input]);

  return { isLoadingMembers, searchResult };
}

export default useAppMembers;
