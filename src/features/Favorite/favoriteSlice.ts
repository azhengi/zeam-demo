import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    favoriteIds: Array<string>;
};

const initialState: State = {
    favoriteIds: []
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavoriteGame: (state, action: PayloadAction<{id: string}>) => {
            const id = action.payload.id;
            state.favoriteIds.push();
        },
        removeFavoriteGame: (state, action: PayloadAction<{id: string}>) => {
            const id = action.payload.id;
            state.favoriteIds;
        }
    },
});

export default favoriteSlice.reducer;