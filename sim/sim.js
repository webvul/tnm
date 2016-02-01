(function(){
IX.ns("Test");
function getRandomInt(max){return Math.floor(Math.random() * max);}
function getRandomItem(arr){return arr[getRandomInt(arr.length)];}
function getPagedData(arr, pageNo, pageSize){
	return {
		total : arr.length,
		items : IX.partLoop(arr, pageNo* pageSize, pageNo*pageSize + pageSize, [], function(acc, item){acc.push(item); return acc;})
	};
}
var startTime = Math.floor((new Date()).getTime()/1000)- 500000 ;

var SiteTypes = TCM.Const.SiteTypes;
var SiteTypeNames = TCM.Const.SiteTypeNames;
var UserRoles = IX.map([ 
["TCC 调度员",					SiteTypes.TCC, true],

["控制中心防灾值班员", 			SiteTypes.OCC],
["控制中心行车调度员", 			SiteTypes.OCC],
["控制中心电力调度员", 			SiteTypes.OCC],
["控制中心AFC调度员", 				SiteTypes.OCC],

["车辆段/停车场防灾值班员",			SiteTypes.Depot],
["车辆段/停车场行车值班员",			SiteTypes.Depot],
["车辆段/停车场运转值班员",			SiteTypes.Depot],
["车辆段/停车场安保值班员", 		SiteTypes.Depot],

["车站防灾值班员", 				SiteTypes.Station],
["车站行车值班员", 				SiteTypes.Station],
["换乘线路车站值班员", 			SiteTypes.Station],
["公安车站值班员",					SiteTypes.Station],

["公安派出所调度员",				SiteTypes.LinePolice],
["公安派出所值班员", 				SiteTypes.LinePolice],
["公安交总队调度员及其它部门人员",		SiteTypes.PTSD]
], function(r, idx){
	return {id:idx, name: r[0], siteType: r[1], promptable : r[2] || false};
});
var RolesSelectable = IX.map(SiteTypeNames, function(item, idx){
	return IX.loop(UserRoles, [], function(acc, r, _idx){
		if (r.siteType === idx)
			acc.push(r.id);
		return acc;
	});
});
var LevelRoles = [
[0, 0, true],
[1, 1],
[9, 5],
[2, 2],
[10,6],
[3, 7],
[4, 3],
[13,4],
[12,13],
[0, 0],
[11,15],
[15,8]
];
var UserLevels = (function(){
	var arr = [];
	for (var i=0;i<49; i++){
		var level = i<LevelRoles.length ? LevelRoles[i] : [null,null];
		arr.push({
			id : i,
			name : "第" + (i + 1) + "级",
			level : i+1,
			station : {id: level[0], prompted: level[2] || false},
			depot:{id: level[1], prompted: level[2] || false}
		});
	}
	return arr;
})();

var Line = {id: 1, name: "13号线"};
var siteIds = [];
var allSiteIds = [];
function genSite(idx, name, type, _idx){
	if (type == 2 || type == 3) {
		siteIds.push(idx);
	}
	allSiteIds.push(idx);
	return {id: idx, name: name, lineId:1, type: type, level: getRandomInt(2),
		no:idx+1, desc: type===3?("第"+ _idx + "站") : ""};
}
var siteNames = "西直门,大钟寺,知春路,五道口,上地,西二旗,龙泽,回龙观,霍营,立水桥,北苑,望京西,芍药居,光熙门,柳芳,东直门".split(",");
var Sites = [].concat(
	genSite(0, "地铁指挥中心", 0),
	genSite(1, "13号线控制中心", 1),
	genSite(2, "回龙观车辆段", 2),
	genSite(3, "东直门停车场", 2),
	IX.map(siteNames, function(name, idx){
		return genSite(4 + idx, name, 3, idx + 1);}),
	genSite(4 + siteNames.length, "13号线备用中心", 4),
	genSite(5 + siteNames.length, "13号线派出所", 5),
	genSite(6 + siteNames.length, "公交总队", 6)
);

var CurrentSite = Sites[1];
Test.getAllSites = function(){return Sites;};
Test.getStatus4Sites = function(){
	return IX.map(Sites, function(site){
		var randomInt = getRandomInt(site.id * 13) % 13;
		site.level = randomInt==7 ? 2 : (randomInt==4 || randomInt == 10 ? 1:0);
		return site;
	});
};
var CurrentSiteArr = CurrentSite.type == 1 ? IX.loop(Sites, [], function(acc, Sites){
	if (Sites.type != 0 && Sites.type != 6 && Sites.type != 5 && Sites.type != 4)
		acc.push(Sites);
	return acc;
}) : [CurrentSite];
Test.createSites(CurrentSiteArr);

var Users = {
	super : {id: 0, name: "超级用户", type: 0, siteId : 0},
	admin : [
		{id: 1, name: "叶智", account: "admin1", type: 1, siteId : 1},
		{id: 2, name: "杨无悔", account: "admin2", type: 1, siteId : 2},
		{id: 3, name: "赵敏", account: "admin3", type: 1, siteId : 3},
		{id: 4, name: "阳顶天", account: "admin4", type: 1, siteId : 4}
	],
	users : []
};
var SNames = "赵钱孙李周吴郑王刘花辛魏宋马朱陆".split("");
var LNames = "系统部署时由超级用户创建拥有创建修改删除各自车站的普通用户及赋予权限拥有创建修改删除等权限不能登陆以及云台控制等权限".split("");
function genUser(idx){
	var username = getRandomItem(SNames) + getRandomItem(LNames) +  getRandomItem(LNames);
	var site = getRandomItem(Sites);
	while(site.type == 4)
		site = getRandomItem(Sites);
	return {
		id : 10 + idx, name : username, account: "user" + idx, type: 2,
		siteId: site.id, role : getRandomItem(RolesSelectable[site.type]),
		desc : "加发送撒旦撒啊啊啊啊啊啊啊是大大大大大大大大大大大大大大大大大大啊发发啊发生大大声点方"
	};
}
Users.users = (function(){
	var arr = [];
	for (var i=0; i<300; i++)
		arr.push(genUser(i));
	return arr;
})();
function getCurrentLineInfo(){
	return  IX.inherit(Line,{
		sites : Sites,
		roles : UserRoles,
		levels : UserLevels
	});
}
Test.getCurrentSite = function(){
	if (CurrentSite.type == 1) {
		return CurrentSiteArr;
	}else{
		return CurrentSite;
	}
};

Test.getSession = function(){
	return {
		"id" : 1,
		"name" : "叶智",
		"siteId" : 1, 
		"type" : 1,
		"lineInfo" : getCurrentLineInfo()
	};
};

var faultId = 0;
var faultDevieType= [0,1, 2, 10, 20,21,22, 31,32,33, 40,41, 50,51,52,53,54, 60,61,62,63,64];
var faultCode = [0,1,2,3,4,100,101,102,103];
function genFault(timeTick){
	return {
		id : faultId ++,
		siteId: getRandomItem(Sites).id, 
		deviceType : getRandomItem(faultDevieType),
		deviceId : 1000000+getRandomInt(20), 
		level: getRandomItem([1,2]), 
		code : getRandomInt(5), 
		faultDate : timeTick
	};
}
var Faults = [];
for(var i=0;i<100; i++)
	Faults.unshift(genFault(startTime + i* 5000));
Test.getRTFaults = function(params){
	if (!params.id)
		return Faults;
	if (getRandomInt(20) % 4 !== 1)
		return [];
	var tick = Math.floor((new Date()).getTime()/1000)- 1000 ;
	var len = getRandomInt(3);
	var arr = [];
	for(var i=0; i<len; i++)
		arr.unshift(genFault(tick + i * 60));
	Faults = Faults.concat(arr);
	return arr;
};
Test.getFault4Station = function(){
	return IX.map(Sites, function(site, idx){
		return IX.inherit(site, {
			level: (idx == Math.floor(Math.random()*30) ? 1 : idx == Math.floor(Math.random()*30)? 2 : 0)
		});
	});
};

Test.getLineInfo = function(){ return IX.inherit(Line,{sites : Sites});};

Test.getUsers = function(params){ 
	var acc=IX.loop(Logs, [], function(arr, log){
			if(params.siteId==log.siteId){
				arr.push({id:log.id,userId:log.userId,name:log.userName})
			}
			return arr;
		});	
	return acc;
	//return Users.users;
};

Test.getLogs =function(params){
	return getAllLogs(params);
};
Test.getStatistics = function(params){
	var list = IX.loop(Logs.concat(Logs).concat(Logs), [], function(acc, item, idx){
		var desc = IX.map("0".multi(Math.floor(Math.random() * 5)+1).split(""), function(d){
			return {
				opType: [-1, 0, 1, 2, 3, 4, 100, 101, 102, 103][Math.floor(Math.random() * 10)],
				num: Math.floor(Math.random() * 10)+1
			};
		});
		acc.push(IX.inherit(item, {
			opNum: IX.loop(desc, 0, function(ac, dd, idx){
				ac += dd.num;
				return ac;
			}),
			desc: desc
		}));
		return acc;
	});
	var acc=IX.loop(list, [], function(arr, log){
			if(params.siteId=="all"||params.siteId==log.siteId){
				if(params.deviceType=="all"||params.deviceType==log.deviceType){
					var date=log.opDate;
					if(params.from<=date&&params.to>=date){
						arr.push(log);
					}
				}
			}
			return arr;
		});
	return getPagedData(acc, params.pageNo, params.pageSize);
};
Test.exportStatistics = function(params){

};
function getAllLogs(params) {
	var acc=IX.loop(Logs.concat(Logs).concat(Logs).concat(Logs), [], function(arr, log){
			if(params.siteId=="all"||params.siteId==log.siteId){
				if(params.userId=="all"||params.userId==log.userId){
					if(params.deviceType=="all"||params.deviceType==log.deviceType){
						var date=log.opDate;
						if(params.from<=date&&params.to>=date){
							arr.push(log);
						}
					}
				}
				
			}
			return arr;
		});
	return getPagedData(acc, params.pageNo, params.pageSize);
}
var Logs=[
{	
	id: 1,
	userId: 1,
	userName: "赵权级",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "网管服务器",
	deviceType: 0,
	opDate: Date.parse(new Date())/1000-20,
	opType: 1,
	ip:"127.0.0.1",
	desc: "查看实时流"
},
{
	id: 2,
	userId: 2,
	userName: "陆除系",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "视频服务器",
	deviceType: 1,
	opDate: Date.parse(new Date())/1000-320,
	opType: 2,
	ip:"127.0.0.1",
	desc: "测试2"
},
{
	id: 3,
	userId: 3,
	userName: "周普系",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "存储服务器",
	deviceType: 3,
	opDate: Date.parse(new Date())/1000-230,
	opType: 3,
	ip:"127.0.0.1",
	desc: "测试3"
},
{
	id: 4,
	userId: 4,
	userName: "刘权制",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "解码器",
	deviceType: 51,
	opDate: Date.parse(new Date())/1000-1120,
	opType: 4,
	ip:"127.0.0.1",
	desc: "测试4"
},
{
	id: 5,
	userId: 5,
	userName: "吴署建",
	siteId: 2,
	siteName: "回龙观车辆段",
	deviceName: "存储设备",
	deviceType: 10,
	opDate: Date.parse(new Date())/1000-720,
	opType: 5,
	ip:"127.0.0.1",
	desc: "测试5"
},
{
	id: 6,
	userId: 6,
	userName: "朱修拥",
	siteId: 2,
	siteName: "回龙观车辆段",
	deviceName: "画面分割器",
	deviceType: 52,
	opDate: Date.parse(new Date())/1000-420,
	opType: 1,
	ip:"127.0.0.1",
	desc: "测试6"
},
{
	id: 7,
	userId: 7,
	userName: "郑等改",
	siteId: 2,
	siteName: "回龙观车辆段",
	deviceName: "交换机",
	deviceType: 60,
	opDate: Date.parse(new Date())/1000-320,
	opType: 2,
	ip:"127.0.0.1",
	desc: "测试7"
},
{
	id: 8,
	userId: 8,
	userName: "孙有权",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "光端机",
	deviceType: 61,
	opDate: Date.parse(new Date())/1000-220,
	opType: 3,
	ip:"127.0.0.1",
	desc: "测试8"
},
{
	id: 9,
	userId: 9,
	userName: "花拥改",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "监视器",
	deviceType: 53,
	opDate: Date.parse(new Date())/1000-200,
	opType: 4,
	ip:"127.0.0.1",
	desc: "测试9"
},
{
	id: 10,
	userId: 10,
	userName: "赵部用",
	siteId: 1,
	siteName: "13号线控制中心",
	deviceName: "控制终端",
	deviceType: 54,
	opDate: Date.parse(new Date())/1000-2000,
	opType: 5,
	ip:"127.0.0.1",
	desc: "测试10"
}
]


})();