import { RowsPhotoAlbum } from "react-photo-album";
import Navbar from '../components/Navbar.jsx';
import WideCard from '../components/WideCard.jsx';

export default function UtaWelcomeHome() {

    const cover = {
        proof: '/utaWelcome/IMG_2520.jpeg',
        first: '/utaWelcome/IMG_2536.jpg',
        second: '/utaWelcome/IMG_2545.jpg',
        third: '/utaWelcome/IMG_2555.jpg',
        fourth: '/utaWelcome/IMG_2556.jpg'
    }

    const peopole = {
        proofrich: '/utaWelcome/IMG_2500.jpeg',
        proofbutterfly: '/utaWelcome/IMG_2502.jpeg',
        prooftourist: '/utaWelcome/IMG_2503.jpeg',
        proofnerd: '/utaWelcome/IMG_2504.jpeg',
        proofparty: '/utaWelcome/IMG_2505.jpeg',
        rich: '/utaWelcome/rich.jpeg',
        butterfly: '/utaWelcome/socialbutterfly.jpeg',
        tourist: '/utaWelcome/tourist.jpeg',
        nerd: '/utaWelcome/nerd.jpeg',
        party: '/utaWelcome/party.jpeg'
    }

    return (
        <div>
            <Navbar />
            <div className='page-wrapper w-[75vw] m-auto text-center'>
                <a href='https://nyunews.com/underthearch/2025/08/11/welcome-home-class-of-2029/'>
                    <h1 className='text-3xl font-bold underline hover:text-red-600 mt-16'>UTA Welcome Home</h1>
                </a>
                <p className='text-sm text-gray-700 mt-4'>
                    Allina Xiao, Multimedia Editor
                </p>
                <p className='text-sm text-gray-700'>
                    Illustrations for the Fall 2025 issue of UTA Welcome Home
                </p>

                <div className='people-header ml-20 text-left mb-4 mt-10'>
                    <h2>My illustrations for 
                        <a className='text-red-600 underline hover:text-red-900' target="_blank" rel="noopener noreferrer" href='https://nyunews.com/underthearch/welcome-home/08/11/2025/students-youll-meet-at-nyu-welcome/'> "5 types of students you’ll meet at NYU Welcome" </a>
                        by Annie Emans
                    </h2>
                </div>

                <div className='people-grid grid grid-cols-5 gap-4 mt-10'>
                    <img src={peopole.proofrich} alt="Proof Rich" />
                    <img src={peopole.proofbutterfly} alt="Proof Butterfly" />
                    <img src={peopole.prooftourist} alt="Proof Tourist" />
                    <img src={peopole.proofnerd} alt="Proof Nerd" />
                    <img src={peopole.proofparty} alt="Proof Party" />
                </div>

                <p className='text-sm text-gray-600 mt-4'>
                    Allina Xiao for WSN
                </p>

                <div className='people-grid grid grid-cols-5 gap-4 mt-10'>
                    <img src={peopole.rich} alt="Rich" />
                    <img src={peopole.butterfly} alt="Butterfly" />
                    <img src={peopole.tourist} alt="Tourist" />
                    <img src={peopole.nerd} alt="Nerd" />
                    <img src={peopole.party} alt="Party" />
                </div>

                <p className='text-sm text-gray-600 mt-4'>
                    Allina Xiao for WSN
                </p>
                
                <div className='wide-card-container w-[50vw] m-auto grid grid-cols-2 gap-8 mb-10 mt-20'>
                    <div className='description-container text-left'>
                        <h2 className='text-xl font-bold mb-4'>Cover Sketch</h2>
                        <p className='description mb-4'>
                            My initial sketch for the UTA Welcome Home project was done in less than
                            an hour after I came back from my graphic design internship. Due in 7 days, I remember
                            feeling immense pressure.  Beyond the most important part
                            of the magazine, I was also working on photos for Lauren and Dani and Siobhán's pieces, 
                            <a className='text-red-600 underline hover:text-red-900' href="https://nyunews.com/underthearch/welcome-home/2025/08/11/joining-clubs" target="_blank" rel="noopener noreferrer"> Sidney's illustration</a>,
                            and character illustrations for the "people you meet at NYU" piece.
                        </p>
                        <p className='description'>
                            I wanted to include bright and bolder-than-real-life colors to stand out
                            and capture the feeling when I was a first-year in NYC and discovering
                            what the city had to offer.
                        </p>
                    </div>
                    <img src={cover.proof} alt="Proof" className='w-full h-[30vw] object-cover' />
                </div>

                <div className='photo-album grid grid-cols-4 gap-4'>
                    <img src={cover.first} alt="First" />
                    <img src={cover.second} alt="Second" />
                    <img src={cover.third} alt="Third" />
                    <img src={cover.fourth} alt="Fourth" />
                </div>

            </div>

        </div>
    );
}