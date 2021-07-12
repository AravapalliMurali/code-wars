const isValidIP = str => str.split('.').length === 4 && str.split('.').map(arr => (+arr >= 0 && +arr <= 255 && `${parseInt(arr, 10)}` === arr)).every(Boolean);

console.log(isValidIP('0.0.0.6'))
//console.log(isValidIP('255.255.255'))