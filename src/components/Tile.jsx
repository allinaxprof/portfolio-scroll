
function Tile(props) {

  return (
    <a href={props.link} className="text-center">
        <div className="title-image 
            flex justify-center items-center 
            w-full mb-4 mx-auto 
            aspect-square overflow-hidden">
            <img src={props.pic} alt="picture" className='w-full h-full object-cover'></img>
        </div>
        <h2 className="tilt-title text-xl font-semibold mb-2">{props.title}</h2>
        <p className="tile-text">{props.description}</p>
    </a>
  )
}

export default Tile