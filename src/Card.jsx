import './index.css';

function Card(props) {

  return (
    <div className="mb-4 items-center border-white border-solid border-2 rounded-2xl p-4 w-[25vw] mx-auto">
      <img src={props.pic} alt="logo" className="card-image"></img>
      <h2 className="card-text">{props.title}</h2>
    </div>
  )
}

export default Card