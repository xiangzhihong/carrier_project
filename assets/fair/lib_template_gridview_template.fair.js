GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function ItemData(){const inner=ItemData.__inner__;if(this==__global__){return new ItemData({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);ItemData.prototype.ctor.apply(this,args);return this;}}ItemData.__inner__=function inner(){this.picUrl='';};ItemData.prototype={};ItemData.prototype.ctor=function(){};function _GridViewTemplateState(){const inner=_GridViewTemplateState.__inner__;if(this==__global__){return new _GridViewTemplateState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_GridViewTemplateState.prototype.ctor.apply(this,args);return this;}}_GridViewTemplateState.__inner__=function inner(){this._listData=[];this._page=0;};_GridViewTemplateState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){requestData();}},onUnload:function onUnload(){const __thiz__=this;with(__thiz__){}},requestData:function requestData(){const __thiz__=this;with(__thiz__){_page++;FairNet().requestRemoteData(convertObjectLiteralToSetOrMap({['pageName']:'#FairKey#',['method']:'GET',['url']:'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6f8e5d9e196cbaa4a46041928770b187_grid_data.json',['data']:convertObjectLiteralToSetOrMap({['page']:_page,}),['success']:function dummy(resp){if(resp==null){return null;}let data=resp.__op_idx__('data');data.forEach(function dummy(item){let dataItem=ItemData();dataItem.picUrl=item.imagePath;_listData.add(dataItem);});setState('#FairKey#',function dummy(){});},}));}},isDataEmpty:function isDataEmpty(){const __thiz__=this;with(__thiz__){return _listData.isEmpty;}},};_GridViewTemplateState.prototype.ctor=function(){};;return _GridViewTemplateState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));