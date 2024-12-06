import Markdown from 'react-markdown';
import './InfoModal.css';

export const InfoModal = ({ el, onClose }) => {
    if (el == null) {
        return <></>;
    }
    
    const { title, desc, icon } = el;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{title}</h2>
                { icon ? <div className='infoModalSection'>
                    <img className='infoModalImg' src={icon} alt={`Icon ${title}`} />
                </div> : ''}
                <Markdown>{desc}</Markdown>
            </div>
        </div>
    );
};
