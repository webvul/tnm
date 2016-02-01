(function(){
IX.ns("Test");
function getRandomInt(max){return Math.floor(Math.random() * max);}
function getRandomItem(arr){return arr[getRandomInt(arr.length)];}

var DeviceTypes = TCM.Const.DeviceTypes;
var DeviceTypeNames = TCM.Const.DeviceTypeNames;
var DeviceTypesInRack = [
	"TNM", "TVS", "TAS", "TVR", "Storage",
	"Coder", "Decoder", "Spliter", 
	"HUB", "PDH", "FiberConvertor", "KVM", "PDU"
];
var RackDeviceTmpls = {
	"TNM": {num : 1, size :  2}, 
	"TVS": {num : 1, size :  2}, 
	"TAS": {num : 1, size :  2}, 
	"TVR": {num : 3, size :  2}, 
	"Storage": {num : 3, size : 4},
	"Coder": {num : 1, size :  3}, 
	"Decoder": {num : 2, size : 4}, 
	"Spliter": {num : 1, size :  2}, 
	"HUB": {num : 1, size :  2}, 
	"PDH": {num : 1, size :  1}, 
	"FiberConvertor": {num : 1, size :  2}, 
	"KVM": {num : 1, size :  3}, 
	"PDU": {num : 1, size :  2}
}

var MaxUnitInRack = TNM.Const.MaxUnitInRack;
function getMask(size){
	var _mask = 0;
	for (var i=0;i<size; i++)
		_mask += (1<<i);
	return _mask;
}
var WholeMask = getMask(MaxUnitInRack);
function SiteRackDevices(site, ifInRacks){
	var deviceId = site.id * 1000000;
	var baseRackId = site.id * 10000;
	var devicesHT = new IX.IListManager();
	var racks = [];

	IX.iterate(DeviceTypesInRack, function(type){
		if (type=="TNM" && site.type!=1) // TNM only in OCC
			return;

		var _type = DeviceTypes[type];
		var tpl = RackDeviceTmpls[type];
		for (var i=0;i<= getRandomInt(tpl.num);i++){
			deviceId ++ ;
			devicesHT.register(deviceId, {
				id : deviceId,
				name : DeviceTypeNames[_type],
				type : _type,
				rackId : -1,
				pos : -1,
				size : 1 + getRandomInt(tpl.size),
				level : getRandomInt(3)
			});
		}
	});
	function _put(device, _mask, rack, _pos){
		rack.mask |= _mask<<_pos;
		device.rackId = rack.id;
		device.pos = _pos;
	}
	function _remove(device, _mask, rack, _pos){
		if (rack) 
			rack.mask &= WholeMask & ~(_mask<<_pos);
		device.rackId = -1;
		device.pos = -1;
	}
	function getSuitablePos(size, _mask){
		for (var i=0;i<racks.length; i++){
			var _rack = racks[i];
			if (!_rack) continue;
			for(var j=0;j<MaxUnitInRack-size; j++)
				if ((_rack.mask & (_mask<<j)) == 0)
					return [_rack, j];
		}
		var _idx = racks.length;
		racks.push({
			id :baseRackId +  _idx,
			name : "第" + _idx + "个机柜",
			mask : 0
		});
		return [racks[_idx], 0];
	}
	function putDeviceInRack(device, rackId, pos){
		var size = device.size, _rackId = device.rackId;
		var _mask = getMask(size);
		var rack = null;

		if (_rackId>=0){
			if (rackId == undefined) return;
			_remove(device, _mask, racks[_rackId-baseRackId], device.pos);	
		} else if (rackId===undefined){
			var arr = getSuitablePos(size, _mask);
			rack = arr[0];
			pos = arr[1];
		} 
		_put(device, _mask, rack || racks[rackId - baseRackId], pos);
	}

	if (ifInRacks) {
		devicesHT.iterate(function(device){
			if (getRandomInt(1.5)==0)
				putDeviceInRack(device);
		});
	}

	return {
		getDevicesNotInRack : function(){
			var arr = [];
			devicesHT.iterate(function(device){
				if (device.rackId<0)
					arr.push(device);
			});
			return arr;
		},
		queryStatus4Racks :function(){
			return IX.loop(devicesHT.getAll(), [], function(acc, device){
				if (device.level >0)
					acc.push(device);
				return acc;
			});
		},
		getAllRacks : function(){
			return IX.map(IX.Array.compact(racks), function(rack){
				return IX.inherit(rack, {
					devices: IX.loop(devicesHT.getAll(), [], function(acc, device){
						if (device.rackId == rack.id)
							acc.push(device);
						return acc;
					})
				});
			});
		},
		removeRacks: function(rackIds){
			devicesHT.iterate(function(device){
				if (!IX.Array.isFound(device.rackId,rackIds))
					return;
				device.rackId = -1;
				device.pos = -1;
			});
			IX.iterate(rackIds, function(rackId){
				racks[rackId-baseRackId] = null;
			});
		},
		addRack : function(name){
			var _idx = racks.length;
			racks.push({
				id :baseRackId +  _idx,
				name : name,
				mask : 0
			});
			return {id:baseRackId +  _idx,name:"机柜"+_idx};
		},
		getDevice : function(deviceId){
			return devicesHT.get(deviceId);
		},
		editRack : function(rackId, name){
			racks[rackId-baseRackId].name = name;
		},
		moveDevice : function(deviceId, rackId, pos){
			putDeviceInRack(devicesHT.get(deviceId), rackId, pos);
		},
		removeDevice : function(deviceId){
			var device = devicesHT.get(deviceId);
			_remove(device, getMask(device.size), racks[device.rackId-baseRackId], device.pos);
		},
		addDevice : function(deviceId, rackId, pos){
			putDeviceInRack(devicesHT.get(deviceId), rackId, pos);
		}
	};
}

var RackDevices = {};
IX.iterate(Test.getAllSites(), function(site){
	RackDevices[site.id] = new SiteRackDevices(site, site.id %3 == 1);
});

Test.getRackDevice4Site = function(siteId){
	return RackDevices[siteId];
};

})();