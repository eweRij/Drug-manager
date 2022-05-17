import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import drugsReducer from "./features/drugs/drugsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    drugs: drugsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
