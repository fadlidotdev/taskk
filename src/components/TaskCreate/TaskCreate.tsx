import {useMutationTaskCreate} from "../../api/tasks";
import useAuth from "../../hooks/useAuth";
import TaskForm, {TaskFormValues} from "../TaskForm";

const TaskCreate = () => {
  const {userProfile} = useAuth();

  const mutation = useMutationTaskCreate();

  const handleSubmit = (task: TaskFormValues) => {
    const {text, completed} = task;

    mutation.mutate({todo: text, completed, userId: userProfile?.id as number});
  };

  return <TaskForm onSubmit={handleSubmit} />;
};

export default TaskCreate;
