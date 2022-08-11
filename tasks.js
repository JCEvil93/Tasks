const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

class Tasks {

  constructor() {}
  #taskList = [];

  getTasks() {
    //Code here
  }

  getTask(id) {
    //Code here
  }

  addTask() {
    const task = taskInput.value;

    if(!task){
        return
    }
    
    tasksArray.push({
        id: tasksArray.length,
        activity: task,
        done: false
    });
    taskInput.value = '';

   showTasks();
  }

  editTask(status, id) {
    if (!status) {
      const index = tasksArray.findIndex((value) => {
        return value.id === id;
      });
      tasksArray[index].done = true;
      showTasks();
    }
  }

  deleteTask(id){

    tasksArray = tasksArray.filter(t => t.id != id )

    showTasks();

  }

  showTasks(){
    taskList.innerHTML = ""; // Limpiar el contenido del elemento

  if (tasksArray.length) {
    taskList.setAttribute("class", "tasksList"); // Agregar clase al elemento
    tasksArray
      .sort((a, b) => a.done - b.done) // Ordenar las tareas por estado (hecha o no hecha)
      .forEach((value) => {
        // Recorrer el array de tareas
        const li = document.createElement("li");
        // string templates
        li.innerHTML = ` 
      <span class="${value.done ? "tasksItemDone" : ""}">${
          value.activity
        }</span>
      <span class="tasksItemAction">
        <i class="fa fa-check ${
          value.done ? "hidden" : "" // Si la tarea está hecha, no mostrar el icono
        }"  onclick='tasks.editTask(${value.done}, ${value.id})'></i>
        <i class="fa fa-trash-o" onclick='tasks.deleteTask(${value.id})'></i>
      </span>
      `;
        taskList.appendChild(li); // Agregar el elemento al DOM
      });
  }
     
}
}

let tasks = new Tasks();
