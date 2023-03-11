import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        profileDialog: false,
    },
    reducers: {
        setProfileDialog: (state, action) => {
            state.profileDialog = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setProfileDialog,
} = sharedSlice.actions;

export default sharedSlice.reducer;