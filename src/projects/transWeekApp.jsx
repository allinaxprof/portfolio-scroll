import Navbar from '../components/Navbar.jsx';
import WideCard from '../components/WideCard';
import CenteredCard from '../components/CenteredCard';

import bold from '/transaware/transawareweek-bold.jpeg';
import bouncy from '/transaware/transawareweek-bouncy.jpeg';
import minimal from '/transaware/transawareweek-minimal.jpeg';
import y2k from '/transaware/transawareweek-y2k.jpeg';

export default function TransWeekApp() {
    return (
        <div>
            <Navbar color="white"></Navbar>
            <div className="assignment-container w-[70vw] mt-8 m-auto mb-8 text-center">
                <h1 className="text-3xl font-bold mb-8">
                    Trans Awareness Week Banner Designs
                </h1>
                <img src={y2k} alt="y2k design" className='w-full h-auto mb-8'></img>
                <div className="designs-container grid grid-cols-3 gap-10 mt-8 mb-8">
                    <img src={bold} alt="bold design" className='w-full h-auto'></img>
                    <img src={bouncy} alt="bouncy design" className='w-full h-auto'></img>
                    <img src={minimal} alt="minimal design" className='w-full h-auto'></img>
                </div>
                <p className="date mb-8 text-left">
                    Allina Xiao - July 2025
                </p>
                <div className="brief grid grid-cols-[1fr_3fr] content-center gap-10 mb-8 text-left">
                    <h1 className="font-semibold text-xl">
                        THE BRIEF:
                    </h1>
                    <p className="description">
                    For my NYU LGBTQ+ Center Application, make an eyecatching and informative banner for the NYU community to raise awareness 
                    for Trans Awareness Week.  The Trans Week promotional assets would be designed with this banner in mind.
                    </p>
                </div>
                <div>
                    <WideCard 
                        title="Bold Design"
                        pic={bold}
                        description="The black text here is bold and eyecatching, readable from across the room in a
                        neutral but modern sans-serif.  I added an uncohesive texture to the swirly background, trying to add
                        a pop of color and energy without being too distracting."
                    />
                    <WideCard 
                        title="Maximal Design"
                        pic={bouncy}
                        description="I played around with emphasizing the words, with fun icons that could easily be turned
                        into stickers and motifs for the rest of the promotional materials.  The colors are easy to work with, with the
                        inclusion of both white and black."
                    />
                    <WideCard 
                        title="Minimal Design"
                        pic={minimal}
                        description="I began taking inspiration from the Y2K resurgence.  Note the heavy grain on the background,
                        super thin lines, star shaped icons, and vague cyber theme."
                    />
                    <CenteredCard 
                        title="FINAL SUBMISSION: Y2K Design"
                        pic={y2k}
                        description="I went full-send with the Frutiger Aero, Cyber Y2K, and overall retro-futuristic styles 
                        within the icons and layouts of the text.  I love the funky typography here and how the Trans Flag
                        colors almost blend into the design instead of trying to compete with the text.  Feedback from the 
                        LGBTQ+ Center was that this design could be more accessible, and I woud have solved this by removing
                        or simplifying some icons.  Although I was accepted to the internship, due to scheduling conflicts 
                        I declined the offer."
                    />
                </div>
            </div>
        </div>
    )
}