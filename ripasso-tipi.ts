//ripasso ep 6 tipi
let prova:string|number=2; 

//--type--
type Persona={
    nome:string,
    cognome:string
}
//type prof=Persona|string;


//--enum--
enum Ruolo{
    Admin,
    User,
    Guest
}

let persona:Persona;

let Persona:{
    nome:string;
    cognome:string
}


const uomo={
    nome:"luca",
    cognome:"rossi",
    ruolo:Ruolo.Admin
}


