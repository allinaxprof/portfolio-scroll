import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

/*
const photos = [
  { src: "/image1.jpg", width: 800, height: 600 },
  { src: "/image2.jpg", width: 1600, height: 900 },
];
*/

/*
const images = import.meta.glob("/src/assets/twodozen/twodozen-final-*.jpg", 
    { 
        eager: true ,
        query: { metadata: true },
    }
);

const twodozen = Object.values(images).map(img => ({
  src: img.default,
  width: img.default.metadata.width || 4,
  height: img.default.metadata.height || 3,
}));
*/

const twodozen = [
  { src: "/twodozen/twodozen-final-01.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-03.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-21.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-05.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-18.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-13.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-15.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-14.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-16.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-17.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-23.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-19.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-20.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-08.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-09.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-12.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-07.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-06.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-22.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-10.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-11.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-04.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-02.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-24.jpg", width: 4, height: 3 },
]

//console.log(images, twodozen);

export default function Assignment1() {

  return (
    <div className="assignment-container w-[70vw] mt-8 m-auto gap-y-4 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-10">Assignment 1</h1>

        <h2 className="text-2xl font-bold m-4">Two Dozen</h2>
        <RowsPhotoAlbum photos={twodozen} />
        
        <h2 className="text-2xl font-bold m-4">Twelve Abstracts</h2>

        
        <h2 className="text-2xl font-bold m-4">Steps</h2>

        
        <h2 className="text-2xl font-bold m-4">Narrative Photography</h2>
        
    </div>
  )
}