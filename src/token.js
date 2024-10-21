import jtw from "jsonwebtoken";

const secretToken = "secret";

function CreateJWT(id) {

    const token = jtw.sign({ id }, secretToken, {
        expiresIn: 999999,
    });    

    return token;
} 

function VerifyJWT(req, res, next) { 

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: "Token não informado" });
    }

    const [, token] = authToken.split(" ");

    jtw.verify(token, secretToken, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: "Token inválido" });
        }
        req.id = decoded.id;
        return next();
    });
}

export default { CreateJWT, VerifyJWT };

