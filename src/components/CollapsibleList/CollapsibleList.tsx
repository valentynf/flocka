import { useState } from 'react';
import styles from './CollapsibleList.module.css';
import CollapsibleListItem from '../CollapsibleListItem/CollapsibleListItem';

type CollapsibleListPropType = {
  data: CollapsibleListDataType;
};

type CollapsibleListDataType = {
  name: string;
  children: string[];
};

function CollapsibleList({ data }: CollapsibleListPropType) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={styles['collapsible-list']}>
      <div className={styles['list-header']}>
        <button onClick={() => setIsCollapsed((cur) => !cur)}>▼</button>
        <p>{data.name}</p>
      </div>
      {isCollapsed && (
        <ul>
          {data.children.map((el, i) => (
            //temporary key solution with name and i - very bad
            <CollapsibleListItem key={`${i}-${el}`} name={el} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollapsibleList;
