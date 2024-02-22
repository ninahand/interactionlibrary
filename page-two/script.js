var svgButton = document.getElementById('svgButton');
var timeleft = 90;
var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        svgButton.style.display = "block";
    }
}, 1000);
