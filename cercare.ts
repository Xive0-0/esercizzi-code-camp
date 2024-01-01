const myReplace = (str: string, before: string, after: string): string => {
    const stringaRicerca: string[] = str.split(" ");
    for (let i = 0; i < stringaRicerca.length; i++) {
        if (stringaRicerca[i].toLowerCase() === before.toLowerCase()) {
            if (before[0] === before[0].toUpperCase()) {
                after = after.charAt(0).toUpperCase() + after.slice(1);
            }
            stringaRicerca[i] = after;
            break;
        }
    }
    return stringaRicerca.join(" ");
};

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));
