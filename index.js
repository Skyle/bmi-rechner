const gewichtElement = document.getElementById("gewicht");
const groesseElement = document.getElementById("groesse");
const button = document.getElementById("berechne");
const ergebnisElement = document.getElementById("ergebnis");
button.onclick = () => {
  const groesse = parseInt(groesseElement.value);
  const gewicht = parseInt(gewichtElement.value);
  const bmi = (gewicht / (groesse / 100) ** 2).toFixed(2);
  if (isNaN(bmi)) {
    ergebnisElement.innerHTML = "Fehler";
  } else {
    ergebnisElement.innerHTML = bmi;
  }
};
