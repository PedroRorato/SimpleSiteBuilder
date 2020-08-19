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
function showModal(id){
    document.getElementById(id).style.display = 'flex';
    document.body.classList.add("stop-scrolling");
}
function closeModal(id, showScroll = true) {
    document.getElementById(id).style.display = 'none';
    if(showScroll){
        document.body.classList.remove("stop-scrolling");
    }
}
function base64(input, element){
    var reader = new FileReader();
    reader.onload = function(e) {
        element.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}

//Forms
///Header
function headerSave(){
    //Title
    var pageTitleElement = document.querySelector('title');
    var pageTitleInput = document.querySelector('#pageTitle');
    pageTitleElement.innerHTML = pageTitleInput.value;
    //Menu
    var headerAElements = document.querySelectorAll('#menu a');
    var headerAInput = document.querySelector('#headerFontColor');
    headerAElements.forEach(function(element){
        element.style.color = headerAInput.value;
    });
    var headerElement = document.querySelector('header');
    var headerMenuElement = document.querySelector('#menu');
    var headerInput = document.querySelector('#headerBackground');
    headerElement.style.background = headerInput.value;
    headerMenuElement.style.background = headerInput.value;
    //Logo
    var logoElement = document.querySelector('#logo img');
    var logoInput = document.querySelector('#logoImg');
    if(logoInput.files[0]){
        base64(logoInput, logoElement);
    }

    closeModal('modalHeader');
}
///Home
function homeSave() {
    //Background
    var homeElement = document.querySelector('#home');
    var homeBackgroundInput = document.querySelector('#homeBackground');
    homeElement.style.background = homeBackgroundInput.value;
    //Print
    var appPrintElement = document.querySelector('#mobile-screen');
    var homeAppPrintInput = document.querySelector('#homeAppPrint');
    if(homeAppPrintInput.files[0]){
        base64(homeAppPrintInput, appPrintElement);
    }
    //Title
    var homeTitleElement = document.querySelector('#home h1');
    var homeTitleTextInput = document.querySelector('#homeTitleText');
    homeTitleElement.innerHTML = homeTitleTextInput.value;
    var homeTitleColorInput = document.querySelector('#homeTitleColor');
    homeTitleElement.style.color = homeTitleColorInput.value;
    //Description
    var homeDescriptionElement = document.querySelector('#home h5');
    var homeDescriptionTextInput = document.querySelector('#homeDescriptionText');
    homeDescriptionElement.innerHTML = homeDescriptionTextInput.value;
    var homeDescriptionColorInput = document.querySelector('#homeDescriptionColor');
    homeDescriptionElement.style.color = homeDescriptionColorInput.value;
    //AppStore
    var appStoreElement = document.querySelector('#appStore');
    var appStoreDisplayInput = document.querySelector('#appStoreDisplay');
    appStoreElement.style.display = appStoreDisplayInput.value;
    var appStoreLinkInput = document.querySelector('#appStoreLink');
    appStoreElement.setAttribute('href', appStoreLinkInput.value);
    var appStoreColorInput = document.querySelector('#appStoreColor');
    appStoreElement.style.color = appStoreColorInput.value;
    var appStoreBackgroundInput = document.querySelector('#appStoreBackground');
    appStoreElement.style.background = appStoreBackgroundInput.value;
    ////GooglePlay
    var googlePlayElement = document.querySelector('#googlePlay');
    var googlePlayDisplayInput = document.querySelector('#googlePlayDisplay');
    googlePlayElement.style.display = googlePlayDisplayInput.value;
    var googlePlayLinkInput = document.querySelector('#googlePlayLink');
    googlePlayElement.setAttribute('href', googlePlayLinkInput.value);
    var googlePlayColorInput = document.querySelector('#googlePlayColor');
    googlePlayElement.style.color = googlePlayColorInput.value;
    var googlePlayBackgroundInput = document.querySelector('#googlePlayBackground');
    googlePlayElement.style.background = googlePlayBackgroundInput.value;

    closeModal('modalHome')
}
///About
function aboutSave() {
    //Background
    var aboutElement = document.querySelector('#about');
    var aboutBackgroundInput = document.querySelector('#aboutBackground');
    aboutElement.style.background = aboutBackgroundInput.value;
    //Title
    var aboutTitleElement = document.querySelector('#about h1');
    var aboutTitleColorInput = document.querySelector('#aboutTitleColor');
    aboutTitleElement.style.color = aboutTitleColorInput.value;
    //Description
    var aboutDescriptionElement = document.querySelector('#about p');
    var aboutDescriptionTextInput = document.querySelector('#aboutDescriptionText');
    aboutDescriptionElement.innerHTML = aboutDescriptionTextInput.value;
    var aboutDescriptionColorInput = document.querySelector('#aboutDescriptionColor');
    aboutDescriptionElement.style.color = aboutDescriptionColorInput.value;

    closeModal('modalAbout');
}
///Footer
function footerSave() {
    //Background
    var footerElement = document.querySelector('footer');
    var footerBackgroundInput = document.querySelector('#footerBackground');
    footerElement.style.background = footerBackgroundInput.value;
    //Color
    var footerLinks = document.querySelectorAll('footer a');
    var footerColorInput = document.querySelector('#footerColor');
    footerElement.style.color = footerColorInput.value;
    footerLinks.forEach(element => {
        element.style.color = footerColorInput.value;
    });
    //Privacy Policy
    var privacyLinkElement = document.querySelector('.links-container').firstElementChild;
    var privacyLinkInput = document.querySelector('#privacyLink');
    privacyLinkElement.setAttribute('href', privacyLinkInput.value);
    //Terms of Service
    var termsLinkElement = document.querySelector('.links-container').lastElementChild;
    var termsLinkInput = document.querySelector('#termsLink');
    termsLinkElement.setAttribute('href', termsLinkInput.value);

    closeModal('modalFooter')
}


///Features
var features = [
    {
        icon: 'fa-map-marker',
        title: 'Location',
        description: 'Com o serviço de localização lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: 'fa-signal',
        title: 'Signal',
        description: 'Use o sinal para lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

//Features 
//Style Features
function featuresStyleSave(){
    //Background
    var featuresElement = document.querySelector('#features');
    var featuresBackgroundInput = document.querySelector('#featuresBackground');
    featuresElement.style.background = featuresBackgroundInput.value;
    //Inputs
    var featuresIconColorInput = document.querySelector('#featuresIconColor');
    var featuresIconBackgroundInput = document.querySelector('#featuresIconBackground');
    var featuresTitleColorInput = document.querySelector('#featuresTitleColor');
    var featuresDescriptionColorInput = document.querySelector('#featuresDescriptionColor');
    //Elements
    var allFeatures = document.querySelectorAll('.feature-item');
    allFeatures.forEach(element => {
        //Icon
        var icon = element.querySelector('i');
        icon.style.color = featuresIconColorInput.value;
        icon.style.background = featuresIconBackgroundInput.value;
        //Title
        var title = element.querySelector('h3');
        title.style.color = featuresTitleColorInput.value;
        //Description
        var description = element.querySelector('p');
        description.style.color = featuresDescriptionColorInput.value;
    });

    closeModal('modalFeatures');
}

//Edit Feature Inputs
var editFeatureTitleInput = document.querySelector('#editFeatureTitle');
var editFeatureDescriptionInput = document.querySelector('#editFeatureDescription');

//Edit Feature Modal
function editFeatureModal(index){
    var feature = features[index];
    console.log(feature.title)
    editFeatureTitleInput.value = feature.title;
    editFeatureDescriptionInput.value = feature.description;
    var editFeatureSaveBtn = document.querySelector('#editFeatureSaveBtn');
    editFeatureSaveBtn.setAttribute('onclick', 'editFeatureSave('+index+')');

    showModal('modalEditFeature');
}
//Edit Feature Save
function editFeatureSave(index){
    var feature = features[index];
    feature.title = editFeatureTitleInput.value;
    feature.description = editFeatureDescriptionInput.value;
    console.log(features);
    renderFeaturesList();
    closeModal('modalEditFeature', false);
}



//Variables
var featuresContainer = document.querySelector('#features-container');
var featuresList = document.querySelector('#features-list');
function renderFeaturesList(){
    featuresContainer.innerHTML = '';
    featuresList.innerHTML = '';
    features.map((element, index) => {
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
        featureListElement.setAttribute('onclick', 'editFeatureModal('+index+')');
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
renderFeaturesList();