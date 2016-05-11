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