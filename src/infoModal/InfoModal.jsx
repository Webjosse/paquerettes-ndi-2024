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
                <div className='infoModalSection'>
                    <img className='infoModalImg' src={icon} alt={`Icon ${title}`} />
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
};