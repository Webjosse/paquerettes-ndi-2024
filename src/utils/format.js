export function formatBigInt(bigIntValue) {
    let strValue = bigIntValue.toString();
  
    if (bigIntValue >= BigInt(1e9)) {
        let exponent = strValue.length - 1;
        let coefficient = strValue.slice(0, 2) + '.' + strValue.slice(2, 4);
        return `${coefficient}e${exponent}`;
    }
  
    return formatNumber(new Number(bigIntValue) + 0);
  }

export function formatNumber(i) {
    if (i < 1000) {
        return i.toString();
    } else if (i < 1000000) {
        return (i / 1000).toFixed(1) + 'k';
    } else if (i < 1000000000) {
        return (i / 1000000).toFixed(1) + 'M';
    } else {
        return (i / 1000000000).toFixed(1) + 'e9';
    }
}