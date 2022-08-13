import { useState } from 'react';
import type { Doctor } from '../types/Doctor';
import CardActions from './CardActions';

type CardProps = {
    doctor: Doctor;
}

const Card = ({ doctor }: CardProps) => {
    const [showActions, setShowActions] = useState(false);

    const handleShowActions = (show: boolean) => {
        setShowActions(show);
    }

    return (
        <div className="col-md-4">
            <div className="card text-center" onMouseEnter={() => handleShowActions(true)} onMouseLeave={() => handleShowActions(false)} >
                <div className="card-header">
                    <h3>{doctor.name}</h3>
                    {showActions && <CardActions doctor={doctor} />}
                </div>
                <div className="card-body">
                    <p>{doctor.specialty}</p>
                    <p>{doctor.address}</p>
                    <p>{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;