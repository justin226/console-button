var consolediv = document.createElement("console");
consolediv.id = "console";
consolediv.innerHTML = "<div id=\"consoleheader\"><button id=\"closeconsole\">X</button></div><div id=\"consolehistory\"</div>&gt;<textarea id=\"cmd\">"
var consolecss = document.createElement("style");
consolecss.innerHTML = "#console{position:absolute;z-index:9;background-color:#f1f1f1;border:1px solid #d3d3d3;text-align:center}#consoleheader{padding:10px;cursor:move;z-index:10;background-color:#2196f3;color:#fff}";
document.head.appendChild(consolecss);
document.body.appendChild(consolediv);
dragElement(document.getElementById("console"));
document.getElementById("closeconsole").addEventListener("click", function(){
  document.getElementById("console").style.display = "none";
});
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
