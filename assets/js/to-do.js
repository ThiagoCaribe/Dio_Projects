const form = document.getElementById('formulario')
const lista = document.getElementById('check')
console.log(lista);

form.onsubmit = function (e) {
    e.preventDefault();
    const task = document.getElementById('tarefas');
    addT(task.value);
    form.reset();
}
function addT(tarefa){
    const corpo = document.createElement('div');
    const checkB = document.createElement('input');
    const texto = document.createElement('label');
    const textoD = document.createTextNode(tarefa);
    console.log(textoD);

    checkB.setAttribute('type', 'checkbox');
    checkB.setAttribute('name', tarefa);
    checkB.setAttribute('id', tarefa);
    texto.setAttribute('for', tarefa);
    texto.appendChild(textoD);

    corpo.classList.add('item');
    corpo.appendChild(checkB);
    corpo.appendChild(texto);
    lista.appendChild(corpo);
}