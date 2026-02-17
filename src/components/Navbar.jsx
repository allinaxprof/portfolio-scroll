

export default function Navbar(color) {

    switch (color) {
        case "black":
            return (
                <nav className="p-4 bg-black text-white">
                    <a href="/" className="">Home</a>
                    <a href="/Intro" className="ml-4">Projects</a>
                    <a href="/About" className="ml-4">Art</a>
                    <a href="/Blog" className="ml-4">Blog</a>
                </nav>
            );

        case "white":
            return (
                <nav className="p-4 bg-white text-black">
                    <a href="/" className="">Home</a>
                    <a href="/Intro" className="ml-4">Projects</a>
                    <a href="/About" className="ml-4">Art</a>
                    <a href="/Blog" className="ml-4">Blog</a>
                </nav>
            );

    }
    return (
        <nav className="p-4">
            <a href="/" className="">Home</a>
            <a href="/Intro" className="ml-4">Projects</a>
            <a href="/About" className="ml-4">Art</a>
            <a href="/Blog" className="ml-4">Blog</a>
        </nav>
    );
};