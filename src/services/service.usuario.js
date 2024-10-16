import repositoryUsario from "../repositories/repository.usuario.js";

async function Favoritos(id) {

    const favoritos = await repositoryUsario.Favoritos(id);

    return favoritos;
}

export default { Favoritos };