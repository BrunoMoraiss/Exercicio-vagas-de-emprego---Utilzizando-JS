let opcao = ""

let vagas = []

function listarVagas(){
    if(vagas.length <= 0){
        alert("Primeiro crie uma vaga!!")
    } else {
        let mensagem = ""

        vagas.forEach((function (elemento, indice){
            mensagem += (indice + 1) + " - " + elemento.nomeVaga + "\n"       
        })) 

        const quantidadeInscritosTotal = vagas.reduce(function (acumulador, elemento){
            return acumulador + elemento.quantidadesCandidato
        }, 0)

        alert(mensagem + "\nQuantidade de candidatos inscritos de todas as vagas: " + quantidadeInscritosTotal)
    }    
}

function criarVaga(nomeVaga, descricao, dataLimite, candidatos){
    let vaga = {
        nomeVaga,
        descricao,
        dataLimite, 
        candidatos: "", 
        quantidadesCandidato : 0
    }

    vagas.push(vaga)
}

function inscreverCandidato(nome, indice){
    for(let i = indice-1; i <= indice-1; i++){
        vagas[i].candidatos += nome + ", "
        vagas[i].quantidadesCandidato += 1
    }

    alert("Candidato inscrito com sucesso")
}

function VisualizarVaga(indice){
    if(vagas.length <= 0){
        alert("Primeiro crie uma vaga!!")
    } else{
        let mensagem = ""

        for(let i = indice - 1; i <= indice - 1; i++){
             mensagem += indice + " - Nome da vaga: " + vagas[i].nomeVaga + "\nDescrição: " + vagas[i].descricao + "\nData Limite: " + vagas[i].dataLimite + 
                        "\nQuantidade de candidatos: " + vagas[i].quantidadesCandidato + "\nNome dos candidatos: " + vagas[i].candidatos
        }

        alert(mensagem)
    } 
}

function excluirVaga(inidice){
    vagas.splice(inidice-1, 1)
}

function exibirMenu(){
    return prompt("Escolha uma opção\n" + "1 - Listar Vagas Disponiveis\n" + "2 - Criar um nova vaga\n" + "3 - Visualizar uma vaga\n" + 
            "4 - Inscrever um candidato em uma vaga\n" + "5 - Excluir uma vaga\n" + "6 - Sair")
 }
 
 do{
     opcao = exibirMenu()

     switch(opcao){
         case "1":
            listarVagas()
            break
         case "2":
            let nomeVaga = prompt("Digite o nome da vaga")
            let descricao = prompt("Digite a descrição da vaga")
            let dataLimite = prompt("Digite a data limite para essa vaga (dd/mm/aaaa)")
            if(confirm("Confirma as informações digitadas?" + "\nNome da vaga: " + nomeVaga + "\nDescrição da vaga: " + descricao + "\nData limite: " + dataLimite)){
               criarVaga(nomeVaga, descricao, dataLimite) 
            }
            break
         case "3":   
            let indice = Number(prompt("Digite o indice da vaga")) 
            if(indice > vagas.length){
                alert("Digite um indice valido!")
            } else {
                VisualizarVaga(indice)
            }
            break
         case "4":
            let nomeCandidato = prompt("Digite o nome do candidato")
            let indiceInscrição = Number(prompt("Digite o indice da vaga"))
            if(confirm("A vaga está correta?" + "\nNome da vaga: " +  vagas[indiceInscrição - 1].nomeVaga + "\nDescrição: " + vagas[indiceInscrição - 1].descricao + "\nData Limite: "+ vagas[indiceInscrição - 1].dataLimite)){
                inscreverCandidato(nomeCandidato, indiceInscrição)    
            }
            break
         case "5":
            let indiceExclusão = Number(prompt("Digite o indice da vaga que deseja excluir"))
            VisualizarVaga(indiceExclusão)
            if(confirm("A vaga para exclusão está certa?")){
                excluirVaga(indiceExclusão)
            }
            break
         case "6":
            alert("Saindo...")
            break
         default:
            alert("Digite uma opção valida!!")
     }
 
 }while (opcao !== "6")