function loadPageData(){
    if (sessionStorage.GB == undefined) {
        document.getElementById("infoText").innerHTML = "Error, could not load page data"
    } else {
        var GB = sessionStorage.GB
        console.log(GB)
        location.hash=GB + "GB"

        var h = document.getElementById("header")
        var t = document.getElementById("infoText")

        h.innerHTML = "Download " + GB + "GB"
        t.innerHTML = "You have selected " + GB + "GB of ram to download onto your computer"
        }
}

function openConsole(){
    var console = window.open("console/index.html", "", "width=600,height=400,status=0,location=0,menubar=0");
}

function runProgBar() {
   document.getElementById("body").style.cursor="wait"
   document.getElementById("progStart").onclick = ""
    console.log("running progress bar...")
    //document.getElementById("progStart").onclick = ""
    var elem = document.getElementById("progBar")
    var num = document.getElementById("progNum")
    var width = 3;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 300) {
            clearInterval(id);
            document.getElementById("body").style.cursor="default"
            openConsole()
            document.getElementById("progStart").onclick = "runProgBar()"
        } else {
            width++; 
            elem.style.width = width + "px"; 
            num.innerHTML = Math.floor(width/3) + "%"
        }
    }
    
}
