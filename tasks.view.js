import Tasks from "./tasks.class.js"
(function(Tasks) {

    const tasks = new Tasks();

    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTask');

    

    taskInput.addEventListener("keydown",function(event){

        if(event.key === "Enter"){
            addTask()
        }
    })


    addTaskButton.addEventListener("click", addTask)

    function addTask () {
        const task = taskInput.value;
        if (task && taskExists(task)) {
            tasksArray.push({
              id: tasksArray.length, // Tamaño del array
              activity: task,
              done: false,
            }); // agregar tarea a la colección de tareas
            taskInput.value = ""; // Limpiar el input
            taskInput.placeholder = "¿Qué quieres hacer?"; // Cambiar el placeholder a la versión original
            taskInput.classList.remove("inputText--error"); // Eliminar la clase de error
        } else {
          taskInput.focus(); // Focus en el input
          taskInput.classList.add("inputText--error"); // Agregar clase de error
          taskInput.placeholder = "¡Agrega una tarea!"; // Cambiar el placeholder a la versión de error
        }
    }

    // Verificar si la tarea ya existe
    function taskExists(activity) {
        const result = tasksArray.filter((task) => task.activity === activity);
        if (result.length) {
        showNotification("error", "La tarea ya existe");
        return false;
        }
        return true;
    }

    console.log(Tasks)

} )(Tasks)