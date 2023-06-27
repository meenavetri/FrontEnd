const button=document.querySelector('button')
button.addEventListener('click',displayStats)
const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population=0 , literacyRate=0, language=''
function displayStats(){
    //console.log('click')
    
    switch(city){
        case'Bengaluru':
            population=8443675
            literacyRate=88.71
            language='Kanaada'
            break
        case'Chennai':
            population=9330581
            literacyRate=91.71
            language='Tamil'
            break
        case'Delhi':
            population=5675443675
            literacyRate=92.71
            language='Hindi'
            break
        case'Mumbai':
            population=8443675
            literacyRate=88.71
            language='Marathi'
            break
            
    }

    let text =`The Indian city of ${city} has a population of ${population},literacyrate of ${literacyRate} and language used is ${language} `
    let resultdiv = document.createElement('div')
    resultdiv.id ='result'
    document.getElementById('wrap').appendChild(resultdiv)
    document.getElementById('result').innerHTML=text

}