# Atividade 08

Carolina Yumi Toyota, RA 143210  

## Exercício 1

Arquivo `index.html`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha página</title>
</head>
<body>
    <h1>Programação Web</h1>
    <p>Primeira página em HTML.</p>
</body>
</html>
```

O `head` reúne os metadados e configurações da página. O `body` contém o conteúdo apresentado no navegador. O `meta charset="UTF-8"` informa a codificação usada, permitindo representar corretamente acentos e outros caracteres.

## Exercício 2

Arquivo `index.html`, conteúdo do `body`.

```html
<header>
    <h1>Curso de Desenvolvimento Web</h1>
    <p>Aprenda a criar páginas e aplicações para a internet.</p>
    <nav aria-label="Navegação principal">
        <a href="#conteudos">Conteúdos do curso</a>
    </nav>
</header>

<main>
    <section aria-labelledby="sobre">
        <h2 id="sobre">Sobre o curso</h2>
        <p>O curso apresenta estrutura, aparência e interação em páginas web.</p>
        <img
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20240'%3E%3Crect%20width='600'%20height='240'%20fill='%2324355f'/%3E%3Crect%20x='180'%20y='35'%20width='240'%20height='140'%20rx='8'%20fill='%23ffffff'/%3E%3Crect%20x='195'%20y='50'%20width='210'%20height='110'%20fill='%234876c4'/%3E%3Cpath%20d='M150%20190H450L470%20210H130Z'%20fill='%23ffffff'/%3E%3C/svg%3E"
            alt="Ilustração de um notebook representando o desenvolvimento web"
            width="300"
            height="120"
        >
    </section>

    <section aria-labelledby="conteudos">
        <h2 id="conteudos">Conteúdos</h2>
        <ul>
            <li>Estrutura de páginas com HTML</li>
            <li>Estilização com CSS</li>
            <li>Interatividade com JavaScript</li>
        </ul>
        <h3>Como estudar</h3>
        <p>Pratique cada conteúdo criando pequenos projetos.</p>
        <a href="https://github.com/JoaoChoma/sistemas_web_2026">
            Acessar o material da disciplina
        </a>
    </section>
</main>

<footer>
    <p>Curso de Desenvolvimento Web, 2026.</p>
</footer>
```

## Exercício 3

Arquivo `index.html`, conteúdo do `body`.

```html
<main>
    <h1>Cadastro de aluno</h1>
    <form action="" method="get">
        <p>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome"
                placeholder="Digite seu nome" required>
        </p>
        <p>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email"
                placeholder="nome@exemplo.com" required>
        </p>
        <p>
            <label for="idade">Idade</label>
            <input type="number" id="idade" name="idade"
                min="0" step="1" placeholder="Sua idade" required>
        </p>
        <p>
            <label for="curso">Curso</label>
            <select id="curso" name="curso" required>
                <option value="">Selecione um curso</option>
                <option value="si">Sistemas de Informação</option>
                <option value="esoft">Engenharia de Software</option>
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
            </select>
        </p>
        <button type="submit">Cadastrar</button>
    </form>
</main>
```

O `id` identifica um elemento na página, inclusive para associá-lo ao `label`. O `name` identifica o campo no envio do formulário. O `type` define o tipo e o comportamento do campo. O `placeholder` exibe uma dica enquanto o campo está vazio.

## Exercício 4

Arquivo `index.html`, conteúdo do `body`.

```html
<h1 id="titulo">Minha Loja</h1>
<p class="descricao">Produtos disponíveis</p>
<p class="descricao">Ofertas especiais</p>
```

Arquivo `style.css`.

```css
body {
    font-family: Arial, sans-serif;
}

#titulo {
    text-align: center;
}

.descricao {
    color: #284e85;
}
```

O seletor por elemento, como `body`, seleciona uma tag. O seletor de classe, como `.descricao`, seleciona os elementos que compartilham aquela classe. O seletor de identificador, como `#titulo`, seleciona o elemento com aquele `id`, que deve ser único na página.

