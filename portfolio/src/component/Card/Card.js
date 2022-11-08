import { useEffect, useState } from 'react';
import './Card.scss';

export const Card = ({title, content, time, color, src}) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        switch (color) {
            case 'sunny':
                setStyle({background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%'});
                return;
            case 'whynter':
                setStyle({background: 'linear-gradient(90deg, rgba(94,96,206,1) 0%, rgba(86,207,225,1) 50%,  rgba(128,255,219,1) 100%)'});
                return;
            case 'wood':
                setStyle({background: 'linear-gradient(90deg, rgba(212,162,118,1) 0%, rgba(111,69,24,1) 50%,  rgba(46,25,0,1) 100%)'});
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