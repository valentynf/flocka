import styles from './CollapsibleList.module.css';
import { useState } from 'react';

import { CollapsibleListPropType } from '../../types/appTypes';
import CollapsibleListItem from '../CollapsibleListItem/CollapsibleListItem';
import ToggleShowChannelsIcon from '../../icons/ToggleShowChannelsIcon';

function CollapsibleList({ data }: CollapsibleListPropType) {
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
        <p>{data.name}</p>
      </div>
      {isExpanded && (
        <ul>
          {data.children.map((el, i) => (
            //temporary key solution with name and i - very bad
            <CollapsibleListItem key={`${i}-${el}`} data={el} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollapsibleList;
