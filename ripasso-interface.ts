 interface prova{
    nome:string,
    cognome:string
     saluta():void
 }
 
 class X implements prova{
    nome: string
    cognome: string
    constructor(nome:string,cognome:string){
        this.nome = nome
        this.cognome=cognome
    }
    saluta(): void {
        console.log("ciao")
    }
 }