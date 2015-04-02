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
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'pg2-background2',
                type: 'image',
                rect: ['-39px', '49px','1129px','627px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pg2-background.jpg",'0px','0px'],
                transform: [[],[],[],['0.93164','0.93164']]
            },
            {
                id: 'page2-copy',
                type: 'image',
                rect: ['28px', '98px','395px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page2-copy.png",'0px','0px']
            },
            {
                id: 'cover',
                type: 'image',
                rect: ['0', '0px','1024px','653px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover.jpg",'0px','0px']
            },
            {
                id: 'cover-title',
                type: 'image',
                rect: ['0', '266px','1032px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-title.png",'0px','0px'],
                transform: [[],[],[],['0.88351','0.88351']]
            },
            {
                id: 'cover-pic1',
                type: 'image',
                rect: ['70px', '83px','118px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic1.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic2',
                type: 'image',
                rect: ['264px', '144px','118px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic2.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic3',
                type: 'image',
                rect: ['629px', '117px','136px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic3.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic4',
                type: 'image',
                rect: ['806px', '43px','136px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic4.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic5',
                type: 'image',
                rect: ['220px', '403px','136px','143px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"cover-pic5.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic6',
                type: 'image',
                rect: ['520px', '449px','68px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic6.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-pic7',
                type: 'image',
                rect: ['786px', '400px','109px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-pic7.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'cover-logo',
                type: 'image',
                rect: ['811px', '533px','211px','111px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-logo.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'arrow-nav',
                type: 'image',
                rect: ['953px', '280px','83px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],[],[],['0.71735','0.71735']]
            },
            {
                id: 'arrow-nav-prev',
                type: 'image',
                rect: ['-12px', '280px','83px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],['180'],[],['0.71735','0.71735']]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','1024px','60px','auto', 'auto'],
                fill: ["rgba(0,103,177,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'nav-intro',
                display: 'none',
                type: 'image',
                rect: ['-18px', '-17px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-intro.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_cover}": [
                ["style", "top", '0px'],
                ["style", "height", '653px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_nav-intro}": [
                ["style", "top", '-17px'],
                ["style", "display", 'none'],
                ["style", "height", '122px'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_cover-title}": [
                ["style", "top", '266px'],
                ["transform", "scaleY", '0.88351'],
                ["transform", "scaleX", '0.88351'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_cover-logo}": [
                ["transform", "scaleX", '0.7219'],
                ["style", "top", '533px'],
                ["transform", "scaleY", '0.7219'],
                ["style", "left", '811px']
            ],
            "${_cover-pic7}": [
                ["style", "top", '420px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '786px']
            ],
            "${_arrow-nav}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.71735'],
                ["style", "left", '953px'],
                ["transform", "scaleX", '0.71735']
            ],
            "${_cover-pic6}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '520px']
            ],
            "${_Rectangle}": [
                ["style", "height", '60px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,103,177,1.00)']
            ],
            "${_cover-pic4}": [
                ["style", "top", '63px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '806px']
            ],
            "${_cover-pic5}": [
                ["style", "top", '383px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '220px']
            ],
            "${_arrow-nav-prev}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.71735'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.71735'],
                ["style", "left", '-12px']
            ],
            "${_cover-pic3}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '629px']
            ],
            "${_pg2-background2}": [
                ["style", "top", '49px'],
                ["transform", "scaleY", '0.93164'],
                ["transform", "scaleX", '0.93164'],
                ["style", "height", '627px'],
                ["style", "left", '-39px'],
                ["style", "width", '1129px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '652px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cover-pic1}": [
                ["style", "top", '63px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '70px']
            ],
            "${_page2-copy}": [
                ["style", "top", '98px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '28px']
            ],
            "${_cover-pic2}": [
                ["style", "top", '164px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '264px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10162,
            autoPlay: true,
            labels: {
                "page2": 9000,
                "page2reverse": 10162
            },
            timeline: [
                { id: "eid25", tween: [ "style", "${_cover-pic5}", "top", '403px', { fromValue: '383px'}], position: 5500, duration: 750 },
                { id: "eid63", tween: [ "style", "${_cover-pic2}", "left", '-760px', { fromValue: '264px'}], position: 9000, duration: 637 },
                { id: "eid26", tween: [ "style", "${_cover-pic5}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 750 },
                { id: "eid13", tween: [ "style", "${_cover-pic2}", "top", '144px', { fromValue: '164px'}], position: 3126, duration: 791 },
                { id: "eid74", tween: [ "style", "${_nav-intro}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_cover-pic3}", "opacity", '1', { fromValue: '0'}], position: 3917, duration: 791 },
                { id: "eid30", tween: [ "style", "${_cover-pic6}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 868 },
                { id: "eid72", tween: [ "style", "${_page2-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 9637, duration: 525 },
                { id: "eid66", tween: [ "style", "${_cover-logo}", "left", '-213px', { fromValue: '811px'}], position: 9000, duration: 637 },
                { id: "eid67", tween: [ "style", "${_cover-pic4}", "left", '-218px', { fromValue: '806px'}], position: 9000, duration: 637 },
                { id: "eid58", tween: [ "style", "${_cover-pic5}", "left", '-804px', { fromValue: '220px'}], position: 9000, duration: 637 },
                { id: "eid70", tween: [ "style", "${_Rectangle}", "left", '-1025px', { fromValue: '0px'}], position: 9000, duration: 637 },
                { id: "eid65", tween: [ "style", "${_cover-pic1}", "left", '-954px', { fromValue: '70px'}], position: 9000, duration: 637 },
                { id: "eid64", tween: [ "style", "${_cover-title}", "left", '-1024px', { fromValue: '0px'}], position: 9000, duration: 637 },
                { id: "eid14", tween: [ "style", "${_cover-pic2}", "opacity", '1', { fromValue: '0'}], position: 3126, duration: 791 },
                { id: "eid29", tween: [ "style", "${_cover-pic6}", "top", '449px', { fromValue: '469px'}], position: 6250, duration: 868 },
                { id: "eid33", tween: [ "style", "${_cover-pic7}", "top", '400px', { fromValue: '420px'}], position: 7118, duration: 764 },
                { id: "eid17", tween: [ "style", "${_cover-pic3}", "top", '117px', { fromValue: '97px'}], position: 3917, duration: 791 },
                { id: "eid60", tween: [ "style", "${_cover}", "left", '-1024px', { fromValue: '0px'}], position: 9000, duration: 637 },
                { id: "eid22", tween: [ "style", "${_cover-pic4}", "opacity", '1', { fromValue: '0'}], position: 4709, duration: 791 },
                { id: "eid59", tween: [ "style", "${_cover-pic7}", "left", '-238px', { fromValue: '786px'}], position: 9000, duration: 637 },
                { id: "eid6", tween: [ "style", "${_cover-title}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1250 },
                { id: "eid61", tween: [ "style", "${_cover-pic6}", "left", '-504px', { fromValue: '520px'}], position: 9000, duration: 637 },
                { id: "eid62", tween: [ "style", "${_cover-pic3}", "left", '-395px', { fromValue: '629px'}], position: 9000, duration: 637 },
                { id: "eid9", tween: [ "style", "${_cover-pic1}", "top", '83px', { fromValue: '63px'}], position: 2137, duration: 989 },
                { id: "eid34", tween: [ "style", "${_cover-pic7}", "opacity", '1', { fromValue: '0'}], position: 7118, duration: 764 },
                { id: "eid21", tween: [ "style", "${_cover-pic4}", "top", '43px', { fromValue: '63px'}], position: 4709, duration: 791 },
                { id: "eid10", tween: [ "style", "${_cover-pic1}", "opacity", '1', { fromValue: '0'}], position: 2137, duration: 989 }            ]
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
