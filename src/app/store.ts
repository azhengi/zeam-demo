import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import homeReducer from "../features/Home/homeSlice";
import favoriteSlice from "../features/Favorite/favoriteSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            _: homeReducer,
            counter: counterReducer,
            favorite: favoriteSlice,
        },
    });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
