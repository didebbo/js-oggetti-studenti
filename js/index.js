

// Funzioni
const scegliEsercizio = (arg1) => {
    switch (arg1) {
        case 1:
            esercizio1();
            break;

        case 2:
            esercizio2();
            break;

        default:
            main();
            break;
    }
}

// Esercizio 1
const esercizio1 = () => {
    const studente = {
        nome: "Gianluca",
        cognome: "Napoletano",
        eta: 28
    }

    let log = "Studente:\n";
    for (const key in studente) {
        log += key + " => " + studente[key] + "\n";
    }
    alert(log);
}

// Esercizio 2
const esercizio2 = () => {
    const studenti = [
        {
            nome: "Samuele",
            cognome: "Madrigali",
            eta: 30
        },
        {
            nome: "Alessandro",
            cognome: "Lodigiani",
            eta: 30
        },
        {
            nome: "Fabrizio",
            cognome: "Mastrobattista",
            eta: 30
        }
    ];

    let log = "Studenti:\n";

    studenti.forEach((studente, index) => {
        log += (index + 1) + "° studente: " + studente["nome"] + " " + studente["cognome"] + "\n";
    });
    alert(log);

}

const main = () => {
    scegliEsercizio(parseInt(prompt("Scegli numero esercizio:\nEs. 1 o 2")));
}

// Main
main();