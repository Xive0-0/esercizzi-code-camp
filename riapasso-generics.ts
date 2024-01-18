//generics
const arr:Array<string>=["qidnqnod","ucqbqobcwq"];


function CreaArray<T extends number|string>(items:T[]):T[] {
   return new Array().concat(items)
}


const arr1=CreaArray<number>([1,1,1,1])
const arr2=CreaArray<string> (["qwerwr","qwerqwer"])

class Prova <T>{
    private list:T[]=[]

    aggiungi(item:T){
        this.list.splice(this.list.indexOf(item,1))
    }
    
}

 