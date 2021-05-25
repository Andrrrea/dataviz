document.addEventListener('DOMContentLoaded', function () {

// Erstes Chart erstellen
// Möglichkeit 1
/*
    const chart = Highcharts.chart('container', {
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
    }); */

//Möglichkeit 2
var options = {
    chart: {
        renderTo: 'container',
        type: 'bar'
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
    }]
};

options.series.push({  //Array erweitern
    name: 'John',
    data: [3, 4, 2]
})
var chart = new Highcharts.Chart(options);

//Global options
Highcharts.setOptions({
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
    }
});
var chart1 = new Highcharts.Chart({
    chart: {
        renderTo: 'container2',
    },
    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3600 * 1000 // one hour
    }]
});
var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container3',
        type: 'column'
    },
    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3600 * 1000 // one hour
    }]
});


}); 