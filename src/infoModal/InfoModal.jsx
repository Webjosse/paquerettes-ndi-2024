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
                    ✖️
                </button>
                <h2>{title}</h2>
                { icon ? <div className='infoModalSection'>
                    <img className='infoModalImg' src={icon} alt={`Icon ${title}`} />
                </div> : <p><a href="https://kdrive.infomaniak.com/app/share/771413/91bc4eeb-90f1-411f-92ce-69e27969c910" target='_blank'>Voir les podcasts</a></p>}
                <Markdown>{desc}</Markdown>
            </div>
        </div>
    );
};
