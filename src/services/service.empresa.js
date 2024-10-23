import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques(id) {    

    const empresa = await repositoryEmpresa.Destaques(id);
    return empresa;
}    

async function Listar(id, busca) {

    const empresas = await repositoryEmpresa.Listar(id, busca);
    return empresas;
}

async function Favoritar(id_usuario, id_empresa) {
    const favoritar = await repositoryEmpresa.Favoritar(id_usuario, id_empresa);
    return favoritar;
}

async function Desfavoritar(id_usuario, id_empresa) {
    const desfavoritar = await repositoryEmpresa.Desfavoritar(id_usuario, id_empresa);
    return desfavoritar;
} 

async function Cardapio(id_usuario, id_empresa) {
    const cardapio = await repositoryEmpresa.Cardapio(id_usuario, id_empresa);
    return cardapio;
} 

async function ListarProdutoId(id, id_produto) {
    const empresa = await repositoryEmpresa.ListarProdutoId(id, id_produto);
    return empresa;
}   

export default { Destaques, Listar, Favoritar, Desfavoritar, Cardapio, ListarProdutoId };