# Schnupperlehre - Web Development Cheat Sheet 📚

## 🌐 Was ist eine Webseite?
Eine Webseite besteht aus drei Hauptteilen:
- **HTML** = Das Skelett (Struktur & Inhalt)
- **CSS** = Die Haut (Design & Aussehen)  
- **JavaScript** = Die Muskeln (Funktionalität & Interaktion)

---

## 📄 HTML Grundlagen

### Grundstruktur
```html
<!DOCTYPE html>               <!-- Sagt dem Browser: Das ist HTML5 -->
<html lang="de">              <!-- Startpunkt der Webseite, Sprache Deutsch -->
<head>                        <!-- Informationen ÜBER die Seite (unsichtbar) -->
    <title>Seitentitel</title>    <!-- Titel im Browser-Tab -->
    <link rel="stylesheet" href="style.css">  <!-- CSS-Datei einbinden -->
</head>
<body>                        <!-- Sichtbarer Inhalt der Webseite -->
    <h1>Überschrift</h1>          <!-- Große Überschrift -->
    <p>Ein Absatz Text</p>        <!-- Normaler Text -->
    <script src="app.js"></script>  <!-- JavaScript-Datei einbinden -->
</body>
</html>
```

### Wichtige HTML-Elemente
| Element | Bedeutung | Beispiel |
|---------|-----------|----------|
| `<h1>` bis `<h6>` | Überschriften (1=größte, 6=kleinste) | `<h1>Titel</h1>` |
| `<p>` | Absatz/Paragraph | `<p>Text hier</p>` |
| `<div>` | Container/Box für andere Elemente | `<div class="container">Inhalt</div>` |
| `<input>` | Eingabefeld | `<input type="text" id="meinInput">` |
| `<button>` | Klickbarer Button | `<button onclick="meineFunktion()">Klick</button>` |
| `<ul>` und `<li>` | Liste und Listenpunkt | `<ul><li>Punkt 1</li></ul>` |
| `<span>` | Kleiner Textcontainer | `<span>Kleiner Text</span>` |

### HTML-Attribute (Zusatzinformationen)
- `id="name"` = Eindeutige Kennung (nur einmal pro Seite)
- `class="name"` = Gruppe/Kategorie (kann mehrfach verwendet werden)
- `onclick="funktion()"` = Was passiert beim Klicken
- `placeholder="Text"` = Hilfstext im Eingabefeld

---

## 🎨 CSS Grundlagen

### Wie funktioniert CSS?
CSS wählt HTML-Elemente aus und gibt ihnen ein Aussehen:

```css
/* Kommentar in CSS */
element {                    /* Selektor: WAS soll gestylt werden */
    eigenschaft: wert;       /* Eigenschaft: WIE soll es aussehen */
}
```

### CSS-Selektoren (Auswählen von Elementen)
| Selektor | Bedeutung | Beispiel |
|----------|-----------|----------|
| `h1` | Alle h1-Elemente | `h1 { color: red; }` |
| `#meinId` | Element mit id="meinId" | `#taskInput { padding: 10px; }` |
| `.meineKlasse` | Alle Elemente mit class="meineKlasse" | `.container { width: 500px; }` |
| `div p` | Alle p-Elemente IN div-Elementen | `div p { font-size: 14px; }` |
| `.klasse1.klasse2` | Elemente mit BEIDEN Klassen | `.task-item.completed { opacity: 0.5; }` |

### Wichtige CSS-Eigenschaften

#### Farben und Text
```css
color: #333;                 /* Textfarbe (Hexadecimal) */
background-color: white;     /* Hintergrundfarbe */
font-family: sans-serif;     /* Schriftart */
font-size: 16px;            /* Schriftgröße */
text-align: center;         /* Textausrichtung */
text-decoration: line-through; /* Durchgestrichen */
```

