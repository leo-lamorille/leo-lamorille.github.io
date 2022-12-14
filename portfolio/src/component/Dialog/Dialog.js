import './Dialog.scss';
import { CancelCross } from '../Clickable/CancelCross';

export const Dialog = ({open, setOpen, title, job, description, children}) => {
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className={`modal-container ${open ? 'open' : 'close'}`}>
            <div className="modal-background">
                <div className="modal">
                    <div className="cancel" onClick={toggle}>
                        <CancelCross />
                    </div>
                    <div className="modal-title">
                        <h1>{title}</h1>
                        <p>{job}</p>
                    </div>
                    <div className="modal-content">
                        <h3>Description</h3>
                        <p className="description">{description}</p>
                        <div className="skills">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}