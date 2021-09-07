// Globali
const studente = {
    nome: "Gianluca",
    cognome: "Napoletano",
    eta: 28
}

// Funzioni
const main = () => {
    let log = "Studente:\n";
    for (const key in studente) {
        log += key + " => " + studente[key] + "\n";
    }
    alert(log);
}

// Main
main();