import './index.css';

function Card(props) {

  return (
    <div className="mb-4 items-center card">
      <img src={props.pic} alt="logo" className="card-image"></img>
      <h2 className="card-text">{props.title}</h2>
    </div>
  )
}

export default Card