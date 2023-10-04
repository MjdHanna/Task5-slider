const slide=document.querySelector(".image-slider");
const arrLift=document.querySelector(".arrow-lift");
const arrRight=document.querySelector(".arrow-right");

const imagess=["photo1.jpg","photo2.jpg","photo3.jpg"];
let id=0;
function Slider(id){
    slide.style.backgroundImage=`url(images/${imagess[id]})`;

}
arrLift.addEventListener("click",function(event){
    id--;
    if(id<0){
        id=imagess.length-1;
    }
    Slider(id);

})

arrRight.addEventListener("click",function(event){
    id++;
    if(id>imagess.length-1){
        id=0;
    }
    Slider(id);
})