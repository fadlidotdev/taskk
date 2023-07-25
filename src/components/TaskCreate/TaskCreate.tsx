import {useMutationCreateTask} from "../../api/tasks";
import useAuth from "../../hooks/useAuth";
import TaskForm, {TaskFormValues} from "../TaskForm/TaskForm";

const TaskCreate = () => {
  const auth = useAuth();

  const mutation = useMutationCreateTask();

  const handleSubmit = (task: TaskFormValues) => {
    const {text, completed} = task;

    mutation.mutate({todo: text, completed, userId: auth.id});
  };

  return <TaskForm onSubmit={handleSubmit} />;
};

export default TaskCreate;
