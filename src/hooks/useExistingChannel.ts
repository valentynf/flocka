import { useEffect, useState } from 'react';
import { checkExistingChannel } from '../api/services/channelsApi';

function useExistingChannel(name: string) {
  const [isExistingChannel, setIsExistingChannel] = useState<boolean>(false);
  const [isCheckingExistingChannel, setIsCheckingExistingChannel] =
    useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const checkNewChannel = async () => {
      try {
        setIsCheckingExistingChannel(true);
        const exists = await checkExistingChannel(name, abortController);
        setIsExistingChannel(exists);
      } catch (error) {
        console.error(`Couldn't check if channel exists: ${error}`);
      } finally {
        setIsCheckingExistingChannel(false);
      }
    };
    checkNewChannel();
    return () => {
      abortController.abort();
    };
  }, [name]);

  return { isExistingChannel, isCheckingExistingChannel };
}

export default useExistingChannel;
