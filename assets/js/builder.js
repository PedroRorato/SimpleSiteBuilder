//Functions
function download(){
    //Get content
    var htmlContent = document.querySelector('html').cloneNode(true);

    //Remove builder elements
    var builderElements = htmlContent.querySelectorAll(".builder");
    console.log(builderElements);
    builderElements.forEach(element => {
        element.remove();
    });

    //Blob: make file
    var fileName = 'index.html';
    const blob = new Blob([htmlContent.innerHTML], { type: 'text/html' });

    //Download
    const a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', window.URL.createObjectURL(blob));
    a.click();
}
///Open Modal
function showModal(id){
    document.getElementById(id).style.display = 'flex';
    document.body.classList.add("stop-scrolling");
}
///Close Modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.classList.remove("stop-scrolling");
}
///Base64 image
function base64(input, element){
    var reader = new FileReader();
    reader.onload = function(e) {
        element.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}


//Form Handlers
///Header

////Page Title
var pageTitleElement = document.querySelector('title');
var pageTitleInput = document.querySelector('#pageTitle');
pageTitleInput.onkeyup = function(){
    pageTitleElement.innerHTML = pageTitleInput.value;
}
////Header A Color
var headerAElements = document.querySelectorAll('#menu a');
var headerAInput = document.querySelector('#headerFontColor');
headerAInput.onchange = function(){
    headerAElements.forEach(function(element){
        element.style.color = headerAInput.value;
    });
}
////Header Background
var headerElement = document.querySelector('header');
var headerMenuElement = document.querySelector('#menu');
var headerInput = document.querySelector('#headerBackground');
headerInput.onchange = function(){
    headerElement.style.background = headerInput.value;
    headerMenuElement.style.background = headerInput.value;
}
////Header Logo
var logoElement = document.querySelector('#logo img');
var logoInput = document.querySelector('#logoImg');
logoInput.onchange = function(){
    base64(logoInput, logoElement);
}

///Home
var homeElement = document.querySelector('#home');
var homeBackgroundInput = document.querySelector('#homeBackground');
homeBackgroundInput.onchange = function(){
    homeElement.style.background = homeBackgroundInput.value;
}
////App Print
var appPrintElement = document.querySelector('#mobile-screen');
var homeAppPrintInput = document.querySelector('#homeAppPrint');
homeAppPrintInput.onchange = function(){
    base64(homeAppPrintInput, appPrintElement);
}
////Home Title
var homeTitleElement = document.querySelector('#home h1');
/////Home Title Text
var homeTitleTextInput = document.querySelector('#homeTitleText');
homeTitleTextInput.onkeyup = function(){
    homeTitleElement.innerHTML = homeTitleTextInput.value;
}
/////Home Title Color
var homeTitleColorInput = document.querySelector('#homeTitleColor');
homeTitleColorInput.onchange = function(){
    homeTitleElement.style.color = homeTitleColorInput.value;
}
////Home Description
var homeDescriptionElement = document.querySelector('#home h5');
/////Home Description Text
var homeDescriptionTextInput = document.querySelector('#homeDescriptionText');
homeDescriptionTextInput.onkeyup = function(){
    console.log('foi')
    homeDescriptionElement.innerHTML = homeDescriptionTextInput.value;
}
/////Home Description Color
var homeDescriptionColorInput = document.querySelector('#homeDescriptionColor');
homeDescriptionColorInput.onchange = function(){
    homeDescriptionElement.style.color = homeDescriptionColorInput.value;
}
////AppStore
var appStoreElement = document.querySelector('#appStore');
/////AppStore Display
var appStoreDisplayInput = document.querySelector('#appStoreDisplay');
appStoreDisplayInput.onchange = function(){
    appStoreElement.style.display = appStoreDisplayInput.value;
}
/////AppStore Link
var appStoreLinkInput = document.querySelector('#appStoreLink');
appStoreLinkInput.onchange = function(){
    appStoreElement.setAttribute('href', appStoreLinkInput.value);
}
/////AppStore Color
var appStoreColorInput = document.querySelector('#appStoreColor');
appStoreColorInput.onchange = function(){
    appStoreElement.style.color = appStoreColorInput.value;
}
/////AppStore Background
var appStoreBackgroundInput = document.querySelector('#appStoreBackground');
appStoreBackgroundInput.onchange = function(){
    appStoreElement.style.background = appStoreBackgroundInput.value;
}
////GooglePlay
var googlePlayElement = document.querySelector('#googlePlay');
/////GooglePlay Display
var googlePlayDisplayInput = document.querySelector('#googlePlayDisplay');
googlePlayDisplayInput.onchange = function(){
    googlePlayElement.style.display = googlePlayDisplayInput.value;
}
/////GooglePlay Link
var googlePlayLinkInput = document.querySelector('#googlePlayLink');
googlePlayLinkInput.onchange = function(){
    googlePlayElement.setAttribute('href', googlePlayLinkInput.value);
}
/////GooglePlay Color
var googlePlayColorInput = document.querySelector('#googlePlayColor');
googlePlayColorInput.onchange = function(){
    googlePlayElement.style.color = googlePlayColorInput.value;
}
/////GooglePlay Background
var googlePlayBackgroundInput = document.querySelector('#googlePlayBackground');
googlePlayBackgroundInput.onchange = function(){
    googlePlayElement.style.background = googlePlayBackgroundInput.value;
}

///About
var aboutElement = document.querySelector('#about');
var aboutBackgroundInput = document.querySelector('#aboutBackground');
aboutBackgroundInput.onchange = function(){
    aboutElement.style.background = aboutBackgroundInput.value;
}
////About Title
var aboutTitleElement = document.querySelector('#about h1');
////About Title Color
var aboutTitleColorInput = document.querySelector('#aboutTitleColor');
aboutTitleColorInput.onchange = function(){
    aboutTitleElement.style.color = aboutTitleColorInput.value;
}
////About Description
var aboutDescriptionElement = document.querySelector('#about p');
/////Home Title Text
var aboutDescriptionTextInput = document.querySelector('#aboutDescriptionText');
aboutDescriptionTextInput.onkeyup = function(){
    aboutDescriptionElement.innerHTML = aboutDescriptionTextInput.value;
}
////About Description Color
var aboutDescriptionColorInput = document.querySelector('#aboutDescriptionColor');
aboutDescriptionColorInput.onchange = function(){
    aboutDescriptionElement.style.color = aboutDescriptionColorInput.value;
}

///Features
var featuresElement = document.querySelector('#features');
var featuresBackgroundInput = document.querySelector('#featuresBackground');
featuresBackgroundInput.onchange = function(){
    featuresElement.style.background = featuresBackgroundInput.value;
}

//Variables
var featuresContainer = document.querySelector('#features-container');
var featuresList = document.querySelector('#features-list');

var features = [
    {
        icon: 'fa-map-marker',
        title: 'Location',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'fa-map-marker',
        title: 'Location',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

function renderFeaturesList(){
    features.map((element, index) => {
        console.log(index)
        //Page
        var featureItem = document.createElement('div');
        featureItem.setAttribute('class', 'feature-item');
        ///Icon
        var featureIcon = document.createElement('i');
        featureIcon.setAttribute('class', 'fa ' + element.icon);
        featureItem.appendChild(featureIcon);
        ///Title
        var featureH3 = document.createElement('h3');
        featureH3.innerHTML = element.title;
        featureItem.appendChild(featureH3);
        ///Description
        var featureP = document.createElement('p');
        featureP.innerHTML = element.description;
        featureItem.appendChild(featureP);
        ///Append All
        featuresContainer.appendChild(featureItem);

        //Editor
        var featureListElement = document.createElement('div');
        featureListElement.setAttribute('class', 'feature-list-element');
        featureListElement.setAttribute('onclick', 'editFeature("'+index+'")');
        ///IconContainer
        featureIcon2 = featureIcon.cloneNode(true);
        featureListElement.appendChild(featureIcon2);
        ///Title
        var featureH5 = document.createElement('h5');
        featureH5.innerHTML = element.title;
        featureListElement.appendChild(featureH5);
        ///Append All
        featuresList.appendChild(featureListElement);
    });
}

//Edit Feature
var editFeatureTitle = document.querySelector('#editFeatureTitle');
var editFeatureDescription = document.querySelector('#editFeatureDescription');
function editFeature(index){
    featuresBackgroundInput.onchange = function()
    showModal('modalEditFeature');
}

renderFeaturesList();