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
  { src: "/twodozen/twodozen-final-23.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-05.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-18.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-13.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-14.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-21.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-15.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-16.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-17.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-19.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-20.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-09.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-12.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-08.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-07.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-06.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-22.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-10.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-11.jpg", width: 3, height: 4 },
  { src: "/twodozen/twodozen-final-04.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-02.jpg", width: 4, height: 3 },
  { src: "/twodozen/twodozen-final-24.jpg", width: 4, height: 3 },
]

const abstracts = [
    { src: "/abstracts/abstracts-final-10.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-11.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-12.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-07.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-08.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-09.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-05.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-04.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-06.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-01.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-02.jpg", width: 4, height: 3 },
    { src: "/abstracts/abstracts-final-03.jpg", width: 4, height: 3 },
]

const steps = [
    { src: "/steps/steps-final-12.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-11.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-10.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-09.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-08.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-07.jpg", width: 4, height: 3 },
    { src: "/steps/steps-final-06.jpg", width: 4, height: 3 },
    { src: "/steps/steps-final-05.jpg", width: 3, height: 4 },
    { src: "/steps/steps-final-04.jpg", width: 4, height: 3 },
    { src: "/steps/steps-final-03.jpg", width: 4, height: 3 },
    { src: "/steps/steps-final-02.jpg", width: 4, height: 3 },
    { src: "/steps/steps-final-01.jpg", width: 4, height: 3 },
]

export default function Assignment1() {

  return (
    <div className="assignment-container w-[70vw] mt-8 m-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Assignment 1</h1>

        <div className="mb-16">
            <h2 className="text-2xl font-bold m-4">Two Dozen</h2>
            <RowsPhotoAlbum photos={twodozen} />
            <p className="text-sm italic mt-4">
                Taken at by the Oculus at the World Trade Center.
            </p>
        </div>
        
        <div className="mb-16">
            <h2 className="text-2xl font-bold m-4">Twelve Abstracts</h2>
            <RowsPhotoAlbum photos={abstracts} />
            <details>
                <summary className="text-sm italic mt-4">Click to reveal item</summary>
                <p className="text-sm italic mt-4">
                    Yellow post-it notes.
                </p>
            </details>
        </div>

        <div className="mb-16">
            <h2 className="text-2xl font-bold m-4">Steps</h2>
            <RowsPhotoAlbum photos={steps} />
            <p className="text-sm italic mt-4">
                Taken at every intersection from near the NYC Supreme Court through Chinatown.
            </p>
        </div>

        <div className="mb-16">
            <h2 className="text-2xl font-bold m-4">Narrative Photography</h2>
            <img src="/narrative-final.jpg" className='w-100 m-auto' alt="Unsupported image"></img>
            <details>
                <summary className="text-sm italic mt-4">Click for explanation</summary>
                <p className="text-sm text-left italic mt-4 w-[40vw] m-auto">
                    A student has just fallen asleep while working all day on homework from the perspective of another person.
                    Note the multiple drinks, pen rolling away from the hand, and computer not yet asleep (and almost out of battery).
                </p>
                <p className="text-sm text-left italic mt-4 w-[40vw] m-auto">
                    3-point light: point light from the computer, backlight from my roommate's vanity mirror across from the computer, and 
                    a very weak fill light from my roommates lamp placed about 45 degrees behind me to the right.
                </p>
            </details>
        </div>

        <div>
            <p>&#169; Allina Xiao</p>
        </div>
        
    </div>
  )
}