var app = angular.module("app");


app.constant("NAV_SIDE", [{
	name: "NAV_SIDE.PROJECTS",
	path: "projects.list",
	icon: "fa-archive"
}, {
	name: "NAV_SIDE.ADD_PROJECTS",
	path: "projects.add",
	icon: "fa-plus-circle"
}, {
	name: "NAV_SIDE.TUTORIAL.TITLE",
	path: "tutorial",
	icon: "fa-question-circle",
	menu: [{
		name: "NAV_SIDE.TUTORIAL.ANDROID",
		path: "tutorial.android"
	},{
		name: "NAV_SIDE.TUTORIAL.IOS",
		path: "tutorial.ios"
	}, {
		name: "NAV_SIDE.TUTORIAL.UNITY",
		path: "tutorial.unity"
	}, {
		name: "NAV_SIDE.TUTORIAL.CORDOVA",
		path: "tutorial.cordova"
	}]
}])

.controller("NavSideCtrl", function ($scope, $state, NAV_SIDE) {
	$scope.menu = NAV_SIDE;
});

app.config(function ($stateProvider) {
	$stateProvider.state("projects", {
		url: "/",
		template: "<ui-view />",
		abstract: true,
		data: { title: [] }
	})
	.state("projects.list",{
		url: "projects",
		templateUrl: "/static/app/projects/projects.list.html",
		controller: "ProjectCtrl",
		resolve: {data: function ($stateParams, ProjectModel) {
			return $stateParams.data;
		} }
	})
	.state("projects.add", {
		url: "projects/add",
		templateUrl: "/static/app/projects/projects.edit.html",
		controller: "ProjectEditCtrl"
	});
})

.factory("ProjectModel", function ($resource) {
    return $resource("http://localhost:8000/urqa/v2/api/projects");
})

