import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
  const defaultLat = 35.158049371114956;
  const defaultLon = 129.05986219337697;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // =>현재 위치기반으로 위도, 경도값을 가져올 수 있음
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
