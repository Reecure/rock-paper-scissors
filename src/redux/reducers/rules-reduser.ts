import { createSlice } from '@reduxjs/toolkit';

type Close = {
  open: boolean;
};

const initialState: Close = {
  open: false,
};

const openModal = createSlice({
  name: 'modalRules',
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = openModal.actions;
export const modalToggler = (state: any) => state.modalRules.open;
export default openModal.reducer;
