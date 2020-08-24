/*
Controller: stats.controller.js
Funcion: Manejar la interaccion entre el servicio de stat.service y el endpoint de la api de stats
         El controller sabe que responses mandar a traves de cada endpoint de la api stats en base a la respuesta
         obtenida de el o los servicios que llama.
 */
function StatsController(statsService) {
    function get(req, res) {
        statsService.get().then(stats => res.send(stats));
    }

    return {
        get
    }
}

module.exports = StatsController;