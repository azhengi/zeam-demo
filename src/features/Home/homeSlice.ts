import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "../../app/store";

import { fetchGameList, GameData } from "./homeAPI";

interface State {
    gameList: Array<GameData>
}

const initialState: State = {
    gameList: []
};

export const getGameList = createAsyncThunk("home/getList", async (params) => {
    const response = await fetchGameList(params);
    return response.data;
});

export const main = createSlice({
    name: "_/",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGameList.pending, (state) => {
            }).addCase(getGameList.fulfilled, (state, action) => {
                state.gameList = action.payload;
            });
    },
});

export const selectGames = (state: AppState) => state._.gameList;

export default main.reducer;
