import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Drug } from "../../types/drug";
// const fetchDrugs=createAsyncThunk(
//     "user/setUserData",
//     async (id: AxiosRequestConfig) =>
//       await getUser(id)
//         .then((resp) => resp.data)
//         .catch((err) => err)
//   );

const initialState: Drug[] = [];
export const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default drugsSlice.reducer;
