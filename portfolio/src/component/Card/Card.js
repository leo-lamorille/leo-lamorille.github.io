import './Card.scss';

export const Card = ({title, content, time, src}) => {
    
    return (
        <>
            <div className="card-container">
                <div className="card-div">
                    <div className="card-front">
                        <div className="title">
                            <h1>{title}</h1>
                        </div>
                        <div className="body">
                            <p>{content}</p>
                            <br/>
                            <p className="time">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}