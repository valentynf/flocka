import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  HomeStateSlice,
  MessagePayload,
  NewChannelPayload,
} from '../../types/appTypes';
import {
  fetchChannelMessages,
  fetchChannelsData,
  rpcCreatePublicChannel,
  rpcSendMessage,
} from '../../api/services/channelsApi';

const initialState: HomeStateSlice = {
  channels: [],
  current_convo: {
    messages: [],
    channel: {
      id: NaN,
      name: '',
      type: 'public',
      participants: [],
    },
  },
};

export const getNewChannel = createAsyncThunk(
  'home/getNewChannel',
  async (channelId: number, { rejectWithValue }) => {
    const { data, error } = await fetchChannelsData([channelId]);
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

export const getChannels = createAsyncThunk(
  'home/getChannels',
  async (channelIds: number[], { rejectWithValue }) => {
    const { data, error } = await fetchChannelsData(channelIds);
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

export const getChannelConvo = createAsyncThunk(
  'home/getChannelConvo',
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

export const createNewChannel = createAsyncThunk(
  'home/createNewChannel',
  async ({ channel_name, user_id }: NewChannelPayload, { rejectWithValue }) => {
    const { data, error } = await rpcCreatePublicChannel(channel_name, user_id);
    if (error) {
      rejectWithValue(error);
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
    builder.addCase(getNewChannel.fulfilled, (state, { payload }) => {
      if (payload && state.channels) {
        state.channels.push(payload[0]);
      }
    }),
      builder.addCase(getChannels.fulfilled, (state, { payload }) => {
        state.channels = payload;
      });
    builder.addCase(getChannelConvo.fulfilled, (state, { payload }) => {
      if (payload) {
        state.current_convo.messages = payload.messages;
      }
    });
  },
});

export const { addNewMessage, setCurrentChannel } = homeSlice.actions;
export default homeSlice.reducer;
