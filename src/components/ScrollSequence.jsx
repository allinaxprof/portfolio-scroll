import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function ScrollSequence() {
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
    }

    // GSAP ScrollTrigger
    gsap.to(frameRef.current, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",
        snap: "frame",
        onUpdate: render,
        scrollTrigger: {
            trigger: ".sequence",
            start: "top top",
            end: "bottom+=300% top", //controls the scroll length
            scrub: true,
            pin: true,
            onLeave: self => {
                self.scroll(200);
                ScrollTrigger.update();
            },
        },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="sequence h-screen">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none -z-10 w-full h-screen"
      />
    </section>
  );
}