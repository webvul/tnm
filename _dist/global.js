(function(){
IX.ns("TNM.Global");

var baseUrl = TNM_BaseUrl + "/sim";
var imgUrl = TNM_BaseUrl + "/_dist/images";

IXW.ajaxEngine.init({
	ajaxFn : jQuery.ajax,
	baseUrl : baseUrl,
	imgUrl : imgUrl
});

IXW.urlEngine.mappingUrls([
["rackDeviceDefinition", "/rack/rackDevices.json", "img"],
["rackDeviceImg", "/rack/{file}", "img"],
["rackBackgroundImg", "/rackbg.png", "img"],
["topoBackgroundImg", "/rackbg.png", "img"],
["backgroundImg", "/entrybg.png", "img"],
["lineBackgroundImg", "/line-bg.png", "img"]
]);
TNM.Global.backgroundUrl = IXW.urlEngine.genUrl("backgroundImg");
TNM.Global.rackDeviceDefintionUrl = IXW.urlEngine.genUrl("rackDeviceDefinition");
TNM.Global.rackBackgroundImg = IXW.urlEngine.genUrl("rackBackgroundImg");
TNM.Global.topoBackgroundImg = IXW.urlEngine.genUrl("topoBackgroundImg");
TNM.Global.lineBackgroundUrl = IXW.urlEngine.genUrl("lineBackgroundImg");
TNM.Global.getRackDeviceImgUrl = function(filename){
	return IXW.urlEngine.genUrl("rackDeviceImg", {file : filename});
};

TNM.Global.entryCaller = function(name, params, cbFn, failFn){
	var remotefile = null;
	switch(name){
	case "login"://params : {username, password}
		if (params.username == "admin" && params.password == "123456")
			return setTimeout(function(){cbFn(Test.getSession());}, 100);
		else
			remotefile = baseUrl + "/failLogin.json";
		break;
	case "logout":
		return cbFn();
	}
	IX.Net.loadFile(remotefile, function(txt){
		var ret = JSON.parse(txt);
		if (ret.retCode != 1)
			IX.isFn(failFn)?failFn(ret) : alert(ret.err);
		else
			cbFn(ret.data);
	});
};

TNM.Global.commonCaller = function(name, params, cbFn, failFn){
	switch(name){
	case "session" :
		/**	cbFn({id,name,type,siteId, lineInfo})*/
		return setTimeout(function(){cbFn(Test.getSession());}, 100);
	case "rtFaults" : 
		/* params : {id : "lastFaultId"}
			cbFn([{id, siteId, deviceType, deviceId, level, code, faultDate:TimeTickInSec}])
		*/
		return setTimeout(function(){cbFn(Test.getRTFaults(params));}, 100);
	}
};

TNM.Global.sysCaller = function(name, params, cbFn, failFn){
	switch(name){
	case "getAllSites" :
		/**	cbFn([{id,name,type,level,no}])
		 */
		return setTimeout(function(){cbFn(Test.getAllSites());},100); 
	case "getStatus4Sites":
		 /*
			cbFn([{id, level}])
		 */
		return setTimeout(function(){cbFn(Test.getStatus4Sites());}, 100);	
	case "getFault4Station":
		/*
			cbFn([{id, name, level}])
		 */
		return setTimeout(function(){cbFn(Test.getFault4Station());}, 100);	
	case "getRacks":
		/* params : {siteId: siteId}
			cbFn([{id:rackId, name, devices:[{id, name, type, size, pos, level}]}])
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).getAllRacks()
		);}, 100);
	case "getDeviceFaultStatus" : 
		/* params : {siteId: siteId}
			cbFn([{id:deviceId, level}])
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).queryStatus4Racks()
		);}, 100);
	case "getDevicesNotInRack":
		/* params : {siteId: siteId}
			cbFn([{id,name, type, size}]) // size 如果没有设置则传1
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).getDevicesNotInRack()
		);}, 100);	
	case "addRack":
		/* params : {siteId: siteId, name:rackName}
			cbFn(rackId{id,name})
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).addRack(params.name)
		);}, 100);
	case "editRack":
		/* params : {siteId: siteId, id, name:rackName}
			cbFn()
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).editRack(params.id, params.name)
		);}, 100);	
	case "removeRacks":
		/* params: {siteId:siteId, ids : [rackId]}
			cbFn()
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).removeRacks(params.ids)
		);}, 100);
	case "addDevice":
		/* params : {siteId, deviceId, rackId, pos, size}
			cbFn()
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).addDevice(params.deviceId, params.rackId, params.pos)
		);}, 100);
	case "removeDevice":
		/* params: {siteId,rackId, deviceId}
			cbFn();
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).removeDevice(params.deviceId)
		);}, 100);	
	case "moveDevice":
		/* params: {siteId, deviceId, rackId, pos}
			cbFn();
		*/
		return setTimeout(function(){cbFn(
			Test.getRackDevice4Site(params.siteId).moveDevice(params.deviceId, params.rackId, params.pos)
		);}, 100);
	case "getDeviceDetail":
		/* params: {siteId, deviceId}
			cbFn({id, level, code, name, provider, ip, style, desc});
		*/
		var device = Test.getRackDevice4Site(params.siteId).getDevice(params.deviceId);
		return setTimeout(function(){cbFn(IX.inherit(device, {
			provider : "天堂伞厂",
			ip: "192.168.9.9",
			style: "ISOX-2ASLX-22SSA", 
			desc : "asdas<a>aaa</a>"
		}));}, 100);
	}
};

function randomInt(maxV){return Math.floor(Math.random()*maxV);}
TNM.Global.monitorCaller = function(name, params, cbFn, failFn){
	switch(name){
	case "getPerf":
		/* params : {id: deviceId}
			cbFn({mem : [totalInGB, usedInGB], cpu : [100, percentage], disk : [totalInGB, usedInGB]})
		*/
		return setTimeout(function(){cbFn({
			// mem : [4, 3], 
			// cpu : [100, 70], 
			// disk : [3000, 2000]

			mem : [4, Math.floor(Math.random()*40)/10], 
			cpu : [100, randomInt(100)], 
			disk : [3000, randomInt(3000)]
		});}, 100);
		break;
	case "getUsers":
		/* params : {siteId}
		cbFn([{id, name}])
		*/
		setTimeout(function(){cbFn(Test.getUsers(params));},100);
		break;
	case "getLogs":
		/* params : {siteId, deviceType, from, to, userId, pageNo, pageSize}
		cbFn({total, items: [data]})
		data: [{
			id: 0,
			userId: ,
			userName: ,
			siteId: ,
			siteName: ,
			deviceName: ,
			opDate: 1444923088,
			opType: -1,0...,
			desc: 0
		}]
		*/
		setTimeout(function(){cbFn(Test.getLogs(params));},100);
		break;
	case "getStatistics":
		/* params : {siteId, deviceType, from, to, pageNo, pageSize}
		cbFn({total, items: [data]})
		data: [{
			id: 0,
			siteId: ,
			siteName: ,
			deviceName: ,
			opDate: 1444923088,
			opNum: 0,
			desc: [{opType: -1, num: 0}]
		}]
		*/
		setTimeout(function(){cbFn(Test.getStatistics(params));},100);
		break;
	case "exportStatistics":
		/* params : {siteId, deviceType, from, to}
		*/
		setTimeout(function(){cbFn(Test.exportStatistics(params));},100);
		break;
	}
};

TNM.Global.deviceCaller = function(name, params, cbFn, failFn){
	switch(name){
	case "getAllDevices":
		/* 
		 cbFn([{siteId,devices:[{count, type}]}])
		*/
		setTimeout(function(){cbFn(Test.getAllDevices());},100);
		break;
	case "getFaultById":
		/*
		id
		 */
		setTimeout(function(){cbFn(Test.getFaultById(params));},100);
		break;
	case "getFault4Device":
		/*
		id
		 */
		setTimeout(function(){cbFn(Test.getFault4Device(params));},100);
		break;
	case "getDevicesForMonitor":
		/* params :{types[]}
		cbFn([ siteId,devices:[{ type, items:[{id,name}] }] ])
		 */ 
		setTimeout(function(){cbFn(Test.getDevicesForMonitor());},100);
		break;
	case "getDevices4Type":
		/* params : {pageNo, pageSize, siteId, types:[type]}
		 cbFn({total, items:[data]})
		 data: {参照TCM 增加一个loginType}
		*/
		setTimeout(function(){cbFn(Test.getDevices4Type(params));},100);
		break;
	case "editDevice":
		/* params : {siteId,id,loginIp,loginPort}
		*/
		setTimeout(function(){cbFn(Test.editDevice(params));},100);
		break;
	case "getFault4type":
		/* params : {siteId, types[], from, to, ifHandled, level, pageNo, pageSize}
		cbFn([{total, items: [data]}])
		data: [{
			code: -1/0/1/2,
			desc: "xxx故障",
			deviceId: 0,
			deviceIp: "192.168.1.0",
			deviceName: "网管服务<a>aaa</a>器0",
			deviceType: 0,
			faultDate: 1444923088,
			handlerDate: 1444923088,
			handlerId: "XXX人",
			id: 0,
			isHandled: false/true,
			level: 0/1/2,
			siteId: 1
		}]
		*/
		setTimeout(function(){cbFn(Test.getFault4type(params));},100);
		break;
	case "handleFault":
		/* params : {siteId,id}
		*/
		setTimeout(function(){cbFn(Test.handleFault(params));},100);
		break;
	}
}

})();