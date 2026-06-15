export default function CenteredCard(props) {
    return (
        <div className="gap-10 mb-4 text-center">
            <div className="description-container text-center mb-4">
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