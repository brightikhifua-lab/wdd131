document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("wind").textContent);
  const windChillElement = document.getElementById("windchill");

  const calculateWindChill = (t, s) =>
    (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

  if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});