import { useState } from "react";

type NotificationBarProps = {
    message: string;
    type: "success" | "error";
};

const NotificationBar = ({ message, type }: NotificationBarProps) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
    }
    return (
        <div className={`alert alert-${type}`} role="alert" style={{ display: show ? 'block' : 'none' }}>
            {message}
            <button type="button" className="close" onClick={handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default NotificationBar;