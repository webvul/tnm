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