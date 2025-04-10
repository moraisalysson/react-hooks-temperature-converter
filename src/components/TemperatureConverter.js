import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperature, setTemperature] = useState("");

  const handleTemperature = (valorTecla) => {
    if (valorTecla === "." && temperature.includes(".")) {
      return false;
    }

    if (valorTecla === "." && (temperature === "" || temperature === "-")) {
      setTemperature(temperature + "0.");
      return true;
    }

    if (valorTecla === "0" && (temperature === "" || temperature === "-")) {
      setTemperature(temperature);
      return true;
    }

    if (valorTecla === "-" && temperature === "") {
      setTemperature(valorTecla);
      return true;
    }

    if (valorTecla !== "-") {
      setTemperature(temperature + valorTecla);
    }
  };

  const handleBackspace = () => {
    setTemperature(temperature.toString().slice(0, -1));
  };

  const convertToCelsius = (fromTemp) => {
    temperature = Number(temperature);

    switch(fromTemp) {
      case "C":
        return temperature.toFixed(2);
      case "F":
        return ((temperature - 32) * 5 / 9).toFixed(2);
      case "K":
        return (temperature - 273.15).toFixed(2);
      default:
        return 0;
    }
  }
  const convertToFahrenheit = (fromTemp) => {
    temperature = Number(temperature);

    switch(fromTemp) {
      case "C":
        return ((temperature * 9)/5 + 32).toFixed(2);
      case "F":
        return temperature.toFixed(2);
      case "K":
        return ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
      default:
        return 0;
    }
  }
  
  const convertToKelvin = (fromTemp) => {
    temperature = Number(temperature);

    switch(fromTemp) {
      case "C":
        return (temperature * 273.15).toFixed(2);
      case "F":
        return ((temperature - 32) * 5 / 9 + 273.15).toFixed(2);
      case "K":
        return temperature.toFixed(2);
      default:
        return 0;
    }
  }

  const handleConverter = () => {
    temperature = Number(temperature);
    
    const fromTemp = document.querySelector("#user-choice").options[document.querySelector("#user-choice").selectedIndex].value;

    console.log(fromTemp);

    if(fromTemp === "C") {
      const celsiusTemperature = convertToCelsius(fromTemp);
      const fahrenheitTemperature = convertToFahrenheit(fromTemp);
      const kelvinTemperature = convertToKelvin(fromTemp);
      console.log("Kelvin: ", kelvinTemperature);
      console.log("Fahrenheit: ", fahrenheitTemperature);
      console.log("Celsius: ", celsiusTemperature);
    }

    if(fromTemp === "F") {
      const fahrenheitTemperature = convertToFahrenheit(fromTemp);
      const celsiusTemperature = convertToCelsius(fromTemp);
      const kelvinTemperature = convertToKelvin(fromTemp);
      console.log("Kelvin: ", kelvinTemperature);
      console.log("Fahrenheit: ", fahrenheitTemperature);
      console.log("Celsius: ", celsiusTemperature);
    }

    if(fromTemp === "K") {
      const kelvinTemperature = convertToKelvin(fromTemp);
      const celsiusTemperature = convertToCelsius(fromTemp);
      const fahrenheitTemperature = convertToFahrenheit(fromTemp);
      console.log("Kelvin: ", kelvinTemperature);
      console.log("Fahrenheit: ", fahrenheitTemperature);
      console.log("Celsius: ", celsiusTemperature);
    }
  }
  
  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperature} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button onClick={() => handleConverter()} className="tecla" id="converter">
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button onClick={() => handleTemperature("1")} className="n1 tecla">1</button>
        <button onClick={() => handleTemperature("2")} className="n2 tecla">2</button>
        <button onClick={() => handleTemperature("3")} className="n3 tecla">3</button>
        <button onClick={() => handleTemperature("4")} className="n4 tecla">4</button>
        <button onClick={() => handleTemperature("5")} className="n5 tecla">5</button>
        <button onClick={() => handleTemperature("6")} className="n6 tecla">6</button>
        <button onClick={() => handleTemperature("7")} className="n7 tecla">7</button>
        <button onClick={() => handleTemperature("8")} className="n8 tecla">8</button>
        <button onClick={() => handleTemperature("9")} className="n9 tecla">9</button>
        <button onClick={() => handleTemperature("0")} className="n0 tecla">0</button>
        <button onClick={() => handleTemperature(".")} className="virgula tecla">,</button>
        <button onClick={() => handleBackspace()} className="limpa tecla"></button>
        <button onClick={() => handleTemperature("-")} className="negativo tecla">-</button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
