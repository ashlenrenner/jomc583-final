$(function callMap() {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-nc-031",
            "value": 10.65
        },
        {
            "hc-key": "us-nc-187",
            "value": 5.8
        },
        {
            "hc-key": "us-nc-095",
            "value": 1.81
        },
        {
            "hc-key": "us-nc-129",
            "value": 42.37
        },
        {
            "hc-key": "us-nc-183",
            "value": 114.45
        },
        {
            "hc-key": "us-nc-077",
            "value": 8.21
        },
        {
            "hc-key": "us-nc-121",
            "value": 4.13
        },
        {
            "hc-key": "us-nc-011",
            "value": 19.93
        },
        {
            "hc-key": "us-nc-091",
            "value": 10.66
        },
        {
            "hc-key": "us-nc-033",
            "value": 4.23
        },
        {
            "hc-key": "us-nc-001",
            "value": 23.85
        },
        {
            "hc-key": "us-nc-019",
            "value": 20.5
        },
        {
            "hc-key": "us-nc-087",
            "value": 101.18
        },
        {
            "hc-key": "us-nc-175",
            "value": 811.13
        },
        {
            "hc-key": "us-nc-153",
            "value": 18.6
        },
        {
            "hc-key": "us-nc-107",
            "value": 29.64
        },
        {
            "hc-key": "us-nc-191",
            "value": 34.31
        },
        {
            "hc-key": "us-nc-079",
            "value": 7.62
        },
        {
            "hc-key": "us-nc-161",
            "value": 11.55
        },
        {
            "hc-key": "us-nc-101",
            "value": 29.67
        },
        {
            "hc-key": "us-nc-127",
            "value": 20.6
        },
        {
            "hc-key": "us-nc-081",
            "value": 66.02
        },
        {
            "hc-key": "us-nc-157",
            "value": 133.37
        },
        {
            "hc-key": "us-nc-013",
            "value": 89.88
        },
        {
            "hc-key": "us-nc-137",
            "value": 3.76
        },
        {
            "hc-key": "us-nc-103",
            "value": 3.68
        },
        {
            "hc-key": "us-nc-049",
            "value": 37.34
        },
        {
            "hc-key": "us-nc-063",
            "value": 33.77
        },
        {
            "hc-key": "us-nc-037",
            "value": 246.43
        },
        {
            "hc-key": "us-nc-185",
            "value": 2.57
        },
        {
            "hc-key": "us-nc-131",
            "value": 21.43
        },
        {
            "hc-key": "us-nc-065",
            "value": 15.27
        },
        {
            "hc-key": "us-nc-195",
            "value": 25.97
        },
        {
            "hc-key": "us-nc-145",
            "value": 1014.79
        },
        {
            "hc-key": "us-nc-083",
            "value": 31.7
        },
        {
            "hc-key": "us-nc-117",
            "value": 63.57
        },
        {
            "hc-key": "us-nc-135",
            "value": 24.18
        },
        {
            "hc-key": "us-nc-055",
            "value": 8.73
        },
        {
            "hc-key": "us-nc-099",
            "value": 5.13
        },
        {
            "hc-key": "us-nc-159",
            "value": 197.58
        },
        {
            "hc-key": "us-nc-097",
            "value": 25.97
        },
        {
            "hc-key": "us-nc-025",
            "value": 22.66
        },
        {
            "hc-key": "us-nc-179",
            "value": 42.18
        },
        {
            "hc-key": "us-nc-181",
            "value": 9.82
        },
        {
            "hc-key": "us-nc-177",
            "value": .59
        },
        {
            "hc-key": "us-nc-189",
            "value": 11
        },
        {
            "hc-key": "us-nc-193",
            "value": 14.29
        },
        {
            "hc-key": "us-nc-003",
            "value": 4.23
        },
        {
            "hc-key": "us-nc-027",
            "value": 19.66
        },
        {
            "hc-key": "us-nc-151",
            "value": 23.4
        },
        {
            "hc-key": "us-nc-041",
            "value": 7.03
        },
        {
            "hc-key": "us-nc-073",
            "value": 2.85
        },
        {
            "hc-key": "us-nc-139",
            "value": 5.31
        },
        {
            "hc-key": "us-nc-039",
            "value": 2179
        },
        {
            "hc-key": "us-nc-113",
            "value": 278.09
        },
        {
            "hc-key": "us-nc-133",
            "value": 32.27
        },
        {
            "hc-key": "us-nc-045",
            "value": 43.38
        },
        {
            "hc-key": "us-nc-109",
            "value": 26.88
        },
        {
            "hc-key": "us-nc-119",
            "value": 2804.90
        },
        {
            "hc-key": "us-nc-199",
            "value": 12.76
        },
        {
            "hc-key": "us-nc-089",
            "value": 19.44
        },
        {
            "hc-key": "us-nc-147",
            "value": 28.82
        },
        {
            "hc-key": "us-nc-143",
            "value": 2.85
        },
        {
            "hc-key": "us-nc-125",
            "value": 21.14
        },
        {
            "hc-key": "us-nc-007",
            "value": 9.53
        },
        {
            "hc-key": "us-nc-141",
            "value": 12.59
        },
        {
            "hc-key": "us-nc-163",
            "value": 37.15
        },
        {
            "hc-key": "us-nc-085",
            "value": 27.68
        },
        {
            "hc-key": "us-nc-155",
            "value": 37.15
        },
        {
            "hc-key": "us-nc-051",
            "value": 45.68
        },
        {
            "hc-key": "us-nc-075",
            "value": 39.06
        },
        {
            "hc-key": "us-nc-023",
            "value": 38.92
        },
        {
            "hc-key": "us-nc-165",
            "value": 7.33
        },
        {
            "hc-key": "us-nc-093",
            "value": 26.23
        },
        {
            "hc-key": "us-nc-111",
            "value": 11.06
        },
        {
            "hc-key": "us-nc-047",
            "value": 43.06
        },
        {
            "hc-key": "us-nc-061",
            "value": 38.49
        },
        {
            "hc-key": "us-nc-197",
            "value": 15.34
        },
        {
            "hc-key": "us-nc-067",
            "value": 49.49
        },
        {
            "hc-key": "us-nc-171",
            "value": 26.52
        },
        {
            "hc-key": "us-nc-169",
            "value": 1283.44
        },
        {
            "hc-key": "us-nc-057",
            "value": 27.24
        },
        {
            "hc-key": "us-nc-059",
            "value": 6.4
        },
        {
            "hc-key": "us-nc-029",
            "value": 6.13
        },
        {
            "hc-key": "us-nc-053",
            "value": 5.64
        },
        {
            "hc-key": "us-nc-009",
            "value": 17.5
        },
        {
            "hc-key": "us-nc-115",
            "value": 2.74
        },
        {
            "hc-key": "us-nc-021",
            "value": 300.61
        },
        {
            "hc-key": "us-nc-071",
            "value": 851.69
        },
        {
            "hc-key": "us-nc-015",
            "value": 20.81
        },
        {
            "hc-key": "us-nc-173",
            "value": 15
        },
        {
            "hc-key": "us-nc-035",
            "value": 1076.68
        },
        {
            "hc-key": "us-nc-069",
            "value": 9.46
        },
        {
            "hc-key": "us-nc-005",
            "value": 5.54
        },
        {
            "hc-key": "us-nc-123",
            "value": 6.12
        },
        {
            "hc-key": "us-nc-149",
            "value": 2.52
        },
        {
            "hc-key": "us-nc-105",
            "value": 11.78
        },
        {
            "hc-key": "us-nc-043",
            "value": 1.26
        },
        {
            "hc-key": "us-nc-017",
            "value": 93.15
        },
        {
            "hc-key": "us-nc-167",
            "value": 9.53
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            // text : 'Water Consumption in North Carolina'
            text: false
        },

        subtitle : {
            text : false
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-nc-all'],
            joinBy: 'hc-key',
            name: 'MG/d',
            states: {
                hover: {
                    color: '#2c374b'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