#### Abstände und Größen
```css
width: 100px;               /* Breite */
height: 50px;               /* Höhe */
padding: 10px;              /* Innenabstand */
margin: 20px;               /* Außenabstand */
border: 2px solid black;    /* Rahmen: Dicke Art Farbe */
border-radius: 5px;         /* Abgerundete Ecken */
```

#### Layout (Anordnung)
```css
display: flex;              /* Flexbox-Layout (nebeneinander) */
flex: 1;                   /* Element nimmt verfügbaren Platz ein */
gap: 10px;                 /* Abstand zwischen Flex-Elementen */
align-items: center;       /* Vertikal zentrieren */
justify-content: center;   /* Horizontal zentrieren */
```

#### Effekte
```css
box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Schatten */
cursor: pointer;           /* Mauszeiger wird zur Hand */
opacity: 0.5;             /* Transparenz (0=unsichtbar, 1=vollsichtbar) */
```

#### Interaktivität
```css
.element:hover {           /* Stil wenn man mit Maus drüberfährt */
    background-color: blue;
}

.element:focus {           /* Stil wenn Element ausgewählt ist */
    border-color: green;
}
```

---

## 💻 JavaScript Grundlagen

### Variablen (Datenspeicher)
```javascript
// Kommentar in JavaScript

// Variablen erstellen
let name = "Max";              // Text (String)
let alter = 25;                // Zahl (Number)
let istStudent = true;         // Ja/Nein (Boolean)
let liste = [1, 2, 3];        // Array (Liste)

// const = Konstante (kann nicht geändert werden)
const PI = 3.14159;
```

### Datentypen
| Typ | Beschreibung | Beispiel |
|-----|--------------|----------|
| String | Text | `"Hallo Welt"` oder `'Text'` |
| Number | Zahlen | `42`, `3.14`, `-5` |
| Boolean | Wahr/Falsch | `true`, `false` |
| Array | Liste von Werten | `[1, 2, 3]` oder `["a", "b", "c"]` |
| Object | Sammlung von Eigenschaften | `{name: "Max", alter: 25}` |

### Arrays (Listen) - Wichtig für unsere ToDo-App!
```javascript
// Array erstellen
let aufgaben = [];                    // Leere Liste
let zahlen = [1, 2, 3, 4, 5];       // Liste mit Zahlen

// Elemente hinzufügen
aufgaben.push("Hausaufgaben");        // Am Ende hinzufügen
aufgaben.push("Einkaufen");

// Auf Elemente zugreifen (beginnt bei 0!)
console.log(aufgaben[0]);             // Erstes Element: "Hausaufgaben"
console.log(aufgaben[1]);             // Zweites Element: "Einkaufen"

// Array-Länge
console.log(aufgaben.length);         // Anzahl Elemente: 2

// Elemente entfernen
aufgaben.pop();                       // Letztes Element entfernen
aufgaben.splice(0, 1);               // Element an Position 0 entfernen
```

### Objekte (Datenstrukturen)
```javascript
// Objekt erstellen (wie ein Steckbrief)
let aufgabe = {
    id: 1,
    text: "Hausaufgaben machen",
    completed: false
};

// Eigenschaften auslesen
console.log(aufgabe.text);            // "Hausaufgaben machen"
console.log(aufgabe.completed);       // false

// Eigenschaften ändern
aufgabe.completed = true;
```

### Funktionen (Wiederverwendbare Codeblöcke)
```javascript
// Funktion definieren
function sagHallo() {
    console.log("Hallo!");
}

// Funktion mit Parametern
function addiere(a, b) {
    return a + b;                     // Ergebnis zurückgeben
}

// Funktionen aufrufen
sagHallo();                           // Gibt "Hallo!" aus
let ergebnis = addiere(5, 3);        // ergebnis = 8
```

