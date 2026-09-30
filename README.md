# 🐾 ONG Patas Amigas

> **Amor, cuidado e um lar para todos os animais.**

Projeto desenvolvido com o objetivo de criar uma interface web institucional para a **ONG Patas Amigas**, organização fictícia voltada à proteção, adoção e bem-estar animal.

O projeto foi desenvolvido como uma experiência prática de desenvolvimento **Front-End**, aplicando conceitos de **HTML5, CSS3 e JavaScript**, além de boas práticas de estruturação, responsividade, acessibilidade, validação de formulários e organização de código.

---

## 📌 Sobre o projeto

O site da ONG Patas Amigas foi desenvolvido para apresentar a organização, seus projetos e iniciativas, além de disponibilizar informações relacionadas à adoção e formas de participação.

A proposta foi construir uma interface simples, organizada e responsiva, permitindo que o usuário navegue facilmente entre as diferentes seções e páginas do projeto.

Durante o desenvolvimento, foram aplicados conceitos de:

* Estruturação semântica com HTML5;
* Estilização e responsividade com CSS3;
* CSS Grid e Flexbox;
* Menu responsivo para dispositivos móveis;
* Formulários HTML5;
* Validações nativas com atributos como `required` e `pattern`;
* Estados de interação como `hover`, `focus` e `active`;
* Organização de arquivos e diretórios;
* Boas práticas de acessibilidade;
* Uso adequado do atributo `alt` em imagens;
* Conceitos básicos de SEO;
* Versionamento utilizando Git e GitHub.

---

## 🖥️ Tecnologias utilizadas

### HTML5

Utilizado para estruturar o conteúdo da aplicação de forma semântica, utilizando elementos como:

* `header`
* `nav`
* `main`
* `section`
* `footer`
* `form`
* `fieldset`
* `legend`

A utilização de elementos semânticos contribui para a organização do código, acessibilidade e compreensão da estrutura da página.

### CSS3

Responsável pela apresentação visual e responsividade do projeto.

Foram utilizados:

* CSS Grid;
* Flexbox;
* Variáveis CSS;
* Media Queries;
* Sistema de 12 colunas;
* Tipografia;
* Espaçamentos;
* Bordas;
* Botões;
* Estados de interação;
* Layout responsivo.

O projeto utiliza uma identidade visual baseada principalmente em tons de azul, definidos por meio de variáveis CSS para facilitar a manutenção e padronização das cores.

### JavaScript

Utilizado para adicionar interatividade ao projeto e complementar o comportamento da interface.

A utilização do JavaScript permite trabalhar com comportamentos dinâmicos da página e tornar a experiência do usuário mais interativa.

### Git e GitHub

Utilizados para controle de versão e organização do desenvolvimento.

O projeto foi estruturado seguindo conceitos do **GitFlow**, utilizando branches como:

```text
main
develop
feature/
```

A `main` representa a versão estável do projeto, enquanto a `develop` é utilizada para desenvolvimento e as branches `feature/` para alterações ou funcionalidades específicas.

---

## 📂 Estrutura do projeto

```text
patas-amigas/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   └── imagens do projeto
│
├── index.html
├── cadastro.html
├── adote.html
│
└── README.md
```

### Principais páginas

**`index.html`**

Página principal da aplicação, contendo a apresentação da ONG, navegação e as principais seções do site.

**`cadastro.html`**

Página contendo formulário para cadastro de informações do usuário, utilizando recursos de validação do HTML5.

**`adote.html`**

A página Adote é destinada à apresentação dos animais disponíveis para adoção na ONG Patas Amigas. Seu objetivo é facilitar o primeiro contato entre o visitante e os animais que estão à procura de um novo lar.

---

## 🎨 Interface e identidade visual

A interface foi desenvolvida com uma identidade visual baseada em tons de azul, buscando transmitir uma aparência organizada e amigável.

As principais cores foram organizadas através de variáveis CSS:

