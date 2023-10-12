import SidebarNewMessageIcon from '../../icons/HomeSidebarHeader/SidebarNewMessageIcon';
import SidebarSortIcon from '../../icons/HomeSidebarHeader/SidebarSortIcon';

function HomeSidebarHeader() {
  return (
    <div>
      <p>Dunder Mifflin</p>
      <SidebarSortIcon />
      <SidebarNewMessageIcon />
    </div>
  );
}

export default HomeSidebarHeader;
