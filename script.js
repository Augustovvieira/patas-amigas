const conteudo = document.querySelector("#conteudo");
// Navegação do menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(evento) {

        const destino = this.getAttribute("href");

        if (destino.startsWith("#")) {

            evento.preventDefault();

            const secao = document.querySelector(destino);

            if (secao) {

                secao.scrollIntoView({
                    behavior: "smooth"
                });

                history.pushState(
                    null,
                    "",
                    destino
                );
            }
        }
    });
});


// Botão "Quero adotar"
const botaoAdotar = document.querySelector(".botao");

if (botaoAdotar) {

    botaoAdotar.addEventListener("click", function(evento) {

        evento.preventDefault();

        carregarCadastro();
    });
}


// Carregar cadastro
async function carregarCadastro() {

    try {

        const resposta = await fetch("cadastro.html");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar cadastro");
        }

        const html = await resposta.text();

        const documento = new DOMParser().parseFromString(
            html,
            "text/html"
        );

        const novoConteudo = documento.querySelector("main");

        if (novoConteudo) {

            conteudo.innerHTML = novoConteudo.innerHTML;

            history.pushState(
                null,
                "",
                "cadastro.html"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Recupera os dados salvos
            restaurarCadastro();
        }

    } catch (erro) {

        conteudo.innerHTML = `
            <section class="container">
                <h2>Erro ao carregar</h2>

                <p>
                    Não foi possível carregar o formulário
                    de cadastro.
                </p>
            </section>
        `;

        console.error(erro);
    }
}


// Salvar cadastro no localStorage
document.addEventListener("submit", function(evento) {

    if (evento.target.matches("form")) {

        evento.preventDefault();

        const formulario = evento.target;

        const dados = {

            nome: formulario.nome.value,
            cpf: formulario.cpf.value,
            telefone: formulario.telefone.value,
            email: formulario.email.value,
            cep: formulario.cep.value,
            cidade: formulario.cidade.value,
            estado: formulario.estado.value

        };

        // Converte o objeto para string JSON
        localStorage.setItem(
            "cadastroPatasAmigas",
            JSON.stringify(dados)
        );

        // Mensagem para o usuário
        const mensagem = document.createElement("p");

        mensagem.textContent =
            "Cadastro salvo com sucesso!";

        mensagem.classList.add("mensagem-sucesso");

        formulario.appendChild(mensagem);
    }
});


// Recuperar dados do localStorage
function restaurarCadastro() {

    const dadosSalvos =
        localStorage.getItem("cadastroPatasAmigas");

    if (!dadosSalvos) {
        return;
    }

    // Converte a string JSON novamente para objeto
    const dados = JSON.parse(dadosSalvos);

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    formulario.nome.value = dados.nome || "";
    formulario.cpf.value = dados.cpf || "";
    formulario.telefone.value = dados.telefone || "";
    formulario.email.value = dados.email || "";
    formulario.cep.value = dados.cep || "";
    formulario.cidade.value = dados.cidade || "";
    formulario.estado.value = dados.estado || "";
}


// Voltar e avançar no navegador
window.addEventListener("popstate", function() {

    if (window.location.pathname.endsWith("cadastro.html")) {

        carregarCadastro();

    } else {

        window.location.href = "index.html";
    }

});