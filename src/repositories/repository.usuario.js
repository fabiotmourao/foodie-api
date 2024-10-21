import { execute } from "../database/sqlite.js";

async function Favoritos(id) {

    const sql = `select * from 
        usuario_favorito uf 
        join empresa e on e.id = uf.id_empresa 
        where uf.id_usuario = ?`;

    const favoritos = await execute(sql, [id]);

    return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {
    try {
        const sql = `
            insert into usuario (
                nome,
                email,
                senha,
                endereco,
                complemento,
                bairro,
                cidade,
                uf,
                cep,
                created_at,
                updated_at
            ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `;
        const result = await execute(sql, [nome, email, senha, endereco, complemento, bairro, cidade, uf, cep], 'run');
        
        const usuario = { id: result.lastID };
        
        return usuario;
        
    } catch (error) {
        console.error("Erro ao inserir usuário:", error);
        throw new Error("Erro ao inserir os dados do usuário.");
    }
}

async function ListarByEmail(email) {

    const sql = `select 
        id, 
        nome, 
        email, 
        senha, 
        endereco, 
        complemento, 
        bairro, 
        cidade, 
        uf, 
        cep,
        created_at,
        updated_at 
            from 
        usuario  
        where email = ?`;

    const usuario = await execute(sql, [email]);

    if (usuario.length == 0) {
        return [];
    }else {
        return usuario[0];
    }   
}

async function ListarById(id) {

    const sql = `select 
        id, 
        nome, 
        email, 
        endereco, 
        complemento, 
        bairro, 
        cidade, 
        uf, 
        cep,
        created_at,
        updated_at 
            from 
        usuario  
        where id = ?`;

    const usuario = await execute(sql, [id]);

    if (usuario.length == 0) {
        return [];
    }else {
        return usuario[0];
    }    
}

export default { Favoritos, Inserir, ListarByEmail, ListarById };