const config = require('../config.json');

const containsMutantDna = function(str) {
    let times = config.mutantDnaStringLength;
    let repeatedTimes = new RegExp(`(A{${times}}|C{${times}}|G{${times}}|T{${times}})`);
    return repeatedTimes.test(str);
}

module.exports = {
    containsMutantDna
}