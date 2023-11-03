import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store";

type ScoreState = {
    score: number;
};

const initialState: ScoreState = {
    score: 0,
};

const scoreSlice = createSlice({
    name: 'modalRules',
    initialState,
    reducers: {
        increaseScore: (state) => {
            state.score += 1;
        },
    },
});

export const { increaseScore } = scoreSlice.actions;
export const scoreSelector = (state: RootState) => state.score.score;
export default scoreSlice.reducer;
