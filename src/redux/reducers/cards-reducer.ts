import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store";

interface Result {
    result: string,
    side: number
}

function getRandomSide() {
    return Math.floor(Math.random() * 3);
    // 0 paperSide
    // 1 scissorsSide
    // 2 rockSide
}

function gameResult(selectedSide: string) : Result  {
    const side = getRandomSide()
    if (
        (selectedSide === 'paper' && side === 0) ||
        (selectedSide === 'scissors' && side === 1) ||
        (selectedSide === 'rock' && side === 2)
    ) {
        return {result: 'IT`S TIE', side};
    } else if (
        (selectedSide === 'paper' && side === 1) ||
        (selectedSide === 'rock' && side === 0) ||
        (selectedSide === 'scissors' && side === 2)
    ) {
        return {result: 'YOU LOSE', side};

    } else if (
        (selectedSide === 'paper' && side === 2) ||
        (selectedSide === 'rock' && side === 1) ||
        (selectedSide === 'scissors' && side === 0)
    ) {
        return {result: 'YOU WIN', side};
    }
    return {result: "", side: 0}
}

type Card = {
    name: string;
    score: 0
    result: string
    compSide: number
};

const initialState: Card = {
    name: '',
    score: 0,
    result: "",
    compSide: 0
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    paper: (state) => {
        let res = gameResult("paper")
        if (res.result === "YOU WIN"){
            state.score += 1
        }
        state.compSide = res.side
        state.result = res.result
        state.name = 'paper';
    },
    scissors: (state) => {
        let res = gameResult("scissors")
        if (res.result === "YOU WIN"){
            state.score += 1
        }
        state.compSide = res.side
        state.result = res.result
        state.name = 'scissors';
    },
    rock: (state) => {
        let res = gameResult("rock")
        if (res.result === "YOU WIN"){
            state.score += 1
        }
        state.compSide = res.side
        state.result = res.result
        state.name = 'rock';
    },
  },
});

export const { paper, scissors, rock } = gameSlice.actions;
export const selectCard = (state: RootState) => state.game;
export default gameSlice.reducer;
