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