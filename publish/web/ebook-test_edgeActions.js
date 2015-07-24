
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7882,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10162,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav-prev}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",24340,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",31602,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",36088,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",52750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav-prev-pg7}","click",function(sym,e){sym.playReverse('restartSeven');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",60012,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-intro}","click",function(sym,e){sym.play('btn-intro');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch1}","click",function(sym,e){sym.play('btn-ch1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch2}","click",function(sym,e){sym.play('btn-ch2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch3}","click",function(sym,e){sym.play('btn-ch3');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch4}","click",function(sym,e){sym.play('btn-ch4');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'page4cloud'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",24340,function(sym,e){sym.play('reStart');});
//Edge binding end
})("page4cloud");
//Edge symbol end:'page4cloud'

//=========================================================

//Edge symbol: 'walker1'
(function(symbolName){})("walker1");
//Edge symbol end:'walker1'

//=========================================================

//Edge symbol: 'btn-intro'
(function(symbolName){})("btn-intro");
//Edge symbol end:'btn-intro'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_btn-thumbnails}","click",function(sym,e){sym.play('startMenu');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-thumbnailsCopy}","click",function(sym,e){sym.playReverse('endMenu');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",523,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav3}","click",function(sym,e){sym.play('next1');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav3Copy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",569,function(sym,e){sym.stop();});
//Edge binding end
})("menu");
//Edge symbol end:'menu'
})(jQuery,AdobeEdge,"EDGE-74354979");