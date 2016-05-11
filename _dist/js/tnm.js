(function(){
IX.ns("TCM.Const");
TCM.Const.SiteTypes = {TCC : 0, OCC: 1, Depot: 2, Station: 3, BOCC: 4, LinePolice: 5, PTSD:6};
TCM.Const.SiteTypeNames = ["指挥中心", "控制中心", "车辆段／停车场", "车站", "备用控制中心", "公安派出所", "公交总队"];
TCM.Const.UserTypes = {Super: 0, Admin:1, User :2};
TCM.Const.UserTypeNames = ["超级用户", "管理员", "普通用户"];
TCM.Const.DeviceTypes = {
	TNM: 0, TVS: 1, TAS: 2, TVR : 3,
	Storage: 10, 
	IPCFixed: 20, IPCSemiSphere: 21, IPCSphere: 22, 
	CameraFixed: 31, CameraSemiSphere: 32, CameraSphere: 33, 
	RedirectPickup: 40, OmnidirectPickup: 41,
	Coder: 50, Decoder: 51, Spliter: 52, Monitor: 53, Terminal: 54, SpecialDecoder: 55,
	HUB: 60, PDH: 61, FiberConvertor: 62, KVM: 63, PDU: 64, VDM: 65,
	Other: 90
};
TCM.Const.DeviceTypeNames = {
	0: "网管服务器", 1: "视频服务器", 2: "视频分析服务器", 3: "存储服务器", 4: "配置管理服务器",
	10: "存储设备",
	20: "固定枪机",  21: "半球机",  22: "球机",
	31: "固定枪机",  32: "半球机",  33: "球机",
	40: "定向拾音器",41: "全向拾音器",
	50: "编码器",  51: "解码器",  52: "画面分割器",53: "监视器",  54: "控制终端", 55: "解码器",
	60: "交换机",  61: "光端机",  62: "光纤收发器",63: "数字KVM",64: "数字PDU", 65: "字符叠加器",
	90: "其他设备"
};
TCM.Const.Days = "周日,周一,周二,周三,周四,周五,周六".split(",");
})();
(function(){
IX.ns("TNM.Const");
TNM.Const.MaxUnitInRack = 42;
TNM.Const.PXPerUnit = 17;

TNM.Const.FaultLevels = {
	0 : "正常",
	1 : "一般",
	2 : "严重"
};

TNM.Const.FaultCodes = {
	UNKNOWN : -1,	// 未知报警

	DISK_ERROR : 0,	// 磁盘错误
	DISK_WRITE_FAILED		: 1,	// 磁盘不能写
	DISK_FULL				: 2,	// 磁盘满
	BROKEN					: 3,	// 设备断线
	BROKEN_RESUME			: 4,	// 设备断线恢复

	VIDEO_LOST				: 100,	// 视频丢失
	VIDEO_HIDE				: 101,	// 视频遮挡
	INPUT					: 102,	// 报警输入报警
	ANALYSIS				: 103	// 智能分析报警
};
TNM.Const.FaultFormats = {
	"-1" : "发生异常报警",

	//脉冲事件
	101 : "系统初始化",
	103 : "用户登入",
	105 : "用户注销",
	107 : "监视器切换",
	109 : "云台控制",
	111 : "打开视频文件",
	113 : "关闭视频文件",
	115 : "报警设备报告信息",
	117 : "智能报警事件",
	119 : "OSD信息变化",
	//设备报警事件
	201 : "CPU使用率过高",
	203 : "内存使用率过高",
	205 : "磁盘阵列不能写",
	207 : "磁盘阵列不能读写",
	209 : "磁盘阵列没有做RAID",
	211 : "通道损坏",
	213 : "端口电压异常",
	215 : "端口电流异常",
	217 : "磁盘满",
	219 : "存储文件的完整性检测报警",
	221 : "授权文件错误",
	223 : "授权文件恢复",
	225 : "电源关闭或异常",
	227 : "电源恢复",
	229 : "数据口网络异常",
	231 : "数据口网络恢复",
	233 : "磁盘被拔出或异常",
	235 : "磁盘插入",
	//持续事件
	32768 : "录像数据恢复、视频正常",
	32769 : "录像数据丢失",
	32770 : "运动感知停止",
	32771 : "运动感知发生",
	32772 : "视频遮挡停止、视频正常",
	32773 : "视频遮挡发生",
	32774 : "视频断线停止",
	32775 : "视频断线发生",
	32788 : "报警停止",
	32789 : "报警发生",
	32790 : "连接断开",
	32791 : "建立连接",
	32792 : "解锁摄像机",
	32793 : "锁定摄像机",
	32794 : "解锁监视器",
	32795 : "锁定监视器",
	32796 : "停止数字码流传输",
	32797 : "发起数字码流传输",
	32798 : "停止手动录像",
	32799 : "发起手动录像",
	32800 : "断线后恢复",
	32801 : "发生断线",
	32802 : "ROFS报告的错误恢复",
	32803 : "ROFS报告的错误"

};

TNM.Const.LogType = {
	'-1' :	 "未知日志",
	0  :	 "用户登录",
	1  :	 "用户登出",
	2  :	 "查看实时流",
	3  :	 "停止查看实时流",
	4  :	 "云台控制",
	5  :	 "云台锁定",
	6  :	 "云台解锁",
	7  :	 "开始服务器手动录像",
	8  :	 "停止服务器手动录像",
	9  :	 "录像查询",
	10 :	 "开始录像回放",
	11 :	 "停止录像回放",
	12 :	 "开始录像下载",
	13 :	 "停止录像下载",
	14 :	 "事件订阅",
	15 :	 "关闭事件订阅",
	16 :	 "设置画面分割器",
	17 :	 "设置解码器数据源",
	18 :	 "添加电视墙轮询计划",
	19 :	 "修改电视墙轮询计划",
	20 :	 "删除电视墙轮询计划",
	21 :	 "启动临时授权",
	22 :	 "停止临时授权",
	30 :   	 "监视器分屏设置",
	31 :   	 "监视器设置摄像机",
	32 :   	 "监视器锁定",
	33 :   	 "监视器解锁",
	34 :   	 "监视器轮询控制",
	35 :   	 "电视墙事件订阅",
	36 :   	 "关闭电视墙事件订阅",
	400:     "CPU利用率过高",
	401:     "内存利用率过高",
	402:     "网络带宽不足",
	1000:    "TNM 登录",
	1001:    "TNM 登出",
	1002:    "添加机柜",
	1003:    "编辑机柜",
	1004:    "删除机柜",
	1005:    "添加机柜设备",
	1006:    "移动机柜设备",
	1007:    "删除机柜设备",
	1008:    "修改登录方式",
	1009:    "处理故障"
};
TNM.Const.LogFormats = {

};



})();
(function(){

function GroupedHT(items, grpKeys){
	var arr = [].concat(items);
	var idGrp = {}, nameGrp = {}, grps = {};

	function equalFn(a, b){return a=== null || b === null || a.id == b.id;}
	function assignToGroup(item, key){
		if (!(key in grps))
			grps[key] = {};
		var grp = grps[key];
		var _key = item[key];
		if (!(_key in grp))
			grp[_key] = [];
		grp[_key].push(item.id);
	}
	function assignToGroups(item, idx){
		idGrp[item.id] = idx;
		nameGrp[item.name] = idx;
		IX.iterate(grpKeys, function(key){
			assignToGroup(item, key);
		});
	}
	function _refresh(){
		arr = IX.Array.toSet(arr,equalFn);
		idGrp = {};
		nameGrp = {};
		grps = {};
		IX.iterate(arr, assignToGroups);
	}
	_refresh();

	return {
		getAll : function(){return arr;},
		get : function(id){return arr[idGrp[id]];},
		getByName : function(name){return arr[nameGrp[name]];},
		getBy: function(key, value){
			return IX.map(grps[key][value], function(idx){return arr[idx];});
		},

		add : function(item){
			arr.push(item);
			_refresh();
		},
		update : function(item){
			var idx = idGrp[item.id];
			if (idx!==null && idx !== undefined)
				arr[idx] = item;
			else
				arr.push(item);
			_refresh();
		},
		remove : function(item){
			arr[item.id] = null;
			_refresh();
		},
		refresh : function(_items){
			arr = [].concat(_items);
			_refresh();
		}
	};
}

/* { id : lineId, name:lineName,
	sites : [{id, name, type, no, desc}],
	roles : [{id, name, siteType, promptable}],
	levels : [{id, name, level, depot:{id, prompted}, station:{id, prompted}}]
*  }
*/
var lineName  = "";
var siteHT = new GroupedHT([], ["type"]);
var roleHT = new GroupedHT([], ["siteType"]);
var levelHT = new GroupedHT([], ["level"]);
function applyLineInfo(lineInfo){
	lineName  = $XP(lineInfo, "name", "");
	siteHT.refresh($XP(lineInfo, "sites", []));
	roleHT.refresh($XP(lineInfo, "roles", []));
	levelHT.refresh($XP(lineInfo, "levels", []));
}

var SiteTypeNames = TCM.Const.SiteTypeNames;

IX.ns("TCM.LineInfo");
TCM.LineInfo.init = function(data){
	applyLineInfo(data);
};
TCM.LineInfo.refresh = function(data){
	applyLineInfo(data);
};
TCM.LineInfo.destroy = function(){
	lineName  = "";
	siteHT.refresh([]);
	roleHT.refresh([]);
	levelHT.refresh([]);
};

TCM.LineInfo.getName = function(){return lineName;};
TCM.LineInfo.setName = function(_name){lineName = _name;};

TCM.LineInfo.getSites = function(){return siteHT;};
TCM.LineInfo.getSiteName = function(siteId){
	var site = siteHT.get(siteId);
	return site ? site.name : "";
};

TCM.LineInfo.getRoles = function(){return roleHT;};
TCM.LineInfo.getRoleName = function(roleId){
	var role = roleHT.get(roleId);
	return role ? role.name : "";
};
TCM.LineInfo.getSiteTypeNameOfRole =function(roleId) {
	var role = roleHT.get(roleId);
	return !role || role.siteType === null ? "" :SiteTypeNames[role.siteType];
};

TCM.LineInfo.getLevels = function(){return levelHT;};

IX.ns("TCM.DeviceType");
TCM.DeviceType.getNodeName = function(type){
	switch(type){
	case TCM.Const.DeviceTypes.TNM:
	case TCM.Const.DeviceTypes.TVS:
	case TCM.Const.DeviceTypes.TAS:
	case TCM.Const.DeviceTypes.TVR:
		return "server";
	case TCM.Const.DeviceTypes.Storage:
		return "storage";
	case TCM.Const.DeviceTypes.IPCFixed:
	case TCM.Const.DeviceTypes.IPCSemiSphere:
	case TCM.Const.DeviceTypes.IPCSphere:
		return "IPC";

	case TCM.Const.DeviceTypes.CameraFixed:
	case TCM.Const.DeviceTypes.CameraSemiSphere:
	case TCM.Const.DeviceTypes.CameraSphere:
		return "camera";
	case TCM.Const.DeviceTypes.RedirectPickup:
	case TCM.Const.DeviceTypes.OmnidirectPickup:
		return "pickup";
	case TCM.Const.DeviceTypes.Coder:
		return "coder";
	case TCM.Const.DeviceTypes.Decoder:
		return "decoder";
	case TCM.Const.DeviceTypes.SpecialDecoder:
		return "specialDecoder";
	case TCM.Const.DeviceTypes.Spliter:
		return "spliter";
	case TCM.Const.DeviceTypes.Monitor:
		return "monitor";
	case TCM.Const.DeviceTypes.Terminal:
		return "terminal";
	case TCM.Const.DeviceTypes.VDM:
		return "vdm";
	case TCM.Const.DeviceTypes.HUB:
	case TCM.Const.DeviceTypes.PDH:
	case TCM.Const.DeviceTypes.FiberConvertor:
	case TCM.Const.DeviceTypes.KVM:
	case TCM.Const.DeviceTypes.PDU:
	case TCM.Const.DeviceTypes.Other:
		return "other";
	}
};

})();
(function(){
IX.ns("TNM.Util");

var CommonQueryInterval = 5000; // 5 seconds
TNM.Util.PeriodicChecker = function(condFn, checkFn, interval){
	var isStarted = false;
	var intv = interval || CommonQueryInterval;
	var timers = null;
	function _query(){
		if (IX.isFn(condFn) && !condFn()){
			isStarted = false;
			return;
		}
		timers = setTimeout(function(){
			if(isStarted) _query();
		}, intv);
		checkFn(function(data){ return false;});
	}
	return {
		start  :function(){
			if (!isStarted) _query();
			isStarted = true;
		},
		stop : function(){
			isStarted = false;
			clearTimeout(timers);
		}
	};
};

TNM.Util.KickChecker = function(condFn, checkFn, interval){
	var isStarted = false;
	var intv = interval || CommonQueryInterval;
	var timers = null;
	function _query(){
		if (IX.isFn(condFn) && !condFn()){
			isStarted = false;
			return;
		}
		timers = function(){
			return setTimeout(function(){
				if(isStarted) _query();
			}, intv);
		};
		checkFn(isStarted, timers);
	}
	return {
		start : function(){
			if (!isStarted) _query();
			isStarted = true;
		},
		stop : function(){
			isStarted = false;
			clearTimeout(timers);
		}
	};
};

})();
(function(){

/** def : {
	name : ""	
	title : ""
  }
 */

function ColumnModelBase(def){
	var name = $XP(def, "name"), title = $XP(def, "title", name), isLongStr = $XP(def, "isLongStr");
	return {
		getTitleTpldata : function(){ return {
			html : IX.encodeTXT(title),
			name : name,
			sortClz : "up"
		};},
		getCellTpldata : function(item){return {
			name : name,
			html : IX.encodeTXT($XP(item, name, "")),
			title : isLongStr ? IX.encodeTXT($XP(item, name, "")) : "",
			longClz : isLongStr ? "longName" : ""
		};}
	};
}

function RowModelBase(rowData, colModels, actions, moreActions){
	var id = rowData.id;
	function getCellsTpldata(){
		return IX.map(colModels, function(colModel){
			return colModel.getCellTpldata(rowData);
		});
	}
	function getActionsTpldata(){
		return IX.loop(actions,[],function(acc,item){
			acc.push({
				name : item[0],
				title : item[1],
				html : ""
			});
			return acc;
		});
	}
	function getDropdownActs(){
		return IX.map(moreActions,function(item){
			return {
				name : item[0],
				html : item[1]
			};
		});
	}
	var tpldata = {
		id : id,
		clz : "",
		moreClz : moreActions.length===0?"hidden":"",
		dropdowcActs : getDropdownActs(),
		cells : getCellsTpldata(),
		actions : getActionsTpldata()//[{name:"delete", html:""},{name:"poweron", html:""},] //TODO:
	};
	return {
		getId : function(){return id;},
		get : function(attrName){return $XP(rowData, attrName);},
		refresh : function(_rowData){
			rowData = _rowData;
			tpldata.cells = getCellsTpldata();
		},
		getTpldata : function(){return tpldata;}
	};
}

var columnModelHT = {};
IX.ns("IXW.Lib");
/** cfg : {
	pageSize : 20, 

	rowModel : function(rowData, colModels)// default is RowModelBase
	columns : [name], 
	actions  : [["name", function(rowModel, rowEl){}], ...] 
	dataLoader : function(params, cbFn)
	}
 */
IXW.Lib.GridModel = function(id, cfg){
	var clz =  $XP(cfg, "clz", "");
	var pageSize = $XP(cfg, "pageSize", 20);
	var RowModel = $XP(cfg, "rowModel", RowModelBase);
	var dataLoader = $XF(cfg, "dataLoader");
	var colModels = IX.map($XP(cfg, "columns", []), function(colName){
		return (colName in columnModelHT)?(new columnModelHT[colName]()): null;
	});
	var actions = $XP(cfg, "actions", []);
	var moreActions = $XP(cfg,"moreActions",[]);

	var tpldata = {
		clz : clz,
		id : id,
		header : IX.map(colModels, function(m){return m.getTitleTpldata();}),
		rows : []
	};

	var dataModel = new IX.IPagedManager(function(item){
		return new RowModel(item, colModels,actions,moreActions);
	}, null, dataLoader);
	function _load(pageNo, cbFn){
		dataModel.load(pageNo, pageSize, function(rowModels){
			tpldata.rows = IX.map(rowModels, function(row){
				return row.getTpldata();
			});
			cbFn(rowModels);
		});
	}
	return {
		getDataModel : function(){return dataModel;},
		getRow : dataModel.get,
		getFirst : dataModel.getFirst,
		addItems : dataModel.addItems,
		removeItems : dataModel.removeItems,

		getTotal : function(){return dataModel.getTotal();},
		getTpldata : function(){return tpldata;},
		getPageCount : function(){return Math.ceil(dataModel.getTotal()/pageSize);},	
		resetPage : function(_pageNo, _pageSize, cbFn){
			//var idx = Math.floor(pageSize *  _pageNo/_pageSize);
			pageSize = _pageSize;
			//_load(idx, cbFn);
			_load(_pageNo, cbFn);
		},
		load : function(pageNo, cbFn){_load(pageNo, cbFn);}
	};
};
IXW.Lib.GridModel.RowModelBase = RowModelBase;
IXW.Lib.GridModel.ColumnModelBase = ColumnModelBase;
IXW.Lib.GridModel.registerColumnModel = function(name, modelClz){
	columnModelHT[name] = modelClz;
};

})();
(function(){
var GridModel = IXW.Lib.GridModel;
var ColumnModelBase = GridModel.ColumnModelBase;
var registerColumnModel= GridModel.registerColumnModel;

var lineInfo = TCM.LineInfo;
var SiteTypes = TCM.Const.SiteTypeNames;
var UserTypes = TCM.Const.UserTypeNames;
var DeviceTypes= TCM.Const.DeviceTypeNames;

function formatDate(tick,withTime){
	if (!tick) return "";
	return IX.Date.format(new Date(tick*1000), withTime?"":"Date");
}

function getCommonColumnModel(name, title, htmlFn, isLongStr){
	var column = new ColumnModelBase({name: name, title: title});
	column.getCellTpldata = function(item){return {
		name: name,
		html: htmlFn(item),
		title : isLongStr ? htmlFn(item) : "",
		longClz : isLongStr ? "longName" : ""
	};};
	return column;
}

var roleTitle4LevelTpl = new IX.ITemplate({tpl :[
	'<div>{title}</div>',
	'<ul>',
		'<li class="col-role-name">角色名称</li>',
		'<li class="col-role-type">所属单位类型</li>',
		'<li class="col-role-prompt {clz}">特殊处理</li>',
	'</ul>'
]});
var roleCell4LevelTpl = new IX.ITemplate({tpl :[
	'<ul>',
		'<li class="col-role-name">{name}</li>',
		'<li class="col-role-type">{type}</li>',
		'<li class="col-role-prompt">{prompt}</li>',
	'</ul>'
]});
var LevelTypeHdrHTMLs = {
	station : roleTitle4LevelTpl.renderData("", {title : "车站优先级说明",clz:"prompt1"}) ,
	depot : roleTitle4LevelTpl.renderData("", {title : "车辆端／停车场优先级说明",clz:"prompt2"})
};
function getHtml4RoleInLevel(item,typeName){
	var r = item[typeName];
	return roleCell4LevelTpl.renderData("", {
		name : lineInfo.getRoleName(r.id) || "预留",
		type : lineInfo.getSiteTypeNameOfRole(r.id),
		prompt: r.prompted ? "需要启动临时授权" :""
	});
}
function getRoleColumnModel(typeName){return {
	getTitleTpldata : function(){return {
		name : "role",
		html : LevelTypeHdrHTMLs[typeName]
	};},
	getCellTpldata : function(item){return {
		name : "role",
		html : getHtml4RoleInLevel(item, typeName),
		title : "",
		longClz : ""
	};}
};}

var CheckboxTplData = {
	html :"<span class='checkbox'></span>",
	name : "_check",
	title : "",
	longClz : ""
};
IX.iterate([
["_checkbox", function(){return {
	getTitleTpldata : function(){return CheckboxTplData;},
	getCellTpldata : function(){return CheckboxTplData;}
};}],
["_no", "序号"],
["name", {name : "name", title : "名称", isLongStr : true}],
["desc", {name : "desc", title : "说明", isLongStr : true}],

["siteNo", {name : "no", title: "序号"}],
["siteType",function(){return getCommonColumnModel("type", "单位类型", function(item){
	return SiteTypes[item.type] || "";
}, true);}],

["roleName", {name : "name", title: "角色名称", isLongStr : true}],
["roleType", function(){return getCommonColumnModel("type", "角色所属单位类型", function(item){
	return SiteTypes[item.siteType] || "";
}, true);}],
["rolePromptable", function(){return getCommonColumnModel("promptable", "特殊情况下是否允许启动临时授权", function(item){
	return item.promptable ? "允许" : "";
});}],

["levelName", {name : "name", title: "级别"}],
["station", function(){return getRoleColumnModel("station");}],
["depot", function(){return getRoleColumnModel("depot");}],

["userName", {name : "name", title: "用户名称"}],
["account", "登录名称"],
["utype", function(){return getCommonColumnModel("type", "用户类型", function(item){
	return UserTypes[item.type] || "";
}, true);}],
["userSite", function(){return getCommonColumnModel("site", "所属单位", function(item){
	return lineInfo.getSiteName(item.siteId);
}, true);}],
["userRole", function(){return getCommonColumnModel("role", "角色名称", function(item){
	return lineInfo.getRoleName(item.role);
}, true);}],

["devNo", "编号"],
["devType", function(){return getCommonColumnModel("type", "设备类型", function(item){
	return DeviceTypes[item.type] || "";
}, true);}],
["devName", function(){return getCommonColumnModel("name", "名称", function(item){
	return item.name || "";
}, true);}],
["devProvider", function(){return getCommonColumnModel("provider", "厂家", function(item){
	return item.provider || "";
}, true);}],
["devStyle", function(){return getCommonColumnModel("style", "型号", function(item){
	return item.style || "";
}, true);}],
["devDesc", function(){return getCommonColumnModel("desc", "备注", function(item){
	return item.desc || "";
}, true);}],
["devIp", function(){return getCommonColumnModel("ip", "IP地址", function(item){
	return item.ip || "";
}, true);}],
["devPort", function(){return getCommonColumnModel("port", "端口号", function(item){
	return item.port || "";
});}],
["devChannelNum", function(){return getCommonColumnModel("channelNum", "通道数", function(item){
	return item.channelNum || "";
});}], 
["devVersion", function(){return getCommonColumnModel("version", "软件版本", function(item){
	return item.version || "";
});}],
["devbcPort", function(){return getCommonColumnModel("bcPort", "组播流端口", function(item){
	return item.bcPort || "";
});}],
["devdiskNum", function(){return getCommonColumnModel("diskNum", "设备硬盘数量", function(item){
	return item.diskNum || "";
});}],
["devdriverId", function(){return getCommonColumnModel("driverId", "驱动ID", function(item){
	return item.driverId || "";
});}],
["devCapacity", function(){return getCommonColumnModel("capacity", "存储总容量", function(item){
	return item.capacity || "";
});}],
["devPath", function(){return getCommonColumnModel("path", "软件名称或网页地址", function(item){
	return item.path || "";
}, true);}],
["devRelatedSpliter", function(){return getCommonColumnModel("relatedSpliter", "关联画面分割器", function(item){
	return item.relatedSpliter || "";
});}],
["devControlType", function(){return getCommonColumnModel("controlType", "云台控制类型", function(item){
	return item.controlType || "";
});}],
["devControlParams", function(){return getCommonColumnModel("controlParams", "云台控制参数", function(item){
	return item.controlParams || "";
});}],
["devBitsets", function(){return getCommonColumnModel("bitsets", "预置位定义", function(item){
	return item.bitsets || "";
});}],
["devMaxWindow", function(){return getCommonColumnModel("maxWindow", "最大画面数", function(item){
	return item.maxWindow || "";
});}],
["devUserName", function(){return getCommonColumnModel("userName", "用户名", function(item){
	return item.username || "admin";
}, true);}],
["devPassWord", function(){return getCommonColumnModel("password", "密码", function(item){
	return item.password || "******";
});}],

["num", "数量"],

["zno", "编号"],
["zname", "名称"],

["dname", "摄像机名称"],
["dstat", "录像状态"],
["startDate", "录像开始时间"],
["endDate", "录像结束时间"],

["range", function(){
	var column = new ColumnModelBase({name : "range", title : "完整录像周期显示"});
	column.getCellTpldata = function(item){
		return {
			name : "range",
			html :"<span class='range'></span>"
		};
	};
	return column;
}],
["fauFaultDate", function(){return getCommonColumnModel("faultDate", "告警时间", function(item){
	return IX.Date.format(new Date(item.faultDate*1000)) || "";
}, true);}],
["fauSiteId", function(){return getCommonColumnModel("siteId", "告警车站", function(item){
	var siteName = null;
	IX.iterate(TCM.LineInfo.getSites().getAll(), function(site){
		if (site.id == item.siteId) 
			siteName = site.name;
	});
	return siteName || "";
}, true);}],
["fauDeviceName", function(){return getCommonColumnModel("deviceName", "设备名称", function(item){
	return item.deviceName || "";
},true);}],
["fauDeviceIp", function(){return getCommonColumnModel("deviceIp", "IP地址", function(item){
	return item.deviceIp || "";
}, true);}],
["fauLevel", function(){return getCommonColumnModel("level", "告警级别", function(item){
	return TNM.Const.FaultLevels[item.level] || "";
}, true);}],
["fauIsHandled", function(){return getCommonColumnModel("isHandled", "处理标志", function(item){
	return item.isHandled? '<span class="handle">已处理</span>' : '<span class="notHandle"></span>';
});}],
["fauCode", function(){return getCommonColumnModel("code", "告警内容", function(item){
	return TNM.Const.FaultFormats[item.code] || "";
}, true);}],
["fauDesc", function(){return getCommonColumnModel("desc", "", function(item){
	return item.desc || "";
});}],
["logUserName", function(){return getCommonColumnModel("userName", "操作用户", function(item){
	return item.userName || "";
}, true);}],
["siteName", function(){return getCommonColumnModel("siteName", "设备所属车站", function(item){
	return item.siteName || "";
}, true);}],
["logDeviceName", function(){return getCommonColumnModel("deviceName", "设备名称", function(item){
	return item.deviceName || "";
}, true);}],
["logOpDate", function(){return getCommonColumnModel("opDate", "操作时间", function(item){
	return IX.Date.format(new Date(item.opDate*1000)) || "";
}, true);}],
["logOpType", function(){return getCommonColumnModel("opType", "操作类型", function(item){
	return TNM.Const.LogType[item.opType] || "";
}, true);}],
["logIp", function(){return getCommonColumnModel("ip", "IP", function(item){
	return item.ip || "";
}, true);}],
["logDesc", function(){return getCommonColumnModel("desc", "", function(item){
	return item.desc || "";
});}],
["troDeviceName", function(){return getCommonColumnModel("deviceName", "设备名称", function(item){
	return item.deviceName || "";
}, true);}],
["troNum", function(){return getCommonColumnModel("opNum", "故障次数", function(item){
	return item.opNum || "";
}, true);}],
["troDesc", function(){return getCommonColumnModel("desc", "", function(item){
	if(!Array.isArray(item.desc))
		return "";
	return IX.loop(item.desc, "", function(acc, desc, idx){
		acc += '<div class="tro-desc">(发生' + desc.num + '次): ' + TNM.Const.FaultFormats[desc.opType] + '</div>';
		return acc;
	});
});}],
["details", function(){return getCommonColumnModel("details", "", function(item){
	return "<div class='arr-up'></div><span class='desc-detail'></span>";
});}],

["baseName", function(){return getCommonColumnModel("name", "服务器名称", function(item){
	return item.name || "";
}, true);}],
["baseType", function(){return getCommonColumnModel("type", "服务类型", function(item){
	return TCM.Const.DeviceTypeNames[item.type] || "";
}, true);}],
["baseIP", function(){return getCommonColumnModel("ip", "IP地址", function(item){
	return item.ip || "";
}, true);}],
["baseVersion", function(){return getCommonColumnModel("version", "版本信息", function(item){
	return item.version || '';
}, true);}]

], function(col){
	var name = col[0], fn = col[1];
	registerColumnModel(name, IX.isFn(fn)?fn : function(){
		return new ColumnModelBase(IX.isString(fn)?{name : name, title : fn} : fn);
	});
});
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;

var t_combo = new IX.ITemplate({tpl: [
	'<span class="dropdown">',
		'<input type="hidden" id="{valueId}" value="{value}">',
		'<button class="dropdown-toggle" type="button" id="{comboId}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">',
			'<span class="name" title="{valueText}">{valueText}</span><span class="pic-"></span>',
		'</button>',
		'<ul class="dropdown-menu" aria-labelledby="{comboId}">','<tpl id="items">','<li>',
			'<a data-href="${action}" data-key="{id}" title="{name}">{name}</a>',
		'</li>','</tpl>','</ul>',
	'</span>',
'']});
var t_checkbox = new IX.ITemplate({tpl: [
	'<input type="hidden" id="{valueId}" value="{value}">',
	'<a class="nv-checkbox {clz}" data-href="${action}">',
		'<span class="ixpic-"></span><span>{text}</span></a>',
'']});

globalActionConfig([["nvcombo.pick",function(params,el){
	var id = params.key, name = el.innerHTML;
	var dropdownEl = $XH.ancestor(el, "dropdown");
	if (!dropdownEl) return;
	var inputEl = $XD.first(dropdownEl, "input");
	inputEl.value = id;
	var nameEl = $XH.first($XH.first(dropdownEl, "dropdown-toggle"), "name");
	nameEl.innerHTML = name;
}	],["nvcheckbox.check",function(params,el){
	var ifChecked = !$XH.hasClass(el, "selected");
	$XH[ifChecked?"addClass":"removeClass"](el, "selected");
	var inputEl = $XD.first(el.parentNode, "input");
	inputEl.value = ifChecked;
}]]);

function getComboHTML(id, cfg){return t_combo.renderData("", IX.inherit({
	valueId : id,
	comboId : id + "_combo"
},cfg)).replaceAll("{action}", "nvcombo.pick");}
function getCheckBoxHTML(id, value, text, actionName){return t_checkbox.renderData("", {
	valueId : id, 
	value : value,
	text: text,
	clz : value ?"selected": ""
}).replaceAll("{action}", actionName || "nvcheckbox.check");}

IX.ns("NV.Lib");
/**  (id, cfg : {
	value :
	valueText:
	items :[{id, name[, action]}]
	
})
 */ 
NV.Lib.getComboHTML = getComboHTML;
/**   (id, value, text[,actionName])
 */ 
NV.Lib.getCheckboxHTML = getCheckBoxHTML;
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var instHT = {};
function getInst(el){
	var  gridEl = $XH.ancestor(el, "ixw-grid");
	if (!gridEl)return null;
	return instHT[gridEl.id];
}

globalActionConfig([["ixw.grid.col", function(params, el){
	var inst = getInst(el);
	if (!inst) return;
	inst.colAction(params.key, el);
}], ["ixw.grid.cell", function(params, el){
	var inst = getInst(el);
	var ulEl = $XH.ancestor(el, "row");
	if (!inst || !ulEl) return;
	inst.cellAction($XD.dataAttr(ulEl, "id"), params.key, el);
}], ["ixw.grid.action", function(params, el){
	var inst = getInst(el);
	var ulEl = $XH.ancestor(el, "row");
	if (!inst || !ulEl) return;
	inst.rowAction($XD.dataAttr(ulEl, "id"), params.key, ulEl);
}]]);


var t_grid = new IX.ITemplate({tpl: [
	'<div id="{id}" class="ixw-grid {clz}">',
		'<ul class="hdr">','<tpl id="header">',
			'<li class="col-{name}">',
				'<a data-href="$ixw.grid.col" data-key="{name}">',
					'<span>{html}</span>',
					'<span class="pic- hide"></span>',
				'</a>',
			'</li>',
		'</tpl>',
		'</ul>',
		'<div class="body">','<tpl id="rows">',
			'<ul data-id="{id}" class="row {clz}">','<tpl id="cells">',
				'<li class="col-{name}">',
					'<a class="cell {longClz}" data-href="$ixw.grid.cell" data-key="{name}" title = "{title}">{html}</a>',
				'</li>',
			'</tpl>',
				'<li class="r col-actions invisible">',
					'<div class="btns-group {moreClz}">',
						'<a class="act-more dropdown-toggle" data-toggle="dropdown" title="更多操作"></a>',
						'<ul class="dropdown-menu">','<tpl id="dropdowcActs">',
							'<li><a data-href="$nvgrid.clickTool" data-key="{name}">{html}</a></li>',
							'</tpl>',
						'</ul>',
					'</div>','<tpl id="actions">',
					'<a class="act-{name}" data-href="$ixw.grid.action" data-key="{name}" title="{title}">{html}</a>',
				'</tpl>','</li>',
			'</ul>',
		'</tpl>','</div>',
	'</div>',
'']});


IX.ns("IXW.Lib");
/** cfg : {
	container : //required if use show function
	id,		// optional

	rowModel : function(rowData, colModels)// default is RowModelBase

	columns : [name],
	actions  : [[name, function(rowModel, rowEl){}], ...
	dataLoader :function(params, cbFn)
	}
 */
IXW.Lib.Grid = function(cfg){
	var container = $XP(cfg,  "container");
	var id = cfg.id || IX.id();
	var actionHT = IX.loop($XP(cfg, "actions", []), {}, function(acc, act){
		acc[act[0]] = act[2];
		return acc;
	});
	var model = new IXW.Lib.GridModel(id, cfg);

	function _show(){
		var el = $X(container);
		if(!el) return;
		el.innerHTML = t_grid.renderData("", model.getTpldata());
	}
	function _refresh(onlyData){
		var bodyEl = $XH.first($X(id), "body");
		if (!bodyEl || onlyData) return;
		var tpldata = model.getTpldata();
		bodyEl.innerHTML = IX.map(tpldata.rows, function(rowData){
			return t_grid.renderData("rows", rowData);
		}).join("");
	}
	var self = {
		getHTML : function(){
			return t_grid.renderData("", model.getTpldata());
		},
		getId : function(){return id;},
		getModel : function(){return model;},
		show :function(){model.load(0, _show);},
		refresh : function(onlyData){_refresh(onlyData);},
		colAction : function(name, colEl){
			// to be overrided;
		},
		cellAction : function(rowId, name, cellEl){
			// to be overrided;
		},
		rowAction : function(rowId, actionName, rowEl){
			actionHT[actionName](model.getRow(rowId), rowEl);
		}
	};
	instHT[id] = self;
	return self;
};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var ixwGrid = IXW.Lib.Grid;
var getComboHTML = NV.Lib.getComboHTML;
var deviceType = TCM.Const.DeviceTypeNames;

var t_pagin = new IX.ITemplate({tpl: [
	'<div id="{id}-indics" class="l">','<tpl id="indics">',
		'从<span>{stx}</span>到<span>{endx}</span>/共<span>{pagex}</span>条数据',
	'</tpl>','</div>',
	'<div class="m">{paginHTML}</div>',
	'<div class="r">',
		'<span>显示</span><div class="page">',
		'<div class="dropdown">',
			'<a class="changePage dropdown-toggle" data-toggle="dropdown">',
				'<span id="curPage" class="pagesize">{pageInfo}</span><span class="pgFrame"><span class="pic-pg"></span></span>',
			'</a>',
			'<ul class="dropdown-menu">','<tpl id="list">','<li class="{clz}" id="{id}">',
				'<a class="pagesize" data-href="$nvpagin.change" data-key="{value}" data-target="{id}">{html}</a>',
			'</li>','</tpl>','</ul>',
		'</div></div>',
	'</div>',
'']});

var PagesizeList = [
{id : "page-0",value : 20, text : "每页20条"},
{id : "page-1",value : 50, text : "每页50条"},
{id : "page-2",value : 100, text : "每页100条"}
];
var currentPageSize = PagesizeList[0];

function getPaginTpldata(id){ return {
	id : id,
	indics: [{stx : 0,endx : 0, pagex : 0}],
	paginHTML : "",
	pageInfo : currentPageSize.text,
	list : IX.map(PagesizeList,function(item){return {
		value : item.id,
		clz : item.id == currentPageSize.id ? "disabled" : "",
		html : item.text
	};})
};}

var paginListeners = {};
globalActionConfig([["nvpagin.change",function(params,el){
	var liEl = el.parentNode;
	if ($XH.hasClass(liEl, "disabled"))
		return;
	var _el = $XH.ancestor(liEl, "dropdown");
	var curpsEl = $XH.first($XD.first(_el, "a"), "pagesize");
	curpsEl.innerHTML = el.text;

	$XH.removeClass($XH.first(liEl.parentNode,  "disabled"), "disabled");
	$XH.addClass(liEl, "disabled");

	currentPageSize = PagesizeList[params.key.split("-").pop()];
	var fn = paginListeners[$XD.dataAttr(el, "target")];
	if (IX.isFn(fn))
		fn(currentPageSize.value);
}]]);

function NVPagination(id){
	var inst = new IXW.Lib.Pagination({
		id : id + "-pagin",
		total : 0,
		current : 0
	});
	var tpldata = getPaginTpldata(id);
	tpldata.paginHTML = inst.getHTML();

	return {
		getHTML : function(){return t_pagin.renderData("", tpldata);},
		getCurrentPageNo : function(){return inst.getCurrentPageNo();},
		bind : function(pageNoChangedFn, pageSizeChangeFn){
			inst.bind(pageNoChangedFn);
			paginListeners[id] = function(pageSize){
				// pageSizeChangeFn(inst.getCurrentPageNo(), pageSize);
				pageSizeChangeFn(0, pageSize);
			};
		},
		jump : inst.jump,
		refresh : function(totalPages, currentPageNo, itemNum, onlyData, total){
			inst.apply(currentPageNo, totalPages, onlyData);
			tpldata.paginHTML = inst.getHTML();
			var stx = total !== 0 ? (currentPageNo * currentPageSize.value + 1) : 0;
			tpldata.indics = [{stx : stx, endx : Math.max((stx + itemNum - 1), 0), pagex : total}];
			var el = $X(id + "-indics");
			if (!onlyData && el)
				 el.innerHTML = t_pagin.renderData("indics", tpldata.indics[0]);
		}
	};
}


var t_tools = new IX.ITemplate({tpl: [
	'<div id="{id}_tool">','<tpl id="btns">',
		'<a class="btn-{name} {clz}" data-href="$nvtool.click" data-target="{id}" data-key="{name}"></a>',
	'</tpl>','</div>',
'']});

var toolListens = {};
globalActionConfig([["nvtool.click", function(params, el){
	if ($XH.hasClass(el, "disabled")) return;
	var fn = toolListens[$XD.dataAttr(el, "target")];
	if (IX.isFn(fn))
		fn(params.key);
}]]);

/** cfg :{
	buttons : [{name:, chkEnabled :}]
	actions : {
		name : function(){}
	}	
   }
 */
function NVTools(id, cfg){
	var tpldata = {
		id : id,
		btns : IX.map($XP(cfg, "buttons", []), function(btn){ return {
			name : btn.name,
			clz : $XP(btn, "chkEnabled", true)? "chkEnable disabled" : ""
		};})
	};
	toolListens[id] = function(name){$XF(cfg, "actions." + name)();};
	function _enable(isEnabled){
		var el = jQuery("#" + id + "_tool .chkEnable");
		el[isEnabled?"removeClass":"addClass"]("disabled");
	}
	return {
		getHTML : function(){return t_tools.renderData("", tpldata);},
		enable : function() {_enable(true);},
		disable : function(){_enable(false);}
	};
}


var t_grid = new IX.ITemplate({tpl: [
'<div id="{id}" class="nv-grid nv-box {gridClz}">',
	'<div class="nvgrid-title nv-title">{title}</div>',
	'<div class="nvgrid-tools">{toolHTML}</div>',
	'<div class="nvgrid-body">{gridHTML}</div>',
	'<div class="nvgrid-foot">{paginHTML}</div>',
'</div>',
'']});

/** cfg : {
	container : //required
	id, // optional

	clz : gridClz,
	title : "XXX"
	
	usePagination : false; default true;
	
	rowModel : function(rowData, colModels), //optional
	columns : [name],
	actions : [[name, function(rowModel, rowEl)]]
	dataLoader : function(params, cbFn)
	clickOnRow : function(rowId)

	tools : {
		buttons : [{name, chkEnabled}]
		actions : {
			name : function(){}
		}	
	}
}
 */
IX.ns("NV.Lib");
NV.Lib.Grid = function(cfg){
	var container = $XP(cfg,  "container");
	var id = cfg.id || IX.id();

	var toolCfg = $XP(cfg, "tools");
	var usePagination = $XP(cfg, "usePagination", true);
	var clickOnRow = $XF(cfg, "clickOnRow");

	var grid = new IXW.Lib.Grid(IX.inherit(cfg, {
		id : id + "-grid",
		pageSize : currentPageSize.value,
		dataLoader : $XF(cfg, "dataLoader")
	}));
	var model = grid.getModel();

	function applyHover(){
		jQuery($X(container)).find(".row").hover(
			function(){$XH.addClass(this, "hover");},
			function(){$XH.removeClass(this, "hover");}
		);
	}
	function _getSelectedCells(){
		return jQuery("#" + id + "-grid").find(".row .selected");
	}
	
	var pagin =	null, tools = null, onselectRow = IX.emptyFn;
	function afterLoaded(pageNo, items, onlyData){
		grid.refresh(onlyData);
		if (!onlyData)
			applyHover();
		if(pagin)
			pagin.refresh(model.getPageCount(), pageNo, items.length, onlyData, model.getTotal());
		if (tools)
			tools.disable();
	}
	function loadPage(pageNo){
		model.load(pageNo, function(items){afterLoaded(pageNo, items);});
	}
	if (toolCfg) {
		tools = new NVTools(id, toolCfg);
		onselectRow = function(){
			var selectedCells = _getSelectedCells();
			tools[selectedCells.length>0?"enable":"disable"]();
		};
	}

	grid.colAction = function(name, colEl){
		if (name == "_check"){
			var el = jQuery(colEl);
			var ifAllSelected = el.find(".checkbox").hasClass("selected");
			var checkboxEls = el.parents(".ixw-grid").find(".col-_check .checkbox");
			checkboxEls[ifAllSelected?"removeClass":"addClass"]("selected");
			onselectRow();
		}
	};
	grid.cellAction = function(rowId, cellName, cellEl){
		if (cellName == "_check"){
			$XH.toggleClass($XH.first(cellEl, "checkbox"), "selected");
			var isChoseAll = true;
			jQuery(".ixw-grid .body").find(".checkbox").each(function(){
				if (!$XH.hasClass(this, "selected")) isChoseAll = false;
			});
			var choseAllEl = jQuery(".ixw-grid").find(".hdr .checkbox")[0];
			if (isChoseAll){
				$XH.addClass(choseAllEl,"selected");
			}else{
				$XH.removeClass(choseAllEl,"selected");
			}
			onselectRow();
		} else {
			clickOnRow(rowId, cellName, cellEl);
		}
	};

	if (usePagination){
		pagin = new NVPagination(id);
		pagin.bind(loadPage, function(pageNo, pageSize){
			model.resetPage(pageNo, pageSize, function(items){
				afterLoaded(pageNo, items);
			});
		});
	}

	function _show(items){
		var el = $X(container);
		if (!el)
			return;
		afterLoaded(0, items, true);
		el.innerHTML = t_grid.renderData("", {
			id : id, 
			gridClz : $XP(cfg, "clz", ""),
			title : $XP(cfg, "title",  ""),
			toolHTML : tools ? tools.getHTML() :"",
			gridHTML : grid.getHTML(),
			paginHTML : pagin?pagin.getHTML() : ""
		});
		applyHover();
	}
	function _refresh(pageNo){
		if (pagin) pagin.jump(pageNo);
		else loadPage(0);
	}
	return {
		getModel : function(){return model;},
		getSelectedRows : 	function(){
			return IX.map(_getSelectedCells(), function(el){
				var _el = $XH.ancestor(el, "row");
				return model.getRow($XD.dataAttr(_el, "id"));
			});
		},
		addItems : function(ids){
			model.addItems(ids);
			_refresh(model.getPageCount()-1);
		},
		removeItems : function(ids){
			model.removeItems(ids);
			_refresh(Math.min(pagin ? pagin.getCurrentPageNo(): 0, model.getPageCount()-1));
		},
		show: function(){model.load(0, _show);},
		refresh : function(pageNo){_refresh(pageNo);}
	};
};



var t_gridTools = new IX.ITemplate({tpl: ['<tpl id="toolItems">',
		'<div class="tool {clz}"><span class="label">{text}:</span>{html}</div>',
	'</tpl>',
	'<div class="tool {clz}"><span class="label">{text}:</span>{fromCombo} -- {toCombo}</div>',
'']});
var t_buttons = new IX.ITemplate({tpl: [
	'<a data-href="$grid.{value}" class="filterBtn tool-{value}"></a>',
'']});


var tools;
globalActionConfig([["combo.change", function(params, el){
	var id = params.key, name = el.innerHTML;
	var dropdownEl = $XH.ancestor(el, "dropdown");
	if (!dropdownEl) return;
	var inputEl = $XD.first(dropdownEl, "input");
	inputEl.value = id;
	var nameEl = $XH.first($XH.first(dropdownEl, "dropdown-toggle"), "name");
	nameEl.innerHTML = name;
	jQuery(nameEl).attr("title",name);
	if(window.location.href.indexOf("item")>0)
		IXW.Pages.load("fault");
	tools.change();
}]]);

var filterToolsCfgHT = {
	"level": {
		id: "level",
		items: [{id: "all", name: "所有"}].concat(IX.loop("0".multi(2).split(""), [], function(acc, data, idx){
			acc.push({
				id: idx+1,
				name: TNM.Const.FaultLevels[idx+1]
			});
			return acc;
		}))
	},
	"isHandled": {
		id: "isHandled",
		items: [{id: "all", name: "所有"}, {id: true, name: "已处理"}, {id: false, name: "未处理"}]
	},
	"deviceType": {
		id: "deviceType",
		items: [{id: "all", name: "所有类型"}].concat(IX.loop("0-1-2-3-10-20-21-22-50-53-54-55-60-61-62-63-64-90".split("-"), [], function(acc, item, idx){
			acc.push({
				id: item,
				name: deviceType[item]
			});
			return acc;
		}))
	},
	"userId": {
		id: "userId",
		items: [{id: "all", name: "所有用户"}]
	}
};


IX.ns("TNM.Lib");
/*
	cfg: {
			buttons: [{value}],
			hasDate: true/false,
			dateText,
			toolList,
			toolItems: [
				{clz, text, html}
			]
		}

 */
TNM.Lib.BaseFilterTools = function(cfg){
	var fn = null;
	var toolList = $XP(cfg, "toolList", []);
	var hasDate = $XP(cfg, "hasDate", "");
	var buttons = $XP(cfg, "buttons", "");
	var dateValue = {};
	var defaultDate=cfg.defaultDate;

	function getLocalTime(nS,bool) {
		var myDate= new Date(parseInt(nS) * 1000);
		var str=myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
		var arr=str.split(" ");
		if(bool){
			arr[1]="00:00";
			var acc=arr[0].split("-");
			for(var i=1;i<3;i++){
				if(acc[i].length<2)
					acc[i]="0"+acc[i];
			}
			arr[0]=acc.join("-");
			str=arr.join(" ");
		}
		return str;
	}

	function getTimeCombo(cfg){
		var type = cfg.type;
		cfg.dataAttrs = [["key", type]];
		cfg.timeFmt = "hh:mm";
		cfg.onchange = function(newValue){
			var nowTime=Math.floor(new Date().getTime()/1000);
			var fromStr=jQuery("[data-key='from']").find("input").val();
 			var toStr=jQuery("[data-key='to']").find("input").val();
 				fromStr = new Date(fromStr.replace(/-/g,'/')).getTime()/1000;
 				toStr= new Date(toStr.replace(/-/g,'/')).getTime()/1000;
 			var time;
			if(fromStr>toStr){
				if(newValue==fromStr){
					time=getLocalTime(toStr,true);
					NV.Dialog.alert("开始时间必须小于结束时间！");
					jQuery(".ixw-dpt:first input").attr("value",time);
				}else{
					time=getLocalTime(nowTime,false);
					NV.Dialog.alert("开始时间必须小于结束时间！");
					jQuery(".ixw-dpt:last input").attr("value",time);
				}
			}
			change();
		};
		var dpt = new IXW.Lib.DatePickTrigger(cfg);
		return dpt;
	}
	
	function getCombo(cfg, num){
		return getComboHTML(cfg.id, {
			value: num ? cfg.items[num].id : cfg.items[0].id,
			valueText: num ? cfg.items[num].name : cfg.items[0].name,
			items: IX.loop(cfg.items, [], function(acc, item, idx){
				acc.push(IX.inherit(item, item.action ? {} : {action: "combo.change"}));
				return acc;
			})
		});
	}
 	function getHTML(list){
 		return IX.loop(list, [], function(acc, item, idx){
 			var obj = {
 				clz: (item.id=="userId") ? item.id+" disable": item.id,
 				text: item.text,
 				html: (item.id=="ip") ? "<input id='ip' />":getCombo(item.items ? item.items : filterToolsCfgHT[item.id],item.num ? item.num : null)
 			};
 			acc.push(obj);
 			return acc;
 		});
 	}
 	function getFilterParams(){
 		if(hasDate){
 			var fromStr=jQuery("[data-key='from']").find("input").val();
 			var toStr=jQuery("[data-key='to']").find("input").val();
 			var ipStr=jQuery("#ip").val();
 			var isIp=checkIfIP(ipStr);
 			if(fromStr!==""){
 				fromStr = fromStr.replace(/-/g,'/');
 				dateValue.from = new Date(fromStr).getTime()/1000;
 			}else{
 				dateValue.from = null;
 			}
 			if(toStr!==""){
 				toStr=toStr.replace(/-/g,'/');
 				dateValue.to = new Date(toStr).getTime()/1000;
 			}else{
 				dateValue.to = null;
 			}
 			if(!isIp&&ipStr!==""&&ipStr!==undefined){
 				NV.Dialog.alert("IP地址格式不正确！");
 				// jQuery("#ip").focus();
 				return false;
 			}
 			if(dateValue.from>dateValue.to){
 				NV.Dialog.alert("开始时间必须小于结束时间！");
 				return false;
 			}
 		}
 		var acc = IX.loop(toolList, {}, function(acc, item, idx){
 			acc[item.id] = $X(item.id).value;
 			return acc;
 		});
 		return IX.inherit(dateValue, acc);
 	}
 	function change(){
 		fn(getFilterParams());
 	}

	return {
		getHTML: function(){
			var listHTML = t_gridTools.renderData("", {
	 			text: $XP(cfg, "dateText") || "时间",
	 			clz: hasDate ? "date" : "disabled",
				fromCombo: getTimeCombo({
					type : "from", 
					value: (!defaultDate) ? "" : (defaultDate=="default") ? TNM.Lib.GetCurDay().from : defaultDate, 
					label : ""
				}).getHTML(),
				toCombo: getTimeCombo({
					type : "to", 
					value: (!defaultDate) ? "" : (defaultDate=="default") ? TNM.Lib.GetCurDay().to : defaultDate+60, 
					label : ""
				}).getHTML(),
				toolItems: getHTML(toolList)
			});
	 		return buttons ? (IX.loop(buttons, "", function(acc, button, idx){
	 			acc += t_buttons.renderData("", button);
	 			return acc;
	 		}) + listHTML) : listHTML; 
		},
		change: change,
		getFilterParams: function(){return getFilterParams();},
		onchange: function(_fn){ 
			fn = _fn;
		}
	};
};
function checkIfIP(s){
	var re =  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
	return re.test(s);
}
TNM.Lib.GetCurDay = function(){
	function NewDate(str, status) { 
		str = str.split('-'); 
		var date = new Date(); 
		date.setUTCFullYear(str[0], str[1] - 1, str[2]); 
		if (status == "from")
			date.setUTCHours(-8, 0, 0, 0); 
		else 
			date.setUTCHours(16, 0, 0, 0); 
		return date; 
	} 
	function getDate(status){
		var myDate = new Date();
		var str = myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
		return NewDate(str, status).getTime()/1000;
	}
	return {
		from: getDate("from"),
		to: getDate("to")
	};
};
/** cfg{
		container,
		title : "xxx",
		clz : ,
		columns: columns,
		actions : [],
		baseParams,
		usePagination : $XP(cfgs, "usePagination") || true,
		tool: BaseFilterTools
	}
*/

TNM.Lib.FilterGrid = function(cfg){
	var container = $XP(cfg,  "container");
	var id = cfg.id || IX.id();
	var usePagination = $XP(cfg, "usePagination", true);
	tools = $XP(cfg, "tools");
	var baseParams = $XP(cfg, "baseParams");
	var filterParams = null;

	var grid = new IXW.Lib.Grid(IX.inherit(cfg, {
		id : id + "-grid",
		pageSize : currentPageSize.value,
		dataLoader : function(params, cbFn){
			if(filterParams && filterParams.query)
				params.pageNo = 0;
			var data = IX.inherit(params, baseParams, filterParams);
			if(filterParams)
				filterParams.query = false;
			$XF(cfg, "dataLoader")(data, cbFn);
		}
	}));

	var model = grid.getModel();

	function applyHover(){
		jQuery($X(container)).find(".row").hover(
			function(){$XH.addClass(this, "hover");},
			function(){$XH.removeClass(this, "hover");}
		);
	}
	function _getSelectedCells(){
		return jQuery("#" + id + "-grid").find(".row .selected");
	}
	
	var pagin =	null, onselectRow = IX.emptyFn;
	function afterLoaded(pageNo, items, onlyData){
		grid.refresh(onlyData);
		if (!onlyData)
			applyHover();
		if(pagin)
			pagin.refresh(model.getPageCount(), pageNo, items.length, onlyData, model.getTotal());
	}
	function loadPage(pageNo){
		model.load(pageNo, function(items){afterLoaded(pageNo, items);});
	}

	if (usePagination){
		pagin = new NVPagination(id);
		pagin.bind(loadPage, function(pageNo, pageSize){
			model.resetPage(pageNo, pageSize, function(items){
				afterLoaded(pageNo, items);
			});
		});
	}

	function _show(items){
		var el = $X(container);
		if (!el)
			return;
		afterLoaded(0, items, true);
		el.innerHTML = t_grid.renderData("", {
			id : id, 
			gridClz : $XP(cfg, "clz", ""),
			title : $XP(cfg, "title",  ""),
			toolHTML : tools ? tools.getHTML() :"",
			gridHTML : grid.getHTML(),
			paginHTML : pagin?pagin.getHTML() : ""
		});
		applyHover();
	}
	function _refresh(pageNo){
		if (pagin) pagin.jump(pageNo);
		else loadPage(0);
	}

	var TnmGrid = {
		getModel : function(){return model;},
		getSelectedRows : 	function(){
			return IX.map(_getSelectedCells(), function(el){
				var _el = $XH.ancestor(el, "row");
				return model.getRow($XD.dataAttr(_el, "id"));
			});
		},
		show: function(){model.load(0, _show);},
		refresh : function(pageNo){_refresh(pageNo);}
	};
	TnmGrid.show();

	tools.onchange(function(params){
		if(!params)
			return;
		params.query=true;
		filterParams = params; 
		TnmGrid.refresh(0);
	});

	return TnmGrid;
};
})();
(function () {var t_treeNodes = new IX.ITemplate({tpl: [
	'<ul>',
		'<tpl id="items">',
			'<li class="{expandClz}">',
				'<a class="{clz}" data-href="$tree.click" data-key="{key}" data-siteId="{siteId}" title="{name}" data-name="{name}" data-zoneId="{zoneId}">',
					'<span class="pic-expand"></span>',
					'<span>{html}</span>',
				'</a>{HTML}',
			'</li>',
		'</tpl>',
	'</ul>',
'']});

var t_tree = new IX.ITemplate({tpl: [
'<div class="nv-tree" id="{id}">{html}</div>',
'']});


var treeActionsConfig = IXW.Actions.configActions;
var treeClickHT = {};
function getTreeClick(el){
	var treeEl = $XH.ancestor(el, "nv-tree");
	if(!treeEl)
		return null;
	return treeClickHT[treeEl.id];
}
treeActionsConfig([
	["tree.click", function(params, el, evt){
		if ($XH.hasClass(evt.target, "pic-expand")){
			var li = jQuery(el).parent().get(0);
			if(jQuery(el).parent().children('ul').css("display") == "none"){
				jQuery(el).parent().children('ul').slideDown();
				if(!$XH.hasClass(li, "none")){
					$XH.removeClass(li, "rotation");
					$XH.removeClass(li, "expand");
					$XH.addClass(li, "fold");
				}
			}else{
				jQuery(el).parent().children('ul').slideUp();
				if(!$XH.hasClass(li, "none")){
					$XH.removeClass(li, "fold");
					$XH.addClass(li, "expand");
					$XH.addClass(li, "rotation");
				}
			}
		}else{
			if(params.key == "{key}")
				return;
			jQuery(".nv-tree").find("a").removeClass('select');
			jQuery(el).addClass('select');
			getTreeClick(el)({
				keys: params.key, 
				siteId: $XD.dataAttr(el, "siteId"), 
				name: $XD.dataAttr(el, "name"),
				zoneId: $XD.dataAttr(el, "zoneId"), 
				el: el
			});
		}
	}]
]);
IX.ns("TCM.Lib");
TCM.Lib.Tree = function(cfg){
	var container = $XP(cfg, "container");
	var id = IX.id();
	treeClickHT[id] = $XF(cfg,"click");
	// var model = new IXW.Lib.TreeModel(id, cfg);
	function getNodesHTML(nodes){
		return t_treeNodes.renderData("", {
			items : IX.map(nodes, function(node){
				var HTML = node.nodes.length === 0 ? "" : getNodesHTML(node.nodes);
				return  {
					clz: node.key?"node-"+node.key.join("-"):"node", 
					expandClz: HTML === "" ? "none" : "expand", 
					html: cfg.htmlFn(node), 
					key: node.key,
					siteId: node.siteId, 
					name: node.name, 
					zoneId: node.zoneId, 
					HTML : HTML
				};
			})
		});
	}
	function getHTML(){
		return t_tree.renderData("",{
			id : id,
			html : getNodesHTML(cfg.nodes)
		});
	}
	/*function _show(){
		var el = $X(container);
		if(!el) return;
		el.innerHTML = t_tree.renderData("", model.getTpldata());
	}*/
	var tree = {
		getHTML : function(){return getHTML();},
		// show : function(){model.load(_show);},
		refresh : function(){}
	};
	return tree;
};

})();
(function () {
var globalActionConfig = IXW.Actions.configActions;

var dialog = null;
function hideDialog(){if (dialog)dialog.hide();}
var dialogCfg = null; 

var t_modal = new IX.ITemplate({tpl: [
	'<div class="head">{title}</div>',
	'<div class="content">{content}</div>',
	'<div class="foot">',
		'<div class="l btns">','<tpl id="lbtns">',
			'<a class="btn {name}btn" data-href="$nvdialog-click" data-key="{name}">{text}</a>',
		'</tpl>','</div>',
		'<div class="r btns">','<tpl id="rbtns">',
			'<a class="btn {name}btn" data-href="$nvdialog-click" data-key="{name}">{text}</a>',
		'</tpl>','</div>',
	'</div>	',
'']});
var t_confirm = new IX.ITemplate({tpl: [
	'<div class="area confirm"><div class="msg">{msg}</div></div>',
'']});

var CommonBtns = {
	left : [],
	right : [{name:"ok", text: "确定"}, {name:"cancel", text:"取消"}] 
};
globalActionConfig([["nvdialog-click",function(params,el){
	var action = params.key;
	if (action === "cancel")
		return hideDialog();
	$XF(dialogCfg, "listen." + action)();
}],["ixw.alert.close", function(params, el){
	jQuery($XH.ancestor(el, "ixw-alert")).removeClass("animate-shake");
	jQuery("#IXW-alert").fadeOut();
}]]);
function dialogBodyRefresh(bodyEl){
	bodyEl.className = "ixw-body nv-dialog " + $XP(dialogCfg, "clz", "");
	bodyEl.innerHTML = t_modal.renderData("", {
		title : $XP(dialogCfg, "title", ""),
		content : $XP(dialogCfg, "content", ""),
		lbtns : $XP(dialogCfg, "btns.left", CommonBtns.left),
		rbtns : $XP(dialogCfg, "btns.right", CommonBtns.right)
	});
	$XF(dialogCfg, "afterShow")(bodyEl);
}

function showDialog(cfg){
	dialogCfg = cfg;
	if (jQuery(".confirmLogin").length !== 0)
		return;
	if (!dialog)
		dialog = new IXW.Lib.ModalDialog({
			id : "nv-dialog",
			bodyRefresh : dialogBodyRefresh
		});
	dialog.show();
}

IX.ns("NV.Dialog");
/* {
	clz
	title : 
	content: 
	btns: {left: [{name,text}], right:[{name, text}]} // default CommonBtns;
	listen: {
		btnname : function()
	},
	afterShow : function(bodyEl)
 }*/
NV.Dialog.show = showDialog;
NV.Dialog.hide = hideDialog;
NV.Dialog.confirm = function(title, msg, okFn){ showDialog({
	title : IX.encodeTXT(title),
	content : t_confirm.renderData("", {msg: msg}),
	listen : { ok : function(){okFn(hideDialog);} }
});};

NV.Dialog.confirm4login = function(title, msg, btns, okFn){ 
	showDialog({
		title : IX.encodeTXT(title),
		clz: "confirmLogin",
		btns : btns,
		content : t_confirm.renderData("", {msg: msg}),
		listen : { ok : function(){okFn(hideDialog);} }
	});
};

NV.Dialog.alert = function(content){
	var alert = IXW.Lib.alert(content);
	$XH.addClass($XH.first(alert, "ixw-alert"), "animate-shake");
};
})();
(function () {
var Duration = 3; //3sec

var VendorName = IX.CSSVendorName;
var pointerTransform = VendorName + 'transform:rotate({deg}deg);';
var circleTransform = VendorName + 'transform:rotate({deg}deg);' +
		VendorName + 'transition:all {duration}s linear {delay}s;';

function _calc(side, angel, duration, delay){
	var data = {
		deg : angel - (side=="right"?180:360) ,
		duration : duration,
		delay : delay
	};
	var cssTexts = {
		name : side,
		div : circleTransform.replaceByParams(data)
	};
	data.deg = 0 - data.deg;
	cssTexts.span = circleTransform.replaceByParams(data);
	return cssTexts;
}
function calcTransform(fromAngel, toAngel){
	if (fromAngel <= 180 && toAngel <= 180)
		return [_calc("right", toAngel, Duration, 0)];
	else if (fromAngel >= 180 && toAngel >= 180)
		return [_calc("left", toAngel, Duration, 0)];
	
	var nameArr = fromAngel < toAngel ? ["right", "left"]:["left","right"];
	var delay = Math.floor(Duration*100* ( 180 - fromAngel) / (toAngel - fromAngel))/100;
	return [
		_calc(nameArr[0], 180, delay, 0),
		_calc(nameArr[1], toAngel, Duration-delay, delay)
	];
}
function refreshProgress(pEl, fromAngel, toAngel){
	if (!pEl || fromAngel == toAngel)
		return;
	var dataArr = calcTransform(fromAngel, toAngel);
	pEl.style.cssText = pointerTransform.replaceByParams({deg: toAngel + 95});
	var el = $XH.first(pEl.parentNode, "circle");
	IX.iterate(dataArr, function(item){
		var pEl = $XH.first(el, item.name);
		if(pEl){
		var cEl = $XH.first(pEl, "pic-");
		pEl.style.cssText = item.div;
		cEl.style.cssText =  item.span;
		}
	});
	if(toAngel < 10 || (toAngel > 350 && toAngel < 360)){
		jQuery(pEl.parentNode).find(".top").css("display", "none");
		jQuery(pEl).find("span").css("display", "none");
	}else{
		jQuery(pEl.parentNode).find(".top").css("display", "block");
		jQuery(pEl).find("span").css("display", "block");
	}
}

var DashboardItems = [
	{type: "mem", value : 0, unit : "GB", title : "内存（共{total}GB）"}, 
	{type : "cpu", value : 0, unit : "percent", title : "CPU"},
	{type : "disk", value : 0, unit : "GB", title : "磁盘（共{total}GB）"}
];

var t_panel = new IX.ITemplate({tpl: [
	'<tpl id="items">',
	'<div class="dashboard {type}">',
		'<div class="info">',
		'</div>',
		'<div class="centre"></div>',
		'<div class="circle">',
			'<div class="top"></div> ',
			'<div class="left"><span class="pic-"></span></div>',
			'<div class="right"><span class="pic-"></span></div>',
		'</div>',
		'<div class="pointer"><span class="pic-"></span></div>',
		'<div class="title"><span>{title}</span></div>',
	'</div>	',
	'</tpl>',
'']});

var BaseDashBoardHTML = t_panel.renderData("", {items : DashboardItems});
function getValue(value, unit, type){
	var html = null;
	var str = value.toString();
	if(type == "cpu"){
		html = IX.loop(str.split(""), "", function(acc, item, idx){
			if(item == ".")
				acc += '<span class="point"></span>';
			else
				acc += '<span class="num'+ item +'"></span>';
			return acc;
		});
		html += '<span class="'+ unit +'"></span>';
	}else{
		html = IX.loop(str.split(""), "", function(acc, item, idx){
			if(item == ".")
				acc += '<span class="points"></span>';
			else
				acc += '<span class="nums'+ item +'"></span>';
			return acc;
		});
		html += '<span class="'+ unit +'s"></span>';
	}
	return html;
}

function Dashboard(el, cfg){
	var _curDeg = 0;
	var _total = 1;
	var valueEl = $XH.first(el, "info");
	var pointerEl = $XH.first(el, "pointer");

	return {
		reset : function(total, used){
			var titleEl = $XD.first($XH.first(el, "title"), 'span');
			titleEl.innerHTML = cfg.title.replace("{total}", total);
			valueEl.innerHTML = getValue(used, cfg.unit, cfg.type);

			_total = Math.max(1, total);
			_curDeg = 360 * used / _total ;


			setTimeout(function(){
				refreshProgress(pointerEl, 360, _curDeg);
			},Duration * 1000+100);
			refreshProgress(pointerEl, 0, 360);
		},
		pointTo : function(value){
			valueEl.innerHTML = getValue(value, cfg.unit, cfg.type);
			var deg = 360 * value / _total;
			refreshProgress(pointerEl, _curDeg, deg);
			_curDeg = deg;
		}
	};
}

function DashBoards(container, dataCaller){
	var dashboards = {};
	var isInit = false;
	var types = IX.map(DashboardItems, function(item){
		var itemType = item.type;
		dashboards[itemType]  = new Dashboard($XH.first(container, itemType), item);
		return itemType;
	});
	function load(itemFn, failFn){
		dataCaller(function(data){
			IX.iterate(types, function(itemType){
				if (!isInit) 
					dashboards[itemType].reset.apply(null, data[itemType]);
				itemFn(dashboards[itemType], data[itemType]);
			});
			isInit = true;
		}, function(data){
			isInit = false;
			var qstr = window.location.href;
			qstr = qstr.slice(qstr.length-4);
			if(failFn)
				return false;
			if(qstr == "perf")
				NV.Dialog.alert(data.err);
		});
	}
	return {
		init : function(){
			load(function(item, data){item.reset.apply(null, data);}, null);
		},
		refresh: function(failFn){
			load(function(item, data){item.pointTo(data[1]);}, failFn);
		}
	};
}

IX.ns("TNM.Lib");
TNM.Lib.DashboardPanel = function(_container, dataCaller){
	var container = $X(_container);
	container.innerHTML = BaseDashBoardHTML.replaceAll("{total}", 0);
	var dashboards = new DashBoards(container, dataCaller);
	return dashboards;
};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var ixwPages = IXW.Pages;
var overviewTransform = IX.CSSVendorName + 'transform:scale({deg});' + 'top: {top}';
var sysCaller = TNM.Global.sysCaller;


var t_site = new IX.ITemplate({tpl: [
'<li class="site">',
	'<a class="{levelClz}" data-idx="{idx}" data-key="{key}" data-href="$site.click">',
		'<div class="center"></div>',
		'<div class="inside"></div>',
		'<div class="outside"></div>',
		'<div class="text">{name}</div>',
	'</a>',
'</li>',
'']});

var t_line = new IX.ITemplate({tpl: [
	'<ul id="siteLine">',
		'<li class="line"></li>','<tpl id="items">',
		t_site.renderData('', {key: "{id}", levelClz: "level{level}"}),
	'</tpl>','</ul>',
'']});



globalActionConfig([["site.click", function(params, el, evt){
	if($XH.hasClass(el, "level0"))
		ixwPages.load(ixwPages.createPath("sys-rack", {id: params.key}));
	else{
		jQuery("#body").children().remove();
		ixwPages.load(ixwPages.createPath("fault-site", {id: params.key}));
		jQuery("#nav-sys").removeClass("active");
		jQuery("#nav-fault").addClass("active");
	}
}]]);
function sitesList(container){
	var $sites = null;
	var topList = {};
	function onResize4Body(){
		var rate = 1, baseValue = 0, body = document.getElementById("body");
		var currentWidth = body.clientWidth;
		if (currentWidth > 1200) {
			rate = 1;
			baseValue = Math.floor((currentWidth-160)/($sites.length-1));
		} else {
			rate = Math.floor(currentWidth/1200*100)/100;
			if(rate<0.5)
				rate = 0.5;
			baseValue = Math.floor((1200-160)/($sites.length-1));
		}
		$X("siteLine").style.cssText = overviewTransform.replaceByParams({deg: rate, top: "50%"});
		setPosition($sites, baseValue, rate);
		showPush($sites, baseValue, rate);
		setText(rate);
		jQuery("#container").css({
			height: body.clientHeight - 45 + "px"
		});
	}
	function setText(rate){
		jQuery("#siteLine .text").each(function(index, el) {
			el.style.cssText = overviewTransform.replaceByParams({deg: 1/rate, top: topList[index] + "px"});
		});
	}
	function setPosition($sites, baseValue){
		var width = 50;
		IX.iterate($sites, function(site, idx){
			jQuery(site).css({left: baseValue*idx + 50 + "px"}); 
			width += baseValue;	
		});
		jQuery(".line").css({
			left: "60px",
			width: width - baseValue - 50 + "px"
		});
	}
	function resetPostion($sites, focusIdx, baseValue){
		if (baseValue > 60) return;
		var newValue = 64-baseValue;
		var left = 0;
		IX.iterate($sites, function(site, idx){
			var min = focusIdx-idx;
			var max = idx-focusIdx;
			left = (focusIdx > idx ? Math.floor(50-newValue/Math.sqrt(Math.sqrt(min))) : Math.floor(50+newValue/Math.sqrt(Math.sqrt(max))))  + baseValue*idx;
			if (focusIdx == idx) left = baseValue*idx + 50;
			jQuery(site).css({left: left+"px"});
		});
		jQuery(".line").css({
			left: Math.floor(60 - newValue/Math.sqrt(Math.sqrt(focusIdx))) + "px",
			width: left - 50 + Math.floor(Number(focusIdx)? newValue/Math.sqrt(Math.sqrt(focusIdx)) : 5) + "px"
		});
	}
	function showPush($sites, baseValue){
		var $a = jQuery(".site").find("a");
		var idx = null;
		$a.unbind("hover");
		$a.hover(function(){
			idx = jQuery(this).attr("data-idx");
			if(parseInt(idx) % 2 === 0)
				jQuery(this).find(".text").css("top", topList[idx] - 25 + "px");
			else
				jQuery(this).find(".text").css("top", "65px");
			resetPostion($sites, $XD.dataAttr(this, "idx"), baseValue);
		}, function(){
			idx = jQuery(this).attr("data-idx");
			jQuery(this).find(".text").css("top", topList[idx] + "px");
			setPosition($sites, baseValue);
		});
	}
	function refreshFaultStatus(loopData){
		IX.iterate(loopData, function(d, idx){
			jQuery($sites[idx]).find("a").removeClass().addClass("level"+d.level);
		});
	}

	function positionText(){
		$sites = jQuery("#siteLine").find(".site");
		for (var i = 0; i < $sites.length; i++) {
			var top = jQuery($sites[i]).find(".ver-text").height();
			if(i%2 === 0)
				topList[i] = -1 * top - 25;
			else
				topList[i] = 45;
		}
	}
	function _refrehLine(data){
		if(!data)
			return;
		refreshFaultStatus(data);
	}
	function _show(data){
		if(!data)
			return;
		var containerEl = $X(container);
		if(!containerEl)
			return;
		containerEl.innerHTML = t_line.renderData("", {
			items: TNM.Lib.verticalText(data)
		});
		positionText();
		onResize4Body();
	}
	return {
		refresh: function(){
			sysCaller("getFault4Station", {}, _show);
		},
		refreshFaultStatus: function(failFn){
			sysCaller("getFault4Station", {}, _refrehLine, failFn);
		},
		resize: function(){
			onResize4Body();
		}
	};
}
IX.ns("TNM.Lib");
TNM.Lib.SitesPanel = function(container){
	var panel = new sitesList(container);
	return IX.inherit(panel, {
		check : function(failFn){
			if (panel && $XD.first($X("container"), "ul")) 
				panel.refreshFaultStatus(failFn);
		}
	});
};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var ixwPages = IXW.Pages;
var nvAlert = NV.Dialog.alert;

var FaultLevels = TNM.Const.FaultLevels;
var FaultFormats = TNM.Const.FaultFormats;

var dataCaller = TNM.Global.sysCaller;
var DeviceTypes = TCM.Const.DeviceTypes;
var DeviceTypeNames = TCM.Const.DeviceTypeNames;
var DeviceTypesInRack = [
	"TNM", "TVS", "TAS", "TVR", "Storage",
	"Coder", "Decoder", "Spliter", "SpecialDecoder",
	"HUB", "PDH", "FiberConvertor", "KVM", "PDU"
];
var MaxUnitInRack = TNM.Const.MaxUnitInRack;
var PXPerUnit = TNM.Const.PXPerUnit;
var PerRackWidth = 300; // 188 + 21
var Duration = 3; //3sec

function getMask(pos, size){
	var _mask = 0;
	for (var i=0;i<size; i++)
		_mask += (1<<i);
	return _mask<<pos;
}
var WholeMask = getMask(0, MaxUnitInRack);

var RackDeviceImgs = null;
function initRackDeviceImgs(){
	IX.Net.loadFile(TNM.Global.rackDeviceDefintionUrl, function(txt){
		var imgData = JSON.parse(txt);
		var imgs = {};
		IX.iterate(DeviceTypesInRack, function(type){
			var _type = DeviceTypes[type];
			//console.log("type: "+ _type, DeviceTypeNames[_type]);
			imgs[_type] = imgData[DeviceTypeNames[_type]];
		});
		RackDeviceImgs = imgs;
	});
}
var getRackImgUrl = TNM.Global.getRackDeviceImgUrl;
function pickImg(devType, unit, level){ // level : 1-0,1-1, 2-0, 2-1
	var fileName = $XP(RackDeviceImgs, devType + "." + unit + "U", "default-" + unit);
	fileName += level?("-" + level):"";
	//console.log("Get Rack Device Img:" + fileName, [devType, unit, level]); 
	return getRackImgUrl(fileName + ".png");
}

var currentRackList = null;

var showDialog = NV.Dialog.show;
var hideDialog = NV.Dialog.hide;
var confirmDialog = NV.Dialog.confirm;
function _deleteUnits(cfg, okFn){
	confirmDialog(cfg.title, "请确认是否" +  cfg.info + "？",  function(cbFn){
		dataCaller(cfg.callerName, cfg.params, function(){
			cbFn();
			okFn();
		});
	});
}

var t_editDevice = new IX.ITemplate({tpl: [
	'<ul class="rack-device">',
		'<li><span class="label">车站</span><span class="text">{siteName}</span></li>',
		'<li><span class="label">机柜</span><span class="text">{rackName}</span></li>',
		'<li><span class="label">选择设备</span>{deviceCombo}</li>',
		'<li class="pos"><span class="label">机柜位置</span>{stxPosCombo}<span class="sepLine">－－</span>{endPosCombo}</li>',
	'</ul>',
'']});

/** 
	device : {id, name, type, pos, size}  || {pos, size} //device.id ==undefined : add Device into Rack
	siteId,
	rack : Rack()
 */ 
function editRackDeviceDialog(device, siteId, rack){
	var mask = rack.getMask();
	var rackId = rack.getId();
	var ifNew = !("id" in device);
	var deviceId = ifNew ? null: device.id;
	var siteName = TCM.LineInfo.getSiteName(siteId);
	var items = ifNew?[]:[device];

	var validPos = IX.loop(mask,[], function(acc, item, idx){
		if (item === -1 || (!ifNew && item==deviceId))
			acc.push({id:idx+1, name:idx+1});
		return acc;
	});
	if (validPos.length===0)
		return nvAlert("机柜中没有可以添加设备的位置！");

	function getComboHTML(id, items, defPos){
		var item = isNaN(defPos) ? items[0] : {id:defPos,name:defPos};
		return NV.Lib.getComboHTML(id, {
			value : item.id,
			valueText: item.name,
			items : items
		});
	}
	var tpldata = {
		siteName : siteName,
		rackName : rack.getName(),
		deviceCombo : "",
		stxPosCombo : getComboHTML("stxPosInRack", validPos, device.pos+1),
		endPosCombo : getComboHTML("endPosInRack", validPos, device.pos+1+device.size-1)
	};
	function addDevice(params, _device, cbFn){
		if(params.size>12){
			nvAlert("一个设备最多占用12U！");
			return false;
		}
		dataCaller("addDevice", params, function(){
			rack.addDevice(_device);
			cbFn();
		});
	}
	function moveDevice(params, _device, cbFn){
		if(params.size>12){
			nvAlert("一个设备最多占用12U！");
			return false;
		}
		dataCaller("moveDevice", params, function(){
			rack.move(_device);
			cbFn();
		});
	}
	function _okFn(){
		var newDeviceId = $X('device4Rack').value;
		var stxPos = $X('stxPosInRack').value-1, endPos = $X('endPosInRack').value-1;

		var startPos = Math.min(stxPos, endPos);
		var lastPos = Math.max(stxPos, endPos);

		for (var i = startPos; i <= lastPos; i++){
			if (mask[i] == -1 || (!ifNew && mask[i]==deviceId))
				continue;
			return nvAlert("请重新选择合适的机柜位置，选中的机柜位置已被其他设备占用！");
		}
		var pos = Math.min(stxPos, endPos), size = Math.max(stxPos, endPos)-pos + 1;

		if (!ifNew && deviceId == newDeviceId && device.pos == pos && device.size == size)
			// nothing changed!
			return hideDialog();

		var params = {
			siteId :siteId, 
			deviceId : newDeviceId,
			rackId : rackId,
			pos : pos,
			size : size
		};
		var newDeviceIdx = IX.Array.indexOf(items, function(d){return d.id == newDeviceId;});
		var _device = currentRackList.newDevice(IX.inherit(items[newDeviceIdx], {
			pos : pos,
			size : size
		}));

		if (ifNew)
			return addDevice(params, _device, hideDialog);
		if (deviceId == newDeviceId)
			return moveDevice(params, _device, hideDialog);
		NV.Dialog.confirm("更换设备确认", "您选择了新的设备，原设备将从该机柜中移除，是否确定？", function(){
			dataCaller("removeDevice", {siteId:siteId,rackId:rackId, deviceId : deviceId}, function(){
				rack.remove(deviceId);
				addDevice(params, _device, hideDialog);
			});
		});
	}

	dataCaller("getDevicesNotInRack", {siteId : siteId}, function(devices){//[{id,name, type, size}]
		items = items.concat(devices);
		if (items.length===0)
			return nvAlert("没有可以添加到机柜的设备！");

		tpldata.deviceCombo = getComboHTML("device4Rack", items);
		showDialog({
			clz : "editDeviceInRack",
			title : ifNew?"新增设备入机柜":"修改机柜中的设备",
			content :t_editDevice.renderData("",tpldata),
			listen : {ok : _okFn}
		});
	});
}


var t_board = new IX.ITemplate({tpl: [
	'<li id="board-{id}" class="board" style="top:{top}px;">',
		'<a data-href="$rack.add" data-key="{idx}"></a>',
	'</li>',
'']});
var t_device = new IX.ITemplate({tpl: [
	'<li id="device-{id}" class="device level{level} U{unit}" data-key="{id}" style="height:{height}px;top:{top}px;">',
		'<a class="img" data-href="$rack.click" data-key="{id}"><img src="{img}"></a>',
		'<div class="mask">',
			'<a class="icon-edit" data-href="$rack.edit" data-key="{id}"></a>',
			'<a class="icon-delete" data-href="$rack.delete" data-key="{id}"></a>',
		'</div>',
		'<a class="fault" data-href="$rack.fault" data-key="{id}" data-level="{level}">',
			'<img class="max" src="{maxFaultImg}">',
			'<img class="min" src="{minFaultImg}">',
		'</a>',
	'</li>',
'']});

function Board(rackId, pos){
	var thePos = MaxUnitInRack-pos-1;
	var id = rackId + "-" + pos;
	var html = t_board.renderData("", {id:id, idx : pos, top: thePos *PXPerUnit});
	return {
		isDevice : function(){return false;},
		getIdx : function(){return pos;},
		getHTML : function(){return html;},
		remove : function(){
			var el = $X('board-' + id);
			if (el) el.parentNode.removeChild(el);
		}
	};
}
/* devInfo : {id, name, type, rackId, pos, size, level} */
function Device(devInfo){
	var deviceId = devInfo.id;
	var unit = devInfo.size || 1, devType = devInfo.type, pos = devInfo.pos||0;
	var level = 0; 
	var tpldata = {
		id : deviceId,
		unit : unit,
		height : unit * PXPerUnit,
		top: (MaxUnitInRack-devInfo.pos-unit) * PXPerUnit,
		img : pickImg(devType, unit)
	};

	function _refresh(){
		var el = $X('device-' + deviceId);
		if (!el) return;
		var faultEl = $XH.first(el, "fault");
		var maxImg = $XH.first(faultEl, "max");
		var minImg = $XH.first(faultEl, "min");
		maxImg.src = tpldata.maxFaultImg;
		minImg.src = tpldata.minFaultImg;
		$XD.setDataAttr(faultEl, "level", level);
		el.className = "device level" + level + " U" + unit;
	}
	function _setLevel(s){
		level = s ;
		tpldata = IX.inherit(tpldata, {
			level : level,
			minFaultImg : level===0?"": pickImg(devType, unit, level+ "-0"),
			maxFaultImg : level===0?"": pickImg(devType, unit, level+ "-1")
		});
		_refresh();
	}
	_setLevel($XP(devInfo, "level", 0));
	return {
		getId : function(){return deviceId;},
		isDevice : function(){return true;},
		getIdx : function(){return devInfo.pos;},
		getHTML: function(){return t_device.renderData("", tpldata);},
		getRange : function(){ return [pos, pos + unit-1];}, //1U: [10,10]; 3U:[10, 12]
		getAttr : function(){ return devInfo;},
		move :function(){
			var el = $X('device-' + deviceId);
			if (!el)
				return;
			el.parentNode.replaceChild(jQuery(t_device.renderData("", tpldata)).get(0), el);
			// el.style.top = tpldata.top + "px";
			// el.style.height = tpldata.height + "px";
		},
		remove : function(){
			var el = $X('device-' + deviceId);
			if (el) el.parentNode.removeChild(el);
		},
		refresh: _refresh,
		setLevel: _setLevel,
		clearLevel : function(){_setLevel(0);}
	};
}
/* rackInfo : {id, name} */
function Rack(rackInfo, devices){
	var id = rackInfo.id;
	var mask = IX.Array.init(MaxUnitInRack,-1);
	var blocks = [];
	var i;

	function maskDevice(device){
		var range = device.getRange();
		var deviceId = device.getId();
		for (var k=range[0]; k<range[1]+1; k++)
			mask[k] = deviceId;
		return range[0];
	}

	IX.iterate(devices, function(device){
		blocks.push(device);
		maskDevice(device);
	});
	for (i=0; i<MaxUnitInRack; i++) {
		if (mask[i] == -1)
			blocks.push(new Board(id, i));
	}

	function _remove(deviceId){
		jQuery("#device-" + deviceId).remove();
		var html = [];
		for (i=0; i<MaxUnitInRack; i++){
			if (mask[i]!=deviceId)
				continue;
			mask[i] = -1;
			var board = new Board(id, i);
			html.push(board.getHTML());
			blocks.push(board);
		}
		jQuery(html.join("")).appendTo('#rack-' + id + " ul");
	}

	function _add(device){
		var pos = maskDevice(device);
		blocks = IX.loop(blocks, [], function(acc, block){
			var idx = block.getIdx();

			if (block.isDevice() || mask[idx]===-1)
				acc.push(block);
			else if (idx == pos)
				acc.push(device);
			else 
				block.remove();
			return acc;
		});
		jQuery(device.getHTML()).appendTo('#rack-' + id + " ul");
	}
	function _move(device){
		var range = device.getRange();
		var deviceId = device.getId();

		var boardHTML = [], board = null;
		for (i=0; i<MaxUnitInRack; i++){
			if (mask[i]!=deviceId && mask[i]!== -1)
				continue;
			if (mask[i] == -1 && i>=range[0] && i<=range[1]) {
				board = new Board(id, i);
				board.remove();
				mask[i] = deviceId;
				continue;
			}
			if (mask[i] == deviceId && !(i>=range[0] && i<=range[1])) {
				board = new Board(id, i);
				boardHTML.push(board.getHTML());
				blocks.push(board);
				mask[i] = -1;
			}
		}
		device.move();
		blocks = IX.loop(blocks, [], function(acc, block){
			var idx = block.getIdx();
			if (block.isDevice() || mask[idx] == -1)
				acc.push(block);
			return acc;
		});

		jQuery(boardHTML.join("")).appendTo('#rack-' + id + " ul");
	}

	return {
		getMask : function(){return mask;},
		getId : function(){return id;},
		getName : function(){return rackInfo.name;},
		setName : function(_name){rackInfo.name = _name;},
		getTpldata : function(){
			return IX.inherit(rackInfo, {html : IX.map(blocks, function(block){
				return block.getHTML();
			}).join("")});
		},
		trySetDevice : function(deviceId, stx, endx){
			for (i=stx; i<endx; i++)
				if(mask[i]!==-1  && mask[i] != deviceId) return false;
			return true;
		},
		addDevice : _add,
		move : _move,
		remove : _remove
	};
}

var t_panel = new IX.ITemplate({tpl: [
	'<img src="{bgImg}" />',
	'<div class="racks">',
		'<div class="area-l"><a data-href="$racks.prev" class="btn-prev"></a><span class="pic-"></span></div>',
		'<div class="area-c"><div class="view">',
			'<tpl id="racks">','<div id="rack-{id}" class="rack-area">',
				'<div class="rack-title">',
					'<a class="nv-checkbox" data-href="$racks.check" data-key="{id}"><span class="ixpic-"></span><span title="{name}">{name}</span></a>',
					'<a data-href="$racks.edit", data-key="{id}"><span class="edit-rack"></span></a>',
					'<span class="hidden"></span>',
				'</div>',
				'<div class="rack"><ul data-key="{id}">{html}</ul></div>',
			'</div>','</tpl>',
			'<div class="addrack"><a data-href="$racks.add" class="pic-"></a></div>',
		'</div></div>',
		'<div class="area-r"><a data-href="$racks.next" class="btn-next"></a><span class="pic-"></span></div>',
		'<a data-href="$racks.delete" class="btn-delete disabled"></a>',
	'</div>',
'']});
var t_infoPanel = new IX.ITemplate({tpl: [
	'<ul class="rack-device">','<tpl id="items">','<li class="{clz}">',
		'<span class="label">{label}</span>',
		'<span class="text">{text}</span>',
	'</li>','</tpl>','</ul>',
'']});

var PanelItems = {
	name : "设备名称",
	provider : "厂家",
	ip : "IP地址",
	style : "型号",
	desc:"备注"
};
function getDevicePanelHTML(devInfo){
	var items = IX.map("name,provider,ip,style,desc".split(","), function(name){ return {
		clz : name,
		label : PanelItems[name],
		text : IX.encodeTXT(devInfo[name])
	};});
	if (devInfo.level >0) 
		items.unshift({
			clz : "level" + devInfo.level,
			label : FaultLevels[devInfo.level]+ "告警",
			text : '<a data-href="' + ixwPages.createPath("fault-device", {id:devInfo.id}) + '">'  + (FaultFormats[devInfo.code] || FaultFormats["-1"]) + '</a>'
		});
	
	return t_infoPanel.renderData("", {items : items});
}
var popTrigger = null;
var popBodyRefreshFn = IX.emptyFn;

function initPopTrigger(){
	if (popTrigger) return;
	popTrigger = new IXW.Lib.PopTrigger({
		id : "racks-pop",
		triggerMode : "mouseover",
		position: "right",
		ifKeepPanel : function(target, triggerEl){
			console.log("keep:", target, triggerEl);
			return (triggerEl && !!$XD.isAncestor(target, triggerEl));
		},
		bodyRefresh : function(bodyEl, triggerEl){
			popBodyRefreshFn(bodyEl, triggerEl);
		}
	});
}
function RackList(container, sId) {
	var _siteId = sId, loaded = false;
	var rackHT = new IX.IListManager();
	var deviceHT = new IX.IListManager();

	var faultDeviceIds = [];

	popBodyRefreshFn = function(bodyEl, triggerEl){
		var deviceId= $XD.dataAttr(triggerEl, "key");
		dataCaller("getDeviceDetail", {siteId : _siteId, deviceId :deviceId}, function(devInfo){
			bodyEl.innerHTML = getDevicePanelHTML(devInfo);
		});
	};
	initPopTrigger();

	function _refreshFaultStatus(devices){
		var ids = faultDeviceIds;

		faultDeviceIds = IX.map(devices, function(d){
			var deviceId = d.id;
			ids = IX.Array.remove(ids, deviceId);
			var device = deviceHT.get(deviceId);
			if (device)
				device.setLevel(d.level);
			return deviceId;
		});

		IX.iterate(ids, function(deviceId){
			var device = deviceHT.get(deviceId);
			if (device)
				device.clearLevel();
		});
	}
	function applyDevice(devInfo){
		var deviceId = devInfo.id;
		var device = new Device(devInfo);
		deviceHT.register(deviceId, device);
		if (devInfo.level>0)
			faultDeviceIds.push(deviceId);
		return device;
	}

	function _addRack(rackInfo, devices) {
		var rack = new Rack(rackInfo, devices);
		rackHT.register(rackInfo.id, rack);
		var html = t_panel.renderData("racks", rack.getTpldata());
		var addRackEl =  jQuery($X(container)).find(".addrack");
		jQuery(html).insertBefore(addRackEl);
	}
	function _removeRack(rackId){
		var flag;
		if(rackHT.getFirst().getId()==rackId){
			flag=jQuery("#rack-" + rackId).next().attr("id");
		}
		rackHT.remove(rackId);
		jQuery("#rack-" + rackId).remove();
		jQuery("#" + flag).css("margin-left","0");
	}

	function listenOnRacks(racksEl){
		function onEvent4Device(e, fn4Edit, fn4View){
			var liEl =  $XH.ancestor(e.target, "device");
			if (liEl)
				($XH.hasClass(racksEl, "editing")? fn4Edit : fn4View)(liEl);
		}
		IX.bind(racksEl, {
			mouseover : function(e){
				onEvent4Device(e, function(liEl){
					$XH.addClass(liEl, "hover");
				}, function(liEl){
					popTrigger.trigger(liEl);
				});
			},
			mouseout : function(e){
				onEvent4Device(e, function(liEl){
					$XH.removeClass(liEl, "hover");
				}, IX.emptyFn);
			}
		});
	}

	function refreshRacks(racks){
		rackHT.clear();
		deviceHT.clear();
		faultDeviceIds = [];

		var containerEl = $X(container);
		if (containerEl) {
			containerEl.innerHTML = t_panel.renderData("", {
				bgImg : TNM.Global.rackBackgroundImg,
				racks : []
			});
			listenOnRacks($XH.first(containerEl, "racks"));
		}
		IX.iterate(racks, function(rackData){
			_addRack({
				id: rackData.id, 
				name : rackData.name
			}, IX.map(rackData.devices, applyDevice));
		});
	}

	var rackWidth = 0, numRacksInPanel = 0, firstRackIdxInPanel = 0;
	function _enableBtn(viewEl, btnName, ifEnable){
		var btnEl = jQuery(viewEl).parents(".racks").find("." + btnName);
		btnEl[ifEnable?"addClass": "removeClass"]("visible");
	}
	function resetPos(viewEl, total,  _pos){
		var maxPos = Math.max(0, total-numRacksInPanel);
		var pos = Math.min(_pos, maxPos);

		firstRackIdxInPanel = pos;
		viewEl.style.marginLeft = (0-pos * rackWidth) +"px";
		_enableBtn(viewEl, "btn-prev", pos > 0);
		_enableBtn(viewEl, "btn-next", pos < maxPos);
	}
	function resetPosEx(viewEl, total, _pos){
		resetPos(viewEl, total,  _pos);
		viewEl.style.width = total * rackWidth + "px";
		$XH[total > numRacksInPanel ? "addClass" : "removeClass"]($XH.ancestor(viewEl, "racks"), "multi");
	}
	function _resize(areasEl, _width,  total){
		var width = _width - 256; // 256 = 118 *2 + 10* 2 (area-l + area-r + PaddingL + PaddingR)
		areasEl.style.width = width + "px";

		var n = Math.floor((width+100) / (PerRackWidth + 100));
		var margin = Math.floor((width - PerRackWidth) / Math.max(1, n-1)) - PerRackWidth;
		if(width>1000&&width<1300){
			margin = Math.max(85, Math.min(margin, 90));
		}
		if(width>1300){
			margin = Math.max(70, Math.min(margin, 70));
		}
		if(width<900){
			margin = Math.max(85, Math.min(margin, 180));
		}
		rackWidth = PerRackWidth + margin;
		numRacksInPanel = Math.floor((width+margin)/rackWidth);

		var viewEl = $XH.first(areasEl, "view");
		resetPosEx(viewEl, total, firstRackIdxInPanel);
		jQuery(viewEl).children("div").not(":first-child").css("margin-left", margin + "px");

		popTrigger.hide();
	}

	function getRacks(fn){
		var racksEl = $XH.first($X(container), "racks");
		if(racksEl) fn(racksEl, racksEl.offsetWidth, $XH.first(racksEl, "area-c"));
	}
	function getTotal(racksEl, isEdit){
		var hasAddBtn = racksEl?$XH.hasClass(racksEl, "editing") : isEdit;
		return rackHT.getSize() + (hasAddBtn?1:0);
	}
	function resetMode(isEdit){
		getRacks(function(racksEl, racksWidth, areasEl){
			$XH[isEdit?"addClass":"removeClass"](racksEl, "editing");
			if(isEdit){jQuery(".nv-checkbox").find(".ixpic-").css("display","inline-block");jQuery(".addrack").css("display","inline-block");}
			else{jQuery(".nv-checkbox").find(".ixpic-").css("display","none");jQuery(".addrack").css("display","none");}
			_resize(areasEl, racksWidth, getTotal(null, isEdit));
		});
	}

	function reslide(ifAdd){
		getRacks(function(racksEl, racksWidth, areasEl){
			_resize(areasEl, racksWidth, getTotal(racksEl));
		});
	}
	function _getAreas(fn){
		getRacks(function(racksEl, racksWidth, areasEl){
			fn(areasEl, getTotal(racksEl));
		});
	}

	return {
		resetSiteId : function(siteId){
			_siteId = siteId;
			loaded = false;
		},
		getSiteId : function(){return _siteId;},
		getDevice : function(deviceId){return deviceHT.get(deviceId);},
		newDevice : function(devInfo){
			var device = new Device(devInfo);
			deviceHT.register(devInfo.id, device);
			return device;	
		},
		getRack : function(rackId){return rackHT.get(rackId);},
		newRack : function(fn){
			var rackInfo = {siteId : _siteId, name : "机柜" + rackHT.getSize()};
			dataCaller("addRack", rackInfo, function(rackId){
				rackInfo.id = rackId.id;
				_addRack({id:rackId.id, name:rackId.name}, []);
				reslide(true);
				if(jQuery(".area-c").width()<1000&&rackHT.getSize()>=2){
					jQuery(".btn-next").append("<span class='click'>Click</span>");
					jQuery(".click").click();
					jQuery(".click").remove();
				}
				if(rackHT.getSize()>2){
					jQuery(".btn-next").append("<span class='click'>Click</span>");
					jQuery(".click").click();
					jQuery(".click").remove();
				}
				var nameEl = $XH.first($XH.first($X('rack-' + rackId.id), "rack-title"), "name");
				fn(nameEl, rackId.id);
			});
		},
		removeRacks : function(rackIds){
			IX.iterate(rackIds, _removeRack);
			reslide(false);
		},

		checkFaultStatus : function(failFn){
			dataCaller("getDeviceFaultStatus", {siteId : _siteId}, _refreshFaultStatus, failFn);
		},
		refresh : function(isEdit){
			if (loaded) {
				resetMode(isEdit);
				return deviceHT.iterate(function(device){device.refresh();});
			}
			dataCaller("getRacks", {siteId:_siteId}, function(racks){
				loaded = true;
				refreshRacks(racks);
				resetMode(isEdit);
			});
		},
		resize : function(){
			_getAreas(function(areasEl, total){
				_resize(areasEl, areasEl.parentNode.offsetWidth, total);
			});
		},
		slide : function(step){ // -1/1 prev/next rack
			_getAreas(function(areasEl, total){
				resetPos($XH.first(areasEl, "view"), total, firstRackIdxInPanel+ step);
			});
		}
	};
}


function editRackName(el, rackId){
	var rack =  currentRackList.getRack(rackId);
	if (!rack) return;
	var rackName = rack.getName();
	var spanEl;
	$XH.addClass(el, "hidden");
	if(el){
		$XH.addClass(el.previousElementSibling, "hidden");
		spanEl= $XD.next(el, "span");
		spanEl.innerHTML="<input class='editName' type='text' maxlength='20'>";
	} 
	var inputEl =$XD.first(spanEl, "input");
	if(inputEl){
		inputEl.value = rackName;
	}
	$XH.removeClass(spanEl, "hidden");

	function _refresh(v){
		//el.innerHTML = IX.encodeTXT(v)+"<span class='edit-rack'>";
		//el.innerHTML = "<span class='edit-rack'>";
		el.previousSibling.children[1].innerHTML=IX.encodeTXT(v);
		jQuery(el.previousSibling.children[1]).attr("title",IX.encodeTXT(v));
		$XH.removeClass(el.previousElementSibling, "hidden");
		$XH.removeClass(el, "hidden");
		spanEl.innerHTML="";
		$XH.addClass(spanEl, "hidden");
		rack.setName(v);
	}
	function _post(v){
		if (v == rackName)
			return _refresh(v);
		dataCaller("editRack", {
			siteId : currentRackList.getSiteId(),
			id : rackId,
			name : v
		}, function(){
			_refresh(v);
		});
	}
	IX.bind(inputEl, {
		blur : function(){
			_post((inputEl.value).trim());
		},
		keydown :function(e){
			if (e.which == 8) 
				IX.Util.Event.stopPropagation(e);
			if (e.which == 13) 
				inputEl.blur();
		}
	});
	if(inputEl){
		inputEl.focus();
	}
}
function _actionOnRack(el, fn){
	var rack =  currentRackList.getRack($XD.dataAttr($XD.ancestor(el, "ul"), "key"));
	if(rack)fn(rack);
}
globalActionConfig([["rack.add",function(params,el){
	_actionOnRack(el, function(rack){
		editRackDeviceDialog({pos:params.key-0,size:1}, currentRackList.getSiteId(), rack);
	});

}],["rack.edit",function(params,el){
	_actionOnRack(el, function(rack){
		var device = currentRackList.getDevice(params.key);
		if (!device) return;
		editRackDeviceDialog(device.getAttr(), currentRackList.getSiteId(), rack);
	});

}],["rack.delete",function(params,el){
	_actionOnRack(el, function(rack){
		_deleteUnits({
			title : "从机柜中移出设备",
			info: "从当前机柜移出该设备",
			callerName : "removeDevice",
			params : {siteId:currentRackList.getSiteId(),rackId:rack.getId(), deviceId : params.key}
		}, function(){rack.remove(params.key);});
	});

}],["rack.click",function(params,el){
	if(popTrigger) popTrigger.hide();
	//ixwPages.load(ixwPages.createPath("device-issue", {id: params.key}));

}],["rack.fault",function(params,el){
	if(popTrigger) popTrigger.hide();
	var siteId=jQuery("#site4Rack").attr("value");
	ixwPages.load(ixwPages.createPath("fault-device", {id: params.key,siteId:siteId}));
}],["racks.check",function(params,el){
	var racksEl = jQuery(el).parents(".racks");
	if (!racksEl.hasClass("editing")) return;

	$XH.toggleClass(el, "selected");
	$XH.toggleClass(el.previousElementSibling, "selected");
	var ifSelected = racksEl.find(".nv-checkbox.selected").length>0;
	racksEl.find(".btn-delete")[ifSelected?"removeClass":"addClass"]("disabled");

}],["racks.add",function(params,el){
	currentRackList.newRack(function(_el, rackId){
		editRackName(_el, rackId);
	});

}],["racks.prev",function(params,el){
	currentRackList.slide(-1);

}],["racks.next",function(params,el){
	currentRackList.slide(1);

}],["racks.edit",function(params,el){
	var racksEl = $XH.ancestor(el, "racks");
	if ($XH.hasClass(racksEl, "editing"))
		editRackName(el, params.key);

}],["racks.delete",function(params,el){
	if ($XH.hasClass(el, "disabled"))
		return;
	var ids = IX.map(jQuery(el).parents(".racks").find(".nv-checkbox.selected"), function(chkEl){
		return $XD.dataAttr(chkEl, "key");
	});
	_deleteUnits({
		title : "从当前单位移除机柜",
		info: "从当前单位移除选中的机柜",
		callerName : "removeRacks",
		params : {siteId:currentRackList.getSiteId(), ids : ids}
	}, function(){
		currentRackList.removeRacks(ids);
		jQuery("div.editing").find("a.btn-delete").addClass("disabled");
	});

}]]);

IX.ns("TNM.Lib");
TNM.Lib.RacksPanel = function(container, siteId){
	var isEdit = false;
	var _siteId = siteId;

	if (!RackDeviceImgs)
		initRackDeviceImgs();

	currentRackList = new RackList(container, siteId);
	function _refresh(){
		var el = $X(container);
		if (!el)
			return;
		IX.checkReady(function(){return !!RackDeviceImgs;},function(){
			currentRackList.refresh(isEdit);
		}, 500);
	}

	return {
		check : function(failFn){
			if (currentRackList && !isEdit && $XH.first($X(container), "racks"))
				currentRackList.checkFaultStatus(failFn);
		},
		resetMode : function(_mode){
			isEdit = _mode=="edit";
			_refresh();
		},
		resetSite : function(sId){
			currentRackList.resetSiteId(sId);
			_refresh();
		},
		resize : function(){
			currentRackList.resize();
		},
		clear: function(){
			if(popTrigger) popTrigger.hide();
		},
		refresh : _refresh
	};
};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var ixwPages = IXW.Pages;

var SiteTypes = TCM.Const.SiteTypes;
var FaultLevels = TNM.Const.FaultLevels;
var FaultFormats = TNM.Const.FaultFormats;

var dataCaller = TNM.Global.sysCaller;
var Duration = 3; //3sec


var t_panel = new IX.ITemplate({tpl: [
	'<div class="topo-bg"></div>',
	'<div class="topo" style="top:{top}px;">',
		'<div class="top">',
			'<ul>','<tpl id="others">','<li id="site-{id}" class="{typeName}" style="margin-right:{right}px;">',
				'<a class="level{level}" data-href="$topo.click" data-key="{id}" data-value="{level}">',
					'<span class="name">{name}</span><span class="ico-"></span>',
				'</a>',
				'<div class="line"></div>',
			'</li>','</tpl>','</ul>',
			'<div class="sp" style="width:{topSW}px;"></div>',
			'<div class="line"></div>',
		'</div>',
		'<div class="middle">		',
			'<div><span class="ico-cloud"></span></div>',
			'<div class="line"></div>',
			'<div><a data-href="$topo.expand">',
				'<span class="ico-"></span><span class="name">全部车站</span>',
			'</a></div>',
		'</div>',
		'<div class="bottom collapsed">',
			'<div class="line"></div>',
			'<div class="sp" style="width:{botSW}px;"></div>',
			'<ul>','<tpl id="stations">','<li id="site-{id}" class="station" style="margin-right:{right}px;">',
				'<div class="line"></div>',
				'<a class="level{level}" data-href="$topo.click" data-key="{id}" data-value="{level}">',
					'<span class="ico-"></span><span class="name">{name}</span>',
				'</a>',
			'</li>','</tpl>','</ul>',
		'</div>',
	'</div>',
'']});

/** tpldata : {
		top, 
		others : [{id, type, name, right, level}],
		stations : [{id, name, right, level}]
}
 */

var HalfHeightWithStation = 340, HalfHeightWithoutStation = 240,
	SiteBaseWidth = 80, StationBaseWidth = 32,
	MinPanelWidth = 1000;
var SiteTypeNames = {0:"tcc", 1:"occ", 2:"depot", 3: "station", 4:"bocc",5:"police",6:"ptsd"};

function TopoPanel(container) {
	var tpldata = {
		top : 0
	};

	function _calcRight(w, isStation, forceUpdate){
		var arr = tpldata[isStation ? "stations" : "others"];
		var baseWidth = isStation ? StationBaseWidth : SiteBaseWidth;
		var n =  Math.max(1, arr.length);
		var r = Math.max(0, Math.min(baseWidth, Math.floor(w/n)-baseWidth));
		IX.iterate(arr, function(item, idx){
			if (idx >= n-1) {
				item.right = 0;
				return;
			}
			item.right = r;
			var siteEl = forceUpdate ? $X('site-' + item.id) : null;
			if (siteEl)
				siteEl.style.marginRight = r + "px";
		});
		tpldata[isStation?"botSW": "topSW"] = (baseWidth+r) * (n-1);
	}
	function _resizeTop(el){
		var bodyEl = $X('body');
		var h = bodyEl.offsetHeight - 45;
		el.style.height = h + "px";
		var topoEl = $XH.first(el, "topo");
		topoEl.style.height = h + "px";
		var ifCollapsed = $XH.hasClass($XH.first(topoEl, "bottom"),"collapsed");
		tpldata.top = Math.max(45, Math.floor(h/2) - (ifCollapsed ? HalfHeightWithoutStation : HalfHeightWithStation));
		topoEl.style.top = tpldata.top + "px";
		jQuery(".topo-bg").css({
			width: "1720px",
			height: "980px",
			background: "url(" + TNM.Global.topoBackgroundImg + ")"
		});
	}
	function _resizeWidth(w, forceUpdate){
		var width = Math.max(MinPanelWidth, w) - 80;
		_calcRight(width, false, forceUpdate);
		_calcRight(width, true, forceUpdate);
	}
	function _refreshStatus(sitesStatus){
		IX.iterate(sitesStatus, function(s){
			var el = $XD.first($X('site-' + s.id), "a");
			if (!el) return;
			var level = $XP(s, "level", 0);
			$XD.setDataAttr(el, "value", level);
			el.className = "level" + level;
		});
	}
	function _sortSites(name){
		tpldata[name] = IX.Array.sort(tpldata[name], function(a, b){return a.no-b.no;});
	}
	function _refresh(sites){
		var data = TNM.Lib.verticalText(sites);
		IX.iterate(data, function(site,idx){
			var name = site.type==SiteTypes.Station?"stations":"others";
			site.typeName = SiteTypeNames[site.type];
			if(name == "others"){
				var theName = [];
				theName.name = sites[idx].name;
				if (!tpldata[name])
					tpldata[name] = [IX.inherit(site, theName)];
				else
					tpldata[name].push(IX.inherit(site, theName));
			}else{
				if (!tpldata[name])
					tpldata[name] = [site];
				else
					tpldata[name].push(site);
			}
		});
		_sortSites("others");
		_sortSites("stations");

		var el = $X(container);
		if (!el) return;

		_resizeWidth(el.offsetWidth, false);
		el.innerHTML = t_panel.renderData("", tpldata);
		_resizeTop(el);
	}
	return {
		checkFaultStatus : function(failFn){
			dataCaller("getStatus4Sites", {}, _refreshStatus, failFn);
		},
		refresh : function(){
			dataCaller("getAllSites", {}, _refresh);
		},
		resizeTop : function(){
			var el = $X(container);
			if (el) _resizeTop(el);
		},
		resize : function(){
			var el = $X(container);
			if (!el) return;
			_resizeTop(el);
			_resizeWidth(el.offsetWidth, true);
		}
	};
}

var panel = null;
globalActionConfig([["topo.click",function(params,el){
	var pageName = $XD.dataAttr(el,"value")>0?"fault-site":"sys-rack";
	ixwPages.load(ixwPages.createPath(pageName, {id: params.key}));

}],["topo.expand",function(params,el){
	var bottomEl = $XH.next($XH.ancestor(el, "middle"), "bottom");
	$XH.toggleClass(bottomEl, "collapsed");
	//document.getElementById("goBotttom").scrollIntoView();
	if (panel) 
		panel.resizeTop();
}]]);

IX.ns("TNM.Lib");
TNM.Lib.TopoPanel = function(container){
	panel = new TopoPanel(container);
	return IX.inherit(panel, {
		check : function(failFn){
			if (panel && $XH.first($X(container), "topo")) 
				panel.checkFaultStatus(failFn);
		}
	});
};
})();
(function () {
var scaleTransform = IX.CSSVendorName + 'transform:scale({rate});';
/**
	cfg : {
		which : "width" /"height"
		fixed : 280
		max : 1380,  ---> rate = 1 
		min: 720,    ---> rate = 0.4

	}
 */
TNM.Lib.onresize = function(el, cfg, moreFn){
	var attrName = $XP(cfg, "which", "width")=="width" ? "clientWidth" : "clientHeight";
	var maxAttr = $XP(cfg, "max"), minAttr = $XP(cfg, "min");
	var fixed = $XP(cfg, "fixed"), origin = Math.max(1, maxAttr - fixed);
	function onResize(){
		var  _el = $X(el);
		if (!el) return;

		var attrValue = document.documentElement[attrName];
		var rate = (attrValue > maxAttr) ? 1: ((Math.max(minAttr, attrValue) - fixed) / origin);
		
		_el.style.cssText = scaleTransform.replaceByParams({rate: rate});
		if (IX.isFn()) moreFn();
	}
	onResize();
	$Xw.bind({"resize" : onResize});
};
TNM.Lib.verticalText = function(data){
	var reg = /([A-Z]|[0-9])+/g;
	return IX.loop(data, [], function(acc, item, idx){
		var result;
		var arrEn = [];
		var isStart = null;
		var top = 0;
		var index = "index";
		while(result = reg.exec(item.name)){
			if(result[index] === 0)
				isStart = true;
			var len = result[0].length == 1 ? 16 : result[0].length * 8;
			top += len;
			arrEn.push('<div class="vertical" style="width:'+len+'px; height:'+len+'px">' + result[0] + '</div>');
		}
		var arr = item.name.replace(reg, ",").split(",");
		var arrCh = [];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]){
				top += arr[i].length * 16;
				arrCh.push('<div style="height:'+ arr[i].length * 16 +'px">' + arr[i] + '</div>');
			}
		}
		if(arrEn.length !== 0){
			var newArr = [];
			if(isStart){
				for (var j = 0; j < arrEn.length; j++) {
					newArr.push(arrEn[j]);
					newArr.push(arrCh[j]);
				}
			}else{
				for (var k = 0; k < arrCh.length; k++) {
					newArr.push(arrCh[k]);
					newArr.push(arrEn[k]);
				}
			}
			acc.push(IX.inherit(item, {
				name: '<div class="ver-text" style="height:'+ top +'px">'+newArr.join("")+'</div>'
			}));
		}else{
			acc.push(IX.inherit(item, {
				name: '<div class="ver-text" style="height:'+ item.name.length * 16 +'px">' + item.name + '</div>'
			}));
		}
		return acc;
	});
};

