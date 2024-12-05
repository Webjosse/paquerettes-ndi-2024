import co2CloudImage from '../assets/co2-cloud.png';

export const Clicker = ({ onClick }) => {
    return (
      <div className='clickoverfl'>
        <img
          src={co2CloudImage}
          alt="CO2 Cloud"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
          className='clicker-image'
        />
      </div>
    );
  };
  