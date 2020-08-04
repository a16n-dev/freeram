
var ram = 16
var delay = 1000
var code = [
">Initialising program",
">Establishing connection to server",
"23%..",
"48%...",
"67%.",
"83%..",
"95%...",
"100%.",
"Connection established",
"",
">Locating file directory...",
">Located file directory at download/ram/"+ram+"GB",
">Locating files on server..."
"install.exe found, 1 total",
"ramPlatform.exe found, 2 total",
"Amount"+ ram + "GB.ram found, 3 total",
"serverUpdates.exe found, 4 total",
"ramInit_.exec found, 5 total",
">Server scanned, files found, total: 5",
">packing..."
">compiling to ramInstall"+ GB + "GB.exe...",
"12%.",
"27%..",
"49%...",
"62%.",
"75%..",
"92%...",
"100% Complete"
]



var cLine = 0 
function runConsole(){
    code.reverse()

    var line1 = document.getElementById("1")
    var line2 = document.getElementById("2")
    var line3 = document.getElementById("3")
    var line4 = document.getElementById("4")
    var line5 = document.getElementById("5")
    var line6 = document.getElementById("6")
    var line7 = document.getElementById("7")
    var line8 = document.getElementById("8")
    var line9 = document.getElementById("9")
    var line10 = document.getElementById("10")
    var line11 = document.getElementById("11")
    var line12 = document.getElementById("12")
    var line13 = document.getElementById("13")
    var line14 = document.getElementById("14")
    var line15 = document.getElementById("15")
    var line16 = document.getElementById("16")
    var line17 = document.getElementById("17")
    var line18 = document.getElementById("18")
    var line19 = document.getElementById("19")
    var line20 = document.getElementById("20")
    var line21 = document.getElementById("21")

    console.log("preparing to print console text...")

    var run = setInterval(displayText,1000)
    
    function displayText(){
        if (cLine >= code.length){
            clearInterval(run)
        }else{
            if(cLine=>21){
                line1.innerHTML = code[0]
                cLine++
            }else{
                
            }

        }
    }
}

