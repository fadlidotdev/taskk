import {useMutationTaskCreate} from "../../api/tasks";
import useAuth from "../../hooks/useAuth";
import TaskForm, {TaskFormValues} from "../TaskForm";

const TaskCreate = () => {
  const auth = useAuth();

  const mutation = useMutationTaskCreate();

  const handleSubmit = (task: TaskFormValues) => {
    const {text, completed} = task;

    mutation.mutate({todo: text, completed, userId: auth.id});
  };

  return <TaskForm onSubmit={handleSubmit} />;
};

export default TaskCreate;
