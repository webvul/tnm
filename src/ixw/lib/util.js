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