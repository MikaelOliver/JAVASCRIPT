import { Metros } from "./Metros.js"
import { Centimetros } from "./Centimetros.js"
import { Kilometros } from "./Kilometros.js"
import { Milimetros } from "./Milimetros.js"

let metros  = new Metros('M','KM',1)
metros.ConvertendoParaMetros()


let kilometro = new Kilometros('KM','CM', 1)
kilometro.ConvertendoParaKilometros()

let centimetros = new Centimetros('CM','M', 1)
centimetros.ConvertendoParaCentimetros()


let milimetros = new Milimetros('MM','M', 1)
milimetros.ConvertendoParaMilimetros()