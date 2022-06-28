// GLOBAL DATA CAPTURE
const form = document.querySelector("form");
const input = document.querySelector("form input");
const list = document.querySelector("ul");

// CORRECT FORM DATA SUBMISSION
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// STARTS ADD TASK PROCESS
function addTask(){
    if(input.value == ""){
    return;
    }
    createTask();
}

// CREATE AND ADD THE TASK
function createTask(){
    const taskTemplate = 
    `
    <li>
        <div>
            <input type="checkbox" aria-label="Concluir tarefa">
            <h3>${input.value}</h3>
        </div>
        <button onclick="taskDelete()" aria-label="Excluir tarefa"><img src="assets/icons/trash-can.svg" alt="Ícone de lixeira"></button>
    </li>
    `;

    list.innerHTML += taskTemplate;
    input.value = "";
    checkIndex();
}

// VERIFY IF THE INDEX ARE AGREE
function checkIndex(){
    const deleteButtons = document.querySelectorAll("ul li button");

    for(let i = 0; i < deleteButtons.length; i++){
        if(!deleteButtons[i].getAttribute("onclick").includes(i)){
            deleteButtons[i].setAttribute("onclick", `taskDelete(${i})`);
        }
    }
}

// DELETE TASK
function taskDelete(index){
    const tasks = document.querySelectorAll("ul li");
    list.removeChild(tasks[index]);
    checkIndex();
}