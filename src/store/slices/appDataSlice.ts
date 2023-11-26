import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDataStateSlice } from '../../types/appTypes';
import { fetchUsersData } from '../../api/services/usersApi';
import { usersDataToRecord } from '../../utils/helper';

const initialState: AppDataStateSlice = {
  users_data: {},
};

export const getUsersData = createAsyncThunk(
  'app-data/getUsersData',
  async (_, { rejectWithValue }) => {
    const { data, error } = await fetchUsersData();
    if (error || data === null) {
      return rejectWithValue(error);
    }
    return usersDataToRecord(data);
  }
);

const appDataSlice = createSlice({
  name: 'app-data',
  initialState,
  reducers: {
    addNewUserRecord(state, { payload }) {
      state.users_data = { ...state.users_data, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersData.fulfilled, (state, { payload }) => {
      state.users_data = payload;
    });
  },
});

export const { addNewUserRecord } = appDataSlice.actions;
export default appDataSlice.reducer;
