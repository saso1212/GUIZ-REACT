let cors = function(req, res, next){

    let allowedOrigins = [
        'localhost',
        'examle.com',
        'app.something'
    ];

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");

    if(allowedOrigins.indexOf(req.hostname) > -1)
    {
        res.header("Access-Control-Allow-Origin", req.get('origin'));
        //tmp log. user
        //req.session.user = {id: '5ba26dc1ad38a0293c1d3325'}
        next();
    }
    else{
        res.status(403).send('Domain not allowed');
        return false;
    }
}

module.exports = cors;