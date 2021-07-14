/* 
Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele
mantém registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo
valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma
lista string = "pontuação 1 pont2 pont3 etc.", escreva uma função que ao recebê-la irá
comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu
seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
*/

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliarPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebradeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebradeRecordes++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [qtdQuebradeRecordes, piorJogo]
}

console.log(avaliarPontuacoes(stringPontuacoes))