## Exercício 5

Arquivo `index.html`, conteúdo do `body`.

```html
<main>
    <article class="card">
        <h1>Mouse sem fio</h1>
        <p>Conexão USB e formato confortável.</p>
        <p>R$ 80,00</p>
    </article>
</main>
```

Arquivo `style.css`.

```css
.card {
    box-sizing: border-box;
    width: 280px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #284e85;
    border-radius: 12px;
}
```

O `width` define a largura. O `padding` cria espaço interno, o `margin` cria espaço externo e o `border` delimita a caixa. Com `box-sizing: border-box`, os 280px já incluem padding e bordas. As margens horizontais acrescentam 40px ao espaço ocupado. O `border-radius` arredonda os cantos sem aumentar a caixa.

## Exercício 6

Arquivo `index.html`, conteúdo do `body`.

```html
<main class="cards">
    <article class="card">
        <h1>HTML</h1>
        <p>Estrutura das páginas.</p>
    </article>
    <article class="card">
        <h2>CSS</h2>
        <p>Aparência dos elementos.</p>
    </article>
    <article class="card">
        <h2>JavaScript</h2>
        <p>Interatividade no navegador.</p>
    </article>
</main>
```

Arquivo `style.css`.

```css
* {
    box-sizing: border-box;
}

body {
    margin: 16px;
    font-family: Arial, sans-serif;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    min-height: 240px;
}

.card {
    width: 200px;
    max-width: 100%;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
```

O `gap` define o espaço entre os cards dentro do contêiner, sem criar espaço nas bordas externas. O `margin` define o espaço externo de cada elemento e pode ser aplicado a lados específicos.

## Exercício 7

Arquivo `index.html`, conteúdo do `body`.

```html
<main>
    <h1>Grade de elementos</h1>
    <div class="grade">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
    </div>
</main>
```

Arquivo `style.css`.

```css
.grade {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.grade > div {
    padding: 20px;
    background-color: #dde8fa;
    text-align: center;
}
```

O `1fr` representa uma fração do espaço disponível no Grid. Nesse caso, as três colunas dividem igualmente a largura restante depois dos espaçamentos.

## Exercício 8

Arquivo `index.html`, acrescente ao `head` da estrutura base.

```html
<link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
```

Conteúdo do `body`.

```html
<main class="container py-4">
    <h1 class="mb-4">Cursos disponíveis</h1>
    <div class="row g-3">
        <div class="col-md-4">
            <article class="card h-100">
                <div class="card-body">
                    <h2 class="card-title h5">HTML</h2>
                    <p class="card-text">Aprenda a estruturar páginas web.</p>
                    <a class="btn btn-primary"
                        href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                        Ver conteúdo
                    </a>
                </div>
            </article>
        </div>
        <div class="col-md-4">
            <article class="card h-100">
                <div class="card-body">
                    <h2 class="card-title h5">CSS</h2>
                    <p class="card-text">Aprenda a estilizar suas páginas.</p>
                    <a class="btn btn-primary"
                        href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                        Ver conteúdo
                    </a>
                </div>
            </article>
        </div>
        <div class="col-md-4">
            <article class="card h-100">
                <div class="card-body">
                    <h2 class="card-title h5">JavaScript</h2>
                    <p class="card-text">Aprenda a criar interatividade.</p>
                    <a class="btn btn-primary"
                        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                        Ver conteúdo
                    </a>
                </div>
            </article>
        </div>
    </div>
</main>
```

O `container` organiza e limita a largura do conteúdo. A `row` agrupa as colunas. A `col-md-4` ocupa quatro das doze colunas a partir de 768px, formando três cards lado a lado; abaixo disso, eles ficam empilhados. A `card` estiliza o cartão e a `btn` fornece o estilo básico de botão. O CSS do Bootstrap é carregado pela internet.

## Exercício 9

