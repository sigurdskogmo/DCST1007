class Bil {
  constructor(regnr, merke, aar, hastighet) {
    this._registreringsnr = regnr;
    this._merke = merke;
    this._aarsmodell = aar;
    this._hastighet = hastighet;
  }
  gass() {
    this._hastighet += 10;
  }
  brems() {
    this._hastighet -= 10;
  }
}

let volvo = new Bil("AB12345", "Volvo", 2018, 0);
let ferrari = new Bil("Enzo", "Ferrari", 2016, 0);
let lada = new Bil("BA12345", "Lada", 1980, 0);

setInterval(() => {
  document.getElementById("fart").innerHTML =
    "Volvo: " +
    volvo._hastighet +
    "km/t<br>" +
    "Ferrari: " +
    ferrari._hastighet +
    "km/t<br>" +
    "Lada: " +
    lada._hastighet +
    "km/t";
}, 100);
