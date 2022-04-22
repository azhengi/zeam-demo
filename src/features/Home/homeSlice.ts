import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "../../app/store";

import { fetchGameList, GameData } from "./homeAPI";

const STATUS_DONE = "DONE";
const STATUS_LOADING = "LOADING";
interface State {
    gameList: Array<GameData>;
    status: typeof STATUS_DONE | typeof STATUS_LOADING;
}

const initialState: State = {
    gameList: [],
    status: STATUS_DONE,
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
        builder
            .addCase(getGameList.pending, (state) => {
                state.status = STATUS_LOADING;
            })
            .addCase(getGameList.fulfilled, (state, action) => {
                state.gameList = action.payload;
                state.status = STATUS_DONE;
            });
    },
});

export const selectGames = (state: AppState) => state._.gameList;
export const selectStatus = (state: AppState) => state._.status;

export default main.reducer;
