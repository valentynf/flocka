import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeStateSlice } from '../../types/appTypes';
import { fetchChannelsData } from '../../api/services/channelsApi';

const initialState: HomeStateSlice = {
  channels: [],
};

export const fetchChannels = createAsyncThunk(
  'home/fetchChannels',
  async (channelIds: number[], { rejectWithValue }) => {
    const { data, error } = await fetchChannelsData(channelIds);
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.fulfilled, (state, { payload }) => {
      state.channels = payload;
    });
  },
});

export default homeSlice.reducer;
