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
  req.open("GET", "sata_cities.json", true);
  req.send();
}
 

// result JSON in function for further transformation 
function Verarbeiten(jsonobj)
{
  var cities = jsonobj.kreditoren;
 
  //alert((JSON.stringify(kreditoren)));
  var city_data = [];
  for (var i in cities) {
   // kreditoren[i].ID, kreditoren[i].Newsletter 
    var jsondata = {
    Name: cities[i].name,
    Jahr: cities[i].Jahr,
    Einwohnerzahl: cities[i].Einwohnerzahl,
    }
    data.push(jsondata);
    //alert(jsondata);
  }

    // Basic Bar Chart

 
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
          categories: ['Africa', 'Europe', 'America', 'Asia', 'Atlantic'],
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
          name: "Year 2010",
          data: [107, 31, 635, 203, 2]
      }, {
          name: "Year 2011",
          data: [133, 156, 947, 408, 6]
      }, {
          name: "Year 2012",
          data: [814, 841, 3714, 727, 31]
      }]
  });

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