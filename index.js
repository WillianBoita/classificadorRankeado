const vitorias = parseInt(process.argv[2]);
const derrotas = parseInt(process.argv[3]);
let nivel;

const saldoVitorias = vitorias - derrotas

if (vitorias <= 10) {
    nivel = "Ferro"
} else if (vitorias <= 20) {
    nivel = "Bronze"
} else if (vitorias <= 50) {
    nivel = "Prata"
} else if (vitorias <= 80) {
    nivel = "Ouro"
} else if (vitorias <= 90) {
    nivel = "Diamante"
} else if (vitorias <= 100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)
