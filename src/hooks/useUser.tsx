import { useContext } from 'react';
import { UserContext } from '../components/UserContext/UserContext';

function useUser() {
  return useContext(UserContext);
}

export default useUser;
