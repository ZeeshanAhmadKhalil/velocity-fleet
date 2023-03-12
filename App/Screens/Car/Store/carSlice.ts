import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'car',
    initialState: {
        addCarDialog: false,
    },
    reducers: {
        setAddCarDialog: (state, action) => {
            state.addCarDialog = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setAddCarDialog,
} = carSlice.actions;

export default carSlice.reducer;