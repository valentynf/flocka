import styles from './CollapsibleList.module.css';
import { useState } from 'react';

import ToggleShowChannelsIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/ToggleShowChannelsIcon';

export type CollapsibleListProps = {
  name: string;
  children: React.ReactNode[];
};

function CollapsibleList({ name, children }: CollapsibleListProps) {
  const [isExpanded, setisExpanded] = useState(false);
  const toggleExpanded = () => setisExpanded((cur) => !cur);
  return (
    <div className={styles['collapsible-list']}>
      <div className={styles['list-header']}>
        <button
          className={`${styles['expand-button']} ${
            isExpanded ? styles['expand-list'] : styles['collapse-list']
          }`}
          onClick={toggleExpanded}
        >
          <ToggleShowChannelsIcon />
        </button>
        <p>{name}</p>
      </div>
      {isExpanded && <ul className={styles['items']}>{children}</ul>}
    </div>
  );
}

export default CollapsibleList;
