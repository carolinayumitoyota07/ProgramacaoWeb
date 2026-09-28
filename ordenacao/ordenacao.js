const vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];

function bubbleSort(array) {
    const original = [...array];
    const vetorOrdenado = [...array];

    let comparacoes = 0;
    let trocas = 0;

    for (let i = 0; i < vetorOrdenado.length - 1; i++) {
        let houveTroca = false;

        for (let j = 0; j < vetorOrdenado.length - 1 - i; j++) {
            comparacoes++;

            if (vetorOrdenado[j] > vetorOrdenado[j + 1]) {
                let auxiliar = vetorOrdenado[j];

                vetorOrdenado[j] = vetorOrdenado[j + 1];
                vetorOrdenado[j + 1] = auxiliar;

                trocas++;
                houveTroca = true;
            }
        }

        //Se não houve troca o vetor ja esta ordenado
        if (!houveTroca) {
            break;
        }
    }

    console.log("Bubble Sort");
    console.log("Original:", original);
    console.log("Ordenado:", vetorOrdenado);
    console.log("Comparações:", comparacoes);
    console.log("Trocas:", trocas);

    return {
        comparacoes: comparacoes,
        movimentacoes: trocas
    };
}


function selectionSort(array) {
    const original = [...array];
    const vetorOrdenado = [...array];

    let comparacoes = 0;
    let trocas = 0;

    for (let i = 0; i < vetorOrdenado.length - 1; i++) {
        let indiceMenor = i;

        for (let j = i + 1; j < vetorOrdenado.length; j++) {
            comparacoes++;

            if (vetorOrdenado[j] < vetorOrdenado[indiceMenor]) {
                indiceMenor = j;
            }
        }

        if (indiceMenor !== i) {
            let auxiliar = vetorOrdenado[i];

            vetorOrdenado[i] = vetorOrdenado[indiceMenor];
            vetorOrdenado[indiceMenor] = auxiliar;

            trocas++;
        }
    }

    console.log("\nSelection Sort");
    console.log("Original:", original);
    console.log("Ordenado:", vetorOrdenado);
    console.log("Comparações:", comparacoes);
    console.log("Trocas:", trocas);

    return {
        comparacoes: comparacoes,
        movimentacoes: trocas
    };
}


function insertionSort(array) {
    const original = [...array];
    const vetorOrdenado = [...array];

    let comparacoes = 0;
    let movimentacoes = 0;

    for (let i = 1; i < vetorOrdenado.length; i++) {
        let atual = vetorOrdenado[i];
        let j = i - 1;

        while (j >= 0) {
            comparacoes++;

            if (vetorOrdenado[j] > atual) {
                vetorOrdenado[j + 1] = vetorOrdenado[j];

                movimentacoes++;
                j--;
            } else {
                break;
            }
        }

        vetorOrdenado[j + 1] = atual;
        movimentacoes++;
    }

    console.log("\nInsertion Sort");
    console.log("Original:", original);
    console.log("Ordenado:", vetorOrdenado);
    console.log("Comparações:", comparacoes);
    console.log("Movimentações:", movimentacoes);

    return {
        comparacoes: comparacoes,
        movimentacoes: movimentacoes
    };
}


//Executa os tres algoritmos
const resultadoBubble = bubbleSort(vetor);
const resultadoSelection = selectionSort(vetor);
const resultadoInsertion = insertionSort(vetor);


//Resumo final
console.log("\nResumo:");

console.log(
    "Bubble Sort:",
    resultadoBubble.comparacoes,
    "comparações e",
    resultadoBubble.movimentacoes,
    "trocas"
);

console.log(
    "Selection Sort:",
    resultadoSelection.comparacoes,
    "comparações e",
    resultadoSelection.movimentacoes,
    "trocas"
);

console.log(
    "Insertion Sort:",
    resultadoInsertion.comparacoes,
    "comparações e",
    resultadoInsertion.movimentacoes,
    "movimentações"
);