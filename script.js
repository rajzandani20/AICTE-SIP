function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    
    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    
    let convertedTemp = "";
    if (unit === "C") {
        convertedTemp = `${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    } else if (unit === "F") {
        convertedTemp = `${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (unit === "K") {
        convertedTemp = `${(temp - 273.15).toFixed(2)} °C | ${(temp * 9/5 - 459.67).toFixed(2)} °F`;
    }
    
    result.innerHTML = `Converted: ${convertedTemp}`;
}