### Bedingungen (if/else)
```javascript
let alter = 18;

if (alter >= 18) {                    // WENN alter größer gleich 18
    console.log("Volljährig");
} else {                              // SONST
    console.log("Minderjährig");
}

// Mehrere Bedingungen
if (alter < 13) {
    console.log("Kind");
} else if (alter < 18) {
    console.log("Jugendlicher");
} else {
    console.log("Erwachsener");
}
```

### Schleifen (for/forEach)
```javascript
// For-Schleife (klassisch)
for (let i = 0; i < 5; i++) {         // i startet bei 0, läuft bis 4
    console.log("Durchlauf " + i);
}

// Array durchlaufen
let farben = ["rot", "grün", "blau"];

// forEach = für jedes Element
farben.forEach(function(farbe) {
    console.log(farbe);               // Gibt jede Farbe aus
});

// Moderne Pfeilfunktion (kürzer)
farben.forEach(farbe => {
    console.log(farbe);
});
```

### DOM-Manipulation (HTML mit JavaScript ändern)
```javascript
// Element auswählen
let element = document.getElementById('meinId');           // By ID
let elemente = document.getElementsByClassName('klasse');  // By Class
let button = document.querySelector('button');            // CSS-Selektor

// Elementinhalt ändern
element.textContent = "Neuer Text";                      // Nur Text
element.innerHTML = "<strong>Fetter Text</strong>";      // HTML-Code

// Element-Eigenschaften ändern
element.style.color = "red";                             // CSS-Stil
element.className = "neue-klasse";                       // CSS-Klasse setzen
element.classList.add("weitere-klasse");                // Klasse hinzufügen
element.classList.remove("alte-klasse");                // Klasse entfernen
element.classList.toggle("aktiv");                      // Klasse an/aus

// Neue Elemente erstellen
let neuesElement = document.createElement('div');         // Neues <div>
neuesElement.textContent = "Ich bin neu!";
document.body.appendChild(neuesElement);                 // Zu Seite hinzufügen

// Events (Reaktion auf Aktionen)
button.onclick = function() {
    alert("Button geklickt!");
};

// Modernere Event-Syntax
button.addEventListener('click', function() {
    console.log("Klick!");
});
```

### Array-Methoden (sehr wichtig!)
```javascript
let tasks = [
    {id: 1, text: "Aufgabe 1", completed: false},
    {id: 2, text: "Aufgabe 2", completed: true},
    {id: 3, text: "Aufgabe 3", completed: false}
];

// find() = Erstes Element finden, das Bedingung erfüllt
let task = tasks.find(t => t.id === 2);           // Findet Aufgabe mit ID 2

// filter() = Alle Elemente finden, die Bedingung erfüllen
let offeneAufgaben = tasks.filter(t => !t.completed);  // Alle nicht erledigten

// forEach() = Für jedes Element etwas tun
tasks.forEach(task => {
    console.log(task.text);
});

// map() = Jedes Element umwandeln
let nurTexte = tasks.map(task => task.text);      // Array mit nur den Texten
```

---

## 🔧 Unsere ToDo-App erklärt

### Datenstruktur
```javascript
// Globales Array für alle Aufgaben
let tasks = [];

// Jede Aufgabe ist ein Objekt:
let aufgabe = {
    id: 1634567890123,        // Eindeutige ID (Zeitstempel)
    text: "Hausaufgaben",     // Der Text der Aufgabe
    completed: false          // Ist sie erledigt?
};
```

### Wichtige Funktionen in unserer App

#### 1. Aufgabe hinzufügen
```javascript
function addTask() {
    // 1. Text aus Eingabefeld holen
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();     // trim() entfernt Leerzeichen
    
    // 2. Prüfen ob Text vorhanden
    if (taskText === '') {
        return;                               // Funktion beenden
    }
    
    // 3. Neue Aufgabe erstellen
    const task = {
        id: Date.now(),                       // Aktuelle Zeit als ID
        text: taskText,
        completed: false
    };
    
    // 4. Zu Array hinzufügen
    tasks.push(task);
}
```

