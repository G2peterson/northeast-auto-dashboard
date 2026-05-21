function showResponse(type){

const box = document.getElementById("responseBox");

if(type === "engine"){

box.innerHTML = `
<h2>CHECK ENGINE</h2>
<p>
Usually safe to drive briefly if steady yellow.
Possible sensor, ignition, or emissions issue.
Schedule diagnostic service soon.
</p>
`;

}

if(type === "oil"){

box.innerHTML = `
<h2>OIL PRESSURE WARNING</h2>
<p>
PULL OVER SAFELY.
Low oil pressure can destroy the engine quickly.
Turn vehicle off and call for assistance.
</p>
`;

}

if(type === "battery"){

box.innerHTML = `
<h2>BATTERY WARNING</h2>
<p>
Charging system problem detected.
Vehicle may shut off soon.
Limit driving and head to service immediately.
</p>
`;

}

if(type === "temp"){

box.innerHTML = `
<h2>ENGINE TEMP WARNING</h2>
<p>
PULL OVER SAFELY.
Engine overheating detected.
Turn vehicle off and allow cooling before continuing.
</p>
`;

}

}
