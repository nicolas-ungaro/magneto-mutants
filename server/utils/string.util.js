const crypto = require('crypto');

const hash = function(str) {
    var hash = crypto
                .createHash('md5')
                .update(str)
                .digest('hex');
    return hash;
}

module.exports = {
    hash
}