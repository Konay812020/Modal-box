var getmodal = document.getElementById("singupmodal");
var getbtnsingup = document.getElementById("btn-singup");
var getclose = document.querySelector(".btn-close");
var getbtnfullscrreen = document.querySelector("#btn-fullscreen");
var getbtnclosefullscreen = document.querySelector("#btn-closefullscreen");

getbtnsingup.addEventListener("click", function () {
    getmodal.style.display = "block";
});

getclose.addEventListener("click", function () {
    getmodal.style.display = "none";
});

window.onclick = function (e) {
    if (e.target === getmodal) {
        getmodal.style.display = "none";
    }
}


// fullscreen
var getde = document.documentElement;
console.log(getde);
getbtnfullscrreen.addEventListener("click", function () {
    if (getde.requestFullscreen) {
        getde.requestFullscreen(); //for standard
    } else if (getde.msRequestFullscreen) {
        getde.msRequestFullscreen();
    } else if (getde.webkitRequestFullscreen) {
        getde.webkiRequestFullscreen();
    }

    getbtnfullscrreen.style.display = "none";
    getbtnclosefullscreen.style.display = "inline-block";

});


getbtnclosefullscreen.addEventListener("click", function () {
    // document.exitFullscreen();
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    getbtnclosefullscreen.style.display = 'none';
    getbtnfullscrreen.style.display = "inline-block";
})

//ms=firefox
//webkit=all browser