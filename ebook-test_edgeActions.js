/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7882, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9214, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav-prev}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15302, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23392, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30654, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35140, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51802, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav-prev-pg7}", "click", function(sym, e) {
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse('restartSeven');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59064, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn-intro}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-intro');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch1');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch2');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch3');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch4');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch5');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch6');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64552, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-ch7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-ch7');
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'page4cloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24340, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('reStart');

      });
      //Edge binding end

   })("page4cloud");
   //Edge symbol end:'page4cloud'

   //=========================================================
   
   //Edge symbol: 'walker1'
   (function(symbolName) {   
   
   })("walker1");
   //Edge symbol end:'walker1'

   //=========================================================
   
   //Edge symbol: 'btn-intro'
   (function(symbolName) {   
   
   })("btn-intro");
   //Edge symbol end:'btn-intro'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btn-thumbnails}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('startMenu');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-thumbnailsCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.playReverse('endMenu');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 523, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('next1');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav3Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 569, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy6}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page2end');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy7}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('cover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy8}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page3end');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy9}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page4end');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page5end');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page6end');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy2}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page7end');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy3}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play('page8end');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-nav3Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('next2');
         

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

})(jQuery, AdobeEdge, "EDGE-74354979");