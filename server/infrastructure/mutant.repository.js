const utils = require('../utils/string.util');

const find = function(dna) {
    const id = utils.hash(dna);
    const dnaData = {};

    return dnaData;
}

const add = function(dnaData) {
    let result = find(dnaData.dna);
    
    if (result) return result;

    const id = utils.hash(dnaData.dna);
    dnaData.id = id;
    // saveData(dnaData);

    return dnaData;
}

module.exports = {
    find,
    add
}