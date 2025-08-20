// Array que vai armazenar todas as tarefas
let tarefas = []

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    let tarefa = document.getElementById('tarefa') // Pega o campo de input da tarefa
    let mensagem = document.getElementById('mensagem') // Pega a área de mensagem

    // Se o campo estiver vazio
    if (tarefa.value == 0) {
        mensagem.style.color = 'red' // Define a cor vermelha na mensagem
        mensagem.textContent = 'Digite sua tarefa acima!' // Mostra aviso
    } else {
        tarefas.push(tarefa.value) // Adiciona a tarefa no array

        renderizarTarefas()// Atualiza a lista de tarefas na tela

        // Mostra mensagem de sucesso
        mensagem.style.color = 'green'
        mensagem.textContent = 'Tarefa adicionada com sucesso!'

        // Limpa o campo do input
        tarefa.value = ''
    }
}

// Função para atualizar a lista de tarefas na tela
function renderizarTarefas() {
    let lista = document.getElementById('listaTarefa') // Pega o elemento <ul> ou <ol>
    lista.innerHTML = '' // Limpa a lista antes de redesenhar

    // Percorre todas as tarefas do array
    for (let i = 0; i < tarefas.length; i += 1) {
        let item = document.createElement('li') // Cria um item de lista <li>
        item.textContent = (tarefas[i]) // Define o texto da tarefa
        
        // Cria botão de remover
        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'remover'
        botaoRemover.onclick = () => removerTarefa(i) // Chama a função ao clicar

        // Cria botão de editar
        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'editar'
        botaoEditar.onclick = () => editarTarefa(i) // Chama a função ao clicar

        // Adiciona os botões dentro do item
        item.appendChild(botaoEditar)
        item.appendChild(botaoRemover)

        // Adiciona o item na lista
        lista.appendChild(item)
    }
}

// Função para editar uma tarefa existente
function editarTarefa(i) {
    let tarefaEditada = prompt('Edite a tarefa') // Abre caixa para digitar nova tarefa

    // Verifica se o campo não ficou vazio
    if (tarefaEditada.trim() == 0 ) {
        window.alert('Digite a sua tarefa!')
    } else {
        tarefas[i] = tarefaEditada // Atualiza a tarefa no array
        renderizarTarefas() // Atualiza a lista na tela
    }
}

// Função para remover uma tarefa pelo índice
function removerTarefa(i) {
    tarefas.splice(i, 1) // Remove 1 item na posição i
    let msg = document.getElementById('mensagem')
    msg.style.color = 'red'
    msg.textContent = 'Tarefa removida com sucesso!'
    renderizarTarefas() // Atualiza a lista na tela
}

// Função para limpar todas as tarefas
function limparLista() {
    tarefas.length = 0 // Zera o array
    renderizarTarefas() // Atualiza a tela

    // Mostra mensagem de sucesso
    let msg = document.getElementById('mensagem')
    msg.style.color = 'green'
    msg.textContent = 'Tarefas limpas com sucesso!'
}



/*let tarefas = []

function adicionarTarefa() {
    let tarefa = document.getElementById('tarefa')
    let mensagem = document.getElementById('mensagem')

    if (tarefa.value == 0) {
        mensagem.style.color = 'red'
        mensagem.textContent = 'Digite sua tarefa acima!'
    } else {
        tarefas.push(tarefa.value)
        renderizarTarefas()
        mensagem.style.color = 'green'
        mensagem.textContent = 'Tarefa adicionada com sucesso!'
        tarefa.value = ''
    }
}

function renderizarTarefas() {
    let lista = document.getElementById('listaTarefa')
    lista.innerHTML = ''

    for (let i = 0; i < tarefas.length; i += 1) {
        let item = document.createElement('li')
        item.textContent = (tarefas[i])
        
        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'remover'
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'editar'
        botaoEditar.onclick = () => editarTarefa(i)


        item.appendChild(botaoEditar)
        item.appendChild(botaoRemover)
        lista.appendChild(item)
    }

}

function editarTarefa(i) {
    let tarefaEditada = prompt('Edite a tarefa')

    if (tarefaEditada.trim() == 0 ) {
        window.alert('Digite a sua tarefa!')
    } else {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    let msg = document.getElementById('mensagem')
    msg.style.color = 'green'
    msg.textContent = 'Tarefas limpas com sucesso!'
}*/