| Variável | Tipo | Valor |
|---|---|---|
| `nome` | `string` | `"Notebook"` |
| `preco` | `number` | `3500` |
| `disponivel` | `boolean` | `true` |
| `quantidade` | `number` | `5` |

O `let` permite reatribuir o valor da variável. O `const` exige um valor inicial e impede sua reatribuição. Ambos têm escopo de bloco.

## Exercício 10

Arquivo `script.js`.

```javascript
let preco = 150;
let quantidade = 3;
let total = preco * quantidade;

console.log(total);
```

## Exercício 11

Arquivo `script.js`.

```javascript
let quantidade = 4;

if (quantidade === 0) {
    console.log("Produto indisponível");
} else if (quantidade >= 1 && quantidade <= 5) {
    console.log("Estoque baixo");
} else if (quantidade > 5) {
    console.log("Produto disponível");
} else {
    console.log("Quantidade inválida");
}
```

## Exercício 12

Arquivo `script.js`.

```javascript
console.log("Números de 1 a 20:");

for (let numero = 1; numero <= 20; numero++) {
    console.log(numero);
}

console.log("Números pares:");

for (let numero = 2; numero <= 20; numero += 2) {
    console.log(numero);
}
```

## Exercício 13

Arquivo `script.js`.

```javascript
function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

console.log(calcularTotal(150, 3));
```

O `return` encerra a execução da função e devolve um valor para quem a chamou. O `console.log()` exibe uma informação no console, sem devolver esse resultado ao chamador.

## Exercício 14

O vetor tem 4 elementos. Na posição 0 está `"Notebook"` e na posição 2 está `"Teclado"`. O último índice válido é 3. `produtos.length` retorna 4.

## Exercício 15

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos[1] = "Mouse Gamer";
produtos[3] = "Impressora";

console.log(produtos);
// ["Notebook", "Mouse Gamer", "Teclado", "Impressora"]
```

## Exercício 16

```javascript
let produtos = ["Notebook", "Mouse"];

produtos.push("Teclado");
produtos.push("Monitor");

console.log(produtos);
// ["Notebook", "Mouse", "Teclado", "Monitor"]
```

`produtos[2] = "Teclado"` grava na posição 2, substituindo o valor se ela já estiver ocupada. `push("Teclado")` sempre adiciona ao final. No vetor inicial deste exercício, as duas formas adicionam o terceiro elemento.

## Exercício 17

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.pop();
console.log(produtos);
// ["Notebook", "Mouse", "Teclado"]

produtos.shift();
console.log(produtos);
// ["Mouse", "Teclado"]

produtos.unshift("Impressora");
console.log(produtos);
// ["Impressora", "Mouse", "Teclado"]
```

## Exercício 18

```javascript
let alunos = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno " + (i + 1) + ": " + alunos[i]);
}
```

## Exercício 19

```javascript
let notas = [7, 8, 6, 9, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Soma: " + soma); // Soma: 40
console.log("Média: " + media); // Média: 8
```

## Exercício 20

```javascript
let numeros = [12, 5, 27, 8, 19];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(maior); // 27
```

## Exercício 21

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
let pesquisa = "Teclado";
let posicao = -1;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === pesquisa) {
        posicao = i;
        break;
    }
}

if (posicao !== -1) {
    console.log("Produto encontrado na posição " + posicao + ".");
} else {
    console.log("Produto não encontrado.");
}
```

## Exercício 22

```javascript
let numeros = [8, 3, 6, 1, 9, 2];

for (let i = 0; i < numeros.length - 1; i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[indiceMenor]) {
            indiceMenor = j;
        }
    }

    let temporario = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = temporario;
}

