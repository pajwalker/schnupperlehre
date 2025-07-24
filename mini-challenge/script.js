function analyzeCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const lines = e.target.result.split('\n');

        console.log("CSV-Datei geladen:", lines);
        // TODO: Header überspringen, Temperaturwerte extrahieren
        lines.shift(); // Header entfernen
        const temps = [];

        for (let i = 0; i < lines.length; i++) {
            const parts = lines[i].split(',');
            temps.push(parseFloat(parts[1])); // Temperatur auslesen und in Array speichern
        }

        console.log("Temperaturwerte extrahiert:", temps);

        // TODO: Durchschnitt berechnen
        const average = calculateAverage(temps)
        // TODO: Maximalwert berechnen
        const max = Math.max(...temps);

        document.getElementById('output').innerHTML = `
            <p>Durchschnitt: ${average}</p>
            <p>Maximal: ${max}</p>
        `;
    };
    reader.readAsText(file);
}

function calculateAverage(temps) {
    let sum = 0;

    for (let i = 0; i < temps.length; i++) {
        sum += temps[i];
    }

    return sum / temps.length;
}