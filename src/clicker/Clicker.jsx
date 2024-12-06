import { useEffect, useState } from 'react';
import co2CloudImage from '../assets/co2-cloud.png';

export const Clicker = ({ onClick }) => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false)
    }, [clicked])

    function clickAnimAndOn(){
        setClicked(true);
        onClick();
    }

    return (
      <div className='clickoverfl'>
        <img
          src={co2CloudImage}
          alt="CO2 Cloud"
          onClick={clickAnimAndOn}
          style={{ cursor: 'pointer' }}
          className={`clicker-image ${clicked?' clicked-clicker':''}`}
        />
      </div>
    );
  };
  