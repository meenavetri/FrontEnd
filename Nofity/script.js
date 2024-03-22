// selecting button,overlay,popup
var overlay=document.querySelector(".overlay")
var popupbox= document.querySelector(".popup")
var plusbutton=document.getElementById("addpopup")
window.stop()

plusbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})
//select cancel button
var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})
//select delete button
// var deletebtn=document.getElementById("deletebutton")
// deletebtn.addEventListener("click",function(event){
//     event.target.parentElement.remove();
// })
// select sample
var samplebox=document.querySelector(".sample")
var addbutton=document.getElementById("add")
var notes=document.getElementById("notetitleinput")
var date=document.getElementById("dateofevent")
var des=document.getElementById("description")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","popupsample")
    div.innerHTML=`<h1>${notes.value}</h1>
    <h5>${date.value}</h5>
    <p>${des.value}</p>
    <button onclick="deleteit(event)">Delete</button>`
    samplebox.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})
function deleteit(event){
    event.target.parentElement.remove()
}