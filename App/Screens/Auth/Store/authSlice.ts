import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../Services/authApi';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, { payload }) => {
                    state.user = payload
                }
            )
    },
});

export const {
    setUser,
} = authSlice.actions;

export default authSlice.reducer;