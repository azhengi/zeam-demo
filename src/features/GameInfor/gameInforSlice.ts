/* import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "../../app/store";

import { fetchGame, GameDetail } from "./gameInforAPI";

interface State {
    detail: GameDetail;
}

const initialState: State = {};

export const getGameInfo = createAsyncThunk("infor/game", async (params) => {
    const response = await fetchGame(params);
    return response.data;
});

export const gameInforSlice = createSlice({
    name: "infor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGameInfo.pending, (state) => {})
            .addCase(getGameInfo.fulfilled, (state, action) => {
                state.gameList = action.payload;
            });
    },
});

export const selectGameInfo = (state: AppState) => state.infor.detail;

export default gameInforSlice.reducer;
 */