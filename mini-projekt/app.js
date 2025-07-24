// Array zum Speichern aller Aufgaben
let tasks = [];

// Beim Laden der Seite gespeicherte Aufgaben laden
window.onload = function() {
    loadTasks();
    updateTaskCount();
};

// 2.3 Aufgaben hinzufügen
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    // Prüfen ob Text eingegeben wurde
    if (taskText === '') {
        alert('Bitte eine Aufgabe eingeben!');
        return;
    }
    
    // Neue Aufgabe erstellen
    const task = {
        id: Date.now(), // Eindeutige ID
        text: taskText,
        completed: false
    };
    
    // Aufgabe zum Array hinzufügen
    tasks.push(task);
    
    // Aufgabe als <li> erstellen und zur Liste hinzufügen
    createTaskElement(task);
    
    // Eingabefeld leeren
    input.value = '';
    
    // Zähler aktualisieren und speichern
    updateTaskCount();
    saveTasks();
}

// Aufgaben-Element erstellen
function createTaskElement(task) {
    const taskList = document.getElementById('taskList');
    
    // Neues <li> Element erstellen
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;
    
    if (task.completed) {
        li.classList.add('completed');
    }
    
    // Task-Text Element
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = task.text;
    
    // 2.4 Aufgabe als erledigt markieren - Click-Event hinzufügen
    taskTextSpan.onclick = function() {
        toggleTask(task.id);
    };
    
    // 2.5 Löschen-Button erstellen
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Löschen';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        deleteTask(task.id);
    };
    
    // Elemente zum <li> hinzufügen
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    
    // <li> zur Liste hinzufügen
    taskList.appendChild(li);
}

// 2.4 Aufgabe als erledigt/nicht erledigt umschalten
function toggleTask(taskId) {
    // Aufgabe im Array finden
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        // Status umschalten
        task.completed = !task.completed;
        
        // UI aktualisieren
        const taskElement = document.querySelector(`[data-id="${taskId}"]`);
        taskElement.classList.toggle('completed');
        
        // Zähler aktualisieren und speichern
        updateTaskCount();
        saveTasks();
    }
}

// 2.5 Aufgabe löschen
function deleteTask(taskId) {
    // Aufgabe aus Array entfernen
    tasks = tasks.filter(t => t.id !== taskId);
    
    // Element aus DOM entfernen
    const taskElement = document.querySelector(`[data-id="${taskId}"]`);
    taskElement.remove();
    
    // Zähler aktualisieren und speichern
    updateTaskCount();
    saveTasks();
}

// Anzahl offener Aufgaben aktualisieren
function updateTaskCount() {
    const openTasks = tasks.filter(t => !t.completed).length;
    document.getElementById('taskCount').textContent = openTasks;
}

// Bonus: Alle Aufgaben löschen
function resetTasks() {
    if (tasks.length === 0) {
        alert('Keine Aufgaben vorhanden!');
        return;
    }
    
    if (confirm('Wirklich alle Aufgaben löschen?')) {
        tasks = [];
        document.getElementById('taskList').innerHTML = '';
        updateTaskCount();
        saveTasks();
    }
}

// Bonus: Aufgaben in localStorage speichern
function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Bonus: Aufgaben aus localStorage laden
function loadTasks() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        
        // Alle gespeicherten Aufgaben anzeigen
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}

// Enter-Taste im Eingabefeld unterstützen
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('taskInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
});