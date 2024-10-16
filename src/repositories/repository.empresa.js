import { execute } from "../database/sqlite.js";

async function Destaques() {

    const sql = `select e.*, 'N' as favorito from  destaque d
    inner join empresa e on e.id  = d.id_empresa ORDER BY d.ordem`;
    const empresas = await execute(sql, []);

    return empresas; 
    
}

export default { Destaques };