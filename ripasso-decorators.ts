function Logger(messaggio: string) {
  return (constructor: Function) => {
    console.log("Ciao");
    console.log(messaggio);
    console.log(this.name);
  };
}

@Logger("Ciao brooo")
class Prova {
  constructor() {
    console.log("Ciao");
  }
}

const prova = new Prova();