TNM.Lib.resizeTreeAndGrid = function(treeEl){
	var clientHeight = jQuery(".sidebar").height();
	if(clientHeight > 880){
		jQuery(".nvgrid-body").css("min-height",clientHeight-110 + "px");
		var gridHeight1 = jQuery("#Grid").height();
		treeEl.style.height = gridHeight1 + "px";
		jQuery(".nv-tree").css("height",gridHeight1-60 + "px");
	}else{
		jQuery(".nvgrid-body").css("min-height","786px");
		var gridHeight = jQuery(".nv-grid").height();
		treeEl.style.height = gridHeight + "px";
		jQuery(".nv-tree").css("height", gridHeight-60+"px");
	}
};
})();
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
	
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			if ( jQuery.migrateTrace && console.trace ) {
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) !== null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );

// -----------------------------------------------------------------------
// Eros Fratini - eros@recoding.it
// jqprint 0.3
//
// - 19/06/2009 - some new implementations, added Opera support
// - 11/05/2009 - first sketch
//
// Printing plug-in for jQuery, evolution of jPrintArea: http://plugins.jquery.com/project/jPrintArea
// requires jQuery 1.3.x
//
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
//------------------------------------------------------------------------

(function($) {
    var opt;

    $.fn.jqprint = function (options) {
        opt = $.extend({}, $.fn.jqprint.defaults, options);

        var $element = (this instanceof jQuery) ? this : $(this);

        var doc = null;
        var tab = null;
        var $iframe = null;
        
        if (opt.operaSupport && $.browser.opera) 
        { 
            tab = window.open("","jqPrint-preview");
            tab.document.open();

            doc = tab.document;
        }
        else 
        {
            $iframe = $("<iframe  />");
        
            if (!opt.debug) { $iframe.css({ position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px" }); }

            $iframe.appendTo("body");
            doc = $iframe[0].contentWindow.document;
        }
        
        if (opt.importCSS)
        {
            if ($("link[media=print]").length > 0) 
            {
                $("link[media=print]").each( function() {
                    doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' media='print' />");
                });
            }
            else 
            {
                $("link").each( function() {
                    doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' />");
                });
            }
        }
        
        if (opt.printContainer) { doc.write($element.outer()); }
        else { $element.each( function() { doc.write($(this).html()); }); }
        
        doc.close();
        
        (opt.operaSupport && $.browser.opera ? tab : $iframe[0].contentWindow).focus();
        setTimeout( function() { (opt.operaSupport && $.browser.opera ? tab : $iframe[0].contentWindow).print(); if (tab) { tab.close(); } }, 1000);
    };
    
    $.fn.jqprint.defaults = {
		debug: false,
		importCSS: true, 
		printContainer: true,
		operaSupport: true
	};

    // Thanks to 9__, found at http://users.livejournal.com/9__/380664.html
    jQuery.fn.outer = function() {
      return $($('<div></div>').html(this.clone())).html();
    }; 
})(jQuery);
(function () {

var RowModelBase = IXW.Lib.GridModel.RowModelBase ;

function RowModel(rowData, colModels,actions,moreActions){
	var rowModel = new RowModelBase(rowData, colModels, actions,moreActions);
	var tpldata = rowModel.getTpldata();
	tpldata.clz = rowData.enabled?"":"disabled";
	rowModel.getTpldata = function(){return tpldata;};
	return rowModel;
}

IX.ns("TCM.Lib");

var AllBtns = {
	"refresh" : false,
	"create" : false,
	"add" : false,

	"delete" : true
};


/***
	container : 'body',
	cfg :{
		title  : "XXX",
		grid : {
			clz : 
			columns:
			actions :  [["name", "title", function()...]],
			usePagination : false; default true;
			clickOnRow : function(rowId){} //optional
			dataLoader : function(parms, cbFn)
		}
		tools : { //default
			buttons: ["refresh", "create", "delete"]

			actions : {name : function(){}}
		}
		listen :{
			createItem : function(cbFn)
			deleteItems : function(rowModels, cbFn){}
		}
	}
 */
TCM.Lib.Grid =function(container, cfg){
	var grid = null;
	var createItemFn = $XF(cfg, "listen.createItem"),
		deleteItemsFn = $XF(cfg, "listen.deleteItems");

	function createFn(){
		createItemFn(function(data){
			grid.addItems(data.ids);
		});
	}
	function deleteFn(rows){
		deleteItemsFn(rows, function(){
			grid.removeItems(IX.map(rows, function(row){return row.getId();}));
		});
	}
	function _deleteItem(rowModel){deleteFn([rowModel]);}

	grid = new NV.Lib.Grid(IX.inherit(cfg.grid, {
		container : container,
		title : $XP(cfg, "title", ""),
		rowModel : $XP(cfg, "rowModel", RowModel),
		actions : IX.loop($XP(cfg, "grid.actions", []), [],  function(acc, action){
			if (IX.isString(action)) {
				if (action == "delete")
					acc.push(["delete", "删除",_deleteItem]);
				return acc;
			}	
			if (action.length<=2 && action[0] == "delete")
				action[2] = _deleteItem;
			acc.push(action);
			return acc;
		}),
		tools : {
			buttons : IX.map($XP(cfg, "tools.buttons", []), function(btnName){
				return {name : btnName, chkEnabled : AllBtns[btnName]};
			}),
			actions : IX.inherit({
				refresh : function(){grid.refresh();},
				create : createFn,
				add : createFn,
				"delete" : function(){deleteFn(grid.getSelectedRows());}
			}, $XP(cfg, "tools.actions"))
		}
	}));

	grid.show();
	return grid;
};
})();
(function () {var t_login = new IX.ITemplate({tpl: [
	'<div class="bg"><img src="{background}"></div>',
	'<div class="container">',
		'<div class="pic_top">',
			'<div class="pic_squre"></div>',
			'<div class="pic_char"></div>',
		'</div>',
		'<ul>',
			'<li><span class="pic-user"></span><span class="verLine"></span><input type="text" id="account" tabindex="1" placeholder="账号"></li>',
			'<li><span class="pic-pwd"></span><span class="verLine"></span><input type="password" id="password" tabindex="2" placeholder="密码"></li>',
		'</ul>',
		'<a id="submit" tabindex="3" class="btn longbtn" data-href="$login"><span>立即</span><span>登录</span></a>',
	'</div>',
	'<div class="footer" id="footer"><span class="footer-bar"></span></div>',
'']});

var ixwPages = IXW.Pages;
var nvAlert = NV.Dialog.alert;
IXW.Actions.configActions([["login", function(){
	jQuery("#submit").attr("disabled",true);
	jQuery("#account").attr("disabled",true);
	jQuery("#password").attr("disabled",true);
	var account = $X('account').value;
	var password = $X('password').value;
	if (!(account.isWindowsDirectory() && password.isWindowsDirectory())) {
		jQuery("#submit").attr("disabled",false);
		jQuery("#account").attr("disabled",false);
		jQuery("#password").attr("disabled",false);
		return NV.Dialog.alert("账号密码中请勿包含\\/^:*><|@?\"特殊字符！");
	}
	TNM.Global.entryCaller("login", {
		username : account,
		password : password
	}, function(data){
		jQuery("#submit").attr("disabled",false);
		jQuery("#account").attr("disabled",false);
		jQuery("#password").attr("disabled",false);
		TNM.Env.resetSession(data);
		ixwPages.load("");
	}, function(data){
		if (data.err)
			nvAlert(data.err);
		else
			nvAlert("网络中断，请检查网络或者服务器是否正常！");
		jQuery("#submit").attr("disabled",false);
		jQuery("#account").attr("disabled",false);
		jQuery("#password").attr("disabled",false);
		$X('account').blur();
		$X('password').blur();
	});
}]]);

var ImgWidth = 1939, ImgHeight = 1175, ContainerHeight = 300;
function onresize(){
	if (ixwPages.getCurrentName() != "entry")
		return;

	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	var w = document.body.clientWidth;
	var r = Math.max(winWidth/ImgWidth, winHeight/ImgHeight);
	var imgEl = jQuery(".bg img");
	imgEl.css({
		"width" : Math.round(ImgWidth * r) + "px",
		"height" : Math.round(ImgHeight * r) + "px"
	});
	jQuery(".container").css("bottom", Math.max(0, Math.round((winHeight-ContainerHeight)/2))+"px");
	//jQuery("#footer").css("background-position-x",Math.round((w-1940)/2)+"px");
}
$Xw.bind({"resize" :onresize}); 

IX.ns("TNM.Entry");
TNM.Entry.init = function(pageCfg, pageParams, cbFn){
	if (TNM.Env.hasSession())
		return ixwPages.load("");
	document.body.innerHTML = t_login.renderData("",{
		background:TNM.Global.backgroundUrl
	});
	onresize(); 
	jQuery("input").bind({
		"focus": function(e){
			$XH.addClass($XD.ancestor(this, "li"), "focus");
		},
		"blur": function(e){
			$XH.removeClass($XD.ancestor(this, "li"), "focus");
		}
	});
	$X('account').focus();
	var aEl = $X("submit");
	jQuery('#account').bind("keydown", function(e){
		if ( e.which == 13)
			$X('$password').focus();
	});
	jQuery("#password").keydown(function(event){
		if(event.keyCode == 13){
			aEl.click();
			$X('account').blur();
			$X('password').blur();
		}
	});
};
})();
(function () {
IX.ns("TNM.ErrPage");
TNM.ErrPage.init = function(pageCfg, pageParams, cbFn){
	document.body.innerHTML = "ERROR";

};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;

var sysclz = null, checkFn = IX.emptyFn, resizeFn = IX.emptyFn;
function sysCond(){
	return sysclz && $XH.hasClass(document.body, sysclz);
} 
var sysChecker = new TNM.Util.PeriodicChecker(sysCond, function(failFn){
	checkFn(failFn);
});
$Xw.bind({"resize" : function(){
	if (sysCond()) resizeFn();
}});
function startChecker(clz, view){
	sysChecker.stop();
	sysclz = clz;
	resizeFn = view.resize;
	checkFn = view.check;
	sysChecker.start();
}


var t_siteLine = new IX.ITemplate({tpl: [
	'<div class="nv-title">线路图</div>',
	'<div id="container"></div>',
'']});

function showSysLine(cbFn){
	$X('body').innerHTML = t_siteLine.renderData("", {});
	var siteLine = new TNM.Lib.SitesPanel("container");
	jQuery("#container").css({
		backgroundImage: "url(" + TNM.Global.lineBackgroundUrl + ")"
	});
	siteLine.refresh();
	startChecker("sys-line", siteLine);
}


var t_racks = new IX.ITemplate({tpl: [
	'<div class="nv-box">',
		'<div class="nv-title">',
			'<div class="tabs">',
				'<a class="focused" data-href="$sys.rack.switch" data-key="view"><span>查看机柜</span></a>',
				'<a data-href="$sys.rack.switch" data-key="edit"><span>编辑机柜</span></a>',
			'</div>{html}',
		'</div>',
		'<div id="container"></div>',
	'</div>	',
'']});

var currentRacks = null;
globalActionConfig([["sys.rack.switch",function(params,el){
	if (!currentRacks || $XH.hasClass(el, "focused"))
		return;
	currentRacks.resetMode(params.key);
	$XH.removeClass($XH.first(el.parentNode, "focused"), "focused");
	$XH.addClass(el, "focused");

}],["sys.rack.pick",function(params,el){
	var id = params.key, name = el.innerHTML;
	var dropdownEl = $XH.ancestor(el, "dropdown");
	if (!dropdownEl) return;
	var inputEl = $XD.first(dropdownEl, "input");
	if (inputEl.value == id)
		return;

	inputEl.value = id;
	var nameEl = $XH.first($XH.first(dropdownEl, "dropdown-toggle"), "name");
	nameEl.innerHTML = name;
	if (!currentRacks)
		return;
	currentRacks.resetSite(id);

}]]);

function showSysRack(siteId, cbFn){
	var siteHT = TCM.LineInfo.getSites();
	var sites = IX.map(siteHT.getAll(), function(site){return {
		id : site.id,
		name : site.name,
		action : "sys.rack.pick"
	};});
	var site = siteHT.get(siteId || TNM.Env.getSession().getSiteId());
	$X('body').innerHTML = t_racks.renderData("",{
		focused : "editing",
		html :  NV.Lib.getComboHTML("site4Rack", {
			value : site.id,
			valueText: site.name,
			items :sites
		})
	});
	if(!document.documentMode){
		jQuery("body").addClass("isNotIE");
	}
	currentRacks = new TNM.Lib.RacksPanel("container", site.id);
	currentRacks.refresh();
	startChecker("sys-rack",currentRacks);
}


var t_topo = new IX.ITemplate({tpl: [
	'<div class="nv-box">',
		'<div class="nv-title">拓扑结构</div>',
		'<div id="container"></div>',
	'</div>	',
'']});

function showTopological(cbFn){
	$X('body').innerHTML = t_topo.renderData("", {});
	var topo = new TNM.Lib.TopoPanel("container");
	topo.refresh();
	startChecker("sys-topo",topo);
}
function switchOut(currentContext, nextContext){
	var pageName = currentContext.name;
	jQuery("#container").remove();
	if(pageName == "sys-rack")
		currentRacks.clear();
}

IX.ns("TNM.Sys");
TNM.Sys.init = function(pageCfg, pageParams, cbFn){
	pageCfg.switchOut = switchOut;
	switch(pageCfg.name){
	case "sys-line":
		showSysLine(cbFn);
		break;
	case "sys-rack":
		showSysRack(pageParams.id, cbFn);
		break;
	case "sys-topo":
		showTopological(cbFn);
		break;
	}
};
})();
(function () {
var deviceCaller = TNM.Global.deviceCaller;
var globalActionConfig = IXW.Actions.configActions;

var showDialog = NV.Dialog.show;
var hideDialog = NV.Dialog.hide;
var confirmDialog = NV.Dialog.confirm;
var nvAlert = NV.Dialog.alert;

var deviceType = TCM.Const.DeviceTypes;
var deviceTypeNames = TCM.Const.DeviceTypeNames;
var getComboHTML = NV.Lib.getComboHTML;
var getNodeName = TCM.DeviceType.getNodeName;

var t_editOther = new IX.ITemplate({tpl: [
'<ul class="{clz}">',
	'<li><span class="label">设备名称</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="30" id="device_name" value="{device_name}"></span></li>',
	'<li><span class="label">类型</span>{deviceTypeCombo}</li>',
	'<li><span class="label">厂家</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="30" id="device_provider" value="{device_provider}"></span></li>',
	'<li><span class="label">型号</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="30" id="device_style" value="{device_style}"></span></li>',
	'<li><span class="label">软件名称或网页地址</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="64" id="device_path" value="{device_path}"></span></li>',
	'<li class="pdu"><span class="label">用户名</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_username" value="{device_username}"></span></li>',
	'<li class="pdu"><span class="label">密码</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_password" value="{device_password}"></span></li>',
	'<li><span class="label">备注</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="150" id="device_desc" value="{device_desc}"></span></li>',
	'<li><span class="label">登录方式</span>',
		'<span><input class="loginIp" maxlength="15" id="device_loginIp" placeholder="IP" value="{device_loginIp}">',
		'<input class="loginPort" maxlength="5" id="device_loginPort" placeholder="PORT"  value="{device_loginPort}"></span></li>',
'</ul>',
'']});
var t_editDecoder = new IX.ITemplate({tpl: [
'<ul class="{clz}">',
	'<li><span class="label">名称</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="64" id="device_name" value="{device_name}"></span></li>',
	'<li><span class="label">IP地址</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_ip" value="{device_ip}"></span></li>',
	'<li><span class="label">用户名</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_username" value="{device_username}"></span></li>',
	'<li><span class="label">密码</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_password" value="{device_password}"></span></li>',
	'<li><span class="label">备注</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_desc" value="{device_desc}"></span></li>',
	'<li><span class="label">登录方式</span>',
		'<span><input class="loginIp" maxlength="15" id="device_loginIp" placeholder="IP" value="{device_loginIp}">',
		'<input class="loginPort" maxlength="5" id="device_loginPort" placeholder="PORT" value="{device_loginPort}"></span></li>',
'</ul>',
'']});

var t_editSpecialDecoder = new IX.ITemplate({tpl: [
'<ul class="{clz}">',
	'<li><span class="label">名称</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="64" id="device_name" value="{device_name}"></span></li>',
	'<li><span class="label">IP地址</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_ip" value="{device_ip}"></span></li>',
	'<li><span class="label">用户名</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_username" value="{device_username}"></span></li>',
	'<li><span class="label">密码</span>',
		'<span><input class="readOnly" disabled="disabled" maxlength="15" id="device_password" value="{device_password}"></span></li>',
	'<li><span class="label">备注</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_desc" value="{device_desc}"></span></li>',
	'<li><span class="label">登录方式</span>',
		'<span><input class="loginIp" maxlength="15" id="device_loginIp" placeholder="IP" value="{device_loginIp}">',
		'<input class="loginPort" maxlength="5" id="device_loginPort" placeholder="PORT" value="{device_loginPort}"></span></li>',
'</ul>',
'']});

var t_editIPC = new IX.ITemplate({tpl: [
'<ul class="{clz}">',
	'<li><span class="label">设备名称</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_name" value="{device_name}"></span>',
		'<span class="label labelTwo">用户名</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_username" value="{device_username}"></span></li>',
	'<li><span class="label">IP地址</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_ip" value="{device_ip}"></span>',
		'<span class="label labelTwo">密码</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_password" value="{device_password}"></span></li>',
	'<li><span class="label">端口号</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_port" value="{device_port}"></span>',
		'<span class="label labelTwo">摄像机类型</span>{camerasTypeCombo}</li>',
	'<li><span class="label">组播流地址</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_bcAddr" value="{device_bcAddr}"></span>',
		'<span class="label labelTwo">厂家</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_provider" value="{device_provider}"></span></li>',
	'<li><span class="label">组播流端口</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_bcPort" value="{device_bcPort}"></span>',
		'<span class="label labelTwo">型号</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_style" value="{device_style}"></span></li>',
	'<li><span class="label">通道数</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_channelNum" value="{device_channelNum}"></span>',
		'<span class="label labelTwo">所属分区</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_zoneName" value="{device_zoneName}"></span></li>',
	'<li><span class="label">备注</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_desc" value="{device_desc}"></span>',
		'<span class="label labelTwo">登录方式</span>',
		'<span><input class="loginIp" maxlength="15" id="device_loginIp" placeholder="IP" value="{device_loginIp}">',
		'<input class="loginPort" maxlength="5" id="device_loginPort" placeholder="PORT" value="{device_loginPort}"></span></li>',
'</ul>',
'']});

var t_editCoder = new IX.ITemplate({tpl: [
'<ul class="{clz} main">',
	'<li><span class="label">设备名称</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_name" value="{device_name}"></span>',
		'<span class="label labelTwo">用户名</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_username" value="{device_username}"></span></li>',
	'<li><span class="label">IP地址</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_ip" value="{device_ip}"></span>',
		'<span class="label labelTwo">密码</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_password" value="{device_password}"></span></li>',
	'<li><span class="label">端口号</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_port" value="{device_port}"></span>',
		'<span class="label labelTwo">备注</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_desc" value="{device_desc}"></span></li>',
	'<li><span class="label ">通道数</span>',
		'<span><input class="readOnly" disabled="disabled" id="device_channelNum" value="{device_channelNum}"></span>',
		'<span class="label labelTwo">登录方式</span>',
		'<span><input class="loginIp" maxlength="15" id="device_loginIp" placeholder="IP" value="{device_loginIp}">',
		'<input class="loginPort" maxlength="5" id="device_loginPort" placeholder="PORT" value="{device_loginPort}"></span>',
		'</li>',
		'<input id="device_type" value="{device_type}" style="display: none;">',
	
'</ul>',
'']});


var	checkersBase = [
	{name : "name", key: "device_name", empty : "设备名称"},
	{name : "desc", key: "device_desc", empty : ""},
	{name : "username", key : "device_username", empty : ""},
	{name : "password", key : "device_password", empty : ""},
	{name : "loginIp", key : "device_loginIp", empty : ""},
	{name : "loginPort", key : "device_loginPort", empty : ""}
];
//dialog的配置项
var deviceDialogCfg = {
	decoder: {
		clz : "decoder-edit",
		tpl : t_editDecoder,
		checkers : checkersBase.concat([
			{name : "ip", key: "device_ip", empty : "设备IP"}
		])
	},
	specialDecoder: {
		clz : "decoder-edit",
		tpl : t_editSpecialDecoder,
		checkers : checkersBase.concat([
			{name : "ip", key: "device_ip", empty : "设备IP"}
		])
	},
	other: {
		clz : "other-edit",
		tpl : t_editOther,
		checkers : checkersBase.concat([
			{name : "provider", key : "device_provider", empty : "设备厂家"},
			{name : "style", key : "device_style", empty : "设备型号"},
			{name : "type", key: "device_type", empty : ""},
			{name : "path", key : "device_path", empty : "软件名称或网页地址"}
		])
	},
	coder: {
		clz : "coder-edit",
		tpl : t_editCoder,
		checkers : checkersBase.concat([
			{name : "ip", key: "device_ip", empty : "设备IP"},
			{name : "port", key: "device_port", empty : ""},
			{name : "channelNum", key: "device_channelNum", empty : ""},
			{name : "bc", key: "device_bc", empty : ""}
		])
	},
	IPC: {
		clz : "IPC-edit",
		tpl : t_editIPC,
		checkers : checkersBase.concat([
			{name : "provider", key : "device_provider", empty : "设备厂家"},
			{name : "style", key : "device_style", empty : "设备型号"},
			{name : "ip", key: "device_ip", empty : "设备IP"},
			{name : "bcAddr", key: "device_bcAddr", empty : "组播流地址"},
			{name : "bcPort", key: "device_bcPort", empty : "组播流端口"},
			{name : "channelNum", key: "device_channelNum", empty : ""},
			{name : "port", key: "device_port", empty : "端口号"},
			{name : "type", key: "camera_type", empty : ""},
			{name : "zoneName", key: "device_zoneName", empty : ""}
		])
	}
};
function checkIfIP(s){ return s.isIP();}
function checkIfPort(s){
	if (isNaN(s)) return false;
	var k = s - 0;
	if (k < 0 || k > 65535 || k !== parseInt(k)) return false;
	return s;
}
//验证表单是否可以提交
function verifyForm(value, msg, name){
	if(name == "loginIp"){
		if (!checkIfIP(value)){
			nvAlert("请输入正确的IP地址，例如：192.168.0.1");
			return false;
		}
	}
	if(name == "loginPort"){
		if (!checkIfPort(value)){
			nvAlert("请输入正确的端口号，端口号范围：0~65535");
			return false;
		}
	}
	return true;
}
//收集表单提交信息
function gatherInfo(rowModel, checkers, types){
	var data = {}, ifChanged = false;
	for (var i=0; i<checkers.length; i++){
		var checker = checkers[i];
		var val = null;
		if (checker.key == "device_bc")
			continue; 
		else
			val = $X(checker.key).value;
		if (!verifyForm(val, checker.empty,checker.name))
			return false;
		ifChanged = ifChanged || !(rowModel && rowModel.get(checker.name) == val);
		IX.setProperty(data, checker.name, val);
	}
	if (data.type == deviceType.Coder) {
		data.channelNum = data.channelNum-0;
		var bc = [];
		for (var k = 0; k < data.channelNum; k++) {
			var addr = $X("device_bcAddr"+(k+1)).value;
			var port = $X("device_bcPort"+(k+1)).value;
			bc.push({
				addr: addr,
				port: port-0,
				channelNo: k+1
			});
		}
		data.bc = bc;
	}
	if (!ifChanged){
		nvAlert("您未作任何修改，请点击取消关闭编辑窗口！");
		return false;
	}
	data.id = rowModel.getId();
	if(types.length === 1)
		data.type = types[0];
	return data;
}
//获取数据，显示dialog
function _editUnit(rowModel, cfg, okFn, types, siteId){
	var checkers = cfg.checkers;
	function _okFn(){
		var info = gatherInfo(rowModel, checkers, types);
		info.siteId=siteId;
		var checkFn = $XP(cfg, "checkInfo");
		if (!info || (IX.isFn(checkFn) && !checkFn(info))) return;
		deviceCaller(cfg.callerName, info, function(data){
			hideDialog();
			okFn({ids : [info.id === 0 ? info.id : (info.id || data.id)]});
		});
	}
	var data = {};
	for (var i=0; i<checkers.length; i++){
		var checker = checkers[i];
		data[checker.key] = rowModel && rowModel.get(checker.name) ? rowModel.get(checker.name).toString().dehtml(): "";
		if (checker.key == "device_bc")
			data[checker.key] = rowModel? rowModel.get(checker.name): "";
	}
	showDialog({
		clz : cfg.clz,
		title : cfg.title,
		content : cfg.tpl.renderData("", cfg.tpldataFn(rowModel, data)),
		listen : {ok : _okFn}
	});
}
//不可编辑的显示HTML
function getTransHTML(name,type){
	return "<span><input disabled id='"+name+ "' value='"+deviceTypeNames[type]+"'></span>";
}

IX.ns("TNM.DeviceDialog");
TNM.DeviceDialog.editDevice = function(rowModel, okFn, siteId){
	var types = [rowModel.get("type")];
	var key = getNodeName(types[0]);
	_editUnit(rowModel, IX.inherit(deviceDialogCfg[key], {
		title : "编辑设备",
		callerName : "editDevice",
		tpldataFn : function(rowModel, data){
			data.clz = data.device_type == 64 ? "PDU-edit" : "edit";
			data.deviceTypeCombo = getTransHTML("device_type",data.device_type || types[0]);
			data.camerasTypeCombo = getTransHTML("camera_type",data.camera_type);
			if (IX.Array.isFound(types[0], [20,21,22]))
				data.clz = "IPC-edit";
			data.channels = data.device_bc? data.device_bc : [{
				addr: "", 
				port: "", 
				channelNo: 1
			}];
			data.device_username = data.device_username || "admin";
			data.device_password = data.device_password || "admin";
			return data;
		}
	}), okFn, types, siteId);
};
TNM.DeviceDialog.logIn = function(rowModel, siteId){
	console.log("logIn");//TODO
};
})();
(function () {
var deviceCaller = TNM.Global.deviceCaller;
var globalActionConfig = IXW.Actions.configActions;
var deviceNames = TCM.Const.DeviceTypeNames;
var nvAlert = NV.Dialog.alert;

var currentLine = null;
/*构造tree基础节点*/
function getLeafInfo(arr){
	return IX.map(arr, function(item, idx){
		return {name: deviceNames[item], key: [item]};
	});
}
var TreeInfo = [
{name : "",  nodes : [
	{name : '数字摄像机', nodes : getLeafInfo([20, 21, 22])},
	getLeafInfo([50])[0],
	// getLeafInfo([51])[0],
	getLeafInfo([55])[0],
	{name : '网络和附属设备', nodes : getLeafInfo([64])}
]}];
var CurrentOne = {name: "", nodes: [
	// getLeafInfo([51])[0],
	getLeafInfo([55])[0],
	{name : '网络和附属设备', nodes : getLeafInfo([64])}
]};
//grid的显示列表
var DeviceGridCfgs = {
	"55-64" : {columns: "devName,devType,devUserName,devPassWord"},
	"20-21-22-50-55-64" : {columns: "devName,devType,devUserName,devPassWord"},
	"20-21-22" : {columns: "devName,devType,devIp,devUserName,devPassWord"},
	"20" : {columns: "devName,devType,devIp,devUserName,devPassWord"},
	"21" : {columns: "devName,devType,devIp,devUserName,devPassWord"},
	"22" : {columns: "devName,devType,devIp,devUserName,devPassWord"},
	"50" : {columns: "devName,devIp,devUserName,devPassWord"},
	"51" : {columns: "devName,devIp,devUserName,devPassWord"},
	"55" : {columns: "devName,devIp,devUserName,devPassWord"},
	"64" : {columns: "devName,devPath,devUserName,devPassWord"},
};


var t_input = new IX.ITemplate({tpl: ['<div><input class="search" placeholder="设备选择"><a class="pic-search"></a></div>','']});
var t_info = new IX.ITemplate({tpl: [
	'<div id="Tree"><div id="treeName">{treeName}</div>{treeData}</div>',
	'<div id="Grid" class="{clz} nv-box"></div>',
'']});


//Tree的点击函数
function devicTreeClick(params){
	var types = IX.map(params.keys.split(","),function(type){return Number(type);});
	var Index = types.join("-");
	createDeviceGrid(DeviceGridCfgs[Index], {
		types: types, 
		siteId: params.siteId - 0, 
		name: params.name + "列表", 
		el: params.el
	});
}
//初始化Tree的节点显示
function showTreeNode(){
	jQuery(".nv-tree>ul>li>ul>li").children("ul").hide();
	jQuery(".nv-tree>ul>li").children('ul').hide();
	jQuery(".nv-tree>ul>li>a span.count").hide();
}
function loginRowModel(rowData, colModels, actions, moreActions){
	var row = new IXW.Lib.GridModel.RowModelBase(rowData, colModels, actions, moreActions);
	return IX.inherit(row, {
		getTpldata : function(){
			var isLogin = row.get("type");
			var tpldata = row.getTpldata();
			tpldata.clz = IX.Array.isFound(isLogin, [20,21,22,50,51,64]) ? "" : "notLogin";
			return tpldata;
		}
	});
}
//创建显示表格
function createDeviceGrid(cfgs, treeCfg){
	var grid = null;
	var columns = $XP(cfgs, "columns").split(",");
	var types = treeCfg.types;
	var siteId = treeCfg.siteId;

	function loginItem(rowModel, rowEL){
		if(rowModel.get("loginIp")){
			var http="http://"+rowModel.get("loginIp")+(rowModel.get("loginPort")?":"+rowModel.get("loginPort"):"");
			window.open(http); 
		}else{	
			nvAlert("无可登录地址！");
		}
	}
	function editItem(rowModel, rowEl){
		TNM.DeviceDialog.editDevice(rowModel, function(){
			grid.refresh();
		}, siteId);
	}
	grid = new TCM.Lib.Grid($XP(cfgs, "container", 'Grid'),{
		title : "设备管理",
		rowModel :  loginRowModel,
		grid : {
			clz : "device-list-"+treeCfg.types[0],
			columns: columns,
			actions : [["edit", "编辑", editItem],["login", "登录", loginItem]],
			hasCheckbox : $XP(cfgs, "hasCheckbox") || true,
			usePagination : $XP(cfgs, "usePagination") || true,
			dataLoader : function(params, _cbFn){
				deviceCaller("getDevices4Type", IX.inherit(params, {
					types: treeCfg.types,
					siteId: treeCfg.siteId
				}), function(data){
					_cbFn(data);
					if ($X("Tree"))
						TNM.Lib.resizeTreeAndGrid($X("Tree"));
				});
			}
		},
		tools : {
			buttons: []
		},
		listen : {}
	});
	return grid;
}
//构造树形结构
function parseTree(treeInfo, countHT, siteId) {
	function getTreeNode(_treeNodes){
		return IX.map(_treeNodes,function(treeNode){
			return IX.inherit(treeNode, getAttr(treeNode));
		});
	}
	function getAttr(treeNode){
		if(treeNode.key)
			return {
				key : treeNode.key,
				count : countHT[treeNode.key[0]] ? countHT[treeNode.key[0]] : 0,
				siteId : siteId,
				nodes : []
			};
		var arr = [], count = 0;
		var nodes = treeNode.nodes === 0 ? [] : getTreeNode(treeNode.nodes);
		for (var i = 0; i < nodes.length; i++) {
			arr = arr.concat(nodes[i].key);
			count += nodes[i].count;
		}
		return {
			key : arr,
			count : count,
			siteId : siteId,
			nodes : nodes
		};
	}
	return getTreeNode(treeInfo).pop();
}
//获取设备列表
function getDevices(cbFn){
	deviceCaller("getAllDevices", {}, function(data){
		var arrCount = IX.map(data, function(site, idx){
			var countHT = {};
			IX.iterate(site.devices, function(device){
				countHT[device.type] = device.count;
			});
			var lineSite = TCM.LineInfo.getSites().get(site.siteId);
			var arr = [];
			if(lineSite.type == 1){
				arr = [IX.inherit(CurrentOne, {name: lineSite.name})];
			}else{
				TreeInfo[0].name = lineSite.name;
				arr = TreeInfo;
			}
			return parseTree(arr, countHT, site.siteId);
		});
		cbFn({nodes : arrCount});
	});
}
//调用获取设备列表，传入回调函数，用于数据显示
function showDeviceList(cbFn){
	getDevices(function(_cfg){
		var cfg = IX.inherit(_cfg, {
			htmlFn : function(node) {return node.name + '<span class="count">(' + node.count + ')</span>';},
			click : devicTreeClick
		});
		var tree = new TCM.Lib.Tree(cfg);
		$X('body').innerHTML = t_info.renderData("", {
			treeName : "线路设备列表",
			treeData : tree.getHTML(),
			clz : "device"
		});
		showTreeNode();
		jQuery(".nv-tree li:first a:first span.count").click();
	});
	cbFn();
}

IX.ns("TNM.Device");
TNM.Device.init = function(pageCfg, pageParams, cbFn){
	currentLine = TNM.Env.getSession().getLineInfo();
	showDeviceList(cbFn);
};
})();
(function () {
var deviceCaller = TNM.Global.deviceCaller;
var globalActionConfig = IXW.Actions.configActions;
var deviceNames = TCM.Const.DeviceTypeNames;
var CurrentSite = null;
/*构造tree基础节点*/
function getLeafInfo(arr){
	return IX.map(arr, function(item, idx){
		return {name: deviceNames[item], key: [item]};
	});
}
var TreeInfo = [
{name : "",  nodes : [
	{name : '服务器', nodes : getLeafInfo([1, 2, 3])},
	getLeafInfo([10])[0],
	{name : '数字摄像机', nodes : getLeafInfo([20, 21, 22])},
	{name : '模拟摄像机', nodes : getLeafInfo([31, 32, 33])},
	{name : '拾音器', nodes : getLeafInfo([40, 41])},
	getLeafInfo([50])[0],
	// getLeafInfo([51])[0],
	// getLeafInfo([52])[0],
	getLeafInfo([53])[0],
	getLeafInfo([54])[0],
	getLeafInfo([55])[0],
	// getLeafInfo([65])[0],
	{name : '网络和附属设备', nodes : getLeafInfo([60, 61, 62, 63, 64, 90])}
]}];
var CurrentOne = {name: "", nodes: [
	{name : '服务器', nodes : getLeafInfo([0, 1, 2, 3])},
	getLeafInfo([10])[0],
	// getLeafInfo([51])[0],
	getLeafInfo([53])[0],
	getLeafInfo([54])[0],
	getLeafInfo([55])[0],
	{name : '网络和附属设备', nodes : getLeafInfo([60, 61, 62, 63, 64, 90])}
]};
//grid的显示列表
var faultGridCfgs = {columns: "fauSiteId,fauDeviceName,fauFaultDate,fauLevel,fauDeviceIp,fauIsHandled,fauCode,details,fauDesc"};

var t_input = new IX.ITemplate({tpl: ['<div><input class="search" placeholder="设备选择"><a class="pic-search"></a></div>','']});
var t_info = new IX.ITemplate({tpl: [
	'<div id="Tree"><div id="treeName">{treeName}</div>{treeData}</div>',
	'<div id="Grid" class="{clz}  nv-box"></div>',
'']});


globalActionConfig([["ixw.grid.cell", function(params, el){
	var id = params.key;
	var parentEl = jQuery(el.parentNode.parentNode);
	var handleEl = jQuery(el).find("span");
	if(id == "details"){
		parentEl.siblings().removeClass("expand");
		parentEl.toggleClass("expand");
		var length=jQuery(el.parentNode.nextElementSibling).find("div").length;
		if(length>0)
		{
			jQuery(".body ul").css("height","35px");
			jQuery(".body .expand").css("height",(length+1)*35+"px");
			jQuery(".body .expand .col-desc").css("height",length*35+1+"px");
		}
	}
	if(id == "isHandled" && $XH.hasClass(handleEl.get(0), "notHandle")){
		var faultId = $XD.dataAttr(parentEl.get(0), "id");
		var siteId=jQuery(".nv-tree").find("a.select").attr("data-siteid");
		deviceCaller("handleFault", {id: faultId,siteId:siteId}, function(data){
			handleEl.removeClass("notHandle").addClass("handle");
			handleEl[0].innerHTML="已处理";
			var faultPath="fault/item/"+faultId;
			var itemLength=jQuery("a[data-href='"+faultPath+"']").parent().children().length;
			if(itemLength>2){
				jQuery("a[data-href='"+faultPath+"']").remove();
			}else{
				jQuery("a[data-href='"+faultPath+"']").parent().remove();
			}
		});
	}
}]]);
//Tree的点击函数
function devicTreeClick(params){
	var types = IX.map(params.keys.split(","),function(type){return Number(type);});	
	createFaultGrid(faultGridCfgs, {
		types: types, 
		siteId: params.siteId - 0, 
		name: params.name + "列表", 
		el: params.el,
		level: "all",
		isHandled:"all",
		from: TNM.Lib.GetCurDay().from,
		to: TNM.Lib.GetCurDay().to
	});	
}
//获取表格的工具栏
function getFilterTool(date, num2, num1){
	var baseCfg = {
		hasDate: true,
		defaultDate: "",
		dataText: "告警时间",
		toolList: [{
			id: "level",
			text: "告警级别"
		},{
			id: "isHandled",
			text: "处理状态"
		}]
	};
	return new TNM.Lib.BaseFilterTools(IX.inherit(baseCfg, {defaultDate: date}, {
		toolList: IX.map(baseCfg.toolList, function(list, idx){
			if (idx === 0 && num1)
				return IX.inherit(list, {num: num1});
			else if (idx === 1 && num2) 
				return IX.inherit(list, {num: num2});
			else 
				return list;
		})
	}));
}
//创建显示表格
function createFaultGrid(cfgs, treeCfg){
	var grid = null;
	var columns = $XP(cfgs, "columns").split(",");
	var types = treeCfg.types;
	var fromSite=treeCfg.fromSite;
	var fromItem=treeCfg.fromItem;
	var siteId = treeCfg.siteId;
	var fromDevice=treeCfg.fromDevice;
	var deviceId=fromDevice?treeCfg.deviceId:"";
	var currentFilter;
	if(fromSite||fromDevice)
		currentFilter = getFilterTool("", 2);
	else if(fromItem)
		currentFilter = getFilterTool(treeCfg.faultDate, 2, treeCfg.level);
	else
		currentFilter = getFilterTool("default");
	grid = new TNM.Lib.FilterGrid({
			container: $XP(cfgs, "container", 'Grid'),
			title : "故障管理",
			clz : "device-list-"+treeCfg.types[0],
			columns: columns,
			actions : [],
			tools: currentFilter,
			usePagination : $XP(cfgs, "usePagination") || true,
			baseParams: treeCfg,
			dataLoader : function(params, _cbFn){
				deviceCaller(fromDevice?"getFault4Device":(fromItem?"getFaultById":"getFault4type"), params, function(data){
					_cbFn(data);
					fromItem=false;
					fromSite=false;
					fromDevice=false;
					if ($X("Tree"))
						TNM.Lib.resizeTreeAndGrid($X("Tree"));
				});
			}
	});
	return grid;
}
//构造树形结构
function parseTree(treeInfo, countHT, siteId) {
	function getTreeNode(_treeNodes){
		return IX.map(_treeNodes,function(treeNode){
			return IX.inherit(treeNode, getAttr(treeNode));
		});
	}
	function getAttr(treeNode){
		if(treeNode.key)
			return {
				key : treeNode.key,
				count : countHT[treeNode.key[0]] ? countHT[treeNode.key[0]] : 0,
				siteId : siteId,
				nodes : []
			};
		var arr = [], count = 0;
		var nodes = treeNode.nodes === 0 ? [] : getTreeNode(treeNode.nodes);
		for (var i = 0; i < nodes.length; i++) {
			arr = arr.concat(nodes[i].key);
			count += nodes[i].count;
		}
		return {
			key : arr,
			count : count,
			siteId : siteId,
			nodes : nodes
		};
	}
	return getTreeNode(treeInfo).pop();
}
//获取设备列表
function getDevices(cbFn){
	deviceCaller("getAllDevices", {}, function(data){
		var arrCount = IX.map(data, function(site, idx){
			var countHT = {};
			IX.iterate(site.devices, function(device){
				countHT[device.type] = device.count;
			});
			var lineSite = TCM.LineInfo.getSites().get(site.siteId);
			var arr = [];
			if(lineSite.type == 1){
				arr = [IX.inherit(CurrentOne, {name: lineSite.name})];
			}else{
				TreeInfo[0].name = lineSite.name;
				arr = TreeInfo;
			}
			return parseTree(arr, countHT, site.siteId);
		});
		cbFn({nodes : arrCount});
	});
	
}
//初始化Tree的节点显示
function showTreeNode(){
	jQuery(".nv-tree>ul>li>ul>li").children("ul").hide();
	jQuery(".nv-tree>ul>li").children('ul').hide();
}
//展示fault页面，入口函数
function showFaultList(params,cbFn){
	getDevices(function(_cfg){
		var cfg = IX.inherit(_cfg, {
			htmlFn : function(node) {return node.name ;},
			click : devicTreeClick
		});
		var tree = new TCM.Lib.Tree(cfg);
		$X('body').innerHTML = t_info.renderData("", {
			treeName : "线路设备列表",
			treeData : tree.getHTML(),
			clz : "fault"
		});
		showTreeNode();
		var types;
		var siteId;
		var keys;
		if(params.fromDevice){
			var deviceId;
			IX.loop(params.items, [], function(acc, item){
				deviceId=item.deviceId;
				siteId=item.siteId;
			});
			keys=jQuery(".nv-tree>ul>li>a[data-siteid='"+siteId+"']").attr("data-key");
		    types=IX.map(keys.split(","),function(type){return Number(type);});
			createFaultGrid(faultGridCfgs, {
				types: types, 
				siteId:siteId , 
				name: "", 
				el: "",
				level: "all",
				isHandled: false,
				fromDevice:true,
				deviceId:deviceId
			});
			jQuery(".nv-tree>ul>li>a[data-siteid='"+siteId+"']").addClass("select");
		}else if(params.fromItem){
			var id;
			var level;
			var faultDate;
			IX.loop(params.items, [], function(acc, item){
				id=item.id;
				siteId=item.siteId;
				level=item.level;
				faultDate=item.faultDate;
			});
			keys=jQuery(".nv-tree>ul>li>a[data-siteid='"+siteId+"']").attr("data-key");
		    types=IX.map(keys.split(","),function(type){return Number(type);});
			createFaultGrid(faultGridCfgs, {
				types: types, 
				siteId:siteId, 
				name: "", 
				el: "",
				level: level,
				isHandled: false,
				from: TNM.Lib.GetCurDay().from,
				to: TNM.Lib.GetCurDay().to,
				fromItem:true,
				id:id,
				faultDate:faultDate
			});
			jQuery(".nv-tree>ul>li>a[data-siteid='"+siteId+"']").addClass("select");
		}
		else if(params._name=="fault-site"){
			keys=jQuery(".nv-tree>ul>li>a[data-siteid='"+params.id+"']").attr("data-key");
			types=IX.map(keys.split(","),function(type){return Number(type);});
			jQuery(".nv-tree>ul>li>a[data-siteid='"+params.id+"']").addClass("select");
			createFaultGrid(faultGridCfgs, {
				types: types, 
				siteId:params.id - 0, 
				name: "", 
				el: "",
				level: "all",
				isHandled:false,
				from: null,
				to: null,
				fromSite:true,
			});
		}else{
			jQuery(".nv-tree>ul>li:first a:first span:last").click();
		}
	});
	cbFn();
}
IX.ns("TNM.Fault");
TNM.Fault.init = function(pageCfg, pageParams, cbFn){
	CurrentSite = TNM.Env.getSession().getLineInfo();
	switch(pageCfg.name){
	case "fault":
		if(pageParams.flag)
			return;
		showFaultList(pageParams,cbFn);
		break;
	case "fault-site":
		showFaultList(pageParams, cbFn);
		break;
	case "fault-item":
		deviceCaller("getFaultById", IX.inherit(pageParams, {
			id: pageParams.id - 0
		}), function(data){
			data.fromItem=true;
			showFaultList(data,cbFn);			
		});
		break;
	case "fault-device":
		pageParams.deviceId=pageParams.id - 0;
		pageParams.pageNo=0;
		pageParams.pageSize=20;
		deviceCaller("getFault4Device", IX.inherit(pageParams, {
			id: pageParams.id - 0
		}), function(data){
			data.fromDevice=true;
			showFaultList(data,cbFn);			
		});
		break;
	}
};
})();
(function () {
var globalActionConfig = IXW.Actions.configActions;
var monitorCaller = TNM.Global.monitorCaller;
var deviceCaller = TNM.Global.deviceCaller;
var CurrentSite = null;


var t_info = new IX.ITemplate({tpl: [
	'<div id="Grid" class="{clz}"></div>',
'']});

var t_users = new IX.ITemplate({tpl: [
	'<li>',
		'<a data-href="$combo.change" data-key="{id}">{name}</a>',
	'</li>',
'']});


var currentFilter = null;

var lineInfo = null;
globalActionConfig([["site.change", function(params, el){
	var id = params.key, name = el.innerHTML;
	var dropdownEl = $XH.ancestor(el, "dropdown");
	if (!dropdownEl) return;
	var inputEl = $XD.first(dropdownEl, "input");
	inputEl.value = id;
	var nameEl = $XH.first($XH.first(dropdownEl, "dropdown-toggle"), "name");
	nameEl.innerHTML = name;
	jQuery(nameEl).attr("title",name);
	if(id != "all"){
		monitorCaller("getUsers", {siteId: id}, function(users){
			var userItems = [{id: "all", name: "所有用户"}].concat(users);
			jQuery(".userId .dropdown-menu").html("").append(jQuery(IX.map(userItems, function(user){
				return t_users.renderData("", user);
			}).join("")));
		});
			jQuery(".userId").removeClass("disable");
			jQuery("#userId").attr("value","all");
			jQuery("#userId").next().find("span.name")[0].innerHTML="所有用户";
	}else{
		jQuery("#userId").value="all";
		jQuery("#userId").next().find("span.name")[0].innerHTML="所有用户";
		jQuery(".userId").addClass("disable");
	}
	currentFilter.change();
}],["grid.export", function(params, el){
	var $form = jQuery('<form id="form" action="/statistics/download" method="POST" style="display:none"></form>');
	var filterParams = currentFilter.getFilterParams();
	$form.append(jQuery('<input type="text" name="from" value="' + filterParams.from + '">'))
		.append(jQuery('<input type="text" name="to" value="' + filterParams.to + '">'))
		.append(jQuery('<input type="text" name="siteId" value="' + filterParams.siteId + '">'))
		.append(jQuery('<input type="text" name="deviceType" value="' + filterParams.deviceType + '">'))
		.append(jQuery('<input type="submit">'))
		.appendTo(jQuery("#body"));
	$form.submit();
}],["grid.print", function(params, el){
	jQuery(".statistics-list.ixw-grid").jqprint({
		importCSS: true
	});
}]]);
function createLogsGrid(){
	var grid = null;
	var columns = "logUserName,logDeviceName,siteName,logOpDate,logIp,logOpType,details,logDesc".split(",");
	var hasEvent=true;
	currentFilter = new TNM.Lib.BaseFilterTools({
		hasDate: true,
		defaultDate: "default",
		dataText: "起止时间",
		toolList: [{
			id: "siteId",
			text: "车站",
			items: {
				id: "siteId",
				items: [{id: "all", name: "所有车站", action: "site.change"}].concat(IX.loop(lineInfo, [], function(acc, item, idx){
					acc.push({
						id: item.id,
						name: item.name,
						action: "site.change"
					});
					return acc;
				}))
			}
		},{
			id: "userId",
			text: "用户"
		},{
			id: "deviceType",
			text: "设备类型"
		},{
			id:"ip",
			text:"IP"
		}]
	});
	grid = new TNM.Lib.FilterGrid({
		container: "Grid",
		title : "操作日志",
		clz : "logs-list",
		columns: columns,
		actions : [],
		tools: currentFilter,
		usePagination : true,
		baseParams: {
			siteId: "all",
			deviceType: "all",
			userId: "all",
			from: TNM.Lib.GetCurDay().from,
			to: TNM.Lib.GetCurDay().to,
			ip:""
		},
		dataLoader : function(params, _cbFn){
			var  siteId=params.siteId;
			if(siteId==="all"){
				params.userId="all";
			}
			monitorCaller("getLogs", params, function(data){
				_cbFn(data);
				if(hasEvent){
					var inputEl = $X('ip');
					IX.bind(inputEl, {
						blur : function(e){currentFilter.change();},
						keydown :function(e){
							if (e.which == 13) 
								inputEl.blur();
						}
					});
					hasEvent = false;
				}
				var clientHeight = jQuery(".sidebar").height();
				if(clientHeight > 880){
					jQuery(".nvgrid-body").css("min-height",clientHeight-145 + "px");
				}
			});
		}
	});
	return grid;
}

function showLogs(cbFn){
	$X("body").innerHTML = t_info.renderData("", {clz: "logs"});
	createLogsGrid();
	cbFn();
}


var t_infotree = new IX.ITemplate({tpl: [
	'<div id="Tree" class="{clz}"><div id="treeName">{treeName}</div>{treeData}</div>',
	'<div class="nv-box {clz}">',
		'<div class="nvgrid-title nv-title">性能监控</div>',
		'<div class="server-info">',
			'<div class="site-name">{siteName}</div>',
			'<div class="server-space"></div>',
			'<div class="server-name">{serverName}</div>',
		'</div>',
		'<div id="container"></div>',
	'</div>',
'']});

var t_baseInfo = new IX.ITemplate({tpl: [
	'<div id="Tree" class="{clz}"><div id="treeName">{treeName}</div>{treeData}</div>',
	'<div id="container"></div>',
'']});

var t_statistics = new IX.ITemplate({tpl: [
'<div class="{clz}">',
	'<div id="Grid"></div>',
'</div>',
'']});

var dashboards = null;
var checker = null;
function getDevices(cbFn){
	deviceCaller("getDevicesForMonitor", {types:[0,1,2,3]}, function(data){
		var arrCount = IX.loop(data, [], function(acc, site){
			var Site = TCM.LineInfo.getSites().get(site.siteId);
			var obj = {};
			var keys = [];
			obj.nodes = IX.loop(site.devices, [], function(arr, device){
				for (var k = 0; k < device.items.length; k++) {
					keys.push(device.items[k].id);
					arr.push({key: [device.items[k].id], name: device.items[k].name, id: device.items[k].id, nodes: []});
				}
				return arr;
			});
			obj.key = keys;
			obj.name = Site.name;
			obj.siteId = site.siteId;
			if (Site.type == 1) 
				acc.unshift(obj);
			else
				acc.push(obj);
			return acc;
		});
		cbFn({nodes : arrCount});
	});
}

function devicTreeClick(params){
	var types = IX.map(params.keys.split(","),function(type){return Number(type);});
	if (params.keys.split(",").length > 1){
		jQuery(".site-name").html(params.name);
		jQuery(".server-name").html(jQuery(params.el.parentNode).find("ul>li>a:first").attr("data-name"));
	}else{
		jQuery(".site-name").html(jQuery($XH.ancestor(params.el, "fold")).find("a:first").attr("data-name"));
		jQuery(".server-name").html(params.name);
	} 
	dashboards = new TNM.Lib.DashboardPanel($X('container'), function(dataFn, failFn){
		monitorCaller("getPerf", {id: types[0]}, dataFn, failFn);
		resizeFn();
	});
	if (checker)
		checker.stop();
	checker = new TNM.Util.PeriodicChecker(function(){
		return $XH.first($X('container'), "mem");
	}, dashboards.refresh, 15000);
	setTimeout(function(){checker.start();}, 15000);
	dashboards.init();
}

function showTreeNode(){
	jQuery(".nv-tree>ul>li>ul>li").children("ul").hide();
	jQuery(".nv-tree>ul>li").children('ul').hide();
	jQuery(".nv-tree>ul>li>a span.count").hide();
}

function resizeFn(){
	var width = document.documentElement.clientWidth;
	var clientHeight = jQuery(".sidebar").height();
	// var url=window.location.href;
	// if(url.indexOf("#monitor")==-1)
	// 	return "";
	if(clientHeight > 658){
		if($X("Tree"))
			$X('Tree').style.height = clientHeight + "px";
		jQuery('.monitor').css("height", clientHeight + "px");
		jQuery(".nv-tree").css("height",clientHeight-60 + "px");
		jQuery("#container").css("height", clientHeight - 40 + "px");
	}
	function _calc(width, value, initial){
		var theWidth = 1831 - width;
		return  Math.floor(((value - initial) / 482) * theWidth + initial) + "px";
	}
	if(width <= 1920 && width >= 1300){
		jQuery(".mem").css({top: _calc(width, 300, 200), left: _calc(width, 30, 50)});
		jQuery(".cpu").css({top: _calc(width, 30, 100), left: _calc(width, 245, 475)});
		jQuery(".disk").css({top: _calc(width, 300, 200), left: _calc(width, 540, 980)});
	}
}

function monitoPerf(cbFn){
	getDevices(function(_cfg){
		var cfg = IX.inherit(_cfg, {
			htmlFn : function(node) {return node.name;},
			click : devicTreeClick
		});
		var tree = new TCM.Lib.Tree(cfg);
		$X('body').innerHTML = t_infotree.renderData("", {
			treeName : "线路设备列表",
			treeData : tree.getHTML(),
			clz : "monitor",
			siteName: "",
			serverName: ""
		});
		showTreeNode();
		jQuery(".nv-tree li:first a:first span:last").click();
		$Xw.bind({"resize": resizeFn});
	});
	cbFn();
}

function createStatisticsGrid(){
	var grid = null;
	var columns = "siteName,troDeviceName,troNum,details,troDesc".split(",");
	currentFilter = new TNM.Lib.BaseFilterTools({
		buttons: [{value: "export"},{value: "print"}],
		hasDate: true,
		defaultDate: "default",
		dataText: "起止时间",
		toolList: [{
			id: "siteId",
			text: "选择车站",
			items: {
				id: "siteId",
				items: [{id: "all", name: "所有车站"}].concat(IX.loop(lineInfo, [], function(acc, item, idx){
					acc.push({
						id: item.id,
						name: item.name
					});
					return acc;
				}))
			}
		},{
			id: "deviceType",
			text: "设备类型"
		}]
	});
	grid = new TNM.Lib.FilterGrid({
		container: "Grid",
		title : "统计分析",
		clz : "statistics-list",
		columns: columns,
		actions : [],
		tools: currentFilter,
		usePagination : true,
		baseParams: {
			siteId: "all",
			deviceType: "all",
			from: TNM.Lib.GetCurDay().from,
			to: TNM.Lib.GetCurDay().to
		},
		dataLoader : function(params, _cbFn){
			monitorCaller("getStatistics", params, function(data){
				_cbFn(data);
				var arr = ["$grid.export", "$grid.print"];
				if(data.items.length === 0){
					jQuery(".filterBtn").removeAttr("data-href");
				}else{
					jQuery(".filterBtn").each(function(index, el) {
						jQuery(this).attr("data-href", arr[index]);
					});
				}
				var clientHeight = jQuery(".sidebar").height();
				if(clientHeight > 880){
					jQuery(".nvgrid-body").css("min-height",clientHeight-145 + "px");
				}
			});
		}
	});
	return grid;
}

function showStatistic(cbFn){
	$X('body').innerHTML = t_statistics.renderData("", {clz: "statistics"});
	createStatisticsGrid();
	cbFn();
}

function baseTreeClick(params){
	function versionFn(result, device){
		var $a =jQuery(".row[data-id="+device.id+"]").find(".col-version>a");
		$a.attr("title", result.version || result.err).html(result.version || result.err);	
	}
	var grid = new NV.Lib.Grid({
		container: 'container',
		clz : "monitor-base",
		title : "基础信息",
		usePagination : true,
		columns : ["baseName", "baseType", "baseIP", "baseVersion"],
		actions : [],
		tools : {},
		dataLoader : function(_params, _cbFn){
			monitorCaller("getBaseInfo", IX.inherit(_params, {id: params.keys}), function(data){
				_cbFn(data);
				jQuery("#Tree").css("height", jQuery(".nv-grid").height());
				IX.iterate(data.items, function(device, idx){
					monitorCaller("getVersion", {
						siteId: params.keys,
						id: device.id,
						type: device.type
					}, function(result){
						versionFn(result, device);
					}, function(result){
						versionFn(result, device);
					});
				});
			});
		}
	});
	grid.show();
}

function showBase(cbFn){
	var cfg = IX.inherit({
		htmlFn : function(node) {return node.name;},
		click : baseTreeClick
	}, {nodes: IX.map(lineInfo, function(site, idx){
		return {
			name: site.name,
			key: [site.id],
			siteId: site.id,
			nodes: []
		};
	})});
	var tree = new TCM.Lib.Tree(cfg);
	$X('body').innerHTML = t_baseInfo.renderData("", {
		treeName : "线路列表",
		treeData : tree.getHTML(),
		clz : "monitor"
	});
	jQuery(".nv-tree li:first a:first span:last").click();
	cbFn();
}

function switchOut(currentContext, nextContext){
	var pageName = currentContext.name;
	if(pageName == "monitor-perf")
	dashboards=null;
}
IX.ns("TNM.Monitor");
TNM.Monitor.init = function(pageCfg, pageParams, cbFn){
	pageCfg.switchOut = switchOut;
	lineInfo = IX.loop(TCM.LineInfo.getSites().getAll(), [], function(acc, site, idx){
		if(site.type == "1" ||site.type == "2" || site.type == "3")
			acc.push(site);
		return acc;
	});
	switch(pageCfg.name){
	case "monitor-perf":
		CurrentSite = TNM.Env.getSession().getLineInfo();
		monitoPerf(cbFn);
		break;
	case "monitor-stat":
		showStatistic(cbFn);
		break;
	case "monitor-logs":
		showLogs(cbFn);
		break;
	case "monitor-base":
		showBase(cbFn);
		break;
	}
};
})();
(function () {
var isFoundInArray = IX.Array.isFound;
var ixwPages = IXW.Pages;
var ixwActions = IXW.Actions;

var DeviceTypeNames = TCM.Const.DeviceTypeNames;
//var FaultLevels = TNM.Const.FaultLevels;
var FaultFormats = TNM.Const.FaultFormats;

var kickChecker = new TNM.Util.KickChecker("", function(isStarted, cbFn){
	TNM.Global.commonCaller("isKicked", "", function(data){
		if (data && data.status === 1) {
			return NV.Dialog.confirm4login("提示", "有新管理员登录系统，请您退出！",{
				left : [],
				right : [{name : "ok",text : "确定"}]
			},function(){
				clearSession();
			});
		}
		isStarted = true;
		cbFn();
	});
}, 1);

function startChecker(){
	kickChecker.stop();
	kickChecker.start();
}

var nvCache = (function(){
	var _ls = window.localStorage;
	return {
		getItem : function(key){
			return _ls.getItem(key) || null;
		}, //getItem(key, isNotJSON)：取得key对应的值--null
		setItem : function(key, value) {
			_ls.setItem(key, value);
		}, //setItem(key, value, isNotJSON):设置key对应的值
		clear : function(){
			_ls.clear();
		}
	};
})();
function SessionManager(data){
	var sessionData = data;
	var userName = $XP(data, "name", "");
	var userId = $XP(data, "id", null);
	var siteId = $XP(data, "siteId");
	var site = $XP(data, "lineInfo");
	nvCache.setItem("tnmSessionKey", siteId + "-" + userId);
	return {
		//_get: function(){return sessionData;},
		hasAuth : function(){return userId !== null;},
		getUserName : function(){return userName;},
		getUserId : function(){return userId;},
		getSiteId : function(){return siteId;},
		getLineInfo : function(){return site;},
		getSessionKey: function(){return siteId + "-" + userId;},
		checkIfModuleEnabled : function(module){return true;}
	};
}
var sessionMgr = new SessionManager();


var t_unsupportHTML = new IX.ITemplate({tpl: [
	'<div class="bu">',
		'<div class="hdrp"><i class="pic logo"></i></div>',
		'<div class="content">',
			'<div class="t">',
				'<p>当前使用的浏览器版本过低，无法正常使用infobox服务，推荐您下载安装以下浏览器中的任一款，然后再用新浏览器访问（www.CCTVxxx.com），给您带来不便，非常抱歉。</p>',
			'</div>',
			'<div class="label">',
				'<ul>',
					'<tpl id=\'bs\'>',
						'<li>',
							'<a class =\'i {icon}\'></a>',
							'<span>{name}</span>',
							'<a class = \'href\' target="_blank" href="{href}">{href}</a>',
						'</li>',
					'</tpl>',
				'</ul>',
			'</div>',
		'</div>',
	'</div>',
'']});
var t_page = new IX.ITemplate({tpl: [
	'<nav class="navbar navbar-inverse navbar-fixed-top">',
		'<div class="container-fluid">',
			'<div class="navbar-header">',
				'<a href="#"><span class="badges"></span>',
					'<span class="navbar-brand">CCTV网管系统</span></a>',
			'</div>',
			'<ul class="nav navbar-nav main">','<tpl id="nav">','<li id="nav-{name}" class="{clz}">',
				'<a data-href="{href}">',
					'<span class="nav-{name}"></span><span>{text}</span>',
				'</a>',
				'<ul class="sub">','<tpl id="subnav">','<li id="nav-{name}" class="{clz}">',
					'<a data-href="{href}">{text}</a>',
				'</li>','</tpl>','</ul>',
			'</li>','</tpl>','</ul>',
			'<ul class="nav navbar-nav navbar-right">',
				'<li class="profile"><span class="pic-avatar"></span>',
					'<span class="name">{username}</span></li>',
				'<li class="logout"><a data-href="$logout"><span class="sp"></span>',
					'<span>退出</span></a></li>',
			'</ul>',
		'</div>',
	'</nav>',
	'<div class="bg"><div class="fix-bottom"></div></div>',
	'<div id="topbar" class="hide"></div>',
	'<div id="body"></div>',
	'<div class="sidebar nv-box">',
		'<div class="nv-title">实时告警</div>',
		'<div class="nv-body"><ul id="rtFaults">','<tpl id="days">','<li id="day_{tick}">',
			'<div class="title">{day}</div>',
			'<tpl id="faults">','<a data-href="{href}" class="{clz}">',
				'<span class="color"></span><span class="text">{time}&nbsp;{site}的{deviceType}{msg}</span><span class="border-bottom"></span>',
			'</a>','</tpl>',
		'</li>','</tpl>','</ul></div>',
	'</div>',
'']});

/**/
function checkBrowserIfSupport(){
	var mainVersion = IX.isOper || IX.isChrome || IX.isSafari || IX.isFirefox;
	var ifSupported = document.location.href.indexOf("#unSupport") > -1 ? false : !(mainVersion && IX.isBelowMSIE9);	
	var browsers = [
		{
		// 	name: "IE的Chrome插件",
		// 	href: "http://www.google.com/chromeframe?hl=zh-CN&prefersystemlevel=true",
		// 	icon: "ie"
		// },{
			name: "IE10",
			href: "http://windows.microsoft.com/zh-cn/internet-explorer/ie-10-worldwide-languages",
			icon: "ie"
		},{
			name: "IE11",
			href: "http://windows.microsoft.com/zh-cn/internet-explorer/ie-11-worldwide-languages",
			icon: "ie"
		},{
			name: "Firefox",
			href: "http://firefox.com.cn/",
			icon: "firefox"
		},{
			name: "Safari浏览器",
			href: "http://www.apple.com.cn/safari/",
			icon: "safari"
		},{
			name: "chrome浏览器",
			href: "http://rj.baidu.com/soft/detail/14744.html",
			icon: "chrome"
		},{
			name: "360极速浏览器",
			href: "http://chrome.360.cn/",
			icon: "chrome360"
		}
	];
	if (!ifSupported){
		document.body.className = "minor browser_unsupport";
		document.body.innerHTML = t_unsupportHTML.renderData('', {
			bs: browsers
		});
	}

	return ifSupported;
}

/* faults : [{id, siteId, deviceType, deviceId, level, code, faultDate}] */
var Seconds4Day = 24 * 3600;
function getRTFaultTpldata(faults){
	var daysHT = new IX.IListManager();
	IX.iterate(IX.Array.sort(faults, function(a,b){return b.faultDate-a.faultDate;}), function(f){
		var faultTick = f.faultDate;
		var date = IX.IDate(faultTick);
		var dateStr = date.toDate();
		var dateTick = (new Date(date.toText().split(" ")[0])).getTime();

		var info = daysHT.get(dateTick);
		if (!info){
			info = {
				tick : dateTick,
				day : dateStr + "&nbsp;" + date.toWeek(),
				faults : []
			};
			daysHT.register(dateTick, info);
		}
		info.faults.push({
			href : ixwPages.createPath("fault-item", {id:f.id}),
			clz : "level" + f.level,
			time : date.toTime(),
			site : TCM.LineInfo.getSiteName(f.siteId),
			deviceType : DeviceTypeNames[f.deviceType],
			msg : FaultFormats[f.code] || FaultFormats["-1"]
		});
	});
	return IX.Array.sort(daysHT.getAll(), function(a,b){return a.tick-b.tick;});
}
function insertHTML(el, html, type){
	var _childEl = $XD.first(el, type);
	if (!_childEl)
		jQuery(el).append(html);
	else
		jQuery(html).insertBefore(_childEl);
}
function insertFaults(ulEl, dayFaults){
	var dayEl = $X("day_" + dayFaults.tick);
	if (dayEl)
		insertHTML(dayEl, IX.map(dayFaults.faults, function(fault){
			return t_page.renderData("days.faults", fault);
		}).join(""), "a");
	else
		insertHTML(ulEl, t_page.renderData("days", dayFaults), "li");
}
var latestFaultId = null;
function RTFaultWorker(){
	function _refresh(faults){
		var ulEl = $X('rtFaults');
		if (!ulEl || !faults || faults.length===0) return;
		IX.iterate(getRTFaultTpldata(faults), function(f){
			insertFaults(ulEl, f);
		});
		if(faults && faults.length>0)
			latestFaultId = faults[0].id;
		var faultsArr = jQuery("#rtFaults").find("a");
		if(faultsArr.length  > 500){
			var Arr = faultsArr.slice(500, faultsArr.length);
			var newArr = $XA(Arr);
			newArr.reverse();
			IX.iterate(newArr, function(fault, idx){
				var parentNodeEl = jQuery(fault.parentNode);
				if(parentNodeEl.find("a").length <= newArr.length-idx)
					parentNodeEl.remove();
				jQuery(fault).remove();
			});
		}
	}

	return new TNM.Util.PeriodicChecker(null, function(failFn){
		if (!sessionMgr.hasAuth())
			return;
		TNM.Global.commonCaller("rtFaults", {id : latestFaultId}, _refresh, failFn);
	});
}

var NavItems = [
["sys", "线路管理", [
	["sys-line", "线路信息"],
	["sys-rack", "机柜管理"],
	["sys-topo", "拓扑管理"]
]],
["device", "设备管理"],
["fault", "故障管理"],
["monitor", "监控信息", [
	["monitor-perf", "性能监控"],
	["monitor-stat", "统计分析"],
	["monitor-logs", "操作日志"],
	["monitor-base", "基础信息"]
]]
];
var DefaultNav = "sys-line";
function NavManager(focusedNavName){
	var focused = focusedNavName || DefaultNav;

	function _getSubNavItemTplData(item){
		var name = item[0];
		return {
			name : name,
			text : item[1],
			clz : "",
			href: item[2] || ixwPages.createPath(name)
		};
	}
	function _getNavItemTplData(name, item){
		var subNavs = item.length>2 ? item[2] : [];
		return {
			name : name,
			text : item[1],
			clz : subNavs.length>0 ? "" : "nosub",
			href: ixwPages.createPath(subNavs.length>0? subNavs[0][0]: name),
			subnav : IX.map(subNavs, _getSubNavItemTplData)
		};
	}
	function _focus(itemName, isFocused){
		var arr = itemName.split("-");
		var fn = isFocused ? $XH.addClass: $XH.removeClass;
		if (arr.length==2) 
			fn($X("nav-" + arr[0]), "active");
		fn($X("nav-" + itemName), "active");
	}
	function focus(itemName){
		var el = $X('nav-' + itemName);
		if (itemName == focused || !el)
			return;
		_focus(focused, false);
		focused = itemName;
		_focus(itemName, true);
	}
	function _mouseoverOnLi(e){$XH.addClass(this, "hover");}
	function _mouseoutOnLi(e){
		var _this = this;
		var pEl = $XH.ancestor(e.toElement, "ul");
		pEl = pEl ? pEl.parentNode : null;
		if (!$XH.hasClass(pEl, "hover"))
			$XH.removeClass(_this, "hover");
	}
	return {
		getRenderData : function(){ return IX.loop(NavItems, [], function loopNavItem(acc, item){
			var name = item[0];
			/*if (name == "home" || sessionMgr.checkIfModuleEnabled(name))*/
				acc.push(_getNavItemTplData(name, item));
			return acc;
		});},
		enableHover : 	function(){
			jQuery(".main li").hover(_mouseoverOnLi, _mouseoutOnLi);
		},
		focus : focus
	};
}
var navMgr = new NavManager();
var rtfw = new RTFaultWorker();

function clearSession(){
	sessionMgr = new SessionManager();
	TCM.LineInfo.destroy();
	kickChecker.stop();
	IXW.Pages.load("entry");
	rtfw.stop();
}
function startSession(data){
	TCM.LineInfo.init(data.lineInfo);
	sessionMgr = new SessionManager(data);
	latestFaultId = null;
	rtfw = new RTFaultWorker();
	document.body.innerHTML = t_page.renderData("",{
		nav : navMgr.getRenderData(),
		username : data.name
	});
	navMgr.enableHover();
	rtfw.start();
	startChecker();
}

var PagesConfiurations = IX.map([
//{type?, name+, path?, bodyClz?, needAuth?},
{type: "ErrPage", name: "401", needAuth : false},
{type: "ErrPage", name: "404", needAuth : false},

// {name: "sys", path : "sys/line", isDefault : true},
{name: "sys-line", isDefault : true, bodyClz : "sys-line"},
{name: "sys-rack", path:"sys/rack/{id}", bodyClz : "sys-rack"},
{name: "sys-topo", bodyClz : "sys-topo"},

{name: "device"},
{name: "device-issue", path:"device/{id}", navItem :"device"},
{name: "device-site", path:"device/site/{id}", navItem :"device"},

{name: "fault"},
{name: "fault-device", path:"fault/device/{id}/{siteId}", navItem :"fault"},
{name: "fault-site", path:"fault/site/{id}", navItem :"fault"},
{name: "fault-item", path:"fault/item/{id}", navItem :"fault"},
{name: "fault-match", path:"fault/match", navItem :"fault"},

{name: "monitor-perf"},
{name: "monitor-stat"},
{name: "monitor-logs"},
{name: "monitor-base"},

{name: "entry", bodyClz: "entry", needAuth : false}
], function(item){
	var name = item.name;
	var arr = name.split("-");
	var moduleName = arr[0];
	var className = item.type || moduleName.capitalize();
	return IX.inherit({
		initiator : "TNM." + className + ".init",
		path : arr.join("/"),

		nav : "service",
		navItem : name,

		needAuth : true
	}, item);
});

ixwActions.configActions([["logout", function(){
	function _okFn(){
		TNM.Global.entryCaller("logout", {}, function(){	
			clearSession();
			latestFaultId = null;
		});
	}
	NV.Dialog.confirm("提示", "确认是否退出?", _okFn);
}]]);

function loadSession(pageFn){
	TNM.Global.commonCaller("session", {}, function(data){
		if (!data || !data.id)
			return ixwPages.load("entry");
		startSession(data);
		latestFaultId = null;
		pageFn();
	});
}

function checkSession(){
	var timers = setInterval(function(){
		var sessionKey = nvCache.getItem("tnmSessionKey");
		if(sessionKey == sessionMgr.getSessionKey())
			return;
		if(sessionKey == "undefined-null"){
			return NV.Dialog.confirm4login("提示", "当前用户已在其他窗口退出，请重新登录！", {
					left : [],
					right : [{name:"ok", text: "确定"}] 
				}, function(){
				loadSession(function(){
					ixwPages.reload();
				});
			});
		}
		NV.Dialog.confirm4login("提示", "已存在登录用户，请刷新页面！", {
				left : [],
				right : [{name:"ok", text: "确定"}] 
			}, function(){
			loadSession(function(){
				ixwPages.reload();
			});
		});
	}, 3000);
}

IX.ns("TNM.Env");
TNM.Env.init = function(){
	ixwPages.listenOnClick(document.body);
	ixwPages.configPages(PagesConfiurations, function(pageName, pageCfg){
		return !$XP(pageCfg, "needAuth", true) || sessionMgr.hasAuth();
	});
	IXW.Navs.register("service", function(cfg){
		navMgr.focus(cfg.navItem || "");
	});
	loadSession(function(){
		ixwPages.start();
	});
	checkSession();
};
TNM.Env.reloadSession = function(){
	loadSession(function(){
		ixwPages.reload();
	});
};
TNM.Env.clearSession = clearSession;
TNM.Env.hasSession = function(){return sessionMgr.hasAuth();};
TNM.Env.resetSession = function(data){startSession(data);};
TNM.Env.getSession = function(){return sessionMgr;};
TNM.Env.getLocalStroage = function(){return nvCache.getItem("tnmSessionKey");};
TNM.Env.clearLocalStroage = function(){return nvCache.clear();};
TNM.Env.clearRTFaultWorker = function(){rtfw.stop();};
TNM.Env.isKicked = function(){kickChecker.stop();};

var appInitialized = false;
TNM.init = function(){
	if (appInitialized)
		return;
	appInitialized = true;
	checkBrowserIfSupport();
	TNM.Env.init();
};
})();