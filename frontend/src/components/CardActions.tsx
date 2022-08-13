import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardActions = () => {
    return (
        <div className="card-actions">

            <div className="card-action">
                <FontAwesomeIcon icon={faUserPen} />
            </div>
            <div className="card-action">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    );
}

export default CardActions;