```css
:root {
    --azul-escuro: #062449;
    --azul-fundo: #082D57;
    --azul-bebe: #9EDCFF;
    --azul-destaque: #65C5F5;
    --azul-borda: #17649A;
    --branco: #FFFFFF;
}
```

A utilização de variáveis permite alterar a identidade visual do projeto de maneira mais simples e mantém a consistência das cores em diferentes componentes.

---

## 📱 Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela.

Foram utilizadas **Media Queries** para adaptar a interface a diferentes dispositivos, incluindo computadores, tablets e smartphones.

Também foi implementado um comportamento de **menu responsivo/hamburger** para facilitar a navegação em telas menores.

A estrutura utiliza **CSS Grid de 12 colunas**, permitindo organizar os elementos da interface de maneira flexível.

---

## ♿ Acessibilidade

Durante o desenvolvimento foram considerados alguns princípios básicos de acessibilidade, como:

* Utilização de HTML semântico;
* Textos alternativos nas imagens através do atributo `alt`;
* Estrutura hierárquica de títulos;
* Uso de `label` associado aos campos dos formulários;
* Estados visuais de interação;
* Contraste entre elementos;
* Navegação adaptada para diferentes tamanhos de tela.

Essas práticas contribuem para tornar a interface mais compreensível e acessível para diferentes usuários.

---

## 📝 Formulários e validação

Os formulários utilizam recursos nativos do HTML5 para auxiliar na validação dos dados antes do envio.

Foram utilizados atributos como:

```html
required
pattern
type="email"
```

O atributo `pattern`, por exemplo, permite definir um padrão específico para determinados campos, enquanto `required` impede que informações obrigatórias sejam deixadas em branco.

Essas validações ajudam a reduzir o envio de informações em formatos incorretos e melhoram a experiência do usuário.

---

## 🔀 Versionamento

O projeto também foi organizado utilizando Git e GitHub, aplicando conceitos do modelo GitFlow.

Estrutura utilizada:

```text
main
│
└── develop
     │
     └── feature/
```

### `main`

Contém a versão estável e final do projeto.

### `develop`

Utilizada como branch de desenvolvimento, concentrando alterações antes de serem incorporadas à versão principal.

### `feature/`

Utilizada para desenvolver alterações ou funcionalidades específicas de maneira isolada.

Esse modelo permite manter o código organizado e facilita o controle das alterações realizadas durante o desenvolvimento.

---

## 🎯 Objetivos de aprendizagem

Este projeto teve como principais objetivos:

* Praticar desenvolvimento Front-End;
* Aprimorar conhecimentos em HTML5;
* Desenvolver interfaces utilizando CSS3;
* Trabalhar com layouts responsivos;
* Aplicar CSS Grid e Flexbox;
* Criar e validar formulários;
* Aplicar conceitos básicos de acessibilidade;
* Desenvolver interatividade utilizando JavaScript;
* Praticar organização de arquivos e código;
* Aprender e aplicar controle de versão com Git;
* Utilizar GitHub para hospedagem e gerenciamento do projeto;
* Compreender um fluxo de trabalho baseado em branches.

---

## 🚀 Como executar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/SEU-USUARIO/patas-amigas.git
```

2. Acesse a pasta:

```bash
cd patas-amigas
```

3. Abra o arquivo:

```text
index.html
```

O projeto pode ser executado diretamente no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para facilitar o desenvolvimento e visualização das alterações em tempo real.

---

## 📚 Aprendizados

O desenvolvimento do projeto permitiu colocar em prática conhecimentos de desenvolvimento web, desde a estruturação das páginas até a criação de layouts responsivos e formulários.

Além da parte visual, o projeto proporcionou experiência com organização de código, semântica HTML, acessibilidade, responsividade e controle de versão.

A utilização do Git e GitHub também permitiu compreender melhor o fluxo de trabalho baseado em branches e a importância do versionamento durante o desenvolvimento de software.

---

## 👨‍💻 Autor

**Augusto**

Projeto desenvolvido para fins de estudo e aprendizado em desenvolvimento Front-End.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.
