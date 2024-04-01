async function executar() {
    limparTela();
    const titulo = valorTextual("inputTitulo");
    const descricao = valorTextual("inputDescricao");

    const elementoE = document.getElementById("erro");
    if (titulo == "" || descricao == "") {
        elementoE.style.display = "block";
        return; // Finaliza a função.
    }
    
    const elementoS = document.getElementById("sucesso");
    elementoS.style.display = "block";

    const url = "https://api-aula.up.railway.app/livros";
    const payload = {
        title: titulo,
        description: descricao
    };
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = data;
    elementoResultado.style.display = "block";

    // Limpar os campos do formulário
}

function limparTela() {
    const elementoE = document.getElementById("erro");
    elementoE.style.display = "none";

    const elementoS = document.getElementById("sucesso");
    elementoS.style.display = "none";

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.style.display = "none";
}

function valorTextual(idDoInput) {
    const elemento = document.getElementById(idDoInput);
    const valor = elemento.value;
    return valor;
}