#### 2. Aufgabe als erledigt markieren
```javascript
function toggleTask(taskId) {
    // 1. Aufgabe im Array finden
    const task = tasks.find(t => t.id === taskId);
    
    // 2. Status umschalten
    task.completed = !task.completed;         // ! bedeutet "nicht"
    
    // 3. CSS-Klasse umschalten
    const element = document.querySelector(`[data-id="${taskId}"]`);
    element.classList.toggle('completed');
}
```

#### 3. Aufgabe löschen
```javascript
function deleteTask(taskId) {
    // 1. Aus Array entfernen
    tasks = tasks.filter(t => t.id !== taskId);  // Alle AUSSER der zu löschenden
    
    // 2. Aus HTML entfernen
    const element = document.querySelector(`[data-id="${taskId}"]`);
    element.remove();
}
```

### LocalStorage (Daten speichern)
```javascript
// Daten im Browser speichern
localStorage.setItem('meinKey', JSON.stringify(tasks));

// Daten aus Browser laden
let gespeicherteTasks = localStorage.getItem('meinKey');
if (gespeicherteTasks) {
    tasks = JSON.parse(gespeicherteTasks);    // Zurück zu Array
}
```

---

## 🧩 Wichtige Programmier-Konzepte

### Template Strings (Moderne Textverknüpfung)
```javascript
let name = "Max";
let alter = 25;

// Alt:
let text = "Hallo " + name + ", du bist " + alter + " Jahre alt.";

// Neu (mit Backticks `):
let text = `Hallo ${name}, du bist ${alter} Jahre alt.`;
```

### Pfeilfunktionen (Arrow Functions)
```javascript
// Normale Funktion:
function addiere(a, b) {
    return a + b;
}

// Pfeilfunktion:
const addiere = (a, b) => {
    return a + b;
};

// Noch kürzer (bei einer Zeile):
const addiere = (a, b) => a + b;
```

### Destructuring (Werte extrahieren)
```javascript
let person = {name: "Max", alter: 25};

// Alt:
let name = person.name;
let alter = person.alter;

// Neu:
let {name, alter} = person;
```

---

## 🐛 Häufige Anfängerfehler

1. **Semikolons vergessen** `;` (JavaScript)
2. **Geschweifte Klammern nicht schließen** `{}`
3. **Falsche Anführungszeichen** verwenden `"` vs `'`
4. **Array-Index falsch**: Arrays beginnen bei 0, nicht bei 1!
5. **getElementById vs getElementsByClassName**: 
   - ID gibt EIN Element zurück
   - ClassName gibt eine LISTE zurück
6. **Event-Handler vergessen**: `onclick="funktion()"` nicht `onclick="funktion"`
7. **CSS-Klassen vs IDs verwechseln**: 
   - `#` für IDs
   - `.` für Klassen

---

## 🔍 Debugging-Tipps

```javascript
// 1. Werte in Konsole ausgeben
console.log("Wert von variable:", variable);

// 2. Typ einer Variable prüfen
console.log(typeof variable);

// 3. Array-Inhalt anzeigen
console.table(tasks);

// 4. Fehler abfangen
try {
    // Code der Fehler verursachen könnte
} catch (error) {
    console.log("Fehler:", error);
}
```

**Browser-Entwicklertools öffnen**: F12 oder Rechtsklick → "Element untersuchen"

---

## 📚 Weiterführende Ressourcen

- **MDN Web Docs**: Umfassende Dokumentation zu HTML, CSS, JavaScript
- **W3Schools**: Einfache Tutorials und Beispiele
- **CodePen**: Online-Editor zum Experimentieren
- **CSS Flexbox Froggy**: Spielerisch Flexbox lernen

---

*Dieses Cheat Sheet deckt alle Konzepte ab, die in unserer ToDo-App verwendet werden. Nutze es als Nachschlagewerk beim Programmieren! 🚀*