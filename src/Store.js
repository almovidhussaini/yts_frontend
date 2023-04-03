import { configureStore } from "@reduxjs/toolkit";
// import UserSlice from "./redux-slice/UserSlice";
// import ItemSlice from "./redux-slice/ItemSlice";
import MoviesSlice from "./reduxSlice/MoviesSlice";

export const Store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    reducer:{
        movies: MoviesSlice
        
    }
})