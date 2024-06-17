export interface Project {
  id: string;
  projectName: string;
  isEditing: boolean;
  toDoTasks: ToDoTask[];
  doingTasks: ToDoTask[];
  doneTasks: ToDoTask[];
}

export interface ToDoTask {
  id: string;
  taskName: string;
  isEditing: boolean;
}
