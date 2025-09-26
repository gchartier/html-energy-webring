// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    "https://www.gabriel-export.earth/html-energy-webring/",
    "https://callmecannibal.neocities.org/",
    "https://lyer-online.neocities.org/",
    "https://naes.tech/htarotml/",
    "https://naes.tech/htmlun/",
    "https://harriethw.github.io/html-day-bristol/",
    "https://frippenator.neocities.org/",
    "https://www.pixouls.xyz/",
    "https://www.gabriel-export.earth/patterns",
    "https://baccyflap.com/rsp",
    "https://killalocalpedophile.neocities.org/",
    "http://constcast.org/",
    "https://corktree.neocities.org/",
    "https://amalinalai.github.io/precipice/busstop",
    "https://troy-sucks.neocities.org/",
    "https://ragman.net",
    "https://croakego.neocities.org/",
    "https://www.starcrush.net/pages/main",
];

//the name of the ring
var ringName = "HTML Energy";

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = "html-energy-webring";

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = "https://www.gabriel-export.earth/html-energy-webring/";

//should the widget include a random button?
var useRandom = true;
