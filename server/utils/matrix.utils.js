const reverseMatrix = function(matrix) {
    let reversed =  matrix
                    .reverse()
                    .map(val => 
                            val.split('').reverse().join('')
                    );
    return reversed;
}

module.exports = {
    reverse : reverseMatrix
}