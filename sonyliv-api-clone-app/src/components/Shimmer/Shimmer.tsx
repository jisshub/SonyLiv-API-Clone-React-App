import './Shimmer.css';

const Shimmer = () => {
    return (
        <>
            {
                Array(20)
                .fill("")
                .map((e)=>(
                    <div
                        key={''}
                        className="shimmer-card"
                    >
                    </div>
                ))
            }
        </>
    )
}

export default Shimmer