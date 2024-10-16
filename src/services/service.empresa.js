import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques() {    

    const empresa = await repositoryEmpresa.Destaques();

    return empresa;
}    

export default { Destaques };