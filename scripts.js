// JSON für Highcharts einlesen – AJAX Einladen der JSON Datei – clientside !FUNKTIONIERT!
window.onload = AJAX_CRE_Daten;

function AJAX_CRE_Daten() 
{
  var req = new XMLHttpRequest();

  req.onreadystatechange = function ()
  {
    if (req.readyState == 4)
    {
      if (req.status == 200 || req.status == 0)
      {
        var res = req.responseText;
        var jsonobj = JSON.parse(res);
        if(jsonobj)Verarbeiten(jsonobj);
      }
      else alert("Error" + req.statusText);
    }
  }
  req.open("GET", "CRE_Daten.json", true);
  req.send();
}



function Verarbeiten(jsonobj)
// JETZT HIER ALLES WAS SICH AUF DIE JSON bEZIEHT -- DIAGRAMME :) 
/* 
{
  var kreditoren = jsonobj.kreditoren;
  console.log("kreditoren");
  
  // Abfrage-Tests 
  var adr1_vorname = kreditoren[0].vorname;
    alert(adr1_vorname);
  var adr1_geschlecht = kreditoren[0].Anrede; 
    alert(adr1_geschlecht)
  
  // Ausgabe einiger Daten in eine Tabelle (in tbody) 
  var ausgabe = document.getElementById("ausgabe"); 
  
  var reihen = "";
  
  var adr_anz = kreditoren.length; 
  // aktuell 2 
    alert(adr_anz); 
  
  for(var i = 0; i < adr_anz; i++)
  {
      var vorname = kreditoren[i].vorname; 
      var nachname = kreditoren[i].nachname; 
      var telefon = kreditoren[i].telefon; 
      var geschlecht = kreditoren[i].geschlecht; 
  
  
        var reihe = "<tr>"; //Start-Tag tr tabelle 
        reihe += "<td>" + vorname + "</td>";
        reihe += "<td>" + nachname + "</td>";
        reihe += "<td>" + telefon + "</td>";
        reihe += "<td>" + geschlecht + "</td>";
        reihe += "</tr>"; 
        
        reihen += reihe; 
    }
    // Reihen im tbody ausgeben 
    ausgabe.innerHTML = reihen; 
    
    // Stand in h2 ausgeben 
    var stand = json.stand; 
    var h2 = document.querySelector("h2");
    h2.textContent += stand; 
  
  } 
 */

// HighCharts ohne JSON
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container_1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Newsletter ja', 'Newsletter nein']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Frau',
            data: [1, 0, 4]
        }, {
            name: 'Mann',
            data: [5, 7, 3]
        }]
    });
}); 