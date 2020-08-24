function StatsService(mutantsRepository) {
    async function get() {
        const data = await mutantsRepository.all();
        const countMutants = data.filter((data) => data.isMutant).length;
        const countHumans = Math.abs(data.length - countMutants);
        const ratio = countHumans / countMutants;

        return {count_mutant_dna: countMutants, count_human_dna: countHumans, ratio: ratio };
    }

    return {
        get
    }
}

module.exports = StatsService;