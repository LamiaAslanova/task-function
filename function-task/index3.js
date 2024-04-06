let fahrenheitValue = parseFloat(prompt("Fahrenheit dərəcəsini daxil edin:"))

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32)
}

let celsiusValue = toCelsius(parseFloat(fahrenheitValue))

alert(`Celsius dərəcəsi: ${celsiusValue.toFixed(2)}`)