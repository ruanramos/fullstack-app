import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Doctor } from '../types/Doctor';

const CardActions = ({ doctor }: { doctor: Doctor }) => {

    return (
        <div className="card-actions">
            <div className="card-action">
                <button className=''><FontAwesomeIcon icon={faUserPen} /></button>

            </div>
            <div className="card-action">
                <button><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            
        </div>
    );
}

export default CardActions;