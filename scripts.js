// JSON für Highcharts einlesen – AJAX Einladen der JSON Datei – clientside !FUNKTIONIERT!
window.onload = AJAX_CRE_Daten;

console.log("Skript funktionier");

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
 

// result JSON in function for further transformation 
function Verarbeiten(jsonobj)
{
//alert((JSON.stringify(jsonobj.kreditoren)))
//}

// JETZT HIER ALLES WAS SICH AUF DIE JSON BEZIEHT -- DIAGRAMME :) 
  var kreditoren = jsonobj.kreditoren;

  //alert((JSON.stringify(kreditoren)));
  var data = [];
  for (var i in kreditoren) {
   // kreditoren[i].ID, kreditoren[i].Newsletter 
    var jsondata = {
    Newsletter: kreditoren[i].Newsletter,
    Anrede: kreditoren[i].Anrede,
    ID: kreditoren[i].Nr,
    Vorname: kreditoren[i].Vorname,
    Hausnummer: kreditoren[i].Hausnummer
    }
    data.push(jsondata);
    //alert(jsondata);
  }


 PieChart(data);
 //alert((JSON.stringify(jsondata.Nr)));
 // } //end of success function
    function PieChart(series) {
    const chart = Highcharts.chart('container4', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Vornamen + Hausnummern'
      },
      tooltip: {
        formatter: function() {
          return '<b>' + kreditoren.Vorname + '</b>: ' + kreditoren.Hausnummer + ' %';
        }
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'silver'
          }
        }
      },    
      series: [{
        data: [{
          name: kreditoren[0].Vorname,
          y: kreditoren[0].Hausnummer
      }, {
          name: kreditoren[1].Vorname,
          y: kreditoren[1].Hausnummer
      }, {
          name: kreditoren[2].Vorname,
          y: kreditoren[2].Hausnummer
      }, {
          name: kreditoren[3].Vorname,
          y: kreditoren[3].Hausnummer
      },
      {
        name: kreditoren[4].Vorname,
        y: kreditoren[4].Hausnummer
    }], 
        type: 'pie',
        dataType: 'json',
        animation: false,
        point: {
          events: {
            click: function(event) {
            }
          }
        }
      }]
    })


    }
}
