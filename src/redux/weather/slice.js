import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'weather',
    initialState: {
        weatherDataStatus: "idle",
        weatherGetCityStatus: "idle",
        weatherCurrentData: [],
        weatherCurrentCity: "",
        weatherDailyData: [],
        getCityCoord: {},
        locationActive: false,
        getCityName: "",
        isWeatherDataError: null,
    },
    reducers: {},
    extraReducers: {},
});

export const weatherDataStatusSelector = (state) => state.weather.weatherDataStatus;
export const weatherGetCityStatusSelector = (state) => state.weather.weatherGetCityStatus;
export const weatherCurrentDataSelector = (state) => state.weather.weatherCurrentData;
export const weatherCurrentCitySelector = (state) => state.weather.weatherCurrentCity;
export const weatherDailyDataSelector = (state) => state.weather.weatherDailyData;
export const getCityCoordSelector = (state) => state.weather.getCityCoord;
export const locationActiveSelector = (state) => state.weather.locationActive;
export const getCityNameSelector = (state) => state.weather.getCityName;
export const isWeatherDataErrorSelector = (state) => state.weather.isWeatherDataError;

export default slice.reducer;