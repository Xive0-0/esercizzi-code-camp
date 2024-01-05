function fearNotLetter(str:string):string|undefined{  
   const alfabeto:String[]= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   const scomposizione:string[]=str.split("");
   scomposizione.find("a")
    for (let i = 0;i < alfabeto.length;i++) {
        if(scomposizione[i]===alfabeto[i]){
            for (let i = 0; i < scomposizione.length; i++) {
                if(scomposizione[i]===alfabeto[i]){
                    
                }else{
                    return str=scomposizione[i]
                }

                
            }
            return undefined
        }
        
    }
    return str
}