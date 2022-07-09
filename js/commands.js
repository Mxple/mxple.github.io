
function man(p) {
    if (p != "") {
        addLine("Error: Invalid parameter: \'"+p+"\'","error",0);
        return;
    }
    addLine("A list of available commands:<ul>"+getList(commandList.sort(),"command")+"</ul>","normal",0);
}

function getList(arr, style) {
    if (typeof style == "string") {
        style = new Array(arr.length).fill(style);
    }
    var output = "";
    for (let i=0; i<arr.length; i++) {
        output += "<li class=\""+style[i]+"\">"+arr[i]+"</li>";
    }
    return(output);
}

function echo(p) {
    addLine(p, "normal");
}

function clear(p) {
    setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
    }, 1);
}

function reboot(p) {
    location.reload();
}


////////////////////////
// neofetch eye candy //
////////////////////////
// gets browser name using userAgent string
var browserName = (function (agent) {
    switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());

// gets time spent on site using performance.now() and returns it in
// a "_h _m _s" format
function getElapsedTime() {
    let s = Math.floor(performance.now()/1000);
    let hrs = Math.floor(s/3600);
    s %= 3600;
    let mins = Math.floor(s/60);
    s %= 60;
    return (hrs+"h "+mins+"m "+s+"s");
}

function neofetch(p) {
addLine("\
       .:'      "+user+"@rinOS<br>\
    _ :'_       <b>os</b>     rinOS<br>\
 .'`_`-'_``.    <b>host</b>   "+browserName+"<br>\
:________.-'    <b>kernel</b> 4.2.0<br>\
:_______:       <b>uptime</b> "+getElapsedTime()+"<br>\
 :_______`-;    <b>pkgs</b>   "+Object.keys(FS.bin).length+"<br>\
  `._.-._.'     <b>memory</b> "+(10000+Math.floor(Math.random()*22000))+" / 32768M<br>\
","rainbow");
}
