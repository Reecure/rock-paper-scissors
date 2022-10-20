import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../redux/reducers/cards-reducer';
import modalReducer from '../redux/reducers/rules-reduser';

export const store = configureStore({
  reducer: {
    modalRules: modalReducer,
    game: gameReducer,
  },
});
