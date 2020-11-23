//close navbar menu on link click
document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
  this.classList.remove('is-visible');
}, false);

//go home page
function getHome() {
  document.getElementById('root').innerHTML = "";
}
document.getElementById('home-btn').addEventListener('click', homeRoot);
document.getElementById('demo-avatar').addEventListener('click', homeRoot);
// more menu list
function getData (){
  // const n2 = 'https://venturads.com/helper-menu.json';
  //getHome();
document.getElementById("content-app").innerHTML = "<div class='loader'></div>";
  let data=[
    {
      id: 2020,
      title: "Box step1",
      content: "Welding Chart",
      url: "img/1.jpg",
      urlToImage: "img/1.jpg"
    },{
      id: 2021,
      title: "Box step2",
      content: "Symbols",
      url: "img/2.jpg",
      urlToImage: "img/2.jpg"
    },{
      id: 2022,
      title: "Box step3",
      content: "Specs",
      url: "img/3.jpg",
      urlToImage: "img/3.jpg"
    },{
      id: 2023,
      title: "Holes step1",
      content: "Settings",
      url: "img/4.jpg",
      urlToImage: "img/4.jpg"
    },{
      id: 2024,
      title: "Holes step2",
      content: "Basic Symbols",
      url: "img/5.jpg",
      urlToImage: "img/5.jpg"
    },  {
      id: 2025,
      title: "Holes step3",
      content: "Welding Chart",
      url: "img/6.jpg",
      urlToImage: "img/6.jpg"
    },{
      id: 2026,
      title: "Holes step4",
      content: "Data",
      url: "img/7.jpg",
      urlToImage: "img/7.jpg"
    },{
      id: 2027,
      title: "Holes step5",
      content: "Types",
      url: "img/8.jpg",
      urlToImage: "img/8.jpg"
    },{
      id: 2028,
      title: "Allen key1",
      content: "More Types",
      url: "img/9.jpg",
      urlToImage: "img/9.jpg"
    },{
      id: 2029,
      title: "Allen key2",
      content: "Weld Joints",
      url: "img/10.jpg",
      urlToImage: "img/10.jpg"
    },{
      id: 2030,
      title: "Allen key3",
      content: "Process",
      url: "img/11.jpg",
      urlToImage: "img/11.jpg"
    },{
      id: 2031,
      title: "Allen key4",
      content: "Safety",
      url: "img/12.jpg",
      urlToImage: "img/12.jpg"
    },{
      id: 2032,
      title: "Sheetmetal tool1",
      content: "Equipment",
      url: "img/13.jpg",
      urlToImage: "img/13.jpg"
    },{
      id: 2033,
      title: "Sheetmetal tool2",
      content: "Workbench",
      url: "img/14.jpg",
      urlToImage: "img/14.jpg"
    },{
      id: 2034,
      title: "Sheetmetal tool3",
      content: "Seated Workbench",
      url: "img/15.jpg",
      urlToImage: "img/15.jpg"
    },  {
      id: 2035,
      title: "Sheetmetal tool4",
      content: "Mill Direction",
      url: "img/16.jpg",
      urlToImage: "img/16.jpg"
    },{
      id: 2036,
      title: "Sheetmetal tool5",
      content: "Cutting Speeds",
      url: "img/17.jpg",
      urlToImage: "img/17.jpg"
    },{
      id: 2037,
      title: "Spring part1",
      content: "Decimal Chart",
      url: "img/18.jpg",
      urlToImage: "img/18.jpg"
    },{
      id: 2038,
      title: "Spring part2",
      content: "Rpm",
      url: "img/19.jpg",
      urlToImage: "img/19.jpg"
    },{
      id: 2039,
      title: "Spring part3",
      content: "Tap/Drill Chart",
      url: "img/20.jpg",
      urlToImage: "img/20.jpg"
    },{
      id: 2040,
      title: "Spring part4",
      content: "Inch/Metric Chart",
      url: "img/21.jpg",
      urlToImage: "img/21.jpg"
    },{
      id: 2041,
      title: "Spring part5",
      content: "Sheet Metal Charts",
      url: "img/22.jpg",
      urlToImage: "img/22.jpg"
    },{
      id: 2042,
      title: "Mating Assembly1",
      content: "Weld Details",
      url: "img/23.jpg",
      urlToImage: "img/23.jpg"
    },{
      id: 2043,
      title: "Mating Assembly2",
      content: "Metal Inert Gas",
      url: "img/24.jpg",
      urlToImage: "img/24.jpg"
    },{
      id: 2044,
      title: "Mating Assembly3",
      content: "Weld Details",
      url: "img/25.jpg",
      urlToImage: "img/25.jpg"
    },{
      id: 2045,
      title: "Shell part1",
      content: "Metal Inert Gas",
      url: "img/26.jpg",
      urlToImage: "img/26.jpg"
    },{
      id: 2046,
      title: "Scaling part1",
      content: "Weld Details",
      url: "img/27.jpg",
      urlToImage: "img/27.jpg"
    },{
      id: 2047,
      title: "Shortcuts",
      content: "Metal Inert Gas",
      url: "img/28.jpg",
      urlToImage: "img/28.jpg"
    },{
      id: 2048,
      title: "Sketch Picture",
      content: "Metal Inert Gas",
      url: "img/29.jpg",
      urlToImage: "img/29.jpg"
    }
  ];
  let list = "";
  for(let i=0;i<data.length;i++){
    list += "<a href=#" + data[i].id + " class='mdl-navigation__link' type='button' id=" + data[i].id + " class='btn btn-primary sharp'>" +  data[i].title + "</a></br>";
    document.getElementById('content-app').innerHTML = list;
  }
  for(let i=0;i<data.length;i++){ 
    function getImage() {
      document.getElementById('root').innerHTML = "<img src='" + data[i].url + "' width='100%' ></div></div>";
    }
    document.getElementById(data[i].id).addEventListener('click', getImage);
  }
}

getData();

  //admob id script
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    // Set AdMobAds options:
    admob.setOptions({
      publisherId:          "ca-app-pub-3864996818231266/7648520433",  // Required
      interstitialAdId:     "ca-app-pub-3864996818231266/5461730435",  // Optional
        // tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        // tappxShare:           0.5                                        // Optional
    });
    admob.createBannerView();
    admob.requestInterstitialAd({
      autoShowInterstitial: true
    });
}

document.addEventListener("deviceready", onDeviceReady, false);

