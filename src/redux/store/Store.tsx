import { configureStore } from "@reduxjs/toolkit";
import sidebarSilce from "../reducers/sidebarSilce";

export const store = configureStore({
  reducer: {
    CatsCatergory: sidebarSilce,
  },
});

export type AppDispatch = typeof store.dispatch;