.controller("ProjectCtrl", function ($scope, data) {
	$scope.list = [
        {
            "pid": 15,
            "count": 1,
            "apikey": "62861D1B",
            "platform": 1,
            "name": "Fanpple",
            "stage": 3,
            "category": 18,
            "timezone": "Asia/Seoul",
            "owner_uid": 11
        },
        {
            "pid": 33,
            "count": 24,
            "apikey": "8F1318C9",
            "platform": 1,
            "name": "Alarmy(Lite)",
            "stage": 3,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 28
        },
        {
            "pid": 60,
            "count": 51,
            "apikey": "8A8C9723",
            "platform": 1,
            "name": "Nine",
            "stage": 3,
            "category": 14,
            "timezone": "Asia/Seoul",
            "owner_uid": 58
        },
        {
            "pid": 89,
            "count": 3,
            "apikey": "84C17CD7",
            "platform": 1,
            "name": "LoveD-Day",
            "stage": 3,
            "category": 7,
            "timezone": "Asia/Seoul",
            "owner_uid": 95
        },
        {
            "pid": 142,
            "count": 3,
            "apikey": "64341412",
            "platform": 1,
            "name": "ALYacPhone",
            "stage": 3,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 193
        },
        {
            "pid": 164,
            "count": 7,
            "apikey": "604EDB24",
            "platform": 1,
            "name": "mdybasics",
            "stage": 1,
            "category": 16,
            "timezone": "Asia/Seoul",
            "owner_uid": 217
        },
        {
            "pid": 178,
            "count": 11,
            "apikey": "D12C7BF4",
            "platform": 1,
            "name": "ConnectMe",
            "stage": 3,
            "category": 18,
            "timezone": "Asia/Seoul",
            "owner_uid": 237
        },
        {
            "pid": 186,
            "count": 7468,
            "apikey": "15AB6ED7",
            "platform": 1,
            "name": "Realfarm",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 207
        },
        {
            "pid": 223,
            "count": 6,
            "apikey": "AE226726",
            "platform": 1,
            "name": "HoneMobileTest",
            "stage": 2,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 279
        },
        {
            "pid": 229,
            "count": 10,
            "apikey": "46A26736",
            "platform": 1,
            "name": "텔레톡비-v2",
            "stage": 2,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 10
        },
        {
            "pid": 249,
            "count": 1,
            "apikey": "3E62C515",
            "platform": 1,
            "name": "Military2048",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 306
        },
        {
            "pid": 269,
            "count": 2,
            "apikey": "E279E0B2",
            "platform": 1,
            "name": "OkoshiteME",
            "stage": 3,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 28
        },
        {
            "pid": 299,
            "count": 1,
            "apikey": "2FE6B42B",
            "platform": 1,
            "name": "NewHoneyShipper",
            "stage": 3,
            "category": 14,
            "timezone": "Asia/Seoul",
            "owner_uid": 374
        },
        {
            "pid": 338,
            "count": 694,
            "apikey": "2C8B3FE6",
            "platform": 1,
            "name": "dodol locker release",
            "stage": 3,
            "category": 20,
            "timezone": "Asia/Seoul",
            "owner_uid": 462
        },
        {
            "pid": 340,
            "count": 1,
            "apikey": "9D83A526",
            "platform": 1,
            "name": "Fitly",
            "stage": 3,
            "category": 17,
            "timezone": "Asia/Seoul",
            "owner_uid": 464
        },
        {
            "pid": 357,
            "count": 6,
            "apikey": "2D6E4B72",
            "platform": 1,
            "name": "obti",
            "stage": 3,
            "category": 7,
            "timezone": "Asia/Seoul",
            "owner_uid": 489
        },
        {
            "pid": 367,
            "count": 1,
            "apikey": "8195ABDC",
            "platform": 1,
            "name": "MyAngel2",
            "stage": 3,
            "category": 5,
            "timezone": "Asia/Seoul",
            "owner_uid": 504
        },
        {
            "pid": 407,
            "count": 1,
            "apikey": "C2DD4A37",
            "platform": 1,
            "name": "Bluetoothe Remote Control",
            "stage": 2,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 506
        },
        {
            "pid": 416,
            "count": 336,
            "apikey": "01E79D29",
            "platform": 1,
            "name": "EXTRADE",
            "stage": 3,
            "category": 14,
            "timezone": "Asia/Seoul",
            "owner_uid": 353
        },
        {
            "pid": 427,
            "count": 3,
            "apikey": "5966A037",
            "platform": 1,
            "name": "MultiChannelPlayer",
            "stage": 1,
            "category": 8,
            "timezone": "Asia/Seoul",
            "owner_uid": 566
        },
        {
            "pid": 449,
            "count": 2,
            "apikey": "73CE0B3B",
            "platform": 1,
            "name": "alpha_0.3.8",
            "stage": 2,
            "category": 9,
            "timezone": "Asia/Seoul",
            "owner_uid": 321
        },
        {
            "pid": 481,
            "count": 1,
            "apikey": "ED5E6977",
            "platform": 1,
            "name": "MOSS",
            "stage": 3,
            "category": 14,
            "timezone": "Asia/Seoul",
            "owner_uid": 600
        },
        {
            "pid": 482,
            "count": 3,
            "apikey": "857A4E5F",
            "platform": 1,
            "name": "노래의 신",
            "stage": 3,
            "category": 9,
            "timezone": "Asia/Seoul",
            "owner_uid": 603
        },
        {
            "pid": 489,
            "count": 1,
            "apikey": "87704F76",
            "platform": 1,
            "name": "Hanintel",
            "stage": 3,
            "category": 22,
            "timezone": "Asia/Seoul",
            "owner_uid": 607
        },
        {
            "pid": 501,
            "count": 53,
            "apikey": "CA6C6B74",
            "platform": 3,
            "name": "quiz",
            "stage": 2,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 611
        },
        {
            "pid": 509,
            "count": 3,
            "apikey": "686F6916",
            "platform": 1,
            "name": "HCastleNaver",
            "stage": 2,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 560
        },
        {
            "pid": 517,
            "count": 4,
            "apikey": "DAAFEDE9",
            "platform": 1,
            "name": "ClickWang",
            "stage": 3,
            "category": 16,
            "timezone": "Asia/Seoul",
            "owner_uid": 520
        },
        {
            "pid": 519,
            "count": 91,
            "apikey": "49F7D0AF",
            "platform": 1,
            "name": "edu-manager",
            "stage": 1,
            "category": 16,
            "timezone": "Asia/Seoul",
            "owner_uid": 622
        },
        {
            "pid": 539,
            "count": 1,
            "apikey": "A92D2778",
            "platform": 1,
            "name": "한동 스마트캠퍼스",
            "stage": 3,
            "category": 16,
            "timezone": "Asia/Seoul",
            "owner_uid": 639
        },
        {
            "pid": 543,
            "count": 2,
            "apikey": "1B7E224D",
            "platform": 1,
            "name": "CompiaOn",
            "stage": 2,
            "category": 21,
            "timezone": "Asia/Seoul",
            "owner_uid": 645
        },
        {
            "pid": 547,
            "count": 43,
            "apikey": "3243759C",
            "platform": 1,
            "name": "넌 얼마나쓰니 2",
            "stage": 3,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 489
        },
        {
            "pid": 572,
            "count": 2,
            "apikey": "F2871ABD",
            "platform": 1,
            "name": "Safety",
            "stage": 3,
            "category": 13,
            "timezone": "Asia/Seoul",
            "owner_uid": 665
        },
        {
            "pid": 596,
            "count": 2,
            "apikey": "233F5E0C",
            "platform": 1,
            "name": "DaeguMobile",
            "stage": 3,
            "category": 15,
            "timezone": "Asia/Seoul",
            "owner_uid": 682
        },
        {
            "pid": 619,
            "count": 16,
            "apikey": "FFF17B29",
            "platform": 1,
            "name": "Song of War (google)",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 696
        },
        {
            "pid": 622,
            "count": 21,
            "apikey": "6E6B71A6",
            "platform": 1,
            "name": "Song of War (naver)",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 696
        },
        {
            "pid": 623,
            "count": 4,
            "apikey": "37CB39B8",
            "platform": 1,
            "name": "Song of War (Tstore)",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 696
        },
        {
            "pid": 636,
            "count": 3,
            "apikey": "48142713",
            "platform": 1,
            "name": "Limo_passenger",
            "stage": 3,
            "category": 22,
            "timezone": "Asia/Seoul",
            "owner_uid": 709
        },
        {
            "pid": 639,
            "count": 30,
            "apikey": "E5BAA5F2",
            "platform": 1,
            "name": "Limo_driver",
            "stage": 3,
            "category": 22,
            "timezone": "Asia/Seoul",
            "owner_uid": 709
        },
        {
            "pid": 643,
            "count": 2,
            "apikey": "05EE7F89",
            "platform": 1,
            "name": "HCastleTstore",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 560
        },
        {
            "pid": 650,
            "count": 5,
            "apikey": "6E029464",
            "platform": 1,
            "name": "IBSApp",
            "stage": 3,
            "category": 8,
            "timezone": "Asia/Seoul",
            "owner_uid": 716
        },
        {
            "pid": 653,
            "count": 1,
            "apikey": "7FD44501",
            "platform": 1,
            "name": "RaonTalk",
            "stage": 3,
            "category": 3,
            "timezone": "Asia/Seoul",
            "owner_uid": 721
        },
        {
            "pid": 662,
            "count": 4,
            "apikey": "EBAAF45E",
            "platform": 3,
            "name": "DebriDefrag",
            "stage": 3,
            "category": 1,
            "timezone": "Asia/Seoul",
            "owner_uid": 87
        },
        {
            "pid": 668,
            "count": 71,
            "apikey": "9D2C982E",
            "platform": 1,
            "name": "CJ One",
            "stage": 3,
            "category": 7,
            "timezone": "Asia/Seoul",
            "owner_uid": 737
        },
        {
            "pid": 683,
            "count": 2,
            "apikey": "4FE218AA",
            "platform": 1,
            "name": "PARKHERE_V2",
            "stage": 1,
            "category": 22,
            "timezone": "Asia/Seoul",
            "owner_uid": 530
        },
        {
            "pid": 692,
            "count": 8,
            "apikey": "AC8DDC57",
            "platform": 1,
            "name": "몬캐스트",
            "stage": 2,
            "category": 8,
            "timezone": "Asia/Seoul",
            "owner_uid": 603
        }
    ];
})

.controller("ProjectEditCtrl", function ($scope, $modal) {
	
});
