import {
  CollapsibleListChannelItemDataType,
  CollapsibleListDMessageItemDataType,
} from '../../types/appTypes';
import CollapsibleList from '../CollapsibleList/CollapsibleList';
import CollapsibleListChannelItem from '../CollapsibleListChannelItem/CollapsibleListIChanneltem';
import CollapsibleListDMessageItem from '../CollapsibleListDMessageItem/CollapsibleListDMessageItem';
import HomeSidebarHeader from '../HomeSidebarHeader/HomeSidebarHeader';
import HomeSideBarQuickAccess from '../HomeSidebarQuickAccess/HomeSideBarQuickAccess';
import styles from './HomeSideBar.module.css';

const channelsData = {
  name: 'Channels',
  children: [
    { name: 'team-meetings', type: 'channel-public' },
    { name: 'project-planning', type: 'channel-private' },
    { name: 'budget-review', type: 'channel-private' },
    { name: 'client-pitches', type: 'channel-public' },
    { name: 'sales-strategies', type: 'channel-private' },
    { name: 'task-delegation', type: 'channel-private' },
    { name: 'company-updates', type: 'channel-public' },
    { name: 'product-development', type: 'channel-private' },
    { name: 'creative-brainstorming', type: 'channel-private' },
    { name: 'customer-feedback', type: 'channel-public' },
    { name: 'employee-onboarding', type: 'channel-private' },
    { name: 'market-research', type: 'channel-private' },
    { name: 'leadership-discussions', type: 'channel-public' },
    { name: 'office-announcements', type: 'channel-public' },
    { name: 'team-building-ideas', type: 'channel-private' },
  ],
};

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
        <CollapsibleListDMessageItem
          //still very poor keys generation, change this
          key={`${item.name}`}
          data={
            {
              name: item.name,
              status: item.status,
            } as CollapsibleListDMessageItemDataType
          }
        />
      );
    }
    return (
      <CollapsibleListChannelItem
        //still very poor keys generation, change this
        key={`${item.name}`}
        data={item as CollapsibleListChannelItemDataType}
      />
    );
  }

  return (
    <div className={styles['home-sidebar']}>
      <HomeSidebarHeader />
      <div className={styles['home-sidebar-content']}>
        <HomeSideBarQuickAccess />
        <CollapsibleList name={starredData.name}>
          {starredData.children.map(renderStarredContent)}
        </CollapsibleList>
        <CollapsibleList name={channelsData.name}>
          {channelsData.children.map((el, i) => (
            <CollapsibleListChannelItem
              //still very poor keys generation, change this
              key={`${i}-${el.name}`}
              data={el as CollapsibleListChannelItemDataType}
            />
          ))}
        </CollapsibleList>
        <CollapsibleList name={directMessagesData.name}>
          {directMessagesData.children.map((el, i) => (
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
          ))}
        </CollapsibleList>
      </div>
    </div>
  );
}

export default HomeSideBar;
