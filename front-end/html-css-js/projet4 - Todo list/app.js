// --------------------------
//    Projet4 - Todo list
// --------------------------

const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');
const inputTask = document.querySelector('#input-task');
const deleteTaskAll = document.querySelector('#delete-task-all')

// Event Listener pour le bouton + (ajouter une tâche)

addTask.addEventListener('click', () => {
    let task = document.createElement('div'); // Je crée une balise <div>
    task.classList.add('task'); // J'ajoute une classe "task" à ma <div>

    let li = document.createElement('li'); // Je crée une balise <li>
    li.textContent = `${inputTask.value}`; // Je récupère la valeur de l'input

    inputTask.value = ""; // Libère le placeholder une fois la tâche ajoutée

    task.appendChild(li); // Cela va rajouter une balise <li> au sein de ma <div>

    let checkBtn = document.createElement('button');
    checkBtn.classList.add('bi', 'bi-check');
    checkBtn.setAttribute('id', 'check-task');

    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('bi', 'bi-trash3');
    deleteBtn.setAttribute('id', 'delete-task');

    task.appendChild(deleteBtn);

    if (li.textContent === "") {
        alert (`Attention, le champs est vide !`);
    } else {
        taskContainer.appendChild(task);
    }

    checkBtn.addEventListener('click', () => {
        checkBtn.previousSibling.classList.toggle('strike');
    });

    deleteBtn.addEventListener('click', () => {
        function removeTask() {
            deleteBtn.parentElement.remove();
     }

     let del = confirm("Voulez-vous supprimer ?");
     if (del) {
        removeTask();
     } else {
        return false;
     }
    });
});

deleteTaskAll.addEventListener('click', () => {
    function removeTask() {
        let removeAll = document.getElementsByTagName('div');
        let i = 0;
        while(removeAll.length){
        removeAll[i].parentNode.removeChild(removeAll[i]);
        }
    }
    let delAll = confirm("Voulez-vous TOUT supprimer ?");
        if (delAll) {
            removeTask();
        } else {
            return false;
        }
});


