import {
  Channel,
  DirectMessageItemData,
  RootState,
} from '../../../../types/appTypes';
import CollapsibleList from './CollapsibleList/CollapsibleList';
import ChannelItem from './CollapsibleList/ChannelItem/Channeltem';
import DirectMessageItem from './CollapsibleList/DirectMessageItem/DirectMessageItem';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import QuickAccess from './QuickAccess/QuickAccess';
import styles from './HomeSideBar.module.css';
import { useSelector } from 'react-redux';

const starredData = {
  name: 'Starred',
  children: [
    { name: 'dunder-mifflin-general', type: 'channel-public' },
    { name: 'schrute-farms-events', type: 'channel-private' },
    { name: 'delivery', type: 'channel-private' },
    { name: 'dundie-awards', type: 'channel-private' },
    { name: 'Kelly Kapoor', status: 'offline', type: 'direct-message' },
    { name: 'Stanley Hudson', status: 'online', type: 'direct-message' },
    { name: 'wuphf-marketing', type: 'channel-private' },
    { name: 'sprinkles-photos', type: 'channel-private' },
    { name: 'creed-thoughts', type: 'channel-public' },
    { name: 'michael-scott-forwards', type: 'channel-public' },
    { name: 'operation-midnight', type: 'channel-public' },
    { name: 'office-pranks', type: 'channel-private' },
  ],
};

const directMessagesData = {
  name: 'Direct Messages',
  children: [
    { name: 'Jim Halpert', status: 'online', type: 'direct-message' },
    { name: 'Pam Beesly', status: 'offline', type: 'direct-message' },
    { name: 'Dwight Schrute', status: 'online', type: 'direct-message' },
    { name: 'Michael Scott', status: 'offline', type: 'direct-message' },
    { name: 'Ryan Howard', status: 'online', type: 'direct-message' },
    { name: 'Angela Martin', status: 'offline', type: 'direct-message' },
    { name: 'Oscar Martinez', status: 'online', type: 'direct-message' },
    { name: 'Creed Bratton', status: 'online', type: 'direct-message' },
  ],
};

function HomeSideBar() {
  function renderStarredContent(
    item: (typeof starredData)['children'][number]
  ) {
    if (item.type === 'direct-message') {
      return (
        <DirectMessageItem
          //still very poor keys generation, change this
          key={`${item.name}`}
          data={
            {
              name: item.name,
              status: item.status,
            } as DirectMessageItemData
          }
        />
      );
    }
    return (
      <ChannelItem
        //still very poor keys generation, change key generation
        key={`${item.name}`}
        data={item as Channel}
      />
    );
  }

  const channelsData = useSelector((state: RootState) => state.home.channels);

  return (
    <div className={styles['home-sidebar']}>
      <SidebarHeader />
      <div className={styles['home-sidebar-content']}>
        <QuickAccess />
        {/* <CollapsibleList name={starredData.name}>
          {starredData.children.map(renderStarredContent)}
        </CollapsibleList> */}
        {channelsData && (
          <CollapsibleList name={'Channels'}>
            {channelsData.map((el) => (
              <ChannelItem key={el.id} data={el as Channel} />
            ))}
          </CollapsibleList>
        )}
        {/* <CollapsibleList name={directMessagesData.name}>
          {directMessagesData.children.map((el, i) => (
            <DirectMessageItem
              //still very poor keys generation, change this
              key={`${i}-${el.name}`}
              data={
                {
                  name: el.name,
                  status: el.status,
                } as DirectMessageItemData
              }
            />
          ))}
        </CollapsibleList> */}
      </div>
    </div>
  );
}

export default HomeSideBar;
