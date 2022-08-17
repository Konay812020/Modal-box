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

    addDatatoDb("fullscreen", 1);
    getDatafromDb("fullscreen");

    function my_onkeydown_handler(event) {
        switch (event.keyCode) {
            case 116: // 'F5'
                event.preventDefault();
                event.keyCode = 0;
                window.status = "F5 disabled";
                // console.log(event.keyCode);
                break;

        }
    }
    document.addEventListener("keydown", my_onkeydown_handler);

    if (getde.requestFullscreen) {
        getde.requestFullscreen(); //for standard
    } else if (getde.msRequestFullscreen) {
        getde.msRequestFullscreen();
    } else if (getde.webkitRequestFullscreen) {
        getde.webkiRequestFullscreen();
    }

    getbtnfullscrreen.style.display = 'none';
    getbtnclosefullscreen.style.display = 'inline-block';
});


getbtnclosefullscreen.addEventListener("click", function () {

    addDatatoDb("closefullscreen", 0);
    getDatafromDb("closefullscreen");
    // document.exitFullscreen();
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    getbtnfullscrreen.style.display = 'inline-block';
    getbtnclosefullscreen.style.display = "none"
});

var addDatatoDb = (key, value) => {

    localStorage.setItem(key, value);


};
var getDatafromDb = (key) => {
    let str = localStorage.getItem(key);

    // return str;
    if (str == 1) {
        addDatatoDb("fullscreen", 1);
        addDatatoDb("closefullscreen", 0);


    } else {
        addDatatoDb("fullscreen", 0);
        addDatatoDb("closefullscreen", 1);
    }

};
var removeDb = (key) => {
    localStorage.removeItem(key);
};

//ms=firefox
//webkit=all browser