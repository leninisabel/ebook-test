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
                id: 'pg3-background',
                type: 'image',
                rect: ['0', '142px','1041px','578px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pg3-background.jpg",'0px','0px']
            },
            {
                id: 'CW-life-cycle',
                type: 'image',
                rect: ['-17px', '-187px','1502px','1092px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CW-life-cycle.png",'0px','0px'],
                transform: [[],[],[],['0.35917','0.35917']]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['464px', '338px','554px','93px','auto', 'auto'],
                clip: ['rect(0px 4.001953125px 93px 0px)'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle2Copy4',
                type: 'rect',
                rect: ['662px', '229px','203px','103px','auto', 'auto'],
                clip: ['rect(0px 203px 103px 0px)'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle2Copy5',
                type: 'rect',
                rect: ['660px', '442px','213px','113px','auto', 'auto'],
                clip: ['rect(0px 213px 113px 0px)'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'page3-copy',
                type: 'image',
                rect: ['19px', '126px','543px','562px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page3-copy.png",'0px','0px'],
                transform: [[],[],[],['0.88667','0.88667']]
            },
            {
                id: 'quote-frank-wright',
                type: 'image',
                rect: ['617px', '581px','391px','85px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"quote-frank-wright.png",'0px','0px'],
                transform: [[],[],[],['0.88542','0.88542']]
            },
            {
                id: 'pg2-background2',
                type: 'image',
                rect: ['-39px', '107px','1129px','627px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pg2-background.jpg",'0px','0px'],
                transform: [[],[],[],['0.93164','0.93164']]
            },
            {
                id: 'page2-copy',
                type: 'image',
                rect: ['28px', '156px','395px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page2-copy.png",'0px','0px']
            },
            {
                id: 'cover',
                type: 'image',
                rect: ['0', '58px','1024px','653px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover.jpg",'0px','0px']
            },
            {
                id: 'cover-title',
                type: 'image',
                rect: ['0', '324px','1032px','143px','auto', 'auto'],
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
                rect: ['811px', '591px','211px','111px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-logo.png",'0px','0px'],
                transform: [[],[],[],['0.7219','0.7219']]
            },
            {
                id: 'bg-sky',
                type: 'image',
                rect: ['-5758px', '-3207px','12600px','8730px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg-sky.jpg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'clouds',
                type: 'image',
                rect: ['-7855px', '-1462px','16840px','4140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"clouds.png",'0px','0px'],
                transform: [[],[],[],['0.07203','0.07203']]
            },
            {
                id: 'page5-bg',
                type: 'image',
                rect: ['-91px', '57px','1242px','720px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-bg.jpg",'0px','0px'],
                transform: [[],[],[],['0.85809','0.85809']]
            },
            {
                id: 'page6-bg',
                type: 'image',
                rect: ['-109px', '90px','1242px','677px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page6-bg.jpg",'0px','0px'],
                transform: [[],[],[],['0.83816','0.83816']]
            },
            {
                id: 'page6-copy',
                type: 'image',
                rect: ['-28px', '130px','1102px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page6-copy.png",'0px','0px'],
                transform: [[],[],[],['0.82738','0.82738']]
            },
            {
                id: 'page5-4sections',
                type: 'image',
                rect: ['535px', '466px','342px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-4sections.png",'0px','0px'],
                transform: [[],[],[],['0.81515','0.81515']]
            },
            {
                id: 'page5-copy',
                type: 'image',
                rect: ['38px', '109px','586px','660px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-copy.png",'0px','0px'],
                transform: [[],[],[],['0.86697','0.86697']]
            },
            {
                id: 'page5-quote',
                type: 'image',
                rect: ['554px', '253px','263px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-quote.png",'0px','0px'],
                transform: [[],[],[],['0.93375','0.93375']]
            },
            {
                id: 'page5-successtip',
                type: 'image',
                rect: ['717px', '28px','442px','418px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-successtip.png",'0px','0px'],
                transform: [[],[],[],['0.8074','0.8074']]
            },
            {
                id: 'page4-copy',
                type: 'image',
                rect: ['-39px', '126px','1102px','432px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page4-copy.png",'0px','0px'],
                transform: [[],[],[],['0.81637','0.81637']]
            },
            {
                id: 'page4cloud',
                display: 'none',
                type: 'rect',
                rect: ['-17', '337','auto','auto','auto', 'auto']
            },
            {
                id: 'quote-page4',
                type: 'image',
                rect: ['616px', '549px','414px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"quote-page4.png",'0px','0px'],
                transform: [[],[],[],['0.92786','0.92786']]
            },
            {
                id: 'Rectangle3',
                display: 'none',
                type: 'rect',
                rect: ['-2px', '128px','1025px','584px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'page7-bg',
                type: 'image',
                rect: ['-100px', '105px','1224px','648px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-bg.jpg",'0px','0px'],
                transform: [[],[],[],['0.87567','0.87567']]
            },
            {
                id: 'HiRes',
                type: 'image',
                rect: ['335px', '26px','800px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"HiRes.jpg",'0px','0px'],
                transform: [[],[],[],['0.57592','0.57592']]
            },
            {
                id: 'page7-community',
                type: 'image',
                rect: ['-74px', '354px','1171px','336px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-community.png",'0px','0px'],
                transform: [[],[],[],['0.87447','0.87447']]
            },
            {
                id: 'page7-bus',
                type: 'image',
                rect: ['216px', '577px','135px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-bus.png",'0px','0px']
            },
            {
                id: 'page7-bus2',
                type: 'image',
                rect: ['1024px', '578px','135px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-bus2.png",'0px','0px']
            },
            {
                id: 'page7-bike',
                type: 'image',
                rect: ['748px', '572px','54px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-bike.jpg",'0px','0px']
            },
            {
                id: 'page7-bikeCopy',
                type: 'image',
                rect: ['748px', '572px','54px','69px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"page7-bike.jpg",'0px','0px']
            },
            {
                id: 'page7-scooter',
                type: 'image',
                rect: ['463px', '576px','51px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-scooter.png",'0px','0px']
            },
            {
                id: 'page7-scooter2',
                type: 'image',
                rect: ['-158px', '581px','51px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-scooter2.png",'0px','0px']
            },
            {
                id: 'page8-award',
                type: 'image',
                rect: ['198px', '58px','1040px','734px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page8-award.png",'0px','0px'],
                transform: [[],[],[],['0.51871','0.51872']]
            },
            {
                id: 'page8-copy',
                type: 'image',
                rect: ['41px', '213px','422px','258px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page8-copy.png",'0px','0px'],
                transform: [[],[],[],['0.89155','0.89155']]
            },
            {
                id: 'page8-quote',
                type: 'image',
                rect: ['29px', '497px','356px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page8-quote.png",'0px','0px'],
                transform: [[],[],[],['0.83355','0.83355']]
            },
            {
                id: 'arrow-nav',
                display: 'none',
                type: 'image',
                rect: ['953px', '368px','83px','95px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],[],[],['0.71735','0.71735']]
            },
            {
                id: 'arrow-nav-prev',
                display: 'none',
                type: 'image',
                rect: ['-12px', '370px','83px','95px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],['180'],[],['0.71735','0.71735']]
            },
            {
                id: 'arrow-nav-prev-pg7',
                display: 'none',
                type: 'image',
                rect: ['-12px', '370px','83px','95px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],['180'],[],['0.71735','0.71735']]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '58px','1024px','60px','auto', 'auto'],
                fill: ["rgba(0,103,177,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'nav-intro',
                display: 'none',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-intro.png",'0px','0px']
            },
            {
                id: 'nav-1',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-1.png",'0px','0px']
            },
            {
                id: 'nav-2',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-2.png",'0px','0px']
            },
            {
                id: 'nav-3',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-3.png",'0px','0px']
            },
            {
                id: 'nav-4',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-4.png",'0px','0px']
            },
            {
                id: 'nav-5',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-5.png",'0px','0px']
            },
            {
                id: 'page7-copy',
                type: 'image',
                rect: ['-58px', '125px','1140px','312px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-copy.jpg",'0px','0px'],
                transform: [[],[],[],['0.8339','0.8339']]
            },
            {
                id: 'nav-6',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-6.png",'0px','0px']
            },
            {
                id: 'nav-conclusion',
                type: 'image',
                rect: ['-18px', '41px','1041px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nav-conclusion.png",'0px','0px']
            },
            {
                id: 'btn-intro',
                type: 'rect',
                rect: ['-3px', '58','auto','auto','auto', 'auto'],
                cursor: ['pointer'],
                transform: [[],[],[],['0.95949']]
            },
            {
                id: 'btn-ch1',
                type: 'rect',
                rect: ['129px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch2',
                type: 'rect',
                rect: ['258px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch3',
                type: 'rect',
                rect: ['382px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch4',
                type: 'rect',
                rect: ['508px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch5',
                type: 'rect',
                rect: ['637px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch6',
                type: 'rect',
                rect: ['767px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch7',
                type: 'rect',
                rect: ['896px', '58px','125px','87px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'menu3',
                type: 'rect',
                rect: ['-1', '-180','auto','auto','auto', 'auto']
            },
            {
                id: 'page9-copy',
                type: 'image',
                rect: ['21px', '213px','544px','189px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page9-copy.png",'0px','0px'],
                transform: [[],[],[],['0.89','0.89']]
            },
            {
                id: 'page9-about-cw-copy',
                type: 'image',
                rect: ['-130px', '352px','800px','370px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page9-about-cw-copy.jpg",'0px','0px'],
                transform: [[],[],[],['0.56','0.56001']]
            }],
            symbolInstances: [
            {
                id: 'menu3',
                symbolName: 'menu',
                autoPlay: {

                }
            },
            {
                id: 'page4cloud',
                symbolName: 'page4cloud',
                autoPlay: {

                }
            },
            {
                id: 'btn-intro',
                symbolName: 'btn-intro',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_nav-intro}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "display", 'none'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_cover-title}": [
                ["style", "top", '324px'],
                ["transform", "scaleY", '0.88351'],
                ["transform", "scaleX", '0.88351'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_page7-community}": [
                ["style", "top", '354px'],
                ["transform", "scaleY", '0.87447'],
                ["transform", "scaleX", '0.87447'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-74px']
            ],
            "${_page4-copy}": [
                ["style", "top", '126px'],
                ["transform", "scaleY", '0.81637'],
                ["transform", "scaleX", '0.81637'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-39px']
            ],
            "${_page8-award}": [
                ["style", "top", '58px'],
                ["transform", "scaleY", '0.51872'],
                ["transform", "scaleX", '0.51871'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '198px']
            ],
            "${_quote-page4}": [
                ["style", "top", '549px'],
                ["transform", "scaleY", '0.92786'],
                ["transform", "scaleX", '0.92786'],
                ["style", "opacity", '0'],
                ["style", "left", '946px']
            ],
            "${_cover-pic5}": [
                ["style", "top", '441px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '220px']
            ],
            "${_nav-conclusion}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_btn-ch6}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "left", '767px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px']
            ],
            "${_nav-3}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_HiRes}": [
                ["style", "top", '26px'],
                ["transform", "scaleY", '0.06375'],
                ["transform", "scaleX", '0.06375'],
                ["style", "opacity", '0'],
                ["style", "left", '335px']
            ],
            "${_btn-ch3}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "left", '382px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px']
            ],
            "${_Rectangle2Copy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '229px'],
                ["style", "height", '103px'],
                ["style", "clip", [0,203,103,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '662px'],
                ["style", "width", '203px']
            ],
            "${_cover}": [
                ["style", "top", '58px'],
                ["style", "height", '653px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_CW-life-cycle}": [
                ["style", "top", '-187px'],
                ["transform", "scaleY", '0.35917'],
                ["transform", "scaleX", '0.35917'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-17px']
            ],
            "${_pg2-background2}": [
                ["style", "top", '106px'],
                ["transform", "scaleY", '0.93164'],
                ["transform", "scaleX", '0.93164'],
                ["style", "height", '627px'],
                ["style", "left", '-39px'],
                ["style", "width", '1129px']
            ],
            "${_page7-bikeCopy}": [
                ["style", "top", '572px'],
                ["style", "height", '69px'],
                ["style", "opacity", '1'],
                ["style", "left", '1029px'],
                ["style", "width", '54px']
            ],
            "${_page6-copy}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '0.82738'],
                ["transform", "scaleX", '0.82738'],
                ["style", "opacity", '0'],
                ["style", "left", '-28px']
            ],
            "${_page7-bus}": [
                ["style", "top", '577px'],
                ["style", "height", '63px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '216px'],
                ["style", "width", '135px']
            ],
            "${_nav-2}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_nav-5}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_page7-scooter2}": [
                ["style", "height", '65px'],
                ["style", "top", '581px'],
                ["style", "left", '-158px'],
                ["style", "width", '51px']
            ],
            "${_bg-sky}": [
                ["style", "top", '-3207px'],
                ["style", "opacity", '1'],
                ["style", "left", '-5758px']
            ],
            "${_page2-copy}": [
                ["style", "top", '156px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '28px']
            ],
            "${_nav-6}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_cover-pic3}": [
                ["style", "top", '155px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '629px']
            ],
            "${_page7-bus2}": [
                ["style", "height", '69px'],
                ["style", "top", '577px'],
                ["style", "left", '-277px'],
                ["style", "width", '135px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '712px'],
                ["style", "width", '1024px']
            ],
            "${_page5-quote}": [
                ["style", "top", '223px'],
                ["transform", "scaleY", '0.93375'],
                ["transform", "scaleX", '0.93375'],
                ["style", "opacity", '0'],
                ["style", "left", '554px']
            ],
            "${_btn-ch4}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "left", '508px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px']
            ],
            "${_page8-quote}": [
                ["style", "top", '497px'],
                ["transform", "scaleY", '0.83355'],
                ["transform", "scaleX", '0.83355'],
                ["style", "opacity", '0'],
                ["style", "left", '-301px']
            ],
            "${_cover-pic7}": [
                ["style", "top", '478px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '786px']
            ],
            "${_Rectangle2Copy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '442px'],
                ["style", "height", '113px'],
                ["style", "clip", [0,213,113,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '660px'],
                ["style", "width", '213px']
            ],
            "${_quote-frank-wright}": [
                ["style", "top", '581px'],
                ["transform", "scaleY", '0.88542'],
                ["transform", "scaleX", '0.88542'],
                ["style", "opacity", '0'],
                ["style", "left", '1001px']
            ],
            "${_page7-copy}": [
                ["style", "top", '125px'],
                ["transform", "scaleY", '0.15'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '0'],
                ["style", "left", '-58px']
            ],
            "${_page9-about-cw-copy}": [
                ["style", "top", '352px'],
                ["transform", "scaleY", '0.56001'],
                ["transform", "scaleX", '0.56'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-130px']
            ],
            "${_page6-bg}": [
                ["style", "top", '90px'],
                ["transform", "scaleY", '0.83816'],
                ["transform", "scaleX", '0.83816'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-109px']
            ],
            "${_btn-ch7}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '896px'],
                ["style", "width", '125px']
            ],
            "${_arrow-nav-prev}": [
                ["style", "top", '370px'],
                ["transform", "scaleY", '0.71735'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.71735'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-12px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none']
            ],
            "${_btn-ch5}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '637px'],
                ["style", "width", '125px']
            ],
            "${_page5-successtip}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '0.17802'],
                ["transform", "scaleX", '0.17802'],
                ["style", "opacity", '0'],
                ["style", "left", '717px']
            ],
            "${_btn-intro}": [
                ["transform", "scaleX", '0.95949'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-3px']
            ],
            "${_clouds}": [
                ["style", "top", '-1462px'],
                ["transform", "scaleY", '0.07203'],
                ["transform", "scaleX", '0.07203'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-7855px']
            ],
            "${_nav-1}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_arrow-nav}": [
                ["style", "top", '368px'],
                ["transform", "scaleY", '0.71735'],
                ["style", "display", 'none'],
                ["style", "left", '953px'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.71735']
            ],
            "${_cover-logo}": [
                ["style", "top", '591px'],
                ["style", "left", '811px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219']
            ],
            "${_cover-pic4}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '806px']
            ],
            "${_page7-bike}": [
                ["style", "top", '572px'],
                ["style", "height", '69px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '748px'],
                ["style", "width", '54px']
            ],
            "${_page5-copy}": [
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.86697'],
                ["transform", "scaleX", '0.86697'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '38px']
            ],
            "${_btn-ch1}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px']
            ],
            "${_nav-4}": [
                ["style", "top", '41px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-18px'],
                ["style", "width", '1041px']
            ],
            "${_Rectangle}": [
                ["style", "height", '60px'],
                ["style", "top", '58px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,103,177,1.00)']
            ],
            "${_page7-bg}": [
                ["style", "top", '105px'],
                ["transform", "scaleY", '0.87567'],
                ["transform", "scaleX", '0.87567'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-100px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '338px'],
                ["style", "height", '93px'],
                ["style", "clip", [0,555.513671875,93,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '464px'],
                ["style", "width", '554px']
            ],
            "${_arrow-nav-prev-pg7}": [
                ["style", "top", '370px'],
                ["transform", "scaleY", '0.71735'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.71735'],
                ["style", "left", '-12px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_cover-pic6}": [
                ["style", "top", '527px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '520px']
            ],
            "${_pg3-background}": [
                ["style", "top", '142px'],
                ["style", "opacity", '1'],
                ["style", "height", '578px'],
                ["style", "width", '1041px']
            ],
            "${_page9-copy}": [
                ["style", "top", '213px'],
                ["transform", "scaleY", '0.89'],
                ["transform", "scaleX", '0.89'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '21px']
            ],
            "${_page3-copy}": [
                ["style", "top", '126px'],
                ["transform", "scaleY", '0.88667'],
                ["transform", "scaleX", '0.88667'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '19px']
            ],
            "${_page8-copy}": [
                ["style", "top", '213px'],
                ["transform", "scaleY", '0.89155'],
                ["transform", "scaleX", '0.89155'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '41px']
            ],
            "${_cover-pic2}": [
                ["style", "top", '222px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '264px']
            ],
            "${_cover-pic1}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0.7219'],
                ["transform", "scaleX", '0.7219'],
                ["style", "opacity", '0'],
                ["style", "left", '70px']
            ],
            "${_page5-4sections}": [
                ["style", "top", '466px'],
                ["transform", "scaleY", '0.81515'],
                ["transform", "scaleX", '0.81515'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '535px']
            ],
            "${_page5-bg}": [
                ["style", "top", '57px'],
                ["transform", "scaleY", '0.85809'],
                ["transform", "scaleX", '0.85809'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-91px']
            ],
            "${_page4cloud}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_btn-ch2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '87px'],
                ["style", "left", '258px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px']
            ],
            "${_page7-scooter}": [
                ["style", "top", '576px'],
                ["style", "height", '65px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '463px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 64552,
            autoPlay: true,
            labels: {
                "startMenu": 0,
                "endMenu": 1000,
                "cover": 7882,
                "page2": 8052,
                "btn-intro": 8689,
                "page2end": 9214,
                "page3": 10552,
                "btn-ch1": 11647,
                "page3end": 15302,
                "page4": 15802,
                "btn-ch2": 17552,
                "page4cloud": 22078,
                "page4end": 23392,
                "page5": 23905,
                "btn-ch3": 26052,
                "page5end": 30654,
                "page6": 31302,
                "btn-ch4": 33802,
                "page6end": 35140,
                "page7": 35802,
                "btn-ch5": 36802,
                "page7end": 39115,
                "restartSeven": 39620,
                "page8": 52143,
                "btn-ch6": 55208,
                "page8end": 59064,
                "page9": 59552,
                "btn-ch7": 62552
            },
            timeline: [
                { id: "eid155", tween: [ "style", "${_page4-copy}", "top", '-254px', { fromValue: '126px'}], position: 25052, duration: 500 },
                { id: "eid361", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 61802, duration: 0 },
                { id: "eid353", tween: [ "style", "${_page8-award}", "top", '548px', { fromValue: '58px'}], position: 59552, duration: 750 },
                { id: "eid245", tween: [ "style", "${_page7-community}", "opacity", '1', { fromValue: '0.000000'}], position: 37802, duration: 250 },
                { id: "eid285", tween: [ "style", "${_page7-community}", "opacity", '0', { fromValue: '1'}], position: 52552, duration: 1000 },
                { id: "eid371", tween: [ "style", "${_page9-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 63302, duration: 500 },
                { id: "eid30", tween: [ "style", "${_cover-pic6}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 868 },
                { id: "eid284", tween: [ "style", "${_page7-community}", "top", '544px', { fromValue: '354px'}], position: 52552, duration: 1000 },
                { id: "eid72", tween: [ "style", "${_page2-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 8689, duration: 525 },
                { id: "eid78", tween: [ "style", "${_page2-copy}", "opacity", '0', { fromValue: '1'}], position: 10552, duration: 500 },
                { id: "eid70", tween: [ "style", "${_Rectangle}", "left", '-1025px', { fromValue: '0px'}], position: 8052, duration: 637 },
                { id: "eid263", tween: [ "transform", "${_page7-copy}", "scaleX", '0.83', { fromValue: '0.15'}], position: 38052, duration: 1063, easing: "easeOutBounce" },
                { id: "eid90", tween: [ "style", "${_Rectangle2Copy4}", "clip", [0,203,103,202.681640625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,203,103,0]}], position: 12888, duration: 527 },
                { id: "eid82", tween: [ "style", "${_pg2-background2}", "top", '106px', { fromValue: '106px'}], position: 11647, duration: 0 },
                { id: "eid262", tween: [ "style", "${_page7-copy}", "opacity", '1', { fromValue: '0'}], position: 38052, duration: 500 },
                { id: "eid287", tween: [ "style", "${_page7-copy}", "opacity", '0', { fromValue: '1'}], position: 54052, duration: 871 },
                { id: "eid60", tween: [ "style", "${_cover}", "left", '-1024px', { fromValue: '0px'}], position: 8052, duration: 637 },
                { id: "eid270", tween: [ "style", "${_page7-bikeCopy}", "left", '-171px', { fromValue: '1029px'}], position: 44552, duration: 5155 },
                { id: "eid34", tween: [ "style", "${_cover-pic7}", "opacity", '1', { fromValue: '0'}], position: 7118, duration: 764 },
                { id: "eid215", tween: [ "style", "${_nav-5}", "opacity", '1', { fromValue: '0.000000'}], position: 36802, duration: 500 },
                { id: "eid81", tween: [ "style", "${_pg2-background2}", "left", '-1090px', { fromValue: '-39px'}], position: 11052, duration: 595 },
                { id: "eid209", tween: [ "style", "${_nav-4}", "opacity", '1', { fromValue: '0.000000'}], position: 33802, duration: 500 },
                { id: "eid109", tween: [ "style", "${_quote-frank-wright}", "top", '731px', { fromValue: '581px'}], position: 15802, duration: 500 },
                { id: "eid243", tween: [ "style", "${_page7-scooter}", "opacity", '1', { fromValue: '0.000000'}], position: 37802, duration: 250 },
                { id: "eid363", tween: [ "style", "${_nav-conclusion}", "opacity", '1', { fromValue: '0.000000'}], position: 62052, duration: 500 },
                { id: "eid66", tween: [ "style", "${_cover-logo}", "left", '-213px', { fromValue: '811px'}], position: 8052, duration: 637 },
                { id: "eid123", tween: [ "style", "${_clouds}", "opacity", '1', { fromValue: '0.000000'}], position: 19302, duration: 884 },
                { id: "eid159", tween: [ "style", "${_clouds}", "opacity", '0', { fromValue: '1'}], position: 25552, duration: 500 },
                { id: "eid67", tween: [ "style", "${_cover-pic4}", "left", '-218px', { fromValue: '806px'}], position: 8052, duration: 637 },
                { id: "eid187", tween: [ "style", "${_page5-successtip}", "opacity", '1', { fromValue: '0'}], position: 30052, duration: 602, easing: "easeOutBounce" },
                { id: "eid191", tween: [ "style", "${_page5-successtip}", "opacity", '0', { fromValue: '1'}], position: 31302, duration: 500 },
                { id: "eid165", tween: [ "style", "${_page5-4sections}", "opacity", '1', { fromValue: '0.000000'}], position: 26552, duration: 500 },
                { id: "eid197", tween: [ "style", "${_page5-4sections}", "opacity", '0', { fromValue: '1'}], position: 32802, duration: 500 },
                { id: "eid269", tween: [ "style", "${_page7-scooter2}", "left", '1048px', { fromValue: '-158px'}], position: 42926, duration: 3226 },
                { id: "eid300", tween: [ "style", "${_page8-quote}", "left", '35px', { fromValue: '-301px'}], position: 58314, duration: 750 },
                { id: "eid33", tween: [ "style", "${_cover-pic7}", "top", '460px', { fromValue: '478px'}], position: 7118, duration: 764 },
                { id: "eid17", tween: [ "style", "${_cover-pic3}", "top", '177px', { fromValue: '155px'}], position: 3917, duration: 791 },
                { id: "eid61", tween: [ "style", "${_cover-pic6}", "left", '-504px', { fromValue: '520px'}], position: 8052, duration: 637 },
                { id: "eid136", tween: [ "style", "${_quote-page4}", "left", '616px', { fromValue: '946px'}], position: 22078, duration: 593 },
                { id: "eid75", tween: [ "style", "${_arrow-nav-prev}", "display", 'block', { fromValue: 'none'}], position: 8689, duration: 0 },
                { id: "eid9", tween: [ "style", "${_cover-pic1}", "top", '143px', { fromValue: '121px'}], position: 2137, duration: 989 },
                { id: "eid121", tween: [ "style", "${_bg-sky}", "top", '-3929px', { fromValue: '-3207px'}], position: 17552, duration: 1750 },
                { id: "eid219", tween: [ "style", "${_page7-bg}", "opacity", '1', { fromValue: '0.000000'}], position: 37302, duration: 500 },
                { id: "eid360", tween: [ "style", "${_page7-bg}", "opacity", '0', { fromValue: '1'}], position: 61802, duration: 750 },
                { id: "eid25", tween: [ "style", "${_cover-pic5}", "top", '463px', { fromValue: '441px'}], position: 5500, duration: 750 },
                { id: "eid63", tween: [ "style", "${_cover-pic2}", "left", '-760px', { fromValue: '264px'}], position: 8052, duration: 637 },
                { id: "eid21", tween: [ "style", "${_cover-pic4}", "top", '103px', { fromValue: '121px'}], position: 4709, duration: 791 },
                { id: "eid14", tween: [ "style", "${_cover-pic2}", "opacity", '1', { fromValue: '0'}], position: 3126, duration: 791 },
                { id: "eid118", tween: [ "style", "${_pg3-background}", "opacity", '0', { fromValue: '1'}], position: 17302, duration: 250 },
                { id: "eid88", tween: [ "style", "${_Rectangle2}", "clip", [0,555.142578125,93,549.595703125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,555.513671875,93,0]}], position: 12302, duration: 586 },
                { id: "eid185", tween: [ "transform", "${_page5-successtip}", "scaleX", '0.80569', { fromValue: '0.17802'}], position: 30052, duration: 602, easing: "easeOutBounce" },
                { id: "eid301", tween: [ "style", "${_page8-quote}", "opacity", '1', { fromValue: '0'}], position: 58314, duration: 750 },
                { id: "eid358", tween: [ "style", "${_page8-quote}", "opacity", '0', { fromValue: '1'}], position: 61052, duration: 750 },
                { id: "eid294", tween: [ "style", "${_page8-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 56708, duration: 884 },
                { id: "eid356", tween: [ "style", "${_page8-copy}", "opacity", '0', { fromValue: '1'}], position: 60302, duration: 750 },
                { id: "eid276", tween: [ "style", "${_page7-bus2}", "left", '1024px', { fromValue: '-277px'}], position: 45221, duration: 6581 },
                { id: "eid277", tween: [ "style", "${_arrow-nav-prev-pg7}", "display", 'block', { fromValue: 'none'}], position: 39620, duration: 0 },
                { id: "eid280", tween: [ "style", "${_arrow-nav-prev-pg7}", "display", 'none', { fromValue: 'block'}], position: 52552, duration: 0 },
                { id: "eid373", tween: [ "style", "${_page9-about-cw-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 64052, duration: 500 },
                { id: "eid139", tween: [ "style", "${_nav-2}", "opacity", '1', { fromValue: '0.000000'}], position: 17444, duration: 358 },
                { id: "eid102", tween: [ "style", "${_quote-frank-wright}", "left", '617px', { fromValue: '1001px'}], position: 14670, duration: 632 },
                { id: "eid290", tween: [ "style", "${_page7-copy}", "top", '-135px', { fromValue: '125px'}], position: 54052, duration: 871 },
                { id: "eid6", tween: [ "style", "${_cover-title}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1250 },
                { id: "eid167", tween: [ "style", "${_page5-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 27052, duration: 500 },
                { id: "eid195", tween: [ "style", "${_page5-copy}", "opacity", '0', { fromValue: '1'}], position: 32302, duration: 500 },
                { id: "eid59", tween: [ "style", "${_cover-pic7}", "left", '-238px', { fromValue: '786px'}], position: 8052, duration: 637 },
                { id: "eid207", tween: [ "style", "${_page6-copy}", "opacity", '1', { fromValue: '0'}], position: 34398, duration: 742 },
                { id: "eid211", tween: [ "style", "${_page6-copy}", "opacity", '0', { fromValue: '1'}], position: 35802, duration: 500 },
                { id: "eid22", tween: [ "style", "${_cover-pic4}", "opacity", '1', { fromValue: '0'}], position: 4709, duration: 791 },
                { id: "eid173", tween: [ "style", "${_page5-quote}", "top", '253px', { fromValue: '223px'}], position: 28462, duration: 734, easing: "easeOutBounce" },
                { id: "eid264", tween: [ "transform", "${_page7-copy}", "scaleY", '0.83', { fromValue: '0.15'}], position: 38052, duration: 1063, easing: "easeOutBounce" },
                { id: "eid125", tween: [ "style", "${_page4-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 20186, duration: 616 },
                { id: "eid156", tween: [ "style", "${_page4-copy}", "opacity", '0', { fromValue: '1'}], position: 25052, duration: 500 },
                { id: "eid62", tween: [ "style", "${_cover-pic3}", "left", '-395px', { fromValue: '629px'}], position: 8052, duration: 637 },
                { id: "eid248", tween: [ "style", "${_page7-bus}", "left", '-144px', { fromValue: '216px'}], position: 39620, duration: 3067 },
                { id: "eid103", tween: [ "style", "${_quote-frank-wright}", "opacity", '1', { fromValue: '0'}], position: 14670, duration: 632 },
                { id: "eid110", tween: [ "style", "${_quote-frank-wright}", "opacity", '0', { fromValue: '1'}], position: 15802, duration: 500 },
                { id: "eid292", tween: [ "style", "${_page8-award}", "opacity", '1', { fromValue: '0.000000'}], position: 55208, duration: 1500 },
                { id: "eid354", tween: [ "style", "${_page8-award}", "opacity", '0', { fromValue: '1'}], position: 59552, duration: 750 },
                { id: "eid10", tween: [ "style", "${_cover-pic1}", "opacity", '1', { fromValue: '0'}], position: 2137, duration: 989 },
                { id: "eid244", tween: [ "style", "${_page7-bus}", "opacity", '1', { fromValue: '0.000000'}], position: 37802, duration: 250 },
                { id: "eid163", tween: [ "style", "${_page5-bg}", "opacity", '1', { fromValue: '0.000000'}], position: 26052, duration: 500 },
                { id: "eid199", tween: [ "style", "${_page5-bg}", "opacity", '0', { fromValue: '1'}], position: 33302, duration: 500 },
                { id: "eid94", tween: [ "style", "${_page3-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 14052, duration: 618 },
                { id: "eid112", tween: [ "style", "${_page3-copy}", "opacity", '0', { fromValue: '1'}], position: 16302, duration: 500 },
                { id: "eid189", tween: [ "style", "${_nav-3}", "opacity", '1', { fromValue: '0.000000'}], position: 26165, duration: 387 },
                { id: "eid369", tween: [ "transform", "${_HiRes}", "scaleY", '0.5764', { fromValue: '0.06375'}], position: 62552, duration: 750 },
                { id: "eid303", tween: [ "style", "${_nav-6}", "opacity", '1', { fromValue: '0.000000'}], position: 55208, duration: 742 },
                { id: "eid13", tween: [ "style", "${_cover-pic2}", "top", '204px', { fromValue: '222px'}], position: 3126, duration: 791 },
                { id: "eid254", tween: [ "style", "${_page7-bike}", "left", '-171px', { fromValue: '748px'}], position: 41397, duration: 5155 },
                { id: "eid186", tween: [ "transform", "${_page5-successtip}", "scaleY", '0.80569', { fromValue: '0.17802'}], position: 30052, duration: 602, easing: "easeOutBounce" },
                { id: "eid368", tween: [ "transform", "${_HiRes}", "scaleX", '0.5764', { fromValue: '0.06375'}], position: 62552, duration: 750 },
                { id: "eid203", tween: [ "style", "${_page6-bg}", "opacity", '1', { fromValue: '0.000000'}], position: 33802, duration: 596 },
                { id: "eid213", tween: [ "style", "${_page6-bg}", "opacity", '0', { fromValue: '1'}], position: 36302, duration: 500 },
                { id: "eid137", tween: [ "style", "${_quote-page4}", "opacity", '1', { fromValue: '0'}], position: 22078, duration: 593 },
                { id: "eid151", tween: [ "style", "${_quote-page4}", "opacity", '0', { fromValue: '1'}], position: 24445, duration: 607 },
                { id: "eid92", tween: [ "style", "${_Rectangle2Copy5}", "clip", [0,213,113,211.693359375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,213,113,0]}], position: 13415, duration: 637 },
                { id: "eid321", tween: [ "style", "${_arrow-nav}", "display", 'block', { fromValue: 'none'}], position: 7882, duration: 0 },
                { id: "eid58", tween: [ "style", "${_cover-pic5}", "left", '-804px', { fromValue: '220px'}], position: 8052, duration: 637 },
                { id: "eid206", tween: [ "style", "${_page6-copy}", "top", '130px', { fromValue: '100px'}], position: 34398, duration: 742 },
                { id: "eid146", tween: [ "style", "${_page4cloud}", "opacity", '0', { fromValue: '1'}], position: 23905, duration: 540 },
                { id: "eid84", tween: [ "style", "${_CW-life-cycle}", "opacity", '1', { fromValue: '0.000000'}], position: 11647, duration: 655 },
                { id: "eid114", tween: [ "style", "${_CW-life-cycle}", "opacity", '0', { fromValue: '1'}], position: 16802, duration: 500 },
                { id: "eid150", tween: [ "style", "${_quote-page4}", "top", '729px', { fromValue: '549px'}], position: 24445, duration: 607 },
                { id: "eid29", tween: [ "style", "${_cover-pic6}", "top", '509px', { fromValue: '527px'}], position: 6250, duration: 868 },
                { id: "eid251", tween: [ "style", "${_page7-scooter}", "left", '-92px', { fromValue: '463px'}], position: 40176, duration: 2750 },
                { id: "eid143", tween: [ "style", "${_page4cloud}", "display", 'block', { fromValue: 'none'}], position: 20965, duration: 0 },
                { id: "eid367", tween: [ "style", "${_HiRes}", "opacity", '1', { fromValue: '0'}], position: 62552, duration: 750 },
                { id: "eid64", tween: [ "style", "${_cover-title}", "left", '-1024px', { fromValue: '0px'}], position: 8052, duration: 637 },
                { id: "eid242", tween: [ "style", "${_page7-bike}", "opacity", '1', { fromValue: '0.000000'}], position: 37802, duration: 250 },
                { id: "eid174", tween: [ "style", "${_page5-quote}", "opacity", '1', { fromValue: '0'}], position: 28462, duration: 734, easing: "easeOutBounce" },
                { id: "eid193", tween: [ "style", "${_page5-quote}", "opacity", '0', { fromValue: '1'}], position: 31802, duration: 500 },
                { id: "eid26", tween: [ "style", "${_cover-pic5}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 750 },
                { id: "eid18", tween: [ "style", "${_cover-pic3}", "opacity", '1', { fromValue: '0'}], position: 3917, duration: 791 },
                { id: "eid65", tween: [ "style", "${_cover-pic1}", "left", '-954px', { fromValue: '70px'}], position: 8052, duration: 637 },
                { id: "eid74", tween: [ "style", "${_nav-intro}", "display", 'block', { fromValue: 'none'}], position: 8052, duration: 0 },
                { id: "eid160", tween: [ "style", "${_bg-sky}", "opacity", '0', { fromValue: '1'}], position: 25552, duration: 500 },
                { id: "eid105", tween: [ "style", "${_nav-1}", "opacity", '1', { fromValue: '0.000000'}], position: 11552, duration: 391 },
                { id: "eid304", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_btn-intro}', [] ], ""], position: 9213.7071882449 },
                { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page4cloud}', [] ], ""], position: 20964.630260397 }            ]
        }
    }
},
"page4cloud": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-117px', '-47px', '861px', '491px', 'auto', 'auto'],
                    id: 'page4-cloud',
                    transform: [[0, 0], [], [], ['0.7281', '0.7281']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/page4-cloud.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_page4-cloud}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '0.7281'],
                ["transform", "scaleX", '0.7281'],
                ["style", "opacity", '0'],
                ["style", "left", '-117px']
            ],
            "${symbolSelector}": [
                ["style", "height", '357px'],
                ["style", "width", '627px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24340,
            autoPlay: true,
            labels: {
                "reStart": 23026
            },
            timeline: [
                { id: "eid130", tween: [ "style", "${_page4-cloud}", "opacity", '1', { fromValue: '0'}], position: 22369, duration: 657 },
                { id: "eid129", tween: [ "style", "${_page4-cloud}", "top", '-67px', { fromValue: '-77px'}], position: 22369, duration: 657 },
                { id: "eid141", tween: [ "style", "${_page4-cloud}", "top", '-77px', { fromValue: '-67px'}], position: 23026, duration: 657 },
                { id: "eid142", tween: [ "style", "${_page4-cloud}", "top", '-67px', { fromValue: '-77px'}], position: 23683, duration: 657 }            ]
        }
    }
},
"walker1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '299px', '69px', 'auto', 'auto'],
                    id: 'page7-walker1',
                    type: 'image',
                    clip: ['rect(0px 50.0078125px 69px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/page7-walker1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '299px']
            ],
            "${_page7-walker1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,50.0078125,69,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 41460,
            autoPlay: true,
            timeline: [
                { id: "eid229", tween: [ "style", "${_page7-walker1}", "left", '170px', { fromValue: '0px'}], position: 39000, duration: 2460 },
                { id: "eid221", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 38750, duration: 0 },
                { id: "eid222", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 39000, duration: 0 },
                { id: "eid223", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 39250, duration: 0 },
                { id: "eid224", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 39500, duration: 0 },
                { id: "eid230", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 39750, duration: 0 },
                { id: "eid231", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 40000, duration: 0 },
                { id: "eid232", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 40250, duration: 0 },
                { id: "eid233", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 40500, duration: 0 },
                { id: "eid234", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 40710, duration: 0 },
                { id: "eid235", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 40960, duration: 0 },
                { id: "eid236", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 41210, duration: 0 },
                { id: "eid237", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 41460, duration: 0 }            ]
        }
    }
},
"btn-intro": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '135px', '92px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(40,40,40,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '135px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(40,40,40,0.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"menu": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['0px', '0px', '1025', '238', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'RectangleCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['1px', '0px', '1024px', '238px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0.65)']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.18559', '0.18559']],
                        type: 'image',
                        id: 'arrow-download-pdf',
                        rect: ['93px', '129px', '358px', '162px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-pdf.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'arrow-download-windows2',
                        rect: ['820px', '195px', '148px', '30px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-windows.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'arrow-download-ios2',
                        rect: ['618px', '195px', '95px', '30px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-ios.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'arrow-download-android2',
                        rect: ['382px', '195px', '142px', '30px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-android.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        id: 'Rectangle6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['199px', '190px', '2px', '40px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        type: 'rect',
                        id: 'Rectangle6Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['342px', '190px', '2px', '40px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        type: 'rect',
                        id: 'Rectangle6Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['570px', '190px', '2px', '40px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        type: 'rect',
                        id: 'Rectangle6Copy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['765px', '190px', '2px', '40px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        id: 'thumb-1',
                        rect: ['1px', '-41px', '400px', '259px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-1.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        id: 'thumb-1Copy',
                        rect: ['212px', '-41px', '400px', '259px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-intro.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy2',
                        type: 'image',
                        rect: ['421px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch1.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy3',
                        type: 'image',
                        rect: ['629px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch2.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy7',
                        type: 'image',
                        rect: ['916px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch3.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy6',
                        type: 'image',
                        rect: ['1127px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch4.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy5',
                        type: 'image',
                        rect: ['1336px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch5.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy4',
                        type: 'image',
                        rect: ['1544px', '-41px', '400px', '259px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch6.jpg', '0px', '0px']
                    },
                    {
                        id: 'thumb-conclusion',
                        type: 'image',
                        rect: ['1037px', '37px', '159px', '103px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-conclusion.jpg', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.42105', '0.42105']],
                        type: 'image',
                        rect: ['966px', '43px', '83px', '95px', 'auto', 'auto'],
                        id: 'arrow-nav3',
                        display: 'block',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-nav.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.42105', '0.42105']],
                        type: 'image',
                        rect: ['966px', '43px', '83px', '95px', 'auto', 'auto'],
                        id: 'arrow-nav3Copy2',
                        display: 'none',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-nav.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['180'], [], ['0.42105', '0.42105']],
                        type: 'image',
                        id: 'arrow-nav3Copy',
                        rect: ['-24px', '43px', '83px', '95px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-nav.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.14', '0.14']],
                        id: 'thumbnails',
                        type: 'image',
                        rect: ['-223px', '92px', '643px', '235px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/thumbnails.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        rect: ['121px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        id: 'Rectangle4Copy7',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['332px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        id: 'Rectangle4Copy6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['542px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        id: 'Rectangle4Copy8',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['749px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        id: 'Rectangle4Copy9',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['118px', '37px', '159px', '103px', 'auto', 'auto'],
                        id: 'Rectangle5',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        display: 'none',
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['328px', '37px', '159px', '103px', 'auto', 'auto'],
                        id: 'Rectangle5Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        display: 'none',
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['538px', '37px', '159px', '103px', 'auto', 'auto'],
                        id: 'Rectangle5Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        display: 'none',
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        type: 'rect',
                        rect: ['745px', '37px', '159px', '103px', 'auto', 'auto'],
                        id: 'Rectangle5Copy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        display: 'none',
                        fill: ['rgba(255,255,255,0)']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['43px', '366px', '113px', '45px', 'auto', 'auto'],
                    display: 'none',
                    id: 'btn-thumbnailsCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    type: 'rect',
                    rect: ['43px', '186px', '113px', '45px', 'auto', 'auto'],
                    display: 'block',
                    id: 'btn-thumbnails',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow-download-ios2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '618px'],
                ["style", "width", '95px']
            ],
            "${_btn-thumbnailsCopy}": [
                ["style", "top", '366px'],
                ["style", "height", '45px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '43px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_Rectangle6Copy}": [
                ["style", "top", '190px'],
                ["style", "left", '342px'],
                ["style", "height", '40px']
            ],
            "${_arrow-download-pdf}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.18559'],
                ["transform", "scaleX", '0.18559'],
                ["style", "height", '162px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '93px'],
                ["style", "width", '358px']
            ],
            "${_thumb-1Copy2}": [
                ["style", "top", '-41px'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '421px'],
                ["transform", "scaleY", '0.39857']
            ],
            "${_thumb-1Copy4}": [
                ["transform", "scaleX", '0.39857'],
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '1544px']
            ],
            "${_thumb-1Copy5}": [
                ["transform", "scaleX", '0.39857'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '1336px'],
                ["style", "top", '-41px']
            ],
            "${_btn-thumbnails}": [
                ["style", "top", '186px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '43px'],
                ["style", "height", '45px']
            ],
            "${_Group2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Rectangle4Copy8}": [
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '542px'],
                ["style", "top", '37px']
            ],
            "${_arrow-download-windows2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '820px'],
                ["style", "width", '148px']
            ],
            "${_arrow-download-android2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '382px'],
                ["style", "width", '142px']
            ],
            "${_thumb-1Copy3}": [
                ["transform", "scaleX", '0.39857'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '629px'],
                ["style", "top", '-41px']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "top", '37px'],
                ["style", "left", '745px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle4Copy7}": [
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Rectangle5Copy2}": [
                ["style", "top", '37px'],
                ["style", "left", '538px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '238px'],
                ["style", "width", '1025px']
            ],
            "${_arrow-nav3Copy}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.42105'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.42105'],
                ["style", "left", '-24px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '37px'],
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_arrow-nav3Copy2}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.42105'],
                ["transform", "scaleX", '0.42105'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '966px'],
                ["style", "display", 'none']
            ],
            "${_thumbnails}": [
                ["transform", "scaleX", '0.14'],
                ["transform", "scaleY", '0.14'],
                ["style", "left", '-223px'],
                ["style", "top", '92px']
            ],
            "${_thumb-1Copy7}": [
                ["style", "top", '-41px'],
                ["style", "left", '916px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857']
            ],
            "${_thumb-1Copy6}": [
                ["style", "top", '-41px'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '1127px'],
                ["transform", "scaleY", '0.39857']
            ],
            "${_thumb-1Copy}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '212px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle6Copy3}": [
                ["style", "top", '190px'],
                ["style", "left", '765px'],
                ["style", "height", '40px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '190px'],
                ["style", "left", '199px'],
                ["style", "height", '40px']
            ],
            "${_arrow-nav3}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.42105'],
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '966px'],
                ["transform", "scaleX", '0.42105']
            ],
            "${_Rectangle4Copy6}": [
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '332px'],
                ["style", "top", '37px']
            ],
            "${_Rectangle4Copy9}": [
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '749px'],
                ["style", "top", '37px']
            ],
            "${_Rectangle6Copy2}": [
                ["style", "top", '190px'],
                ["style", "left", '570px'],
                ["style", "height", '40px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '37px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.65)'],
                ["style", "left", '1px'],
                ["style", "height", '238px']
            ],
            "${_thumb-1}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_thumb-conclusion}": [
                ["style", "height", '103px'],
                ["style", "top", '37px'],
                ["style", "left", '1037px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2008,
            autoPlay: false,
            labels: {
                "startMEnu": 0,
                "endMenu": 516,
                "next1": 577,
                "next2": 1283
            },
            timeline: [
                { id: "eid345", tween: [ "style", "${_thumb-1Copy7}", "left", '-3px', { fromValue: '916px'}], position: 569, duration: 681 },
                { id: "eid397", tween: [ "style", "${_thumb-1Copy7}", "left", '-923px', { fromValue: '-3px'}], position: 1283, duration: 725 },
                { id: "eid342", tween: [ "style", "${_thumb-1Copy4}", "left", '625px', { fromValue: '1544px'}], position: 569, duration: 681 },
                { id: "eid394", tween: [ "style", "${_thumb-1Copy4}", "left", '-295px', { fromValue: '625px'}], position: 1283, duration: 725 },
                { id: "eid380", tween: [ "style", "${_Rectangle5Copy}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Group2}", "top", '180px', { fromValue: '0px'}], position: 0, duration: 516 },
                { id: "eid333", tween: [ "style", "${_thumb-1}", "left", '-919px', { fromValue: '1px'}], position: 569, duration: 681 },
                { id: "eid330", tween: [ "style", "${_thumb-1Copy2}", "left", '-499px', { fromValue: '421px'}], position: 569, duration: 681 },
                { id: "eid379", tween: [ "style", "${_Rectangle5Copy2}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid313", tween: [ "style", "${_btn-thumbnails}", "top", '366px', { fromValue: '186px'}], position: 0, duration: 516 },
                { id: "eid344", tween: [ "style", "${_thumb-1Copy5}", "left", '417px', { fromValue: '1336px'}], position: 569, duration: 681 },
                { id: "eid396", tween: [ "style", "${_thumb-1Copy5}", "left", '-503px', { fromValue: '417px'}], position: 1283, duration: 725 },
                { id: "eid332", tween: [ "style", "${_thumb-1Copy3}", "left", '-291px', { fromValue: '629px'}], position: 569, duration: 681 },
                { id: "eid401", tween: [ "style", "${_thumb-1Copy3}", "left", '-292px', { fromValue: '-291px'}], position: 1250, duration: 758 },
                { id: "eid348", tween: [ "style", "${_btn-thumbnailsCopy}", "display", 'block', { fromValue: 'none'}], position: 523, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Rectangle4Copy6}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid331", tween: [ "style", "${_thumb-1Copy}", "left", '-708px', { fromValue: '212px'}], position: 569, duration: 681 },
                { id: "eid374", tween: [ "style", "${_Rectangle4Copy9}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid343", tween: [ "style", "${_thumb-1Copy6}", "left", '208px', { fromValue: '1127px'}], position: 569, duration: 681 },
                { id: "eid395", tween: [ "style", "${_thumb-1Copy6}", "left", '-712px', { fromValue: '208px'}], position: 1283, duration: 725 },
                { id: "eid377", tween: [ "style", "${_Rectangle4Copy7}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid378", tween: [ "style", "${_Rectangle5Copy3}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid404", tween: [ "style", "${_arrow-nav3}", "display", 'none', { fromValue: 'block'}], position: 569, duration: 0 },
                { id: "eid319", tween: [ "style", "${_btn-thumbnails}", "display", 'none', { fromValue: 'block'}], position: 516, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid405", tween: [ "style", "${_arrow-nav3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid400", tween: [ "style", "${_thumb-conclusion}", "left", '77px', { fromValue: '1037px'}], position: 1283, duration: 725 },
                { id: "eid375", tween: [ "style", "${_Rectangle4Copy8}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 }            ]
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
