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