import {ReactNode, useCallback} from "react";
import {useMutationTaskComplete} from "../../api/tasks";

type Handler = {
  handleUpdate: (task: string) => void;
  handleDelete: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
};

type Props = {
  children: (handler: Handler) => ReactNode;
};

const TaskActionsProviders = ({children}: Props) => {
  const mutationComplete = useMutationTaskComplete();

  const handleComplete = useCallback(
    (id: number, completed: boolean) => {
      mutationComplete.mutate({
        id,
        completed,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleUpdate = (task: string) => console.log(task);
  const handleDelete = (id: number) => console.log(id);

  return children({handleUpdate, handleDelete, handleComplete});
};

export default TaskActionsProviders;
