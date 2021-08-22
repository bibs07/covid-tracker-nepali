import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todayRecovered, setTodayRecovered] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [todayDeath, setTodayDeath] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://covid19.mohp.gov.np/covid/api/confirmedcases?fbclid=IwAR1QgfUrCxovx7J1WnbcEP9uQG7zDhqkiLVd8y3tu9MVY4L-_eHHxgFeKlQ",
        {}
      );
      const nepalData = response.data.nepal;
      setTodayRecovered(Number(nepalData.today_recovered).toLocaleString());
      setTodayCases(Number(nepalData.today_newcase).toLocaleString());
      setTodayDeath(Number(nepalData.today_death).toLocaleString());
      setLastUpdated(nepalData.extra6);
    };
    getData() 
  }, []);

  return (
    <>
      <div className="covidContainer">
        <h1>दैनिक COVID-19 अद्यावधिक</h1>
        <div className="covidInfo">
          <div className="newCase">
            <img src="./virus.png" alt="virus" />
            <div>
              <h2>{todayCases}</h2>
              <p>सङ्क्रमित</p>
            </div>
          </div>
          <div className="recovered">
            <img src="./smile.png" alt="virus" />
            <div>
              <h2>{todayRecovered}</h2>
              <p>निको भएका</p>
            </div>
          </div>
          <div className="death">
            <img src="./sad.png" alt="virus" />
            <div>
              <h2>{todayDeath}</h2>
              <p>मृत्यु भएका</p>
            </div>
          </div>
        </div>
        <div className="covidBottom">
          <div>
            अद्यावधिक मिती: <span>{lastUpdated}</span>
          </div>
          <div>
            स्राेत:
            <a href="https://covid19.mohp.gov.np">
              <i>
                <span> https://covid19.mohp.gov.np</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
