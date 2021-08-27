Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
   
}

console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded() {
    console.log("the model is loaded");
}

function check() {
    img = document.getElementById("captured_image")
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("results_1").innerHTML = results[0].label;
        document.getElementById("results_2").innerHTML = results[1].label;
        document.getElementById("results_3").innerHTML = results[2].label;
    }
}