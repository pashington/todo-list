const todoInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("task-add");
const tasks = document.getElementById("tasks-list-container");


addTaskBtn.addEventListener("click",function(){
    if(todoInput.value !== ""){
        handleTask(todoInput);
    }

});
todoInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        if(todoInput.value !== ""){
            handleTask(todoInput);
        }

    }
});



// UI creation function
function handleTask(value){
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.style.marginBottom = "7px";

    let inputText = document.createElement("input");
    inputText.type = "text";
    inputText.id = "task";
    inputText.value = todoInput.value;
    inputText.readOnly = true;

    let inputBtn = document.createElement("input");
    inputBtn.type = "submit";
    inputBtn.id = "task-delete";
    inputBtn.value = "-"
    inputBtn.onclick = function(){
        this.parentNode.remove();
    }

    tasks.appendChild(taskDiv);
    taskDiv.appendChild(inputText);
    taskDiv.appendChild(inputBtn);
    todoInput.value = "";
    todoInput.placeholder = "Type them here!";
}


