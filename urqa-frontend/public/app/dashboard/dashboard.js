/**
 * Created by karuana on 15. 6. 28..
 */
angular.module("app")

    .config(function ($stateProvider) {

    })

    .controller("DashBoardInfoController", function ($scope) {

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
