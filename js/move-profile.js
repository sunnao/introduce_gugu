const movingImg = document.querySelector("#profileImg");
const cameraFrame = document.querySelector("#cameraFrame");
const frame = document.querySelector(".frameDiv");
const bubbleArea = document.querySelector("#bubbleArea");

function takePhoto(){
    cameraFrame.animate({
                    opacity: [0, 1]}, 
                    {
                    duration : 500,
                    fill:"forwards",});
}
function closer(){
    movingImg.animate ({
                transformOrigin :"20% 30%",
                transform:['scale(1)', 'scale(1.5)']},
                {
                    duration: 1000, 
                    easing: 'ease',
                    fill: "forwards",
                    delay: 300});
}
function bubbleShow(){
    bubbleArea.animate({
                    opacity: [0, 1]}, 
                    {
                    duration : 300,
                    easing: "ease",
                    fill:"forwards",
                    delay: 500});
}
function takeoffPhoto(){
    cameraFrame.animate({
        opacity: [1, 0 ]}, 
        {
        duration : 100,
        fill:"forwards"});
}
function faraway() {
    movingImg.animate ({
        transformOrigin :"50% 50%",
        transform:['scale(1.5)', 'scale(1)']},
        {
            duration: 1000, 
            easing: 'ease',
            fill: "forwards",
            delay: 100})
}
function bubbleOff(){
    bubbleArea.animate({
                    opacity: [1, 0]}, 
                    {
                    duration : 100,
                    fill:"forwards"});
}
frame.addEventListener("mouseover",takePhoto)
frame.addEventListener("mouseover",closer)
frame.addEventListener("mouseover",bubbleShow)
frame.addEventListener("mouseout",takeoffPhoto)
frame.addEventListener("mouseout",faraway)
frame.addEventListener("mouseout",bubbleOff)

