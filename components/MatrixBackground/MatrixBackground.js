// components/MatrixBackground/MatrixBackground.js
export function initMatrixBackground(canvasId = "matrixCanvas") {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const chars = "R I C K";
    const charArr = chars.split("");

    const fontSize = 16;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = canvas.width / fontSize;
        drops = Array(Math.floor(columns)).fill(1);
    }

    function draw() {
        ctx.fillStyle = "rgba(255, 238, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgb(90, 135, 45)";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = charArr[Math.floor(Math.random() * charArr.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    resize();
    window.addEventListener("resize", resize);

    setInterval(draw, 35);
}
