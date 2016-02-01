(function(){
IX.ns("Test");

var zoneNames = "站台层,站厅层,通道层,出入口层,设备区层,票务室".split(",");;
var faultArr=[
{"code":2,"desc":null,
"deviceId":1000001,"deviceIp":"192.168.12.242",
"deviceName":"TVS服务器","deviceType":1,"faultDate":1445844651,
"handlerDate":null,"handlerId":null,
"id":99,"isHandled":false,"level":1,"siteId":5
},
{"code":2,"desc":null,"deviceId":1000003,
"deviceIp":"192.168.12.242","deviceName":"TVS服务器",
"deviceType":1,"faultDate":1445843423,"handlerDate":1446459572,
"handlerId":5000001,"id":100,"isHandled":true,"level":2,"siteId":5
},
{"code":3,"desc":null,"deviceId":1000002,"deviceIp":"192.168.12.242",
"deviceName":"TVS服务器","deviceType":1,"faultDate":1445752113,
"handlerDate":1446455349,"handlerId":5000001,"id":98,
"isHandled":true,"level":1,"siteId":5},
{"code":3,"desc":null,"deviceId":1000004,"deviceIp":"192.168.12.242",
"deviceName":"TVS服务器","deviceType":1,"faultDate":1445752113,
"handlerDate":1446455349,"handlerId":5000001,"id":101,
"isHandled":true,"level":1,"siteId":5}
];
var DeviceTypeNums = {
	0: {num: 1, tpl:{
		name: "网管服务<a>aaa</a>器",
		type: 0,
		desc: "网管服务器",
		ip: "192.168.1.",
		port: 1123123222222222222222222,
		version: ""
	}},
	1: {num: 1, tpl: {
		name: "视频服务器", 
		type: 1,
		desc: "视频服务器",
		ip: "192.168.2.",
		port: 1,
		version: "1.0"
	}},
	2: {num: 1, tpl: {
		name: "视频分析服务器", 
		type: 2,
		desc: "视频分析服务器",
		ip: "192.168.3.",
		port: 1,
		version: "1.0"
	}},
	3: {num: 3, tpl: {
		name: "存储服务器", 
		type: 3,
		desc: "存储服务器",
		ip: "192.168.3.",
		port: 1,
		version: "1.0"
	}},
	10: {num: 1, tpl: {
		name: "存储设备", 
		type: 10, 
		diskNum: 1, 
		capacity: '2GB',
		desc: "存储设备",
		ip: "192.168.4.",
		port: 1,
		version: "1.0"	
	}},
	20: {num: 46, tpl:{
		name: "数字固定枪机",
		type: 20,
		style: "ADT-VSDB3MPTW",
		provider: "泰科",
		ip: "192.168.5.",
		port: 1,
		desc: "数字固定枪机",
		version: "1.0",
		channelNum: 2,
		bcAddr: "224.169.1.", 
		bcPort: 1, 
		username:"admin",
		password:"admin"
	}},
	21: {num: 21, tpl: {
		name: "数字半球",
		type: 21, 
		style: "ADT-VSDB3MPTW",
		provider: "泰科",
		ip: "192.168.6.",
		port: 1,
		desc: "数字半球",
		username:"admin",
		password:"admin",
		version: "1.0",
		channelNum: 1,
		bcAddr: "224.169.2.", 
		bcPort: 1
	}},
	22: {num: 31, tpl: {
		name: "数字球机",
		type: 22,
		style: "ADT-VSDB3MPTW",
		provider: "泰科",
		ip: "192.168.7.",
		port: 1,
		desc: "数字球机",
		username:"admin",
		password:"admin",
		version: "1.0",
		channelNum: 1,
		bcAddr: "224.169.2.", 
		bcPort: 1
	}},
	31: {num: 65, tpl: {
		name: "模拟固定枪机",
		type: 31,
		style: "ADT-VSCB650TW",
		provider: "泰科",
		desc: "模拟固定枪机",
		ip: "192.168.8.",
		controlType: 1, 
		controlParams: 1,
		bitsets: 1
	}},
	32: {num: 11, tpl: {
		name: "模拟半球",
		type: 32,
		style: "ADT-VSVD700VF3312",
		provider: "泰科",
		desc: "模拟半球",
		ip: "192.168.8.",
		controlType: 1, 
		controlParams: 1,
		bitsets: 1
	}},
	33: {num: 25, tpl: {
		name: "模拟球机",
		type: 33,
		style: "ADT-VSSD540X26PDN",
		provider: "泰科",
		desc: "模拟球机",
		ip: "192.168.8.",
		controlType: 1, 
		controlParams: 1,
		bitsets: 1
	}},
	40: {num: 105, tpl: {
		name: "定向拾音器",
		type: 40,
		style: "定制",
		provider: "定制",
		desc: "定向拾音器",
		relatedCamera: 1
	}},
	41: {num: 13, tpl: {
		name: "全向拾音器",
		type: 41,
		style: "定制",
		provider: "定制",
		desc: "全向拾音器",
		relatedCamera: 1
	}},
	50: {num: 5, tpl: {
		name: "编码器",
		type: 50,
		style: "S-54",
		provider: "NKF",
		ip: "192.168.8.",
		port: 1,
		desc: "编码器",
		version: "1.0",
		username:"admin",
		password:"admin",
		driverId: 1,
		channelNum: 2,
		bc: [{addr:"192.170.1.1",port:2,channelNo:1},{addr:"192.170.1.3",port:3,channelNo:2}]
	}},
	51: {num: 17, tpl: {
		name: "解码器",
		type: 51,
		style: "S-60D-SD",
		provider: "NKF",
		ip: "192.168.9.",
		port: 1,
		desc: "解码器",
		username:"admin",
		password:"admin",
		version: "1.0",
		channelNum: 2,
		loginType:"192.168.12.236"
	}},
	52: {num: 5, tpl: {
		name: "画面分割器",
		type: 52,
		style: "AP-CH4",
		provider: "AP",
		desc: "画面分割器",
		maxWindow: 16
	}},
	53: {num: 7, tpl: {
		name: "监视器",
		type: 53,
		style: "LC42HD-A",
		provider: "维曼",
		desc: "监视器",
		relatedSpliter: 1
	}},
	54: {num: 1, tpl: {
		name: "控制终端",
		type: 54,
		style: "DELL  T1650",
		provider: "DELL",
		ip: "192.168.10.",
		desc: "控制终端"
	}},
	60: {num: 1, tpl: {
		name: "交换机",
		type: 60,
		style: "LS-7506E-S",
		provider: "H3C",
		desc: "交换机",
		path: "localhost1"
	}},
	61: {num: 1, tpl: {
		name: "光端机",
		type: 61,
		style: "NV4508-4SD-8SA-DT",
		provider: "安邦新创",
		desc: "光端机",
		path: "localhost2"
	}},
	62: {num: 44, tpl: {
		name: "光纤收发器",
		type: 62,
		style: "FS100-1",
		provider: "亚腾时达",
		desc: "光纤收发器",
		path: "localhost3"
	}},
	63: {num: 1, tpl: {
		name: "数字KVM",
		type: 63,
		style: "KN1108V",
		provider: "ATEN",
		desc: "数字KVM",
		path: "localhost4"
	}},
	64: {num: 1, tpl: {
		name: "数字PDU",
		type: 64,
		style: "PE8208G",
		username:"admin",
		password:"admin",
		provider: "ATEN",
		desc: "数字PDU",
		path: "localhost5"
	}},
	65: {num: 5, tpl: {
		name: "字符叠加器",
		type: 65,
		style: "AP-CH4",
		provider: "AP",
		desc: "字符叠加器",
		driverId: 1
	}},
	90: {num: 1, tpl: {
		name: "其他设备",
		type: 90,
		desc: "其他设备",
		path: "localhost6"
	}}
};

function SiteDevices(site){
	var siteId = site.id, siteType = site.type;
	var DeviceZones = [];
	var DevicesHT = new IX.IListManager();
	var Devices4All = new IX.I1ToNManager();
	var identity = 0, count = 0;
	
	function getDeviceIdsByTypes(types){
		var arr = [];
		for (var i = 0; i < types.length; i++) 
			arr = arr.concat(Devices4All.get(types[i]));
		return arr;
	}
	function getPagedData(arr, pageNo, pageSize){
		return {
			total : arr.length,
			items : IX.partLoop(arr, pageNo* pageSize, pageNo*pageSize + pageSize, [], function(acc, item){acc.push(item); return acc;})
		};
	}
	/*function getDevicesByIds(idArr){ 
		console.log(idArr);
		var all = [];
		for (var i = 0; i < idArr.length; i++) 
			all = all.concat(DevicesHT.get(idArr[i]));
		return all;
	}*/

	function createCommonDevice(arr, morePros){
		IX.iterate(arr, function(type){
			var Tpls = DeviceTypeNums[type];
			for (var i = 0; i < Tpls.num; i++) {
				var obj = IX.inherit(Tpls.tpl, {
					id: identity++,
					name: Tpls.tpl.name + i,
					siteId : siteId,
					ip: (Tpls.tpl.ip || "") + i
				}, morePros);
				DevicesHT.register(obj.id, obj);
				Devices4All.put(Tpls.tpl.type, obj.id);
			}; 
		});
	}

	if(site.type == 2 || site.type == 3){
		for (var i = 0; i < zoneNames.length; i++){
			DeviceZones.push({
				id : i,
				name : zoneNames[i],
				siteId : siteId,
				no : "0"+ i,
				desc : "第" + (i + 1) + "分区"
			});
		}

		IX.iterate([20, 21, 22], function(type){
			var Tpls = DeviceTypeNums[type];
			for (var i = 0; i < Tpls.num; i++) {
				var obj = IX.inherit(Tpls.tpl, {
					id: 1000+identity++,
					name: Tpls.tpl.name + i,
					siteId : siteId,
					ip: (Tpls.tpl.ip || "") + i,
					// zoneId: Math.floor(Math.random() * DeviceZones.length),
					bcAddr: Tpls.tpl.bcAddr+(count++),
					controlable: count++ % 2 == 0 ? true : false
				});
				DevicesHT.register(obj.id, obj);
				Devices4All.put(Tpls.tpl.type, obj.id);
			}; 
		});

		IX.iterate([31, 32, 33], function(type){
			var Tpls = DeviceTypeNums[type];
			for (var i = 0; i < Tpls.num; i++) {
				var obj = IX.inherit(Tpls.tpl, {
					id: 2000+identity++,
					name: Tpls.tpl.name + i,
					siteId : siteId,
					ip: (Tpls.tpl.ip || "") + i,
					zoneId: Math.floor(Math.random() * DeviceZones.length),
					controlType: Math.floor(Math.random() * 5),
					controlParams: Math.floor(Math.random() * 5)
				});
				DevicesHT.register(obj.id, obj);
				Devices4All.put(Tpls.tpl.type, obj.id);
			}; 
		});

		var allCameras = getDeviceIdsByTypes([20, 21, 22, 31, 32, 33]);
		createCommonDevice([40, 41], {relatedCamera: allCameras[count++]});

		createCommonDevice([50], {});
		createCommonDevice([65], {
			driverId: Math.floor(Math.random() * 5),
			relatedCamera: count+2000
		});
	}
	
	createCommonDevice([0, 1, 2, 3, 51, 54], {});

	createCommonDevice([10], {capacity: Math.floor(Math.random()*5 + 1) + 'GB'});

	createCommonDevice([52], {
		maxWindow: [1, 2, 4, 9, 16][Math.floor(Math.random() * 5)],
		decoders: [{id: 100, name: "解码器-1"},null,{id: 101, name: "解码器-2"},{id: 102, name: "解码器-3"},{id: 103, name: "解码器-4"}]
	});

	createCommonDevice([53], {relatedSpliter: Devices4All.get('52')});

	createCommonDevice([60, 61, 62, 63, 64, 90], {path: count++});

	function getByZoneId(zoneId){
		for (var i = 0; i < DeviceZones.length; i++) {
			if(DeviceZones[i].id == zoneId)
				return DeviceZones[i];
		};
	}

	function getAllZones(siteId){
		var allZones = [];
		var CF = DevicesHT.getByKeys(getDeviceIdsByTypes([20, 31]));
		var CSE = DevicesHT.getByKeys(getDeviceIdsByTypes([21, 32]));
		var CSP = DevicesHT.getByKeys(getDeviceIdsByTypes([22, 33]));
		for (var i = 0; i < DeviceZones.length; i++) {
			var fi = 0, si = 0, spi = 0;
			IX.iterate(CF, function(obj){
				if(obj.zoneId == DeviceZones[i].id)
					fi++;
			});
			IX.iterate(CSE, function(obj){
				if(obj.zoneId == DeviceZones[i].id)
					si++;
			});
			IX.iterate(CSP, function(obj){
				if(obj.zoneId == DeviceZones[i].id)
					spi++;
			});
			allZones.push({
				id: DeviceZones[i].id,
				name: DeviceZones[i].name,
				total:{
					fixed: fi,
					semi: si,
					sphere: spi
				}
			});
		};
		var obj = {
			siteId: siteId,
			zones: allZones
		};
		var arr = [];
		arr.push(obj);
		return arr;
	}
	//新增分区
	/**
	 * params{
	 * 	name
	 * }
	 */
	function addZone(params){
		var obj = {
			id: DeviceZones.length,
			name: params.name,
			siteId : params.siteId,
			no : "0"+ DeviceZones.length,
			desc : "第" + (DeviceZones.length + 1) + "分区"
		};
		DeviceZones.push(obj);
		return {
			id: obj.id,
			name: params.name,
			total: {
				fixed: 0,
				semi: 0,
				sphere: 0 
			}
		}
	}
	//修改分区
	/**
	 * params{
	 * 	id,
	 * 	name
	 * }
	 */
	function editZone(params){
		getByZoneId(params.id).name = params.name;
	}

	//删除分区
	/**
	 * params{
	 * 	ids: [id1, id2...]
	 * }
	 */
	function deleteZone(params){
		var allCameras = DevicesHT.getByKeys(getDeviceIdsByTypes([20, 21, 22, 31, 32, 33]));
		for (var i = 0; i < params.ids.length; i++) {
			for (var j = 0; j < DeviceZones.length; j++) {
				if(params.ids[i] == DeviceZones[j].id){
					IX.iterate(allCameras, function(obj){
						if(obj.zoneId == DeviceZones[j].id)
							obj.zoneId = null;
					});
					DeviceZones.splice(j, 1);
				}
			}
		}
	}


	function getAllZoneCameras(siteId){
		var allZones = [];
		var cameras = DevicesHT.getByKeys(getDeviceIdsByTypes([20, 21, 22, 31, 32, 33]));
		for (var i = 0; i < DeviceZones.length; i++) {
			var zone = DeviceZones[i];
			if (zone.siteId != siteId) continue;
			var zoneId = zone.id;
			var zoneData = {name : zone.name};
			zoneData.cameras = IX.loop(cameras, [], function(acc, c){
				if (c.zoneId == zoneId)
					acc.push({id : c.id, type:c.type, name:c.name});
				return acc;
			});
			allZones.push(zoneData);
		}

		return allZones;
	}

	//列出分区所有摄像机
	/**
	 * params{
	 * 	siteId,
	 * 	id: zoneId,
	 * 	types: [],
	 * 	pageNo,
	 * 	pageSize
	 * }
	 */
	function getCamerasByZone(params){
		var arr = [];
		IX.iterate(DevicesHT.getByKeys(getDeviceIdsByTypes(params.types)), function(obj){
			if(params.id == obj.zoneId)
				arr.push(obj);
		});
		return getPagedData(arr, params.pageNo, params.pageSize);
	} 
	//获取所有无分区摄像机
	function getCamerasByNoZone(){
		var arr = [];
		var allCameras = DevicesHT.getByKeys(getDeviceIdsByTypes([20, 21, 22, 31, 32, 33]));
		IX.iterate(allCameras, function(obj){
			if(obj.zoneId == null){
				arr.push({
					id: obj.id,
					name: obj.name,
					type: obj.type
				});
			}
		});
		return arr;
	}
	//添加摄像机到当前分区
	/**
	 * params{
	 * 	id: zoneId,
	 * 	cameras: [cameraId1, cameraId2...],
	 * }
	 */
	function addCamerasToZone(params){
		var siteId = Test.getCurrentSite().id;
		var obj = null;
		IX.iterate(params.cameras, function(id){
			var type = DevicesHT.get(id).type;
			DevicesHT.register(id, {
				zoneId: params.id,
				type: type
			});
			Devices4All.put(type, id);
		});
		IX.iterate(getAllZones(siteId)[0].zones, function(zone){
			if(zone.id == params.id){
				obj = zone.total;
			}
		});
		return obj;
	}
	//从分区中删除摄像机
	/**
	 * params{
	 * 	id: zoneId
	 * 	cameras: [cameraId1, cameraId2...]
	 * }
	 */
	function deleteCamerasFromZone(params){
		var allCameras = DevicesHT.getByKeys(getDeviceIdsByTypes([20, 21, 22, 31, 32, 33]));
		var siteId = Test.getCurrentSite().id;
		IX.iterate(allCameras, function(obj){
			if(obj.zoneId == params.id){
				for (var i = 0; i < params.cameras.length; i++) {
					if(params.cameras[i] == obj.id)
						obj.zoneId = null;
				};
			}
		});
		return getAllZones(siteId)[0].zones.total;
	}

	//列出所有设备
	function getAllDevices(siteId){
		var DevicesTypes = [1, 2, 3, 10, 20, 21, 22, 31, 32, 33, 40, 41, 50, 51, 52, 53, 54, 60, 61, 62, 63, 64, 65, 90];
		if(siteType == 1)
			DevicesTypes = [0, 1, 2, 3, 10, 51, 52, 53, 54, 60, 61, 62, 63, 64, 90];
		var allDevices = [];
		for (var i = 0; i < DevicesTypes.length; i++) {
			allDevices.push({
				type: DevicesTypes[i],
				count: Devices4All.get(DevicesTypes[i]).length
			});
		};
		var obj = {
			siteId: siteId,
			devices: allDevices,
		}
		var arr = [];
		arr.push(obj);
		return arr;
	}
	//列出所有监视信息里的设备目前，只有服务器
	function getDevicesForMonitor(siteId){
		var DevicesTypes = [1, 2, 3, 10, 20, 21, 22, 31, 32, 33, 40, 41, 50, 51, 52, 53, 54, 60, 61, 62, 63, 64, 65, 90];
		if(siteType == 1)
			DevicesTypes = [0, 1, 2, 3, 10, 51, 52, 53, 54, 60, 61, 62, 63, 64, 90];
		var allDevices = [];
		var items=[{id:1,name:"服务器1"},{id:2,name:"服务器2"},{id:3,name:"服务器1"},{id:4,name:"服务器4"}];
		for (var i = 0; i < DevicesTypes.length; i++) {
			allDevices.push({
				type: DevicesTypes[i],
				count: Devices4All.get(DevicesTypes[i]).length,
				items:items
			});
		};
		var obj = {
			siteId: siteId,
			devices: allDevices,
		}
		var arr = [];
		arr.push(obj);
		return arr;
	}
	//列出某类型设备
	/**
	 * params{
	 * 	types: DeviceType,
	 * 	pageNo,
	 * 	pageSize 
	 * }
	 */
	function getDevices4Type(params){
		var itemIds = [];
		IX.iterate(params.types,function(type){
			var allIds4Type = Devices4All.get(type);
			itemIds = itemIds.concat(allIds4Type);
		});
		return getPagedData(DevicesHT.getByKeys(itemIds), params.pageNo, params.pageSize);
	}
	function getAllNotRelatedCameras(params){
		var itemIds = [];
		IX.iterate([20, 21, 22],function(type){
			var allIds4Type = Devices4All.get(type);
			itemIds = itemIds.concat(allIds4Type);
		});
		var objs = DevicesHT.getByKeys(itemIds);
		return {notRelatedCameras: IX.loop(objs, [], function(acc, obj){
			acc.push({id: obj.id, name: obj.name});
			return acc;
		})};
	}	

	function getAllNotRelatedDecoders(params){
		var itemIds = Devices4All.get(51);
		var objs = DevicesHT.getByKeys(itemIds);
		return {notRelatedDecoders: IX.loop(objs, [], function(acc, obj){
			acc.push({id: obj.id, name: obj.name});
			return acc;
		})};
		// return {notRelatedDecoders: []};
	}

	//增加设备
	/**
	 * params{
	 * 	name,
	 * 	type,
	 * }
	 */
	function addDevice(params){
		var Tpl = DeviceTypeNums[params.type];
		var thisId = identity++;
		DevicesHT.register(thisId, IX.inherit(Tpl.tpl, {
			id: thisId,
			name: params.name,
			ip: Tpl.tpl.ip + thisId
		}));
		Devices4All.put(params.type, thisId); 
		return DevicesHT.get(thisId);
	}

	/**修改设备
	 * params{
	 * 	id,
	 * 	name,
	 * }
	 */
	function editDevice(params){
		DevicesHT.get(params.id).name = params.name;
	}

	/**删除设备
	 * params{
	 * 	ids: [deviceId1, deviceId2...]
	 * }
	 */
	function deleteDevices(params){
		var arr = DevicesHT.getByKeys(params.ids);
		for (var i = 0; i < params.ids.length; i++) {
			DevicesHT.remove(params.ids[i]);
			Devices4All.remove(arr[i].type, params.ids[i]);
		};
	}

	function getVideoWalls(params){
		var monitor = DevicesHT.getByKeys(Devices4All.get(53));
		var spliter = DevicesHT.getByKeys(Devices4All.get(52));
		var result = [];
		for (var i = 0; i < spliter.length; i++) {
			result.push({
				id : i,
				monitor: {
					id: monitor[i].id,
					ip: monitor[i].ip,
					name: monitor[i].name
				},
				spliter: {
					id: spliter[i].id,
					ip: spliter[i].ip,
					name: spliter[i].name
				}
			});
		};
		return result;
	}

	function getVideoWall(params){
		var arr = Test.getVideoWalls();
		if($XP(params,"id")){
			return {id: arr[params.id].id, monitor: arr[params.id].monitor, spliter: arr[params.id].spliter, 
				notRelatedMonitor: DevicesHT.getByKeys(Devices4All.get(53)), 
				notRelatedSpliter: DevicesHT.getByKeys(Devices4All.get(52))
			};
		}else{
			return {id: 7, monitor: {}, spliter: {}, notRelatedMonitor: DevicesHT.getByKeys(Devices4All.get(53)), 
				notRelatedSpliter: DevicesHT.getByKeys(Devices4All.get(52))
			};
		}
	}

	function getFault4type(params){
		var arr = Test.getRTFaults({id: null});
		var obj = Test.getDevices4Type({pageNo: 0, pageSize: 100, types:[0, 1, 2, 3, 10, 51, 52, 53, 54, 60, 61, 62, 63, 64, 65, 90], siteId: 1});
		var acc = IX.map(arr, function(fault, idx){
			return IX.inherit(fault, {
				siteId: params.siteId,
				desc: "xxx故障",
				isHandled: (idx %2 == 0) ? true : false,
				handlerId: "XXX",
				handlerDate: Date.parse(new Date())/1000-idx*10,
				deviceId: obj.items[idx]?obj.items[idx].id : "",
				deviceType: obj.items[idx]?obj.items[idx].type : "",
				deviceName: obj.items[idx]?obj.items[idx].name : "",
				deviceIp: obj.items[idx]?obj.items[idx].ip : ""
			})
		});
		var axx=IX.loop(acc, [], function(aee, fault){
			if(params.level=="all"||params.level==fault.level){
				if(params.isHandled=="all"||params.isHandled==IX.encodeTXT(fault.isHandled)){
					var date=fault.faultDate;
					if(params.from<=date&&params.to>=date){
						aee.push(fault);
					}
				}
				
			}
			return aee;
		});
		return getPagedData(axx, params.pageNo, params.pageSize);
	}

	function getFaultById(params){
		var arr = Test.getRTFaults({id: null});
		var result=IX.loop(arr, [], function(acc, fault){
				if (fault.id == params.id)
					acc.push(fault);
				return acc;
			});
		params.pageNo=0;
		params.pageSize=20;
		return getPagedData(result, params.pageNo, params.pageSize);
	}
	function getFault4Device(params){
		var arr = Test.getRTFaults({id: null});
		var result=IX.loop(arr, [], function(acc, fault){
				if (fault.deviceId == params.deviceId)
					acc.push(fault);
				return acc;
			});
		params.pageNo=0;
		params.pageSize=20;
		return getPagedData(result, params.pageNo, params.pageSize);
	}

	function handleFault(params){
		var id = params.id;
	}

	return {
		getDevicesHT: function(){return DevicesHT.getAll();},
		Devices4All: Devices4All,
		getDeviceIdsByTypes: getDeviceIdsByTypes,
		getByZoneId: function(zoneId){return getByZoneId(zoneId);},
		getAllZones: function(siteId){return getAllZones(siteId);},
		addZone: function(params){return addZone(params);},
		editZone: function(params){return editZone(params);},
		deleteZone: function(params){return deleteZone(params);},
		
		getAllZoneCameras: getAllZoneCameras,
		getCamerasByZone: function(params){return getCamerasByZone(params);},
		getCamerasByNoZone: function(){return getCamerasByNoZone();},
		addCamerasToZone: function(params){return addCamerasToZone(params);},
		deleteCamerasFromZone: function(params){return deleteCamerasFromZone(params);},
		getAllDevices: function(siteId){return getAllDevices(siteId);},
		getDevicesForMonitor: function(siteId){return getDevicesForMonitor(siteId);},
		getDevices4Type: function(params){return getDevices4Type(params);},
		addDevice: function(params){return addDevice(params);},
		editDevice: function(params){return editDevice(params);},
		deleteDevices: function(params){return deleteDevices(params);},
		getVideoWalls: function(params){return getVideoWalls(params);},
		getVideoWall: function(params){return getVideoWall(params);},
		getAllNotRelatedCameras: function(params){return getAllNotRelatedCameras(params);},
		getAllNotRelatedDecoders: function(params){return getAllNotRelatedDecoders(params);},
		getFault4type: function(params){return getFault4type(params);},
		getFaultById:function(params){return getFaultById(params);},
		getFault4Device:function(params){return getFault4Device(params);},
		handleFault: function(params){return handleFault(params);}
	}
}

var siteDevicesHT= new IX.IListManager();
Test.createSites = function(sites){
	IX.iterate(sites, function(site){siteDevicesHT.register(site.id, new SiteDevices(site));});
};
Test.hasKey4HT = function(key){
	return siteDevicesHT.hasKey(key);
}
Test.getDevicesHT = function(){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return  siteDevices.getDevicesHT();
};
Test.getByZoneId = function(params) {
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.getByZoneId(params.zoneId);
};

Test.getAllZones = function(){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		return IX.map(sites,function(site){
			var siteDevices = siteDevicesHT.get(site.id);
			return siteDevices.getAllZones(site.id).pop();
		});
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.getAllZones(sites.id);
	}
};


Test.addZone = function(params){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.addZone(params);
};
Test.editZone = function(params){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.editZone(params);
};
Test.deleteZone = function(params){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.deleteZone(params);
};
Test.getCamerasByZone = function(params){
	var siteDevices = siteDevicesHT.get(params.siteId);
	return siteDevices.getCamerasByZone(params);
};

function getSiteZoneAndCameras(siteId){
	var siteDevices = siteDevicesHT.get(siteId);
	return [siteId, siteDevices.getAllZoneCameras(siteId)];
}
Test.getAllCameras = function(){
	var _site = Test._getCurrentSite();
	if (_site.type == 2 || _site.type == 3)
		return [getSiteZoneAndCameras(_site.id)];

	return IX.loop(Test._getAllSites(), [], function(acc, site){
		if (site && (site.type == 2 || site.type == 3))
			acc.push(getSiteZoneAndCameras(site.id));
		return acc;
	});
};
Test.getCamerasByNoZone = function(){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.getCamerasByNoZone();
};
Test.addCamerasToZone = function(params){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.addCamerasToZone(params);
};
Test.deleteCamerasFromZone = function(params){
	var site = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(site.id);
	return siteDevices.deleteCamerasFromZone(params);
};


Test.getAllDevices = function(){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		return IX.map(sites,function(site){
			var siteDevices = siteDevicesHT.get(site.id);
			return siteDevices.getAllDevices(site.id).pop();
		});
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.getAllDevices(sites.id);
	}
};
Test.getDevicesForMonitor=function(){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		return IX.map(sites,function(site){
			var siteDevices = siteDevicesHT.get(site.id);
			return siteDevices.getDevicesForMonitor(site.id).pop();
		});
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.getDevicesForMonitor(sites.id);
	}
};

