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
  kreditoren = jsonobj.kreditoren;

  //alert((JSON.stringify(kreditoren)));
  var data = [];
  for (var i in kreditoren) {
   // kreditoren[i].ID, kreditoren[i].Newsletter 
    var jsondata = {
    Newsletter: kreditoren[i].Newsletter,
    Anrede: kreditoren[i].Anrede,
    ID: kreditoren[i].Nr,
    }
    data.push(jsondata);
    //alert(jsondata);
  }


 PieChart(data);
 alert((JSON.stringify(jsondata.Nr)));
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
        text: 'TEST Text 1'
      },
      tooltip: {
        formatter: function() {
          return '<b>' + jsondata.Newsletter + '</b>: ' + jsondata.Nr + ' %';
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{jsondata.ID}</b>: {jsondata.Nr:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        data: [12,1,15,2], //hart codiert, hier: data: data
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


    // Basic Bar Chart
    BarChart(data);
    alert((JSON.stringify(jsondata.Nr)));
    // } //end of success function
    function BArChart(series) {
    Highcharts.chart('container5', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: function() {
            return jsondata.Anrede},
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31]
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40]
      }]
  });

    }

  }
}
 /* 
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
})
 */