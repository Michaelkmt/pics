const imgContainer = document.querySelector(".images");

let currentImage;

const createImage = function (imgPath) {

    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            let imgTag = document.createElement("img");
            imgTag.src = imgPath;
            console.log(imgTag)
            imgContainer.appendChild(imgTag);
            imgTag.addEventListener('load',function(){
                console.log("image is loaded");
                resolve(imgTag)
            })
            imgTag.addEventListener('error',function(){
                reject("we are unable to load the image at this moment ")
            })
            
            
        }, 1000);
    })
  
    
}

const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

createImage("./images/img-1.jpg")

.then((result) => {
    currentImage = result;
    return waitFor(1000)
}).then(() => {
    currentImage.style.display = "none";
    return createImage("./images/img-2.jpg")

}).then((result) => {
    currentImage = result;
    return waitFor(1000)
}).then(() => {
    currentImage.style.display = "none";
    return createImage("./images/img-3.jpg")})
    .catch(() => {
        console.log(`image circulation over`)
    })





//call createImage with then and catch



// create a wait function
// const waitFor = function (second) {


// }