/**
 * Created by karuana on 15. 6. 28..
 */
angular.module("app")

    .config(function ($stateProvider) {

    })

    .controller("DashBoardController", function($scope, ApiKeyService){

        $scope.initApiKey = function(apiKey) {
            ApiKeyService.setApiKey(apiKey);
        }
    })

    .controller("DashBoardDailyGraphController", function ($scope, $element, DashboardErrorDailyLoader) {


        $scope.elementJquery = $($element);

        var dailyChart = $scope.elementJquery.find("#daily-visit-chart");

        var options = {
            grid: {
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                },
                borderWidth: 0,
                borderColor: "#f0f0f0",
                margin: 0,
                minBorderMargin: 0,
                labelMargin: 20,
                hoverable: true,
                clickable: true
            },
            // Tooltip
            tooltip: true,
            tooltipOpts: {
                content: "%s X: %x Y: %y",
                shifts: {
                    x: -60,
                    y: 25
                },
                defaultTheme: false
            },

            legend: {
                labelBoxBorderColor: "#ccc",
                show: false,
                noColumns: 0
            },
            series: {
                stack: true,
                shadowSize: 0,
                highlightColor: 'rgba(30,120,120,.5)'

            },
            xaxis: {
                tickLength: 0,
                tickDecimals: 0,
                show: true,
                min: 2,

                font: {

                    style: "normal",


                    color: "#666666"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                show: true,
                tickColor: "#f0f0f0",
                font: {

                    style: "normal",


                    color: "#666666"
                }
            },
            points: {
                show: true,
                radius: 2,
                symbol: "circle"
            },
            colors: ["#87cfcb", "#48a9a7"]
        };

        DashboardErrorDailyLoader().success(function(response){
            var data = ([{
                label: "Too",
                data: response.data,
                lines: {
                    show: true,
                    fill: true,
                    lineWidth: 2,
                    fillColor: {
                        colors: ["rgba(255,255,255,.1)", "rgba(160,220,220,.8)"]
                    }
                }
            }]);

            $scope.$dailyChart = $.plot(dailyChart, data, options);
        });



    })
    .controller("DashboardErrorGraphController", function ($scope, $element,  DashboardErrorPieGraphLoader) {

        $scope.elementJquery = $($element);

        var pieNode = $scope.elementJquery.find(".sm-pie");
        DashboardErrorPieGraphLoader().success(function(response) {
            $.plot(pieNode, response.data, {
                series: {
                    pie: {
                        innerRadius: 0.5,
                        show: true,
                        stroke: {
                            width: 0.1,
                            color: '#ffffff'
                        }
                    }

                },
                legend: {
                    show: true,
                    labelFormatter: function(text, series){ return text + " (" + series.percent.toFixed(2) + "%)"; },

                },
                grid: {
                    hoverable: true,
                    clickable: true
                },

                colors: ["#E67A77", "#D9DD81", "#79D1CF", "#95D7BB", "#4D5360"]
            });

        });


    });
