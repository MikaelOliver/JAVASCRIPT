import { Cliente } from "./FichaDeClientes.js"

let cliente01 = new Cliente('Mikael','teste@asd.com','123.567.911-34')


console.log(cliente01)

cliente01.definirCpf = '12345678'
console.log(cliente01)