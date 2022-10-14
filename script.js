const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn (){
    lamp.src = './lampadaacesa.jpg';
}
function lampOff (){
    lamp.src ='./lampadaapagada.jpg';
}

turnOff.addEventListener ('click', lampOff);
turnOn.addEventListener ('click', lampOn);
