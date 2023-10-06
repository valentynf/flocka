import { useState } from 'react';

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
    <div>
      <button onClick={() => setIsCollapsed((cur) => !cur)}>▼</button>
      <p>{data.name}</p>
      {isCollapsed && (
        <ul>
          {data.children.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollapsibleList;
