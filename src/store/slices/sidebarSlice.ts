import { createSlice } from '@reduxjs/toolkit';
import { SidebarStateSlice } from '../../types/appTypes';

const initialState: SidebarStateSlice = {
  current_tab: 'HOME',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCurrentTab(state, { payload }) {
      if (state.current_tab != payload) {
        console.log('changed');
        state.current_tab = payload;
      }
    },
  },
});

export const { setCurrentTab } = sidebarSlice.actions;
export default sidebarSlice.reducer;