console.log(numeros); // [1, 2, 3, 6, 8, 9]
```

`i` indica a posição que receberá o próximo menor valor. `j` percorre a parte ainda não ordenada. `indiceMenor` guarda a posição do menor valor encontrado nessa busca.

## Exercício 23

Um objeto reúne dados em propriedades, que são pares de nome e valor. Nesse exemplo, `nome`, `preco` e `quantidade` são propriedades. Uma variável com valor simples, como um número, representa esse valor; o objeto agrupa vários dados relacionados. O nome é acessado por `produto.nome` e o preço por `produto.preco`.

## Exercício 24

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};

console.log("Produto: " + produto.nome);
console.log("Preço: R$ " + produto.preco);
console.log("Quantidade: " + produto.quantidade);
```

## Exercício 25

```javascript
let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Sistemas de Informação",
    nota: 7
};

aluno.nota = 9;
aluno.idade = 21;
aluno.aprovado = true;

console.log(aluno);
```

## Exercício 26

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5,
    calcularTotal() {
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal()); // 17500
```

Em `produto.calcularTotal()`, `this` se refere a `produto`, o objeto usado para chamar o método. Assim, `this.preco` e `this.quantidade` acessam suas propriedades. O valor de `this` depende de como a função é chamada. Fonte: [MDN, this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this).

## Exercício 27

```javascript
let produto = { nome: "Mouse", preco: 80, quantidade: 0 };

function verificarDisponibilidade(produto) {
    if (produto.quantidade > 0) {
        return "Disponível";
    }

    return "Indisponível";
}

console.log(verificarDisponibilidade(produto)); // Indisponível
```

## Exercício 28

Existem 3 objetos. `produtos[0]` retorna `{ nome: "Notebook", preco: 3500, quantidade: 5 }`. `produtos[0].nome` retorna `"Notebook"` e `produtos[1].preco` retorna `80`. A quantidade do terceiro produto é acessada por `produtos[2].quantidade`, que retorna `10`.

## Exercício 29

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco);
}
```

## Exercício 30

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

let novoProduto = { nome: "Monitor", preco: 900, quantidade: 8 };
produtos.push(novoProduto);

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}
```

## Exercício 31

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

function pesquisarProduto(nome) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === nome) {
            return produtos[i];
        }
    }

    return null;
}

console.log(pesquisarProduto("Teclado"));
// { nome: "Teclado", preco: 150, quantidade: 10 }
console.log(pesquisarProduto("Impressora")); // null
```

## Exercício 32

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 2 },
    { nome: "Mouse", preco: 80, quantidade: 10 },
    { nome: "Teclado", preco: 150, quantidade: 5 }
];
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].preco * produtos[i].quantidade;
}

console.log(totalEstoque.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})); // R$ 8.550,00
```

## Exercício 33

O objeto JavaScript é uma estrutura em memória, com propriedades que podem ser acessadas e alteradas. JSON é um formato de texto para representar e trocar dados, com nomes de propriedades entre aspas duplas. `JSON.stringify()` transforma o objeto em texto JSON e `JSON.parse()` faz a conversão de volta.

## Exercício 34

```javascript
let produto = { nome: "Notebook", preco: 3500, quantidade: 5 };
let textoJSON = JSON.stringify(produto);

console.log(textoJSON);
// {"nome":"Notebook","preco":3500,"quantidade":5}
console.log(typeof textoJSON); // string
```

## Exercício 35

```javascript
let textoJSON = '{"nome":"Mouse","preco":80,"quantidade":10}';
let produto = JSON.parse(textoJSON);

console.log("Nome: " + produto.nome); // Nome: Mouse
console.log("Preço: R$ " + produto.preco); // Preço: R$ 80
```

## Exercício 36

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 }
];

let textoJSON = JSON.stringify(produtos);
let produtosRecuperados = JSON.parse(textoJSON);

console.log(textoJSON);
console.log(produtosRecuperados);
```

## Exercício 37

HTML:

```html
<h1 id="titulo">Programação Web</h1>
<button id="botao" type="button">Alterar título</button>
```

Arquivo `script.js`:

```javascript
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  titulo.textContent = "JavaScript funcionando!";
});
```

## Exercício 38

