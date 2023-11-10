import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeStateSlice, MessagePayload } from '../../types/appTypes';
import {
  fetchChannelMessages,
  fetchChannelsData,
  rpcSendMessage,
} from '../../api/services/channelsApi';

const initialState: HomeStateSlice = {
  channels: [],
  current_convo: {
    // add isLoading state to fix the UI bug when channel info is changed
    // but previous channel messages are shown for a moment
    messages: [],
    channel: {
      id: NaN,
      name: '',
      type: 'public',
      participants: [],
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
    const { data, error } = await fetchChannelMessages(channelId);
    if (error) {
      rejectWithValue(error.message);
    }
    return data;
  }
);

export const sendMessage = createAsyncThunk(
  'home/sendMessage',
  async ({ channelId, message }: MessagePayload, { rejectWithValue }) => {
    const { data, error } = await rpcSendMessage(channelId, message);
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
      state.current_convo.messages.unshift(payload);
    },
    setCurrentChannel(state, { payload }) {
      state.current_convo.channel = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.fulfilled, (state, { payload }) => {
      state.channels = payload;
    });
    builder.addCase(fetchChannelConvo.fulfilled, (state, { payload }) => {
      if (payload) {
        state.current_convo.messages = payload.messages;
      }
    });
  },
});

export const { addNewMessage, setCurrentChannel } = homeSlice.actions;
export default homeSlice.reducer;
