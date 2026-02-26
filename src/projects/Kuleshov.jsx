import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Navbar from '../components/Navbar.jsx';

const twodozen = [
    { src: "/kuleshov/IMG_0138.JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0161.JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0138 - Copy (6).JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0138 - Copy (3).JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0166.JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0138 - Copy (2).JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0138 - Copy (5).JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0185.JPG", width: 3, height: 2 },
    { src: "/kuleshov/IMG_0138 - Copy.JPG", width: 3, height: 2 },
]

export default function Kuleshov() {

  return (
    <div>
        <Navbar color="white"></Navbar>
        <div className="assignment-container w-[70vw] mt-8 m-auto mb-8 text-center">
            <h1 className="text-3xl font-bold mb-8">Kuleshov Effect</h1>
            <div className="mb-16">
                <h2 className="text-2xl font-bold m-4">Pictured: Kristie</h2>
                <RowsPhotoAlbum photos={twodozen} />
            </div>
        </div>
    </div>
  )
}