main();

function main() {
    const canvas = document.getElementById("backgroundCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    var mouseX;
    var mouseY;

    // Call event whenever mouse moves anywhere on document, then draw on canvas.
    // This lets the canvas be placed below the content, but still be interactive
    document.addEventListener("mousemove", function(event) {
        [mouseX, mouseY] = getMouseLocation(canvas, event);
        draw(canvas, context, mouseX, mouseY);
    });
}

function getMouseLocation(canvas, event) {
    var x = event.clientX;
    var y = event.clientY;
    return [x,y];
}

function draw(canvas, context, mouseX, mouseY) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();

    // Top gradient
    const gradientTop = context.createLinearGradient(0, 0, 0, Math.min(canvas.height/8, mouseY/4))

    gradientTop.addColorStop(0, "#4F4B50");
    gradientTop.addColorStop(0.5, "#4F4B50");
    gradientTop.addColorStop(1, "black");
    context.fillStyle = gradientTop;
    context.fillRect(0, 0, canvas.width, Math.min(canvas.height/8, mouseY/4));
}
