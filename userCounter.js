var userCount = Math.floor((Math.random() * 4000) + 8000);
window.setInterval(function () {
    var n = Math.floor((Math.random() * 2) + 1);
    if (n == 1) {
        userCount += Math.floor((Math.random() * 5) + 1);
    }
    document.getElementById("userCount").innerHTML = userCount;
}, 500);