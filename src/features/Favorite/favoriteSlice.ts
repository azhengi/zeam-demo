import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from "../../app/store";

interface State {
    favoriteIds: Array<number>;
};

const initialState: State = {
    favoriteIds: []
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavoriteGame: (state: State, action: PayloadAction<number>) => {
            const id = action.payload;
            const bool = state.favoriteIds.includes(id);
            if (!bool) {
                state.favoriteIds.push(id);
            }
        },
        removeFavoriteGame: (state: State, action: PayloadAction<number>) => {
            const id = action.payload;
            const targetIndex = state.favoriteIds.findIndex((item) => item === id);
            if (targetIndex >= 0) {
                state.favoriteIds.splice(targetIndex, 1);
            }
        }
    },
});

export const { addFavoriteGame, removeFavoriteGame } = favoriteSlice.actions;

export const selectFavorites = (state: AppState) => state.favorite.favoriteIds;

export default favoriteSlice.reducer;