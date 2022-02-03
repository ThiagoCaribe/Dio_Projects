function mediaAlunos(alunos,medFinal){
    let alunosEx = []
    let medias = []
    function pegandoMedias(alunos){

        for(med in alunos){

            medias.push(alunos[med].media);
        }
        return medias;
    };
    pegandoMedias(alunos);
    for(i = 0; i < medias.length; i++){
        if(medias[i] >= medFinal ){
            alunosEx.push(medias[i]);
        }
    }

    return alunosEx;
}

const alunos = {
    aluno : {nome : "gustavo", idade :10, media:8},
    aluno1 : {nome : "gustavo", idade :9, media:7},
    aluno2 : {nome : "gustavo", idade :11, media:6}
}


// Atividade This

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
    nome : "José",
    idade : 25
}
const pessoa2 = {
    nome : "Maria",
    idade : 23
}
console.log(calculaIdade.call(pessoa1, pessoa1.idade));