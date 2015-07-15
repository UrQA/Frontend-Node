angular.module("app")
    .controller("ProjectDauController", function($scope, StatDauService){
        StatDauService().get()
            .$promise.then(function(response){
                var keys = response['app-version'];

                c3.generate({
                    bindto: "#dau-bar",
                    data: {
                        json: response.data,
                        keys: {
                            x: "date",
                            value: keys.concat(['total'])
                        },
                        type: 'bar',
                        types: {
                            total: 'area',
                        },
                        groups: [
                            keys
                        ],
                    },
                    axis: {
                        x: {
                            type: 'category'
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    }
                });
            });

    })
    .controller("ProjectCrashRateController", function($scope, StatCrashRateService){

        StatCrashRateService().get()
            .$promise.then(function(response) {
                var keys = response['app-version'];
                var types = {};
                $.each(keys, function(index, val) {
                    types[val] = 'area'
                })

                var chart = c3.generate({
                    bindto:'#crash-rate',
                    data: {
                        json: response.data,
                        keys: {
                            x:'date',
                            value: keys
                        },
                        types: types,
                        groups: [keys]
                    },
                    axis: {
                        x: {
                            type: 'category'
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    }
                });
            })




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
                pattern: [ '#9edae5']
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
        $scope.data =  [
            {value: 17.6, label: 'com.android.volley.toolbox.d'},
            {value: 13.7, label: 'at droom.sleepIfUCan.activity.af (:211)'},
            {value: 11, label: 'droom.sleepIfUCan.activity.af' },
            {value: 8.7, label: 'android.database.sqlite.SQLiteStatement'},
            {value: 8.5, label: 'android.content.res.Resources'},
            {value: 5.3, label: 'android.os.BinderProxy' },
            {value: 4.5, label: 'at android.widget.NumberPicker$ChangeCurrentByOneFromLongPressCommand' },
            {value: 4.3, label: 'at android.content.res.Resources' },
            {value: 4, label: 'android.database.sqlite.SQLiteStatement' },
            {value: 2, label: 'android.database.sqlite.SQLiteConnection' },
            {value: 1.6, label: 'droom.sleepIfUCan.activity.SelectPictureActivity' },
            {value: 18.8, label: 'Others' },
        ];

        $scope.getItemClass = function(data) {
            if(data.label === 'Others') {
                return 'progress-bar-info';
            }

            if(data.value > 15) {
                return 'progress-bar-danger';
            } else if(data.value > 10){
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-info';
            }
        };

        Morris.Donut({
            element: 'graph-donut',
            data:$scope.data,
            backgroundColor: '#fff',
            labelColor: '#1fb5ac',
            colors: [
                '#E67A77','#D9DD81','#79D1CF','#95D7BB'
            ],
            formatter: function (x, data) { return data.value + "%"; }
        });
    })
    .controller("errorActivityController", function($scope, StatActivityService) {

        StatActivityService().get()
            .$promise.then(function(response){
                $scope.data = response.data;

            })

        $scope.getItemClass = function(data) {

            if(data.value > 15) {
                return 'progress-bar-danger';
            } else if(data.value > 10){
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-info';
            }
        };
    })
    .controller("OsVersionController", function($scope, StatOsVersionService){
        StatOsVersionService().get()
            .$promise.then(function(response) {
                $scope.data = response.data;
            });

        $scope.getItemClass = function(data) {

            if(data.value > 15) {
                return 'progress-bar-danger';
            } else if(data.value > 10){
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-info';
            }
        };
    });
