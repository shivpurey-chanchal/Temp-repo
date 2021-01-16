import React, { useState, useEffect } from "react";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("indore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1098ad218f6305532ef94538f3cf111`;
      const response = await fetch(url);
      console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="wrapper">
        <h3>weather</h3>
        <div>
          <input
            type="serch"
            placeholder="Search weather"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>Data is not getting. Map is unable to search city!</p>
        ) : (
          <div >
            <div>
              <h2>City - {search}</h2>
              <h1>Temprature - {city.temp}</h1>
              <h2>Humidity - {city.humidity}</h2>
            
            <div className="wave"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Temp;
