const jwt = require("jsonwebtoken")
// const secrets = require("../config/secrets")
const secret = process.env.SECRET || "this is awesome"

// module.exports = (req, res, next) => {

//     const [authType, token] = req.headers.authorization.split(" ");
//     if(token) {
//         jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
//             if(err) {
//                 res.status(401).json({you: "token invalid"})
//             } else {
//                 req.decodedJwt = decodedToken
//                 next()
//             }
//         })

//     } else {
//         res.status(401).json({you: "Token required"})
//     }

// }

module.exports = (req, res, next) => {
    //removes "Bearer" from the token if exists, otherwise sets to undefined
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : undefined;

    //validates token has been successfully been created/header appropriately set
    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({message: "Invalid Credentials"});
            } else {
                req.decodedToken = decodedToken
                next();
            }
        })
    } else {
        res.status(401).json({message: "Invalid Credentials"});
    }
}