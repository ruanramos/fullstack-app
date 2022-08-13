import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Doctor } from '../types/Doctor';

const CardActions = ({ doctor }: { doctor: Doctor }) => {

    const handleDelete = async () => {
        await fetch(`/api/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="card-actions">
            <div className="card-action">
                <button className=''><FontAwesomeIcon icon={faUserPen} /></button>

            </div>
            <div className="card-action">
                <button><FontAwesomeIcon icon={faTrash} onClick={handleDelete} /></button>
            </div>

        </div>
    );
}

export default CardActions;