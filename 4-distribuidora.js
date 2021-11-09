/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/
let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53
let total = sp + rj + mg + es + outros
let pSp, pRj, pMg, pEs, pOutros

pSp = ((sp / total) * 100).toFixed(2)
pRj = ((rj / total) * 100).toFixed(2)
pMg = ((mg / total) * 100).toFixed(2)
pEs = ((es / total) * 100).toFixed(2)
pOutros = ((outros / total) * 100).toFixed(2)

console.log('O faturamento total foi de R$ ' + total)
console.log('A participação de São Paulo no faturamento foi: ' + pSp + '%')
console.log('A participação do Rio de Janeiro foi: ' + pRj + '%')
console.log('A participação de Minas Gerais foi: ' + pMg + '%')
console.log('A participação de Espirito Santos foi: ' + pEs + '%')
console.log('A participação dos outros estados foi: ' + pOutros + '%')