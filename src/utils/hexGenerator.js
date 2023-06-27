


export function generateHexColor() {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColorString = "#";
    
    for (let i = 1; i <= 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexColorString += hexValues[randomIndex];
    }
   return hexColorString;
}


export function convertHexToRgb(hexString) {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const rgbArray = [];
    const rawHex = hexString.slice(1);
    
    for (let i = 0; i < rawHex.length; i += 2) {
        const hex1 = rawHex[i];
        const hex2 = rawHex[i + 1];
        const rgbVal = (16 * hexValues.indexOf(hex1)) + hexValues.indexOf(hex2);
        rgbArray.push(rgbVal);
    }
    return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}



