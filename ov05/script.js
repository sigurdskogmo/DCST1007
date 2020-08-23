let request = new XMLHttpRequest();

request.open("GET", "https://api.myjson.com/bins/1cayl6", true);
request.onload = function() {
    let data = JSON.parse(this.response).fjelltopper;
    
    function minMax(a, b) {
        const toppA = a.height;
        const toppB = b.height;
      
        let comparison = 0;
        if (toppA < toppB) {
          comparison = 1;
        } else if (toppA > toppB) {
          comparison = -1;
        }
        return comparison;
    }
    data.sort(minMax);
    
    
    let svar = "<table><tr><td><b>Fylke</b></td><td><b>Fjelltopp</b></td><td><b>Høyde</b></td></tr>";
    for(x of data){
        svar += "<tr>";
        for(let j = 0; j < 3; j++){
            if (j == 0){
                svar += "<td>" + x.fylke + "</td>";
            } else if (j == 1){
                svar += "<td>" + x.name + "</td>";
            } else {
                svar += "<td>" + x.height + "</td>";
            }
        }
        svar += "</tr>";
    }
    svar += "</table>";


    document.getElementById("utskrift").innerHTML = svar;
}
request.send();



  
  