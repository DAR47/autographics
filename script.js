sliderLeft = document.querySelector("#btnLeft");
sliderRight = document.querySelector("#btnRight");
slider = document.querySelector(".worksSliderMove"); 
sliderMoove = 0; 
sliderCount = 0; 
let container = document.querySelector('.worksSliderDots');
slidesCount = document.querySelectorAll('.worksSlide').length ;
whileCount = document.querySelectorAll('.worksSlide').length
currentSlide = 1;


    

for (let i = 1; i < whileCount + 1; i++) {
  container.insertAdjacentHTML('beforeend', '<div class="worksSliderDot" id="dot' + i + '"' + '></div>');
}
console.log(sliderCount + slidesCount)
document.querySelector("#dot1").style.backgroundColor = "#dd2323"
console.log(document.querySelectorAll('.worksSlide').length)
sliderRight.addEventListener("click", function(){
    if (sliderCount > -document.querySelectorAll('.worksSlide').length + 1) {
        whileCount = document.querySelectorAll('.worksSlide').length
        console.log("\\\\\\\\\\\\\\\\\\\\\\\\");
        console.log(sliderCount);
        currentSlide ++
        sliderCount -= 1;
        sliderMoove -= 35;
        slider.style.transform = "translateX(" + sliderMoove + "vmax)";
        while(whileCount > 0){
            if (whileCount != currentSlide){
                document.querySelector("#dot" + whileCount).style.backgroundColor = "#fff";
                
                console.log(whileCount + "," + currentSlide)
            }
            
            whileCount -= 1;
            
        }
        document.querySelector("#dot" + currentSlide ).style.backgroundColor = "#dd2323"
        
    }
    
})
sliderLeft.addEventListener("click", function(){
   

    if (sliderCount < 0) {
        whileCount = document.querySelectorAll('.worksSlide').length
        console.log("\\\\\\\\\\\\\\\\\\\\\\\\")
        currentSlide --
        sliderCount += 1;
        sliderMoove += 35;
        slider.style.transform = "translateX(" + sliderMoove + "vmax)";
        while(whileCount > 0){
            if (whileCount != currentSlide){
                document.querySelector("#dot" + whileCount).style.backgroundColor = "#fff";
                console.log(whileCount + "," + currentSlide)
            }
            whileCount -= 1;
            
        }
        document.querySelector("#dot" + currentSlide ).style.backgroundColor = "#dd2323"
    }
    
})
document.querySelector('body').addEventListener("click", function(event){
     console.log(sliderCount);
     console.log(event.target.id);
     currentSlideId = event.target.id;
     whileCount = document.querySelectorAll('.worksSlide').length
     if(currentSlideId.slice(0, -1) == "dot"){
        currentSlide = Number(currentSlideId.slice(-1))
        slider.style.transform = "translateX(" + ((Number(currentSlideId.slice(-1)) - 1) * -35) + "vmax)";
        while(whileCount > 0){
            if (whileCount != currentSlide){
                document.querySelector("#dot" + whileCount).style.backgroundColor = "#fff";
                console.log(whileCount + "," + currentSlide)
            }
            whileCount -= 1;
            document.querySelector("#dot" + currentSlideId.slice(-1)).style.backgroundColor = "#dd2323"
        }
        sliderCount = 1 - Number(currentSlideId.slice(-1))
     }
     
})