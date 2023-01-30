import { useEffect, useState } from 'react';
import './Card.scss';

export const Card = ({title, content, time, color, src}) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        switch (color) {
            case 'ocean':
                setStyle({background: 'linear-gradient(90deg, rgba(3,4,94,1) 0%, rgba(3,4,94,1) 100%)'});
                return;
            case 'whynter':
                setStyle({background: 'linear-gradient(90deg, rgba(94,96,206,1) 0%, rgba(86,207,225,1) 50%,  rgba(128,255,219,1) 100%)'});
                return;
            case 'wood':
                setStyle({background: 'linear-gradient(90deg, rgba(82,183,136,1) 0%, rgba(183,228,199,1) 50%, rgba(97,161,119,1) 100%)'});
                return;
            default:
                setStyle({background: 'linear-gradient(90deg, rgba(193,2,86,1) 0%, rgba(0,117,255,1) 100%)'});
                return;
        };
    }, [color]);
    
    return (
        <>
            <div className="card-container">
                <div className="card-div">
                    <div className="card-back">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <p className="time">{time}</p>
                    </div>
                    <div className="card-img">
                        <div className="img" style={style}>
                            <img src={src} alt={src} />
                        </div>
                        <div className="card-shine"></div>
                    </div>
                </div>
            </div>
        </>
    );
}