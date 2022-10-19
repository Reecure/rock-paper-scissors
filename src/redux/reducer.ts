import { createSlice } from '@reduxjs/toolkit';

type Card = {
  name: string;
};

const initialState: Card = {
  name: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    paper: (state) => {
      state.name = 'paper';
    },
    scissors: (state) => {
      state.name = 'scissors';
    },
    rock: (state) => {
      state.name = 'rock';
    },
  },
});

export const { paper, scissors, rock } = gameSlice.actions;
export const selectCard = (state: any) => state.game.name;
export default gameSlice.reducer;
