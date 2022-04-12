import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";
// import { getToken } from "../../utils/auth";
import { getUser } from "../../utils/api";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  drugs?: Array<string>;
  avatar?: string;
}
interface AppState {
  isLogged: boolean;
  userData: UserData;
}
export const fetchUser = createAsyncThunk(
  "user/setUserData",
  async (id) =>
    await getUser(id)
      .then((resp) => resp.data)
      .catch((err) => err)
);

const initialState: AppState = {
  isLogged: false, // user._id z local storage
  userData: { first_name: "", last_name: "", email: "", drugs: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state: AppState) => {
      console.log(state);
      // console.log(action.payload);
      return { ...state, isLogged: true };
    },
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action) => {
      return {
        ...state,
        userData: {
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
