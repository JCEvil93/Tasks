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
    
    this.#taskList.push({
        id:  this.#taskList.length,
        activity: task,
        done: false
    });
    taskInput.value = '';

   this.showTasks()
  }

  editTask(status, id) {
    if (!status) {
      const index =  this.#taskList.findIndex((value) => {
        return value.id === id;
      });
      this.#taskList[index].done = true;
      this.showTasks()
    }
  }

  deleteTask(id){

     this.#taskList =  this.#taskList.filter(t => t.id != id )

    this.showTasks()

  }

  showTasks(){
    taskList.innerHTML = ""; // Limpiar el contenido del elemento

  if ( this.#taskList.length) {
    taskList.setAttribute("class", "tasksList"); // Agregar clase al elemento
     this.#taskList
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
