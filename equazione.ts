let numeroA: number = 5;
let numberB: number = 4;
let numberC: number = 1;
let soluzione: number;

let discriminante: number = (numberB * numberB) - 4 * numeroA * numberC;

if (discriminante > 0) {
    // Due soluzioni reali
    let radiceDiscriminante: number = Math.sqrt(discriminante);
    let soluzione1: number = (-numberB + radiceDiscriminante) / (2 * numeroA);
    let soluzione2: number = (-numberB - radiceDiscriminante) / (2 * numeroA);
    
    console.log(`Due soluzioni reali: ${soluzione1} e ${soluzione2}`);
} else if (discriminante === 0) {
    // Una soluzione reale (radice doppia)
    soluzione = -numberB / (2 * numeroA);
    console.log(`Una soluzione reale (radice doppia): ${soluzione}`);
} else {
    // Nessuna soluzione reale (soluzioni complesse)
    console.log("Nessuna soluzione reale, le soluzioni sono complesse.");
}

