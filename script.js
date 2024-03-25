
async function executar() {
    /* Pegar o valor do input */

    /*Fazer chamada para cadastrar livros */

    /*mostrar resultado abaixo do form*/


    const inputTitulo = document.getElementById("inputTitulo")
    const inputDescricao = document.getElementById("inputDescricao")

    const titulo = inputTitulo.value
    const descricao = inputDescricao.value


    const elementoE = document.getElementById("erro")
    if (titulo == "" || descricao == "") {
        elementoE.style.display = "block"

        return // Finaliza a função.
    }



    elementoE.style.display = "none"
    const elementoS = document.getElementById("sucesso")
    elementoS.style.display = "block"



    // Fazer uma chamada para cadastrar livros.

    const url = "https://api-aula.up.railway.app/livros"

    const payload = {
        title: titulo,
        description: descricao
    }
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify(payload),
        Headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, fetchOptions)
    const data = await response.json()

    const elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = data





}

