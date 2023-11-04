import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeStateSlice } from '../../types/appTypes';
import {
  fetchChannelsData,
  fetchCurrentChannel,
} from '../../api/services/channelsApi';

const initialState: HomeStateSlice = {
  channels: [],
  current_convo: {
    messages: [],
    channel: {
      id: NaN,
      name: '',
      type: 'public',
    },
  },
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
  reducers: {
    addNewMessage(state, { payload }) {
      state.current_convo?.messages.unshift(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.fulfilled, (state, { payload }) => {
      state.channels = payload;
    });
    builder.addCase(fetchChannelConvo.fulfilled, (state, { payload }) => {
      if (payload) {
        const { id, name, type, messages } = payload;
        state.current_convo.channel = { id, name, type };
        state.current_convo.messages = messages;
      }
    });
  },
});

export const { addNewMessage } = homeSlice.actions;
export default homeSlice.reducer;
