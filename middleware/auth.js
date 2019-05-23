const redisService = require('../services/redis');

exports.auth = ( req, res ,next ) => {
    let token = req.headers.authorization;
    req.session = null;

    if ( ! token ) {
        return next();
    }

    // redis

    token = token.replace('Bearer ', '')

    redisService.get( `Token_${token}`,( err, result ) => {
        if( err ) res.status(500).send('Server not working. :/');

        if( ! result ) res.status(400).send( 'invalid token' );
        try {
            req.session = JSON.parse( result );
            req.session.token = token;
        } catch( e ) {
            console.log(e);
        }
        
        
        return next();
    } );

}