export type TaskBody = {
  todo: string;
  completed: boolean;
  userId: number;
};

export interface Task extends TaskBody {
  id: number;
}

export type APIGetAllTaskResponse = {
  todos: Task[];
  total: number;
  skip: number;
  limit: number;
};
