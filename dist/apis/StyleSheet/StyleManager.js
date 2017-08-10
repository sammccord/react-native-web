var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var _generateCss2=require('./generateCss');var _generateCss3=_interopRequireDefault(_generateCss2);var _hash=require('../../vendor/hash');var _hash2=_interopRequireDefault(_hash);var _staticCss=require('./staticCss');var _staticCss2=_interopRequireDefault(_staticCss);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var emptyObject={};var STYLE_ELEMENT_ID='react-native-stylesheet';var createClassName=function createClassName(prop,value){var hashed=(0,_hash2.default)(prop+value);return process.env.NODE_ENV!=='production'?'rn-'+prop+'-'+hashed:'rn-'+hashed;};var createCssRule=function createCssRule(className,prop,value){var css=(0,_generateCss3.default)(_defineProperty({},prop,value));var selector='.'+className;return selector+'{'+css+'}';};var pointerEvents={auto:createClassName('pointerEvents','auto'),boxNone:createClassName('pointerEvents','box-none'),boxOnly:createClassName('pointerEvents','box-only'),none:createClassName('pointerEvents','none')};var pointerEventsCss='.'+pointerEvents.auto+'{pointer-events:auto !important;}\n'+('.'+pointerEvents.boxOnly+'{pointer-events:auto !important;}\n')+('.'+pointerEvents.none+'{pointer-events:none !important;}\n')+('.'+pointerEvents.boxNone+'{pointer-events:none !important;}\n')+('.'+pointerEvents.boxNone+' > *{pointer-events:auto;}\n')+('.'+pointerEvents.boxOnly+' > *{pointer-events:none;}');var StyleManager=function(){function StyleManager(){var _byClassName;_classCallCheck(this,StyleManager);this.cache=null;this.mainSheet=null;var pointerEventsPropName='pointerEvents';this.cache={byClassName:(_byClassName={},_defineProperty(_byClassName,pointerEvents.auto,{prop:pointerEventsPropName,value:'auto'}),_defineProperty(_byClassName,pointerEvents.boxNone,{prop:pointerEventsPropName,value:'box-none'}),_defineProperty(_byClassName,pointerEvents.boxOnly,{prop:pointerEventsPropName,value:'box-only'}),_defineProperty(_byClassName,pointerEvents.none,{prop:pointerEventsPropName,value:'none'}),_byClassName),byProp:{pointerEvents:{auto:pointerEvents.auto,'box-none':pointerEvents.boxNone,'box-only':pointerEvents.boxOnly,none:pointerEvents.none}}};if(_ExecutionEnvironment.canUseDOM){var prerenderedStyleSheet=document.getElementById(STYLE_ELEMENT_ID);if(prerenderedStyleSheet){this.mainSheet=prerenderedStyleSheet;}else{document.head.insertAdjacentHTML('afterbegin',this.getStyleSheetHtml());this.mainSheet=document.getElementById(STYLE_ELEMENT_ID);}}}_createClass(StyleManager,[{key:'getClassName',value:function getClassName(prop,value){var cache=this.cache.byProp;return cache[prop]&&cache[prop].hasOwnProperty(value)&&cache[prop][value];}},{key:'getDeclaration',value:function getDeclaration(className){var cache=this.cache.byClassName;return cache[className]||emptyObject;}},{key:'getStyleSheetHtml',value:function getStyleSheetHtml(){var styleSheets=this.getStyleSheets();return styleSheets.map(function(sheet){return'<style id="'+sheet.id+'">\n'+sheet.textContent+'\n</style>';}).join('\n');}},{key:'getStyleSheets',value:function getStyleSheets(){var _this=this;var cache=this.cache.byProp;var mainSheetTextContext=Object.keys(cache).reduce(function(rules,prop){if(prop!=='pointerEvents'){Object.keys(cache[prop]).forEach(function(value){var className=_this.getClassName(prop,value);rules.push(createCssRule(className,prop,value));});}return rules;},[]).join('\n');return[{id:'react-native-stylesheet-static',textContent:_staticCss2.default+'\n'+pointerEventsCss},{id:STYLE_ELEMENT_ID,textContent:''+mainSheetTextContext}];}},{key:'setDeclaration',value:function setDeclaration(prop,value){var className=this.getClassName(prop,value);if(!className){className=createClassName(prop,value);this._addToCache(className,prop,value);if(_ExecutionEnvironment.canUseDOM){var sheet=this.mainSheet.sheet;if(this.mainSheet.textContent.indexOf(className)===-1){var rule=createCssRule(className,prop,value);sheet.insertRule(rule,sheet.cssRules.length);}}}return className;}},{key:'_addToCache',value:function _addToCache(className,prop,value){var cache=this.cache;if(!cache.byProp[prop]){cache.byProp[prop]={};}cache.byProp[prop][value]=className;cache.byClassName[className]={prop:prop,value:value};}}]);return StyleManager;}();module.exports=StyleManager;