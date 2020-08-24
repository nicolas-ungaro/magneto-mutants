const stats = require('../utils/stats.utils');

function StatsService(mutantsRepository) {
    async function get() {
        const data = await mutantsRepository.all();
        const countMutants = data.filter((data) => data.isMutant).length;
        const countHumans = Math.abs(data.length - countMutants);

        return {count_mutant_dna: countMutants, count_human_dna: countHumans, ratio: stats.ratio(countHumans, countMutants) };
    }

    return {
        get
    }
}

module.exports = StatsService;