document.addEventListener('DOMContentLoaded', () => {

    const video = document.getElementById("bg-video");

    if (video) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        video.addEventListener("play", () => {

            function updateColors() {
                if (video.paused || video.ended) return;

                canvas.width = 50;
                canvas.height = 50;

                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const frame = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

                let r = 0, g = 0, b = 0;
                let count = frame.length / 4;

                for (let i = 0; i < frame.length; i += 4) {
                    r += frame[i];
                    g += frame[i + 1];
                    b += frame[i + 2];
                }

                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);

                const luminance = (0.2126*r + 0.7152*g + 0.0722*b);
                const textColor = luminance < 120 ? "white" : "black";
                const shadowColor = luminance < 120 ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)";

                const dominant = `rgb(${r}, ${g}, ${b})`;
                const navBG = `rgba(${r}, ${g}, ${b}, 0.45)`;
                const headerBG = `rgba(${r}, ${g}, ${b}, 0.35)`;

                document.documentElement.style.setProperty('--dark-background', dominant);
                document.documentElement.style.setProperty('--nav-background', navBG);
                document.documentElement.style.setProperty('--text-color', textColor);

                document.querySelectorAll('#main-nav a, .main-logo').forEach(el => {
                    el.style.color = textColor;
                    el.style.textShadow = `0 0 10px ${shadowColor}`;
                });

                requestAnimationFrame(updateColors);
            }

            updateColors();
        });
    }

});
