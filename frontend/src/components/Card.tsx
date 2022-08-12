import type { Doctor } from '../types/Doctor';

type CardProps = {
    doctor: Doctor;
}

const Card = ({ doctor }: CardProps) => {
    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="card-header">
                    <h3>{doctor.name}</h3>
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