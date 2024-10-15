import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques() {    

    const empresa = await repositoryEmpresa.Listar();

    return empresa;
}    

export default { Destaques };