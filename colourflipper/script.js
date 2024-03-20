const colortext=document.getElementById('color')
const but =document.getElementById('btn')
const wrap =document.getElementById('wrap')
const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',changeBackground)

function changeBackground(){
    let  hexcolour='#'
    for(let i=1;i<=6;i++){
        hexcolour  += randHex()
    }
    wrap.style.backgroundColor=hexcolour
    colortext.innerHTML = hexcolour
}
 function randHex(){
    let randomIndex=Math.floor(Math.random()*16)
     return hex[randomIndex]
 }

