// On récupère les éléments avec querySelector
const btnSubmit = document.querySelector('.todo-btn') as HTMLButtonElement;
const inputTask = document.querySelector('.todo-input') as HTMLInputElement;
const formTask = document.querySelector('.todo-form') as HTMLFormElement;
const taskList = document.querySelector('.todo-list') as HTMLLIElement;
const btnDeleteAll = document.querySelector('.todo-delete-all') as HTMLButtonElement;

interface TaskInterface {
    date: Date,
    task: string,
    completed: boolean
}

// On crée un tableau pour stocker toutes nos nouvelles tâches
const tasks: TaskInterface[] = JSON.parse(localStorage.getItem('task') || '[]');

// Fonction qui sauvegarde les éléments dans le localStorage
const saveTasks = () => {
    localStorage.setItem('task', JSON.stringify(tasks))
}

// Ajouter les nouvelles tâches au démarrage du DOM
window.addEventListener('DOMContentLoaded', () => {
    // Pour toutes les tâches, tu crée une tâche
    tasks.forEach(task => appendTask(task));
})

const handleSubmit = (e: Event) => {
    e.preventDefault(); // Pour éviter à la page de se rafraîchir

    // Création d'un nouvel objet newTask
    const newTask: TaskInterface = {
        date: new Date(),
        task: inputTask.value,
        completed: false
    }

    // Sauvegarde la tâche dans le localStorage
    tasks.push(newTask)

    // Ajout de la fonction appendTask
    appendTask(newTask);

    // Sauvegarder la tâche dans le localStorage
    saveTasks();

    // Vider l'input
    inputTask.value = "";
}

    // On va gérer l'EventListener du bouton 'submit'
formTask.addEventListener('submit', e => handleSubmit(e));

    // Fonction d'ajout d'une nouvelle tâche
const appendTask = (newTask: TaskInterface) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    const btnDel = document.createElement('button');
    btnDel.classList.add('bi', 'bi-trash3');
    btnDel.setAttribute('title', 'Supprimer la tâche')
    checkB.type = 'checkbox';
    checkB.checked = newTask.completed;
    if (newTask.completed === true) {
        newLi.style.textDecoration = "line-through"
    } else {
        newLi.style.textDecoration = "none"
    }
    checkB.addEventListener('change', () => {
        newTask.completed = checkB.checked
        if (newTask.completed === true) {
            newLi.style.textDecoration = "line-through"
        } else {
            newLi.style.textDecoration = "none"
        }
        saveTasks();
        }
    )
    newLi.append(checkB, newTask.task, btnDel);
    taskList.prepend(newLi); // Mettre tout en haut et non en bas

    btnDel.addEventListener("click", () => {
        const confirmDel:boolean = confirm('Voulez-vous vraiment supprimer cette tâche ?');
        if(confirmDel === true) {
        newLi.remove();

        for ( let i = 0;  i < tasks.length; i++) {
           if (tasks[i].task === newTask.task){
            tasks.splice(i, 1)
           }
        }
        saveTasks();
        }
    })
}

// Bouton Tout Effacer

const clearTasks = () => {
    const confirmDelAll:boolean = confirm('Voulez-vous vraiment TOUT supprimer ?');
    if(confirmDelAll === true) {
    tasks.length = 0;
    saveTasks();
    taskList.textContent = "";
    }
}

btnDeleteAll.addEventListener('click', clearTasks)

