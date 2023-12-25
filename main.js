function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aepe2ctWa/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;

function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) +1;
        random_number_g=Math.floor(Math.random() * 255) +1;
        random_number_b=Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML="I CAN HEAR- "+ results[0].label;
        document.getElementById("result_count").innerHTML='detected dog'+dog+'detected cat'+cat;
        document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById('image1');

        if(results[0].label=="meowing") {
            img1.src='CAT IMAGE.png';
            cat=cat+1;
        }
        else if(results[0].label=="barking") {
            img1.src='DOG IMAGE.jpeg';
            dog=dog+1;
        }
        else {
            img1.src='EAR IMAGE.png';
        }
       
    }
 }

