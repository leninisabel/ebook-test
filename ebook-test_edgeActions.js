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

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10162, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24340, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31602, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36088, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52750, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60012, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-download-android2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://build.phonegap.com/apps/1538796/download/android", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-download-windows2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://build.phonegap.com/apps/1538796/download/winphone", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-download-pdf}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.connectwise.com/~/media/748B50CCFE0B4731BAD4D1C2E8FFB2A2.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-intro}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('btn-intro');
         

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

})(jQuery, AdobeEdge, "EDGE-74354979");