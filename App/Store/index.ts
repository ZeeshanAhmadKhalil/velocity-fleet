import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '@Screens/Auth/Services/authApi'
import layout from '@Screens/Layouts/Store/layoutSlice'
import theme from '@Screens/Layouts/Store/themeSlice'
import profile from '@Screens/Profile/Store/profileSlice'
import shared from '@Screens/Shared/Store/sharedSlice'
import storage from '@Store/storage'
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    layout,
    profile,
    shared,
    theme,
    [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            authApi.middleware,
        ),
});

export default store;