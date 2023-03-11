import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'car',
    initialState: {
        addCarDialogue: false,
    },
    reducers: {
        setAddCarDialog: (state, action) => {
            state.addCarDialogue = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setAddCarDialog,
} = carSlice.actions;

export default carSlice.reducer;