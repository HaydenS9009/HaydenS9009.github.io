main();

function main() {
    const canvas = document.getElementById("backgroundCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    // Move origin point to center of screen
    context.translate(canvas.width/2, canvas.height/2)

}
