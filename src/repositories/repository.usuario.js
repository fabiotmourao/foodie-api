import { execute } from "../database/sqlite.js";

async function Favoritos(id) {

    const sql = `select * from 
        usuario_favorito uf 
        join empresa e on e.id = uf.id_empresa 
        where uf.id_usuario = ?`;

    const favoritos = await execute(sql, [id]);

    return favoritos;
}

export default { Favoritos };