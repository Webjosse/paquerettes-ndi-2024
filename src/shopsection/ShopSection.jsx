import { useEffect, useState } from 'react';
import SHOPDATA from '../data/shop';
import co2CloudImage from '../assets/co2-cloud.png';

import './ShopSection.css';
import { formatBigInt, formatNumber } from '../utils/format';

export const ShopSection = ({count, setCount, showPopup}) => {
    const [pollutions, setPollutions] = useState(JSON.parse(localStorage.getItem("pollution")) || Object.fromEntries(
        Object.entries(SHOPDATA).map(([k,v]) => ([k, {cps: v.co2PerSecond, unit: 0}]))
    ));

    window.addEach = Object.values(pollutions).map(({cps, unit}) => cps * unit).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    window.addFun = function(cnt){
        console.debug("add ", cnt)
        setCount(window.clickCount + BigInt(cnt));
    }

    window.pollutions = pollutions;

    function buyElement([key, el], price){
        if (count < price) return;
        if (el.unit == 0){
            showPopup(SHOPDATA[key])
        }
        const newCount = count - BigInt(price);
        setCount(newCount);
        el.unit += 1;
        const newPollution = {...pollutions, [key]: el};
        setPollutions(newPollution);
        localStorage.setItem("pollution", JSON.stringify(newPollution));
        localStorage.setItem("count", newCount);
    }
    const allUnlocked = pollutions["coralbleaching"].unit > 0 || count >= 9_000_000;

    return (
        <section className='shopSection'>
            <ul>
            {Object.entries(SHOPDATA).map(([k, { icon, co2PerSecond, title, basePrice }]) => {
                const pollution = pollutions[k];
                console.debug("price", basePrice, "unit", pollution.unit);
                const adjustedPrice = BigInt(Math.ceil(basePrice * (1 + (pollution.unit / 10))));
                const buyable = count >= adjustedPrice;
                if (!buyable && !pollution.unit){
                    return null
                }
                console.log(pollution);
                return (
                <li key={k} className={`shopFlex shopWrap${(!buyable) ?' shopDis':''}`}>
                    <div className='shopFlex' >
                        <div className='nextFlex' style={{cursor:'pointer'}} onClick={() => showPopup(SHOPDATA[k])}>
                            <span className='shopUnit'>{ pollution.unit }</span>
                            <img className='keyIcon' src={icon} alt={`Icon ${k}`} />
                        </div>
                        <button onClick={() => buyElement([k, pollution], adjustedPrice)}>+<span className='shopTag'>
                            <span style={{margin: '0.1em'}}>{formatBigInt(adjustedPrice)}</span>
                            <img
                            className='co2'
                            src={co2CloudImage}
                            alt="CO2 Cloud"
                            />
                        </span></button>    
                    </div>
                    <div className='shopFlex' >
                        <span>{title}</span>
                        <span>{formatNumber(co2PerSecond)} Co²/s</span>
                    </div>
                </li>
            );
        })}
        {allUnlocked ? '' : <li className='shopFlex shopWrap shopDis'>
                <p>*Générez du CO2 pour débloquer cet élément</p>
            </li>}
            </ul>
        </section>
    );

}