Um evento é uma ocorrência que o navegador pode detectar, como um clique ou o envio de um formulário. `getElementById("botao")` seleciona o botão, e `addEventListener()` registra a função que tratará o evento. `"click"` é o tipo de evento observado. A função é executada quando o botão recebe um clique e exibe `Botão clicado!` no console.

## Exercício 39

HTML:

```html
<h1>Cadastro de nomes</h1>
<label for="nome">Nome</label>
<input id="nome" type="text">
<button id="adicionar" type="button">Adicionar</button>
<p id="mensagem" role="status"></p>
<ul id="lista"></ul>
<p>Total de nomes: <span id="total">0</span></p>
```

Arquivo `script.js`:

```javascript
const nomes = [];
const campoNome = document.getElementById("nome");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const total = document.getElementById("total");
const mensagem = document.getElementById("mensagem");

function atualizarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    const item = document.createElement("li");
    item.textContent = nomes[i];
    lista.appendChild(item);
  }

  total.textContent = nomes.length;
}

botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  if (nome === "") {
    mensagem.textContent = "Informe um nome.";
    return;
  }

  nomes.push(nome);
  atualizarLista();
  campoNome.value = "";
  campoNome.focus();
  mensagem.textContent = "Nome adicionado.";
});
```

## Exercício 40

HTML:

```html
<h1>Cadastro de produtos</h1>
<form id="cadastro">
  <p>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" required>
  </p>
  <p>
    <label for="preco">Preço</label>
    <input id="preco" name="preco" type="number" min="0.01" step="0.01" required>
  </p>
  <p>
    <label for="quantidade">Quantidade</label>
    <input id="quantidade" name="quantidade" type="number" min="0" step="1" required>
  </p>
  <button type="submit">Adicionar</button>
</form>
<p id="mensagem" role="status"></p>
<ul id="lista"></ul>
```

Arquivo `script.js`:

```javascript
const produtos = [];
const formulario = document.getElementById("cadastro");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

function atualizarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const item = document.createElement("li");
    const preco = produto.preco.toLocaleString("pt-BR", {
      style: "currency", currency: "BRL"
    });
    item.textContent = produto.nome + " - " + preco + " - " + produto.quantidade + " unidades";
    lista.appendChild(item);
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = campoNome.value.trim();
  const precoTexto = campoPreco.value.trim();
  const quantidadeTexto = campoQuantidade.value.trim();
  const preco = Number(precoTexto);
  const quantidade = Number(quantidadeTexto);

  if (nome === "" || precoTexto === "" || quantidadeTexto === "" ||
      !Number.isFinite(preco) || preco <= 0 ||
      !Number.isInteger(quantidade) || quantidade < 0) {
    mensagem.textContent = "Preencha nome, preço positivo e quantidade inteira não negativa.";
    return;
  }

  produtos.push({ nome: nome, preco: preco, quantidade: quantidade });
  atualizarLista();
  formulario.reset();
  campoNome.focus();
  mensagem.textContent = "Produto cadastrado.";
});
```

## Exercício 41

