// let dataAtual = new Date() - DATA COMPLETA
// getday- PEGA O DIA
// getmonth- PEGA O MES
// getfullyear- PEGA O ANO
// getHoutrs- PEGA AS HRS



// // let dataAtual = new Date() //data completa do pc, data padrão UTC/Americano
// // console.log(dataAtual)

// // let dia = new Date('2024-10-05').getDay() //pega só o dia da data
// // let mes = new Date('2024-10-05').getMonth() //pega só o o mes
// // let ano = new Date('2024-10-05').getFullYear() //pega só o ano

// // console.log(dia)
// // console.log(mes)
// // console.log(ano)

// // let minhaData = new Date("December 25, 1995 23:15:30")
// // let minhaHora = minhaData.getHours()
// // console.log(minhaHora)

// // let hora = '22:17:34'
// // let soHora = hora.split(':')
// // let horas = parseInt(soHora[1])
// // console.log(horas)


let dia = new Date('2024-2-29')
let entrada = new Date('2024-3-30')
let calc = entrada.getTime() - dia.getTime()

console.log(calc)