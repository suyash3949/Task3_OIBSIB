const temperatureInput = document.getElementById("temperature-input");
const scaleSelect = document.getElementById("scale-select");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  const scale = scaleSelect.value;
  let convertedTemperature;

  if (scale === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
  } else {
    convertedTemperature = ((temperature - 32) * 5) / 9;
  }

  result.innerHTML = convertedTemperature.toFixed(2) + "°" + (scale === "celsius" ? "F" : "C");
});
