
function Tile(props) {

  return (
    <a href="/QA" className="text-center">
        <div className="title-image 
            flex justify-center items-center 
            w-auto mb-4 mx-auto 
            aspect-square object-fit overflow-hidden">
            <img src={props.pic} alt="picture" className=''></img>
        </div>
        <h2 className="tilt-title text-xl font-semibold mb-2">{props.title}</h2>
        <p className="tile-text">{props.description}</p>
    </a>
  )
}

export default Tile