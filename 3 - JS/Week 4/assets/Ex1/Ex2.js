function tempConverter(val) {
  val = parseFloat(val);
  document.getElementById("outputCelsius").innerHTML = (val - 32) / 1.8;
}
