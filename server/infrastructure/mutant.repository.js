const utils = require('../utils/string.util');

function MutantsRepository(dbContext) {
    async function find(dna) {
        const id = utils.hash(dna.join(''));
        const dnaData = await dbContext.find(id);
    
        return dnaData;
    }
    
    async function add(dnaData) {
        let result = await find(dnaData.dna);
        if (result) return result;
    
        const id = utils.hash(dnaData.dna.join(''));
        dnaData.id = id;
        await dbContext.add(dnaData);
    
        return dnaData;
    }

    async function all() {
        return await dbContext.all();
    }

    return {
        find,
        add,
        all
    }
}

module.exports = MutantsRepository;