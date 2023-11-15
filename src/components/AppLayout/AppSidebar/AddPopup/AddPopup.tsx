import { useEffect, useState } from 'react';
import styles from './AddPopup.module.css';

function AddPopup() {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => setIsActive(true), []);
  return (
    <div
      className={`${styles['add-popup']} ${isActive ? styles['active'] : ''}`}
    >
      AddPoup
    </div>
  );
}

export default AddPopup;
