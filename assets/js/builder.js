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




var imgElement = document.querySelector('img');
var inputElement = document.querySelector('input');

//Input Handler
inputElement.onchange = function() {

    var reader = new FileReader();
    //FileReader Handler
    reader.onload = function(e) {
        console.log(e);
        imgElement.setAttribute('src', e.target.result);
    }

    //Read the file
    reader.readAsDataURL(inputElement.files[0]);
}