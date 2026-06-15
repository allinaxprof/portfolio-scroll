export default function WideCard(props) {
    return (
        <div className="grid grid-cols-[1fr_1fr] gap-10 mb-8">
            <div className="description-container text-left">
                <h1 className="text-xl font-bold mb-5">
                    {props.title}
                </h1>
                <p className="description">
                    {props.description}
                </p>
            </div>
            <img src={props.pic} alt="y2k design" className='w-full h-auto mb-8'></img>
        </div>
    )
}