`localStorage` permite armazenar strings no navegador e recuperá-las em outras visitas à mesma origem. Uma variável guarda dados na memória do programa e normalmente é reiniciada quando a página é recarregada. Os dados no `localStorage` podem continuar disponíveis após o recarregamento e o fechamento do navegador, até serem removidos. Fonte: [MDN sobre localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Exercício 42

HTML:

```html
<h1>Nome do usuário</h1>
<label for="nome">Nome</label>
<input id="nome" type="text">
<button id="salvar" type="button">Salvar</button>
<p id="mensagem" role="status"></p>
```

Arquivo `script.js`:

```javascript
const chave = "atividade08-exercicio42-nome";
const campoNome = document.getElementById("nome");
const botao = document.getElementById("salvar");
const mensagem = document.getElementById("mensagem");
const nomeSalvo = localStorage.getItem(chave);

if (nomeSalvo !== null) {
  campoNome.value = nomeSalvo;
  mensagem.textContent = "Nome recuperado: " + nomeSalvo;
}

botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  if (nome === "") {
    mensagem.textContent = "Informe um nome.";
    return;
  }

  localStorage.setItem(chave, nome);
  mensagem.textContent = "Nome salvo: " + nome;
});
```

## Exercício 43

```javascript
let usuario = {
  nome: "Ana",
  idade: 22,
  curso: "Sistemas de Informação"
};

localStorage.setItem("atividade08-exercicio43-usuario", JSON.stringify(usuario));

const textoSalvo = localStorage.getItem("atividade08-exercicio43-usuario");

if (textoSalvo !== null) {
  const usuarioRecuperado = JSON.parse(textoSalvo);
  console.log(usuarioRecuperado);
}
```

## Exercício 44

Use o HTML do exercício 40 com este `script.js`:

```javascript
const chave = "atividade08-exercicio44-produtos";
let produtos = [];
const formulario = document.getElementById("cadastro");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

function produtoValido(produto) {
  return produto !== null && typeof produto === "object" &&
    typeof produto.nome === "string" && produto.nome.trim() !== "" &&
    Number.isFinite(produto.preco) && produto.preco > 0 &&
    Number.isInteger(produto.quantidade) && produto.quantidade >= 0;
}

function carregarProdutos() {
  try {
    const texto = localStorage.getItem(chave);

    if (texto === null) {
      return;
    }

    const dados = JSON.parse(texto);

    if (!Array.isArray(dados)) {
      throw new Error("Dados inválidos");
    }

    for (let i = 0; i < dados.length; i++) {
      if (!produtoValido(dados[i])) {
        throw new Error("Produto inválido");
      }
    }

    produtos = dados;
  } catch {
    mensagem.textContent = "Não foi possível recuperar os produtos salvos.";
  }
}

function atualizarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const item = document.createElement("li");
    const preco = produto.preco.toLocaleString("pt-BR", {
      style: "currency", currency: "BRL"
    });
    item.textContent = produto.nome + " - " + preco + " - " + produto.quantidade + " unidades";
    lista.appendChild(item);
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = campoNome.value.trim();
  const precoTexto = campoPreco.value.trim();
  const quantidadeTexto = campoQuantidade.value.trim();
  const produto = {
    nome: nome,
    preco: Number(precoTexto),
    quantidade: Number(quantidadeTexto)
  };

  if (precoTexto === "" || quantidadeTexto === "" || !produtoValido(produto)) {
    mensagem.textContent = "Preencha nome, preço positivo e quantidade inteira não negativa.";
    return;
  }

  produtos.push(produto);

  try {
    localStorage.setItem(chave, JSON.stringify(produtos));
  } catch {
    produtos.pop();
    mensagem.textContent = "Não foi possível salvar os produtos no navegador.";
    return;
  }

  atualizarLista();
  formulario.reset();
  campoNome.focus();
  mensagem.textContent = "Produto cadastrado.";
});

carregarProdutos();
atualizarLista();
```

## Exercício 45

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro de produtos</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <main>
    <h1>Cadastro de produtos</h1>
    <form id="cadastro">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" required>

      <label for="preco">Preço</label>
      <input id="preco" name="preco" type="number" min="0.01" step="0.01" required>

      <label for="quantidade">Quantidade</label>
      <input id="quantidade" name="quantidade" type="number" min="0" step="1" required>

      <button type="submit">Adicionar</button>
    </form>

    <p id="mensagem" role="status"></p>
    <section aria-labelledby="tituloLista">
      <h2 id="tituloLista">Produtos cadastrados</h2>
      <ul id="lista"></ul>
      <p>Total de produtos: <span id="totalProdutos">0</span></p>
      <p>Valor total do estoque: <span id="valorEstoque">R$ 0,00</span></p>
    </section>
  </main>
</body>
</html>
```

Arquivo `style.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px 16px;
  font-family: Arial, sans-serif;
  color: #24324a;
  background-color: #eef2f7;
}

main {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 12px;
  background-color: white;
}

form {
  display: grid;
  gap: 10px;
}

input,
button {
  width: 100%;
  min-width: 0;
  padding: 10px;
  font: inherit;
  border: 1px solid #8c9cb2;
  border-radius: 6px;
}

button {
  margin-top: 8px;
  border: 0;
  color: white;
  background-color: #174ea6;
  cursor: pointer;
}

button:hover {
  background-color: #103b80;
}

button:focus-visible,
input:focus-visible {
  outline: 3px solid #d97706;
  outline-offset: 2px;
}

li {
  margin-bottom: 8px;
  overflow-wrap: anywhere;
}

@media (max-width: 480px) {
  main {
    padding: 16px;
  }

  h1 {
    font-size: 1.6rem;
  }
}
```

Arquivo `script.js`:

```javascript
const chave = "atividade08-exercicio45-produtos";
let produtos = [];
const formulario = document.getElementById("cadastro");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const lista = document.getElementById("lista");
const totalProdutos = document.getElementById("totalProdutos");
const valorEstoque = document.getElementById("valorEstoque");
const mensagem = document.getElementById("mensagem");

function produtoValido(produto) {
  return produto !== null && typeof produto === "object" &&
    typeof produto.nome === "string" && produto.nome.trim() !== "" &&
    Number.isFinite(produto.preco) && produto.preco > 0 &&
    Number.isInteger(produto.quantidade) && produto.quantidade >= 0;
}

function pesquisarProduto(nome) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome.trim().toLowerCase() === nome.trim().toLowerCase()) {
      return produtos[i];
    }
  }

  return null;
}

function carregarProdutos() {
  try {
    const texto = localStorage.getItem(chave);

    if (texto === null) {
      return;
    }

    const dados = JSON.parse(texto);

    if (!Array.isArray(dados)) {
      throw new Error("Dados inválidos");
    }

    const nomes = [];

    for (let i = 0; i < dados.length; i++) {
      if (!produtoValido(dados[i])) {
        throw new Error("Produto inválido");
      }

      const nome = dados[i].nome.trim().toLowerCase();

      for (let j = 0; j < nomes.length; j++) {
        if (nomes[j] === nome) {
          throw new Error("Produto repetido");
        }
      }

      nomes.push(nome);
    }

    produtos = dados;
  } catch {
    mensagem.textContent = "Não foi possível recuperar os produtos salvos.";
  }
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function atualizarLista() {
  lista.innerHTML = "";
  let total = 0;

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const item = document.createElement("li");
    item.textContent = produto.nome + " - " + formatarMoeda(produto.preco) +
      " - " + produto.quantidade + " unidades";
    lista.appendChild(item);
    total += produto.preco * produto.quantidade;
  }

  totalProdutos.textContent = produtos.length;
  valorEstoque.textContent = formatarMoeda(total);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = campoNome.value.trim();
  const precoTexto = campoPreco.value.trim();
  const quantidadeTexto = campoQuantidade.value.trim();
  const produto = {
    nome: nome,
    preco: Number(precoTexto),
    quantidade: Number(quantidadeTexto)
  };

  if (precoTexto === "" || quantidadeTexto === "" || !produtoValido(produto)) {
    mensagem.textContent = "Preencha nome, preço positivo e quantidade inteira não negativa.";
    return;
  }

  if (pesquisarProduto(nome) !== null) {
    mensagem.textContent = "Já existe um produto cadastrado com esse nome.";
    return;
  }

  produtos.push(produto);

  try {
    localStorage.setItem(chave, JSON.stringify(produtos));
  } catch {
    produtos.pop();
    mensagem.textContent = "Não foi possível salvar os produtos no navegador.";
    return;
  }

  atualizarLista();
  formulario.reset();
  campoNome.focus();
  mensagem.textContent = "Produto cadastrado.";
});

carregarProdutos();
atualizarLista();
```
