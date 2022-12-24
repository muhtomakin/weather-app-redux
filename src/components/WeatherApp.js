import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/weather/services";
import Loading from "./Loading";
import Error404 from "./Error404";

function WeatherApp() {
    const weatherDataStatus = useSelector(
        (state) => state.weatherapp.weatherDataStatus
    );
    const isWeatherDataError = useSelector(
        (state) => state.weatherapp.isWeatherDataError
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (weatherDataStatus === "idle") {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(fetchWeatherData({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                }));    
            });
        }
    }, [dispatch, weatherDataStatus]);

    if (weatherDataStatus === "loading") {
        return <Loading />;
    }

    if (weatherDataStatus === "failed") {
        return <Error404 error={isWeatherDataError} />;
    }

    return (
        <div className="2xl:flex">
            <Sidebar />
            <Content />
        </div>
    );
}

export default WeatherApp;