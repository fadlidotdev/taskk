export type Task = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type APIGetAllTaskResponse = {
  todos: Task[];
  total: number;
  skip: number;
  limit: number;
};
