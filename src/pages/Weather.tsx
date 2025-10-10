import React from "react";

const Weather: React.FC = () => (
  <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
    <h1>Thebacha FPV Racing League Weather</h1>
    <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
      The Weather
    </p>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Weather for Flying Fort Smith</h2>
      <h3>2 Day HRDPS Continental forecast for ThebachaFPV - Fort Smith, NWT</h3>
      <h4>Forecast Data Courtesy of Garth@SpotWx you can get a forecast update and support him here:
        <a target="_blank" href="https://spotwx.com/products/grib_index.php?model=hrdps_continental&lat=59.9825&lon=-111.59912&tz=America/Edmonton&label=ThebachaFPV%20-%20Fort%20Smith" style={{ color: '#0066cc', textDecoration: 'underline' }}>SpotWx.com</a></h4>
      <img src="/assets/forecast-images/YSM_HRDPS_header.png"></img>
      <img src="/assets/forecast-images/YSM_HRDPS_temp.png"></img>
      <img src="/assets/forecast-images/YSM_HRDPS_precip.png"></img>
      <img src="/assets/forecast-images/YSM_HRDPS_wind.png"></img>
      <img src="/assets/forecast-images/YSM_HRDPS_llwind.png"></img>
      <hr />
      <h3>3.5 Day RDPS forecast for ThebachaFPV - Fort Smith, NWT</h3>
      <h4>Forecast Data Courtesy of Garth@SpotWx you can get a forecast update and support him here:
        <a target="_blank" href="https://spotwx.com/products/grib_index.php?model=rdps_10km&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith" style={{ color: '#0066cc', textDecoration: 'underline' }}>SpotWx.com</a></h4>
      <img src="/assets/forecast-images/YSM_RDPS_header.png"></img>
      <img src="/assets/forecast-images/YSM_RDPS_temp.png"></img>
      <img src="/assets/forecast-images/YSM_RDPS_precip.png"></img>
      <img src="/assets/forecast-images/YSM_RDPS_wind.png"></img>
      <img src="/assets/forecast-images/YSM_RDPS_llwind.png"></img>
      <h2>Ok to fly? - Fort Smith</h2>
      <h4>Data Courtesy of OkToFly.com:
        <a target="_blank" href="https://oktofly.com/loc/60.004541,-111.823387" style={{ color: '#0066cc', textDecoration: 'underline' }}>OkToFly.com</a></h4>
      <img src="/assets/forecast-images/YSM_OkTofly_header.png"></img>
      <img src="/assets/forecast-images/YSM_OkTofly_T0.png"></img>
      {/* <img src="/assets/forecast-images/YSM_OkTofly_T1.png"></img>
      <img src="/assets/forecast-images/YSM_OkTofly_T2.png"></img> */}
    </section>











    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Weather for Flying Hay River</h2>

      <h3>2 Day HRDPS Continental forecast for ThebachaFPV - Hay River, NWT</h3>
      <h4>Forecast Data Courtesy of Garth@SpotWx you can get a forecast update and support him here:
        <a target="_blank" href="https://spotwx.com/products/grib_index.php?model=hrdps_continental&lat=60.82349&lon=-115.76294&tz=America/Yellowknife&label=ThebachaFPV%20-%20Hay%20River" style={{ color: '#0066cc', textDecoration: 'underline' }}>SpotWx.com</a></h4>
      <img src="/assets/forecast-images/YHY_HRDPS_header.png"></img>
      <img src="/assets/forecast-images/YHY_HRDPS_temp.png"></img>
      <img src="/assets/forecast-images/YHY_HRDPS_precip.png"></img>
      <img src="/assets/forecast-images/YHY_HRDPS_wind.png"></img>
      <img src="/assets/forecast-images/YHY_HRDPS_llwind.png"></img>
      <h3>3.5 Day RDPS forecast for ThebachaFPV - Hay River, NWT</h3>
      <h4>Forecast Data Courtesy of Garth@SpotWx you can get a forecast update and support him here:
        <a target="_blank" href="" style={{ color: '#0066cc', textDecoration: 'underline' }}>SpotWx.com</a></h4>
      <img src="/assets/forecast-images/YHY_RDPS_header.png"></img>
      <img src="/assets/forecast-images/YHY_RDPS_temp.png"></img>
      <img src="/assets/forecast-images/YHY_RDPS_precip.png"></img>
      <img src="/assets/forecast-images/YHY_RDPS_wind.png"></img>
      <img src="/assets/forecast-images/YHY_RDPS_llwind.png"></img>
      <h2>Ok to fly? - Hay River</h2>
      <h4>Data Courtesy of OkToFly.com:
        <a target="_blank" href="https://oktofly.com/loc/60.004541,-115.779971" style={{ color: '#0066cc', textDecoration: 'underline' }}>OkToFly.com</a></h4>
      <img src="/assets/forecast-images/YHY_OkTofly_header.png"></img>
      <img src="/assets/forecast-images/YHY_OkTofly_T0.png"></img>
      {/* <img src="/assets/forecast-images/YHY_OkTofly_T1.png"></img>
      <img src="/assets/forecast-images/YHY_OkTofly_T2.png"></img> */}
    </section>
  </div>
);

export default Weather;
