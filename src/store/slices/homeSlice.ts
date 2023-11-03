import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeStateSlice } from '../../types/appTypes';
import {
  fetchChannelsData,
  fetchCurrentChannel,
} from '../../api/services/channelsApi';

const initialState: HomeStateSlice = {
  channels: [],
  current_convo: null,
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

export const fetchChannelConvo = createAsyncThunk(
  'home/fetchChannelConvo',
  async (channelId: number, { rejectWithValue }) => {
    const { data, error } = await fetchCurrentChannel(channelId);
    if (error) {
      rejectWithValue(error.message);
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
    builder.addCase(fetchChannelConvo.fulfilled, (state, { payload }) => {
      state.current_convo = payload;
    });
  },
});

export default homeSlice.reducer;
