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

export const addNewChannel = createAsyncThunk(
  'home/addNewChannel',
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
    builder.addCase(getChannels.fulfilled, (state, { payload }) => {
      state.channels = payload;
    });
    builder.addCase(getChannelConvo.fulfilled, (state, { payload }) => {
      if (payload) {
        state.current_convo.messages = payload.messages;
      }
    });
    //a-la realtime update when new channel is added
    builder.addCase(addNewChannel.fulfilled, (state, { payload }) => {
      if (state.channels && payload) {
        state.channels.push(payload);
      }
    });
  },
});

export const { addNewMessage, setCurrentChannel } = homeSlice.actions;
export default homeSlice.reducer;
