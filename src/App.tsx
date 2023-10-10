import CollapsibleList from './components/CollapsibleList/CollapsibleList';
import CollapsibleListChannelItem from './components/CollapsibleListChannelItem/CollapsibleListIChanneltem';
import CollapsibleListDMessageItem from './components/CollapsibleListDMessageItem/CollapsibleListDMessageItem';
import {
  CollapsibleListChannelItemDataType,
  CollapsibleListDMessageItemDataType,
} from './types/appTypes';

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
    { name: 'Shrek', status: 'online', type: 'direct-message' },
    { name: 'Fiona', status: 'offline', type: 'direct-message' },
    { name: 'Donkey', status: 'online', type: 'direct-message' },
    { name: 'Puss in Boots', status: 'online', type: 'direct-message' },
  ],
};

function App() {
  return (
    <CollapsibleList name={testData.name}>
      {testData.children.map((el, i) => {
        if (el.type === 'channel-public' || el.type === 'channel-private') {
          return (
            <CollapsibleListChannelItem
              //still very poor keys generation, change this
              key={`${i}-${el.name}`}
              data={el as CollapsibleListChannelItemDataType}
            />
          );
        }
        if (el.type === 'direct-message') {
          return (
            <CollapsibleListDMessageItem
              //still very poor keys generation, change this
              key={`${i}-${el.name}`}
              data={
                {
                  name: el.name,
                  status: el.status,
                } as CollapsibleListDMessageItemDataType
              }
            />
          );
        }
      })}
    </CollapsibleList>
  );
}

export default App;
