let nome: string = "Fulano"
let idade: number = 27
let altura: number = 1.82
let temGato: boolean = false

//criando arrays
let nomes: string[] = ['Vitor','João','Lucas']
//arrays de numeros
let numeros: number[] = [10,100,120,130]
//arrays misturado
let coisas: any = ['Fulaninho',15,'Ciclano',20]
//funções no TS
function firstLetterUpperCase (nome: string, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
} 