function showResponse(type){

const box =
document.getElementById("responseBox");

if(type === "engine"){

box.innerHTML = `

<h2 style="color:#ffcc00;">
CHECK ENGINE LIGHT
</h2>

<p>

Usually safe for short driving
if steady yellow.

Possible causes:
<br><br>

• loose gas cap
<br>
• ignition issue
<br>
• emissions issue
<br>
• faulty sensor

<br><br>

Schedule diagnostic service soon.

</p>

`;

}

if(type === "oil"){

box.innerHTML = `

<h2 style="color:#ff3300;">
OIL PRESSURE WARNING
</h2>

<p>

PULL OVER SAFELY.
<br><br>

Low oil pressure may cause
catastrophic engine damage.

<br><br>

Turn engine OFF and
call for assistance.

</p>

`;

}

if(type === "battery"){

box.innerHTML = `

<h2 style="color:#ff3300;">
BATTERY WARNING
</h2>

<p>

Charging system problem detected.

<br><br>

Vehicle may shut off unexpectedly.

<br><br>

Drive directly to service.

</p>

`;

}

if(type === "temp"){

box.innerHTML = `

<h2 style="color:#ff3300;">
ENGINE TEMP WARNING
</h2>

<p>

ENGINE OVERHEATING DETECTED.

<br><br>

Pull over immediately.

<br><br>

Turn vehicle OFF and
allow engine to cool.

</p>

`;

}

}
