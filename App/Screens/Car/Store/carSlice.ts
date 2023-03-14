import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'car',
    initialState: {
        addCarDialog: false,
        editCarId: 0,
    },
    reducers: {
        setAddCarDialog: (state, action) => {
            state.addCarDialog = action.payload
            state.editCarId = 0
        },
        editAddCarDialog: (state, action) => {
            state.addCarDialog
                = action.payload.addCarDialog
            state.editCarId
                = action.payload.editCarId
        }
    },
    extraReducers: {
    },
});

export const {
    setAddCarDialog,
    editAddCarDialog,
} = carSlice.actions;

export default carSlice.reducer;