var taskInput = document.getElementById("inputTask");
var addTaskButton = document.getElementById("addTaskButton");

var tasksRoot = document.getElementById("task-container");

addTaskButton.addEventListener(
    "click", addTask
);

function addTask(){

    if (taskInput.value == ""){
        return
    }

    let Value = taskInput.value;
    console.log(Value);

    
    var div = document.createElement('div');
    div.classList = ["d-flex justify-content-left"];
    
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList = ["spacing"]
    
    var text = document.createElement('span');
    text.innerHTML = taskInput.value;
    
    
    
    div.appendChild(checkbox);
    div.appendChild(text);
    
    tasksRoot.appendChild(div);
    
    
    checkbox.addEventListener("click", function () {
        completion(checkbox, text);
    }
    );

    taskInput.value = '';

}

function completion(checkbox, text){
    if(checkbox.checked){
        text.classList = ["completed-task"];
    } else {
        text.classList = [""];
    }
}