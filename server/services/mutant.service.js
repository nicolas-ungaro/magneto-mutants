/*
Servicio: mutant.service.js
Funcion: Contiene la logica de negocio relacionada a la obtencion y analisis de mutantes
Expone:
    - isMutant: funcion que devuelve true si el dna pasado por parametro pertenece a un mutante y false si no.
 */
function MutantService(mutantRepository, mutantValidationService) {
    /**
     * Verifica si el dna recibido por parametro existe en la base de datos. Si existe, usa el isMutant de la base. 
     * Si no existe, calcula si es mutante, le setea su valor a la entidad dnaData y lo guarda en la base antes de devolver el valor.
     */
    async function isMutant(dna) {    
        // Validate    
        mutantValidationService.validateInput(dna);
    
        //Act
        const data = await mutantRepository.find(dna);
        if (data) return data.isMutant;
        
        const isMutant = mutantValidationService.isMutant(dna);

        await mutantRepository.add( { dna : dna, isMutant : isMutant });
    
        return isMutant;
    }

    return {
        isMutant
    }

}

module.exports = MutantService;