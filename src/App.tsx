import CollapsibleList from './components/CollapsibleList/CollapsibleList';
import CollapsibleListItem from './components/CollapsibleListItem/CollapsibleListItem';
import { CollapsibleListItemDataType } from './types/appTypes';

const testData = {
  name: 'Channels',
  children: [
    { name: 'general', type: 'channel-public' },
    { name: 'engineering', type: 'channel-private' },
    { name: 'product-development', type: 'channel-private' },
    { name: 'design-team', type: 'channel-private' },
    { name: 'marketing', type: 'channel-private' },
    { name: 'sales', type: 'channel-private' },
    { name: 'support', type: 'channel-public' },
    { name: 'company-announcements', type: 'channel-public' },
    { name: 'tech-news', type: 'channel-public' },
    { name: 'random-chat', type: 'channel-public' },
  ],
};

function App() {
  return (
    <CollapsibleList name={testData.name}>
      {testData.children.map((el, i) => (
        <CollapsibleListItem
          key={`${i}-${el}`}
          data={el as CollapsibleListItemDataType}
        />
      ))}
    </CollapsibleList>
  );
}

export default App;
