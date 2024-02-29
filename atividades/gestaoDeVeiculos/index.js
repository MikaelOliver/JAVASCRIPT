import { Novos } from "./Novos.js";
import { Usado } from "./Usados.js";
import { Veiculos } from "./Veiculos.js";


let palio = new Veiculos('Fiat','ELX','GHJ-4729','vermelho','2005','flex', 0)

console.log(palio.getMarca)
console.log(palio.anoDeFabricacao)

console.log(palio.quantidade)
palio.setQuantidade = -3
console.log(palio.quantidade)
palio.setQuantidade = 2
console.log(palio.quantidade)

palio.setQuantidade = 5
console.log(palio.quantidade)

palio.setQuantidade = -6
console.log(palio.quantidade)
palio.setQuantidade = -4
console.log(palio.quantidade)
console.log('============================')

let civic = new Novos('honda', 'Touring', null, 'Preto', '2020', 'flex', 10, 265000.00, 'patio')

console.table(civic)

console.log('=======================')

civic.setStatusDeVenda = true
civic.setQuantidade = -1
civic.setTaixaDeEmplacamento = 3000.00
civic.setEmplacamento = true
civic.setPlaca = 'YUT-0954'
console.table(civic)


console.log('========================')


let audi = new Usado('AUDI', 'Audi R4', 'PNG-2312','Azul','2016', 'flex', 4, 3, '20000KM', 305990.00)

console.table(audi)

console.log('=========================')

audi.setModificado = true
audi.setNumeroDeDonos = 4
audi.setQuantidade = -1


console.table(audi)