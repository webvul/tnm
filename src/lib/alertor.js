(function(){
IX.ns("IX.Alertor");
/**
	cfg : {
		list: [fault],
		maxLevel: , //default 3
	}
	fault : {level}
*/
IX.Alertor.Audio = function(cfg){
	var faultList = $XP(cfg, "list", []);
	var maxLevel = $XP(cfg, "maxLevel", 3);
	var curLevel = 0;
	IX.iterate(faultList, function(fault, idx){
		curLevel = Math.max(curLevel, fault.level);
	});
	curLevel = Math.min(curLevel, maxLevel);
	var audio = document.createElement("audio");
	audio.src = "../src/level"+curLevel+".mp3";
	audio.autoplay = "autoplay";
	var audioEl = $X(audio);
	var bodyEl = $X(body);
	return {
		start: function(){
			if (audioEl && bodyEl)
				audioEl.remove();
			bodyEl.appendChild(audio);
		},
		stop: function(){
			if (audioEl)
				audioEl.remove();
		}
	};
};
})();