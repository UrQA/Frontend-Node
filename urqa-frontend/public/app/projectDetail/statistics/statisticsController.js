angular.module("app")
    .controller("ProjectDauController", function($scope, PROJECT_INFO){
        Morris.Bar({
            element: 'dau-bar',
            data: [
                {x: '2011 Q1', y: 3, z: 2, a: 3},
                {x: '2011 Q2', y: 2, z: null, a: 1},
                {x: '2011 Q3', y: 0, z: 2, a: 4},
                {x: '2011 Q4', y: 2, z: 4, a: 3}
            ],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors:['#E67A77','#D9DD81','#79D1CF']
        });

    })
    .controller("ProjectCrashRateController", function($scope){
        var day_data = [
            {"date": "I", "value": 34},
            {"date": "II", "value": 24},
            {"date": "III", "value": 3},
            {"date": "IV", "value": 12},
            {"date": "V", "value": 13},
            {"date": "VI", "value": 22},
            {"date": "VII", "value": 5},
            {"date": "VIII", "value": 26},
            {"date": "IX", "value": 12},
            {"date": "X", "value": 19}
        ];
        Morris.Line({
            element: 'crash-rate',
            data: day_data,
            xkey: 'date',
            ykeys: ['value'],
            labels: ['value'],
            lineColors:['#1FB5AD'],
            parseTime: false
        });
    })
    .controller("ProjectWorldController", function($scope){

        var world_data = [
            {"location": "kr", "value": 975.26},
            {"location": "kw", "value": 975.26},
            {"location": "kg", "value": 975.26},
            {"location": "la", "value": 975.26},
            {"location": "lv", "value": 975.26},
            {"location": "lb", "value": 975.26},
            {"location": "ls", "value": 975.26},
            {"location": "lt", "value": 975.26}
        ];

        var chart = c3.generate({
            bindto: "#world_vmap_info",
            data: {
                json: world_data,

                keys: {
                    x: "location",
                    value:["value"]
                },
                labels: true,
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category'
                }
            },

            color: {
                pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            },
            legend: {
                show: false
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    })
    .controller("ProjectVersionController", function($scope, $element){
        var chart = c3.generate({
            bindto: '#version-chart',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150]
                ],
                types: {
                    data1: 'bar',
                    data2: 'bar',
                    data3: 'bar',
                    data4: 'bar',
                    data5: 'bar'
                },
                groups: [
                    ['data1','data2', 'data3', 'data4', 'data5']
                ]
            },
            color: {
                pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            },
            axis: {
                rotated: true,
                x: {
                    type: 'categorized'
                },
                y: {
                    type: 'category',
                    categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6']

                }
            }
        });
    })
    .controller("DeviceErrorRateController", function($scope, $element){
        var deviceData = [
            {"name": "MI 2A", "value": 6},
            {"name": "GT-N7100", "value": 9},
            {"name": "D6503", "value": 7},
            {"name": "GT-I9192", "value": 10},
            {"name": "GT-I9300", "value": 15},
            {"name": "Lenovo S820", "value": 20},
            {"name": "SHW-M250L", "value": 6},
            {"name": "ASUS_T00F", "value": 2}
        ];
        var chart = c3.generate({
            bindto: "#device-errorrate",
            data: {
                json: deviceData,

                keys: {
                    x: "name",
                    value:["value"]
                },
                labels: true,
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category'
                }
            },

            color: {
                pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            },
            legend: {
                show: false
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    })
    .controller("classErrorRateController", function($scope) {
        Morris.Donut({
            element: 'graph-donut',
            data: [
                {value: 17.6, label: 'com.android.volley.toolbox.d', formatted: '17.6%' },
                {value: 13.7, label: 'at droom.sleepIfUCan.activity.af (:211)', formatted: '13.7%' },
                {value: 11, label: 'droom.sleepIfUCan.activity.af', formatted: '11%' },
                {value: 8.7, label: 'android.database.sqlite.SQLiteStatement', formatted: '8.7%' },
                {value: 8.5, label: 'android.content.res.Resources', formatted: '8.5%' },
                {value: 5.3, label: 'android.os.BinderProxy', formatted: '5.3%' },
                {value: 4.5, label: 'at android.widget.NumberPicker$ChangeCurrentByOneFromLongPressCommand', formatted: '4.5%' },
                {value: 4.3, label: 'at android.content.res.Resources', formatted: '4.3%' },
                {value: 4, label: 'android.database.sqlite.SQLiteStatement', formatted: '4%' },
                {value: 2, label: 'android.database.sqlite.SQLiteConnection', formatted: '2%' },
                {value: 1.6, label: 'droom.sleepIfUCan.activity.SelectPictureActivity', formatted: '1.6%' },
                {value: 18.8, label: 'Others', formatted: '18.8%' },
            ],
            backgroundColor: '#fff',
            labelColor: '#1fb5ac',
            colors: [
                '#E67A77','#D9DD81','#79D1CF','#95D7BB'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    });
