const backgroundArea = document.querySelector("body");

let backgroundDegrees = 0;

setInterval(function() {
    backgroundDegrees = backgroundDegrees + 1;

    console.log(backgroundDegrees);

    backgroundArea.style.backgroundImage = `
        linear-gradient(${backgroundDegrees}deg, rgb(152, 241, 253), rgb(49, 230, 58))
    `;

    if(backgroundDegrees > 359) {
        backgroundDegrees = 0;
    }
}, 25);