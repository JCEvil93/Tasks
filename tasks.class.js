class Tasks {
    taskList = [];
  
    getTasks() {
      //Code here
      return this.taskList;
    }
  
    getTask(id) {
      //Code here
    }
  
    addTask(task) {
      //Code here
      if (task) {
        this.taskList.push({
          id: this.taskList.length, // Tamaño del array
          activity: task,
          done: false,
        }); // agregar tarea a la colección de tareas
      }
    }
  
    editTask(id,value) {
        const index = this.taskList.findIndex((value) => {
            return value.id == id
        })
        console.log(id,index)
        this.taskList[index].activity = value
    }
  
    deleteTask(id) {
        this.taskList = this.taskList.filter((task) => {
            return task.id !== id;
        } )
    }
  }
  
  export default Tasks;
 
