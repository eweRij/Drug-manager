import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getLogged } from "../../../utils/auth";
import { getUser } from "../../../utils/api";
import { AppState } from "../../../types/state";
import { RootState } from "../../store";

export const fetchUser = createAsyncThunk(
  "user/setUserData",
  async (id: string) =>
    await getUser(id)
      .then((resp) => resp.data)
      .catch((err) => err)
);

const initialState: AppState = {
  isLogged: getLogged(), //do przerobki
  userData: { _id: "", first_name: "", last_name: "", email: "", drugs: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state: AppState) => {
      return { ...state, isLogged: getLogged() };
    },
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action) => {
      return {
        ...state,
        userData: {
          _id: action.payload._id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
          drugs: action.payload.drugs,
          avatar: action.payload.avatar,
        },
      };
    },
  },
});

export const { setLogged } = userSlice.actions;

export const selectUserLogged = (state: RootState) => state.user.isLogged;
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
