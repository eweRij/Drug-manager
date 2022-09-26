import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getLogged, getUserId } from "../../../utils/auth";
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
  id: getUserId(),
  userData: { _id: "", first_name: "", last_name: "", email: "", drugs: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state: AppState) => {
      return { ...state, isLogged: getLogged() };
    },
    setId: (state: AppState) => {
      console.log(getUserId());
      return { ...state, id: getUserId() };
    },
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action) => {
      console.log(action.payload);
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

export const { setLogged, setId } = userSlice.actions;

export const selectUserLogged = (state: RootState) => state.user.isLogged;
export const selectUserId = (state: RootState) => state.user.id;
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
