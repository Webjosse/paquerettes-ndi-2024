import co2CloudImage from '../assets/co2-cloud.png';

function formatBigInt(bigIntValue) {
  let strValue = bigIntValue.toString();

  if (bigIntValue >= BigInt(1e6)) {
      if (bigIntValue >= BigInt(1e8)) {
          let exponent = strValue.length - 1;
          let coefficient = strValue.slice(0, 2) + '.' + strValue.slice(2, 4);
          return `${coefficient} * 10e${exponent}`;
      } else {
          let millionValue = bigIntValue / BigInt(1e6);
          let millionStr = millionValue.toString();
          let integerPart = millionStr.slice(0, millionStr.length - 6);
          let fractionalPart = millionStr.slice(millionStr.length - 6, millionStr.length - 4);
          return `${integerPart}.${fractionalPart} M`;
      }
  }

  return strValue;
}


export const Count = ({ count }) => {
    return <p className='fontVw'>{formatBigInt(count)} grammes</p>
  };
  