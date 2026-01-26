import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';
import Pfp from '../assets/Pfp.png';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 8;

//maintain original aspect ration
function drawImageCover(ctx, img, canvas) {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;

  let drawWidth, drawHeight, x, y;

  if (imgRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = img.width * (canvas.height / img.height);
    x = (canvas.width - drawWidth) / 2;
    y = 0;
  } else {
    drawWidth = canvas.width;
    drawHeight = img.height * (canvas.width / img.width);
    x = 0;
    y = (canvas.height - drawHeight) / 2;
  }

  ctx.drawImage(img, x, y, drawWidth, drawHeight);
}

export default function ScrollSequence2() {

    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const frameRef = useRef({ frame: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        window.addEventListener("resize", resize);
        resize();

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sequence",
                endtrigger: "bottom",
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: true,
                onLeave: self => {
                    self.scroll(200);
                    ScrollTrigger.update();
                },
            }
        });

        // Preload images
        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
            imagesRef.current.push(img);
        }

        imagesRef.current[0].onload = render;

        function render() {
            const img = imagesRef.current[frameRef.current.frame];
            if (!img) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawImageCover(ctx, img, canvas);

            //change links and logos based on frame
            if ([0,1,2].includes(frameRef.current.frame)) {
                document.querySelector(".logoLink").href = "/QA";
                document.querySelector(".logo").src = reactLogo;
                document.querySelector(".label").innerText = "QA";
            } else if ([3,4,5].includes(frameRef.current.frame)) {
                document.querySelector(".logoLink").href = "/";
                document.querySelector(".logo").src = Pfp;
                document.querySelector(".label").innerText = "Home";
            } else {
                document.querySelector(".logoLink").href = "/Intro";
                document.querySelector(".logo").src = viteLogo;
                document.querySelector(".label").innerText = "Intro";
            }
        }

        //Failure
        //tl.to(".logo", {
        //    src: (frameRef.current.frame % 2 === 0) ? {reactLogo} : {viteLogo},
        //});

        tl.to(frameRef.current, {
            frame: TOTAL_FRAMES - 1,
            ease: "none",
            snap: "frame",
            onUpdate: render,
        });

        return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
        window.removeEventListener("resize", resize);
        };

    }, []);

    return (
    <div className="sequence h-screen flex place-items-center">
      <a href="/Intro" className="logoLink z-10 mx-[75vw] items-center absolute">
        <img src={viteLogo} alt="logo" className="logo z-10 w-16"></img>
        <p className="label text-black">Intro</p>
      </a>
      <canvas
        ref={canvasRef}
        className="fixed w-full h-screen z-0"
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  );
}