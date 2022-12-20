import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isWeatherDataErrorSelector, weatherDataStatusSelector } from '../redux/weather/slice';
import Content from './Content';
import Sidebar from './Sidebar';


function Main() {
    const dispatch = useDispatch();
    const weatherDataStatus = useSelector(weatherDataStatusSelector);
    const isWeatherDataError = useSelector(isWeatherDataErrorSelector);

    return (
        <div className="2xl:flex">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Main