Test.getDevices4Type = function(params){
	var siteDevices = siteDevicesHT.get(params.siteId);
	return siteDevices.getDevices4Type(params);
};

Test.getAllNotRelatedCameras = function(params){
	var sites = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(sites.id);
	return siteDevices.getAllNotRelatedCameras(params);
};

Test.getAllNotRelatedDecoders = function(params){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		var siteDevices = siteDevicesHT.get(1);
		return siteDevices.getAllNotRelatedDecoders(params);
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.getAllNotRelatedDecoders(params);
	}
};

Test.addDevice = function(params){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		var siteDevices = siteDevicesHT.get(1);
		return siteDevices.addDevice(params);
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.addDevice(params);
	}
};
Test.editDevice = function(params){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		var siteDevices = siteDevicesHT.get(1);
		return siteDevices.editDevice(params);
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.editDevice(params);
	}
};
Test.deleteDevices = function(params){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		var siteDevices = siteDevicesHT.get(1);
		return siteDevices.deleteDevices(params);
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.deleteDevices(params);
	}
};
Test.getVideoWalls = function(params){
	var siteId = null;
	if($XP(params,"siteId")){
		siteId = params.siteId;
	}else{
		siteId = Test.getCurrentSite().id || Test.getCurrentSite()[0].id;
	}
	var siteDevices = siteDevicesHT.get(siteId);
	return siteDevices.getVideoWalls(params);
};
Test.getVideoWall = function(params){
	var sites = Test.getCurrentSite();
	if(Array.isArray(sites)){
		var siteDevices = siteDevicesHT.get(1);
		return siteDevices.getVideoWall(params);
	}else{
		var siteDevices = siteDevicesHT.get(sites.id);
		return siteDevices.getVideoWall(params);
	}
};
Test.getFault4type = function(params){
	var siteId = params.siteId;
	var siteDevices = siteDevicesHT.get(siteId);
	return siteDevices.getFault4type(params);
};
Test.getFaultById = function(params){
	var siteId = 1;
	var siteDevices = siteDevicesHT.get(siteId);
	return siteDevices.getFaultById(params);
};
Test.getFault4Device = function(params){
	var siteId = 1;
	var siteDevices = siteDevicesHT.get(siteId);
	return siteDevices.getFault4Device(params);
};
Test.handleFault = function(params){
	var sites = Test.getCurrentSite();
	var siteDevices = siteDevicesHT.get(sites[0].id);
	return siteDevices.handleFault(params);
}
})();
