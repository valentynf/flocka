import { useEffect, useState } from 'react';
import { checkExistingChannel } from '../api/services/channelsApi';

function useExistingChannel(name: string) {
  const [isExistingChannel, setSsExistingChannel] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const checkNewChannel = async () => {
      try {
        const exists = await checkExistingChannel(name, abortController);
        setSsExistingChannel(exists);
      } catch (error) {
        console.error(`Couldn't check if channel exists: ${error}`);
      }
    };
    checkNewChannel();
    return () => {
      abortController.abort();
    };
  }, [name]);

  return isExistingChannel;
}

export default useExistingChannel;
