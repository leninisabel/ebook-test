
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7882,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav}","touchstart",function(sym,e){sym.play('page2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav}","click",function(sym,e){sym.play('page2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav-prev}","touchstart",function(sym,e){sym.playReverse("page2reverse");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav-prev}","click",function(sym,e){sym.playReverse("page2reverse");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10162,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-74354979");