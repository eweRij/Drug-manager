import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { RootState } from "../../store/store";
import { getUserId } from "../../utils/auth";
import { getUser } from "../../utils/api";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  drugs?: Array<string>;
  avatar?: string;
}
interface AppState {
  isLogged: string | null;
  userData: UserData;
}
export const fetchUser = createAsyncThunk(
  "user/setUserData",
  async (id: AxiosRequestConfig) =>
    await getUser(id)
      .then((resp) => resp.data)
      .catch((err) => err)
);

const initialState: AppState = {
  isLogged: getUserId(), // user._id z local storage
  userData: { first_name: "", last_name: "", email: "", drugs: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state: AppState) => {
      console.log(getUserId());
      return { ...state, isLogged: getUserId() };
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
