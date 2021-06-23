// JSON für Highcharts einlesen – AJAX Einladen der JSON Datei – clientside !FUNKTIONIERT!
window.onload = AJAX_CRE_Daten;
function AJAX_CRE_Daten() {    
var req = new XMLHttpRequest();    
req.onreadystatechange = function () 
{        if (req.readyState == 4) 
{            if (req.status == 200 || req.status == 0) 
{                var res = req.responseText;                
var jsonobj = JSON.parse(res);            } 
else alert("Fehler: !!!!!!!!!!!!!!!!!! " + req.statusText);        
}    
}    
req.open("GET", "CRE_Daten.json", true);    
req.send();
}