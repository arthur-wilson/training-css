const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseenter", function() {
        square.style.animationName = "dancingSquaresIn";
        square.style.animationDuration = "2s";

        setTimeout(function(){
            square.style.animationName = "";
            square.style.animationDuration = "";
        }, 2000);
    });
});