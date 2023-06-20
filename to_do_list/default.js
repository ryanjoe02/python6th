function addTask() {
  var input = document.getElementById("addInputTask");
  var task = input.value;

  // Alert
  if (task === '') {
    alert("You must write something!");
  } else {
    // Create a new list item
    var listItem = document.createElement("div");
    listItem.className = "task-item";

    // Add the new task to the task list
    var taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;
    
    // Delete
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(this);
    };
  }
  
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  
  var taskText = document.getElementById("taskList");
  taskList.appendChild(listItem);

  // Clear the input
  input.value = "";
}

function deleteTask(button) {
  var listItem = button.parentNode;
  var taskList = listItem.parentNode;
  taskList.removeChild(listItem);
}

function deleteAll() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = '';
}