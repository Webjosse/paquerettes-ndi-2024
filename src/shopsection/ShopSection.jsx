import { useState } from 'react';
import SHOPDATA from '../data/shop';
import co2CloudImage from '../assets/co2-cloud.png';

import './ShopSection.css';

export const ShopSection = ({count, buyI}) => {
    const [pollutions, setPollutions] = useState(Object.fromEntries(
        Object.entries(SHOPDATA).map(([k,v]) => ([k, {cps: v.co2PerSecond, unit: 0}]))
    ))

    function buyElement([key, el]){
        el.unit += 1;
        setPollutions({...pollutions, [key]: el});
    }

    return (
        <section className='shopSection'>
            <ul>
            {Object.entries(SHOPDATA).map(([k, { icon, co2PerSecond, title }]) => (
                <li key={k} className='shopFlex shopWrap'>
                    <div className='shopFlex' >
                        <img className='keyIcon' src={icon} alt={`Icon ${k}`} />
                        <button onClick={() => buyElement([k, pollutions[k]])}>+<span className='shopTag'>
                            <span style={{margin: '0.1em'}}>10k</span>
                            <img
                            className='co2'
                            src={co2CloudImage}
                            alt="CO2 Cloud"
                            />
                        </span></button>    
                    </div>
                    <div className='shopFlex' >
                        <span>{title}</span>
                        <span>{co2PerSecond} Co² / s</span>
                    </div>
                </li>
            ))}
            </ul>
        </section>
    );

}