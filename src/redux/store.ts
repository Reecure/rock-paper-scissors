import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../redux/reducers/cards-reducer';
import modalReducer from '../redux/reducers/rules-reduser';
import scoreReducer from '../redux/reducers/score-slice'

export const store = configureStore({
  reducer: {
    modalRules: modalReducer,
    game: gameReducer, score: scoreReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch