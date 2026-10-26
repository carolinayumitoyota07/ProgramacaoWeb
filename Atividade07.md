# Atividade 07

Carolina Yumi Toyota, RA 143210  

## Exercício 1

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Aprendendo Sistemas Web</h1>
  <p>Esta é minha primeira página</p>
</body>
</html>
```

O `head` reúne informações sobre o documento, como título, codificação e arquivos de estilo. O `body` contém o conteúdo apresentado na página. `DOCTYPE` informa o uso do HTML moderno.

## Exercício 2

```html
<h1>Meu guia de estudos</h1>
<p>Estou aprendendo a criar páginas para a web</p>

<h2>Conteúdos</h2>
<p>HTML organiza o conteúdo e CSS cuida da apresentação</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>Minha rotina</h2>
<p>Estudo os exemplos e depois pratico no navegador</p>
<ol>
  <li>Ler o enunciado</li>
  <li>Escrever o código</li>
  <li>Testar o resultado</li>
</ol>

<img src="imagens/produto.svg" alt="Ilustração de um notebook" width="280">
<a href="https://developer.mozilla.org/pt-BR/docs/Web">Consultar documentação web</a>
```

Imagem utilizada nos exercícios 2 e 7. Conteúdo de `imagens/produto.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180">
  <rect width="280" height="180" rx="12" fill="#e8f0fe"/>
  <rect x="48" y="25" width="184" height="118" rx="8" fill="#334155"/>
  <rect x="58" y="35" width="164" height="96" fill="#93c5fd"/>
  <path d="M30 143h220l-15 16H45z" fill="#64748b"/>
</svg>
```

## Exercício 3


```html
<header>
  <h1>Carolina Yumi Toyota</h1>
  <p>Estudante de Programação de Sistemas Web. RA 143210.</p>
</header>

<main>
  <section aria-labelledby="sobre">
    <h2 id="sobre">Sobre mim</h2>
    <img src="https://github.com/carolinayumitoyota07.png" alt="Avatar do perfil GitHub de Carolina Yumi Toyota" width="160" height="160">
    <p>Estou estudando desenvolvimento web e praticando a criação de páginas com HTML, CSS e JavaScript</p>
  </section>
  <section aria-labelledby="tecnologias">
    <h2 id="tecnologias">Tecnologias em estudo</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
    </ul>
  </section>
  <nav aria-label="Perfil na rede social">
    <a href="https://github.com/carolinayumitoyota07">Meu GitHub</a>
  </nav>
</main>

<footer>
  <p>Atividade de Programação de Sistemas Web</p>
</footer>
```

## Exercício 4

```html
<h1>Cadastro de estudante</h1>
<form id="cadastro">
  <p>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" autocomplete="name" required>
  </p>
  <p>
    <label for="email">E-mail</label>
    <input id="email" name="email" type="email" autocomplete="email" required>
  </p>
  <p>
    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" autocomplete="new-password" required>
  </p>
  <p>
    <label for="curso">Curso</label>
    <select id="curso" name="curso" required>
      <option value="">Selecione</option>
      <option value="engenharia-software">Engenharia de Software</option>
      <option value="sistemas-informacao">Sistemas de Informação</option>
    </select>
  </p>
  <p>
    <label for="observacoes">Observações</label>
    <textarea id="observacoes" name="observacoes" rows="4"></textarea>
  </p>
  <button type="submit">Cadastrar</button>
</form>
<p id="mensagem" role="status"></p>
```

JavaScript para demonstrar o envio local:

```javascript
const formulario = document.getElementById("cadastro");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  document.getElementById("mensagem").textContent =
    "Formulário validado. Esta demonstração não salva um cadastro.";
  document.getElementById("senha").value = "";
});
```

O navegador verifica os campos `required` e o formato do e-mail antes do evento de envio. `preventDefault()` evita a navegação de um envio tradicional. Um cadastro real precisaria de processamento no servidor.

## Exercício 5

```html
<link rel="stylesheet" href="style.css">
```

Essa linha, colocada no `head`, carrega a folha de estilos `style.css`. `rel="stylesheet"` indica a relação com uma folha de estilos, e `href` informa o caminho do arquivo. Separar HTML e CSS facilita a manutenção e permite reutilizar a mesma aparência em várias páginas.

## Exercício 6

```html
<h1 id="titulo">Programação Web</h1>
<p class="destaque">HTML</p>
<p class="destaque">CSS</p>
```

```css
#titulo {
  text-align: center;
}

.destaque {
  color: #174ea6;
  background-color: #e8f0fe;
  font-weight: bold;
  padding: 8px;
}
```

`#titulo` seleciona o elemento com aquele ID, que deve ser único no documento. `.destaque` seleciona todos os elementos que possuem essa classe. Uma classe pode ser reutilizada em vários elementos.

## Exercício 7

```html
<article class="card-produto">
  <img src="imagens/produto.svg" alt="Ilustração de um notebook" width="240">
  <h2>Notebook para estudos</h2>
  <p>Modelo ilustrativo para programação e atividades da faculdade.</p>
  <p><strong>R$ 2.800,00</strong></p>
  <button type="button">Comprar</button>
</article>
```

```css
.card-produto {
  box-sizing: border-box;
  width: 300px;
  max-width: 100%;
  padding: 20px;
  margin: 24px auto;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.card-produto img {
  max-width: 100%;
  height: auto;
}

.card-produto button {
  padding: 10px 20px;
  border: 0;
  border-radius: 6px;
  background-color: #174ea6;
  color: white;
}
```

`padding` cria espaço interno; `margin` cria espaço externo. O botão compõe a interface do card; a lista não pede implementar uma compra.

## Exercício 8

Acrescente estas regras ao mesmo `style.css`:

```css
.card-produto button {
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.card-produto button:hover {
  background-color: #c7ddff;
  color: #102a43;
}
```

`:hover` aplica o estilo enquanto o ponteiro está sobre o botão. `transition` suaviza a mudança de cores.

## Exercício 9

```html
<div class="centralizador">
  <div class="caixa">Conteúdo centralizado</div>
</div>
```

```css
body {
  margin: 0;
}

.centralizador {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.caixa {
  padding: 24px;
  background-color: #dbeafe;
}
```

`display: flex` ativa o layout flexível no elemento pai. Na direção padrão `row`, `justify-content: center` centraliza horizontalmente e `align-items: center` centraliza verticalmente. `min-height: 100vh` garante uma altura mínima igual a 100% da altura da viewport. Com `flex-direction: column`, a orientação dos eixos se inverte.

## Exercício 10

```html
<div class="caixas">
  <div class="caixa">1</div>
  <div class="caixa">2</div>
  <div class="caixa">3</div>
</div>
```

```css
.caixas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 180px;
}

.caixa {
  width: 80px;
  padding: 24px 0;
  text-align: center;
  background-color: #dbeafe;
  border: 1px solid #174ea6;
}
```

## Exercício 11

```html
<nav class="menu" aria-label="Menu principal">
  <a href="#inicio">Início</a>
  <a href="#sobre">Sobre</a>
  <a href="#servicos">Serviços</a>
  <a href="#contato">Contato</a>
</nav>

<main>
  <section id="inicio"><h1>Início</h1><p>Bem-vindo ao site.</p></section>
  <section id="sobre"><h2>Sobre</h2><p>Conheça nossa proposta</p></section>
  <section id="servicos"><h2>Serviços</h2><p>Desenvolvimento de páginas web</p></section>
  <section id="contato"><h2>Contato</h2><p>Entre em contato com a equipe</p></section>
</main>
```

```css
.menu {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background-color: #172554;
}

.menu a {
  padding: 10px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  background-color: #dbeafe;
  color: #172554;
}
```

## Exercício 12

```html
<div class="grade">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
  <div>7</div><div>8</div><div>9</div>
</div>
```

```css
.grade {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-width: 360px;
}

.grade > div {
  padding: 20px;
  text-align: center;
  background-color: #dbeafe;
}
```

`repeat(3, 1fr)` repete três vezes uma coluna de uma fração do espaço disponível. Neste exemplo, as três colunas têm a mesma largura, descontados os espaços entre elas.

## Exercício 13

Bootstrap é uma biblioteca de interface com estilos, componentes e utilitários que ajudam a criar páginas responsivas.

| Classe | Função |
|---|---|
| `container` | Organiza o conteúdo com espaçamento lateral e larguras máximas responsivas |
| `row` | Agrupa as colunas do sistema de grid |
| `col` | Cria uma coluna que divide o espaço disponível com outras colunas equivalentes |
| `btn` | Aplica a aparência básica de botão |
| `btn-primary` | Aplica ao botão a variante visual primária |
| `card` | Define a estrutura visual básica de um card |


## Exercício 14

Arquivo `index.html` completo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cards responsivos</title>
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
  <main class="container py-4">
    <h1 class="mb-4">Conteúdos de Sistemas Web</h1>
    <div class="row g-3">
      <div class="col-12 col-lg-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h4">HTML</h2>
            <p class="card-text">Estrutura e semântica da página.</p>
            <a class="btn btn-primary" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">Estudar HTML</a>
          </div>
        </article>
      </div>
      <div class="col-12 col-lg-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h4">CSS</h2>
            <p class="card-text">Estilos, layout e responsividade.</p>
            <a class="btn btn-primary" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">Estudar CSS</a>
          </div>
        </article>
      </div>
      <div class="col-12 col-lg-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h4">JavaScript</h2>
            <p class="card-text">Lógica, eventos e interação com o DOM.</p>
            <a class="btn btn-primary" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">Estudar JavaScript</a>
          </div>
        </article>
      </div>
    </div>
  </main>
</body>
</html>
```

## Exercício 15

`nome = "Carlos"` é `string`, `idade = 20` é `number` e `aprovado = true` é `boolean`.

```javascript
let nome = "Carlos";
let idade = 20;
let aprovado = true;

console.log(typeof nome);     // string
console.log(typeof idade);    // number
console.log(typeof aprovado); // boolean

const nomeProduto = "Caderno";
const preco = 24.90;
let quantidade = 3;
let disponivel = true;

console.log(nomeProduto, preco, quantidade, disponivel);
```

Preço e quantidade são `number`. Disponibilidade é `boolean`, e o nome do produto é `string`.

## Exercício 16

```javascript
let nota1 = 7;
let nota2 = 9;
const media = (nota1 + nota2) / 2;

console.log(media); // 8
```

Os parênteses fazem a soma acontecer antes da divisão.

## Exercício 17

```javascript
const entrada = prompt("Informe a média de 0 a 10:");

if (entrada === null || entrada.trim() === "") {
  console.log("Média não informada.");
} else {
  const media = Number(entrada);

  if (!Number.isFinite(media) || media < 0 || media > 10) {
    console.log("Informe uma média válida de 0 a 10.");
  } else if (media >= 7) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}
```

## Exercício 18

```javascript
const entrada = prompt("Informe a nota de 0 a 10:");

if (entrada === null || entrada.trim() === "") {
  console.log("Nota não informada.");
} else {
  const nota = Number(entrada);

  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    console.log("Informe uma nota válida de 0 a 10.");
  } else if (nota >= 9) {
    console.log("Excelente");
  } else if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
```


## Exercício 19

```javascript
for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}
```


## Exercício 20

```javascript
for (let numero = 0; numero <= 20; numero++) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
```


## Exercício 21

Para `let notas = [7, 5, 9, 8, 6]`, `notas[0]` vale `7` e `notas[2]` vale `9`. `notas.length` informa a quantidade de elementos, que é `5`. Para alterar a posição 1, use `notas[1] = 10`.

```javascript
let notas = [7, 5, 9, 8, 6];

console.log(notas[0]);     // 7
console.log(notas[2]);     // 9
console.log(notas.length); // 5

notas[1] = 10;
console.log(notas);        // [7, 10, 9, 8, 6]
```

O índice 1 identifica o segundo elemento, pois a contagem dos índices começa em zero.

## Exercício 22

```javascript
let nomes = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
```


## Exercício 23

```javascript
let numeros = [7, 3, 9, 2, 5];

for (let i = 0; i < numeros.length - 1; i++) {
  let indiceMenor = i;

  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[j] < numeros[indiceMenor]) {
      indiceMenor = j;
    }
  }

  if (indiceMenor !== i) {
    const temporario = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = temporario;
  }
}

console.log(numeros); // [2, 3, 5, 7, 9]
```

`i` marca a posição que receberá o menor valor da parte ainda não ordenada. `j` percorre as posições seguintes. `indiceMenor` guarda a posição do menor valor encontrado. `temporario` preserva o valor original de `numeros[i]` durante a troca, evitando que ele seja perdido.

| Passagem | Menor valor encontrado | Array ao final |
|---|---|---|
| `i = 0` | 2 | `[2, 3, 9, 7, 5]` |
| `i = 1` | 3 | `[2, 3, 9, 7, 5]` |
| `i = 2` | 5 | `[2, 3, 5, 7, 9]` |
| `i = 3` | 7 | `[2, 3, 5, 7, 9]` |

O algoritmo altera o próprio array e não utiliza `Array.sort()`.

## Exercício 24

```javascript
function somar(a, b) {
  return a + b;
}

console.log(somar(4, 6)); // 10
```



## Exercício 25

```javascript
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(18)); // Maior de idade
console.log(verificarIdade(17)); // Menor de idade
```

## Exercício 28

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alteração do título</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1 id="titulo">Programação Web</h1>
  <button id="botao" type="button">Alterar</button>
</body>
</html>
```

Arquivo `script.js`:

```javascript
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  titulo.textContent = "JavaScript funcionando!";
});
```

## Exercício 29

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lâmpada</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Controle da lâmpada</h1>
  <img id="lampada" src="imagens/lampada-apagada.svg" alt="Lâmpada apagada" width="160">
  <p>
    <button id="acender" type="button">ACENDER</button>
    <button id="apagar" type="button">APAGAR</button>
  </p>
  <p id="estado" role="status">A lâmpada está apagada.</p>
</body>
</html>
```

Arquivo `script.js`:

```javascript
const lampada = document.getElementById("lampada");
const estado = document.getElementById("estado");
const acender = document.getElementById("acender");
const apagar = document.getElementById("apagar");

acender.addEventListener("click", function () {
  lampada.src = "imagens/lampada-acesa.svg";
  lampada.alt = "Lâmpada acesa";
  estado.textContent = "A lâmpada está acesa.";
});

apagar.addEventListener("click", function () {
  lampada.src = "imagens/lampada-apagada.svg";
  lampada.alt = "Lâmpada apagada";
  estado.textContent = "A lâmpada está apagada.";
});
```

O fluxo é: usuário clica no botão, o navegador dispara o evento `click`, a função registrada é executada e as propriedades dos elementos do DOM são alteradas. A troca de `src` faz o navegador exibir a outra imagem. O texto e a descrição alternativa acompanham o estado da lâmpada.

Conteúdo de `imagens/lampada-apagada.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 200">
  <rect width="160" height="200" fill="#f8fafc"/>
  <path d="M80 25a45 45 0 0 0-29 79c10 9 12 17 12 31h34c0-14 2-22 12-31A45 45 0 0 0 80 25z"
        fill="#cbd5e1" stroke="#475569" stroke-width="4"/>
  <path d="M63 143h34M63 154h34M69 165h22" stroke="#475569" stroke-width="7"/>
</svg>
```

Conteúdo de `imagens/lampada-acesa.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 200">
  <rect width="160" height="200" fill="#fffbea"/>
  <g stroke="#d97706" stroke-width="4">
    <path d="M80 5v12M14 67h12M134 67h12M28 17l10 10M122 27l10-10"/>
    <path d="M80 25a45 45 0 0 0-29 79c10 9 12 17 12 31h34c0-14 2-22 12-31A45 45 0 0 0 80 25z"
          fill="#fde047"/>
  </g>
  <path d="M63 143h34M63 154h34M69 165h22" stroke="#475569" stroke-width="7"/>
</svg>
```
