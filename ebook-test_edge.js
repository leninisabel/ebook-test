/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'cover',
                type: 'image',
                rect: ['0', '0px','1024px','653px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover.jpg",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','1024px','60px','auto', 'auto'],
                fill: ["rgba(0,103,177,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '652px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,103,177,1.00)'],
                ["style", "height", '60px']
            ],
            "${_cover}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '653px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_cover}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3000 },
                { id: "eid4", tween: [ "style", "${_cover}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 3000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-74354979");
