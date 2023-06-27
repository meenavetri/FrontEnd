
let ampm= document.getElementById('ampm')

function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours();
    let min = addzero(dateTime.getMinutes());
    let sec= addzero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12;
       ampm.innerHTML='PM';
    }
    else{
        ampm.innerHTML='AM';
    }
    document.getElementById('hours').innerHTML =addzero(hr);
    document.getElementById('minutes').innerHTML =min ; 
    document.getElementById('seconds').innerHTML =sec ; 
}
function addzero(num){
    return num<10?"0"+num:num
}


setInterval(displayTime,500)