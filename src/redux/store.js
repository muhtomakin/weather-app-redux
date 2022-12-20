import { configureStore } from '@reduxjs/toolkit';
import slice from './weather/slice';

export const store = configureStore({
    reducer: {
        weather: slice,
    },
});