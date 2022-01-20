var flag = 0;
var testimonialText = document.getElementById("testi-text");
var devName = document.getElementById("name");
var designation = document.getElementById("designation");
var image = document.getElementById("avatar-img");

// console.log(testText);

var testTextArray = [" “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”","“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”"]
var nameArray = ["Tanya Sinclair","John Tarkpor"];
var designationArray = ["UX Engineer", "Junior Front-end Developer"];
var imagesArray = ["images/image-tanya.jpg","images/image-john.jpg"]

function buttonClick() {
    // alert("left clicked");

    debugger
    if(flag === 0){
        testimonialText.innerText = testTextArray[1];
        designation.innerHTML = designationArray[1];
        devName.innerText = nameArray[1];
        image.src = imagesArray[1];

        flag = 1;
    }else if(flag === 1){
        testimonialText.innerText = testTextArray[0];
        designation.innerHTML = designationArray[0];
        devName.innerText = nameArray[0];
        image.src = imagesArray[0];
       
        flag = 0;
    }

}