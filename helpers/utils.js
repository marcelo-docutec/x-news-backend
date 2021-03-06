/**
 * generate a random string
 * @param length
 * @returns {string|string}
 */
exports.generateToken = ( length = 40 ) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

/**
 *
 * @param param
 * @returns {boolean}
 */
exports.isNumber = ( param ) => {
    return isNaN( param );
};