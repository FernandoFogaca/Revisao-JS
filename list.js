async function executar() {
    console.log("Executando...");

const livros = await buscarLivrosEmAPI();

mostrarLivrosnaTela(livros);
}


async function buscarLivrosEmAPI() {
    const response = await fetch("https://api-aula.up.railway.app/livros");
    const livros = await response.json();
    return livros;
}    

function mostrarLivrosnaTela(parametroLivros) {
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    
    let livrosEmTexto = "";
    
    for (let contador = 0; contador < parametroLivros.length; contador++) {
        console.log(parametroLivros[contador]);
       livrosEmTexto += `
        <div class="livro">
        <p>ID: ${parametroLivros[contador].id}</p>
        <p>Title: ${parametroLivros[contador].title}</p>
        <p>Description: ${parametroLivros[contador].description}</p>
    
          
        </div>
        `;
    }
    
    divResultado.innerHTML = livrosEmTexto;
      
    
    }