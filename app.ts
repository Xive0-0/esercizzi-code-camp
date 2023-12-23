function translatePigLatin(str: string): string | string[] {
  str.toLocaleLowerCase();
  let token: number = 0;
  let contenitore: string[] = str.split("");
  let somma: string = "";
  for (let i = 0; i < contenitore.length; i++) {
    if (
      contenitore[i] == "b" ||
      "c" ||
      "d" ||
      "f" ||
      "G" ||
      "h" ||
      "l" ||
      "m" ||
      "n" ||
      "p" ||
      "q" ||
      "r" ||
      "s" ||
      "t" ||
      "v" ||
      "z"
    ) {
      contenitore.push(contenitore[i]);
      contenitore.splice(i, 1);

      token++;
    }
    if (token == 0) {
      for (let i = 0; i < contenitore.length; i++) {
        somma = somma + contenitore[i];
      }
      return somma + "way";
    }
  }
  for (let i = 0; i < contenitore.length; i++) {
    somma = somma + contenitore[i];
  }
  return somma + "ay";
}
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("euwygfwf9uhwf9uhw"));
