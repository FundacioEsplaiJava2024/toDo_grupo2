export interface Project {
    id: string;
    projectName: string;
    completed: boolean;
    isEditing: boolean;
    assignedTasks: Array<ToDoTask>;
  }

  export interface ToDoTask{
    id:string;
    taskName:string;
    completed:boolean;
    isEditing: boolean;
  }





