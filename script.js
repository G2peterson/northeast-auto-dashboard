const responses = {

engine: {
title: "Check Engine Warning",
text: "Possible sensor, ignition, fuel, or emissions issue detected. If flashing, stop driving and call immediately."
},

oil: {
title: "Oil Pressure Warning",
text: "Low oil pressure may damage your engine. Pull over safely and check oil levels."
},

battery: {
title: "Battery Warning",
text: "Charging system issue detected. Your vehicle may shut off if the alternator fails."
},

temp: {
title: "Engine Temperature Warning",
text: "Engine may be overheating. Pull over safely and allow the engine to cool."
}

};

function showResponse(type){

document.getElementById("responsePanel").innerHTML = `

<h2>${responses[type].title}</h2>

<p>${responses[type].text}</p>

<div class="button-row">

<a href="tel:3305932277"
class="action-button call">
Call Shop
</a>

<a href="sms:3305932277"
class="action-button text">
Text Shop
</a>

<a href="tel:3305932277"
class="action-button tow">
Tow Help
</a>

</div>

`;

}
