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

// HighCharts ohne JASON
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container_1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
}); 