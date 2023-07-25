import {ReactNode, useCallback, useEffect} from "react";
import {
  TaskBody,
  useMutationTaskComplete,
  useMutationTaskDelete,
  useMutationTaskUpdate,
} from "../../api/tasks";
import {toast} from "react-hot-toast";

type Handler = {
  handleUpdate: (id: number, task: Omit<TaskBody, "userId">) => void;
  handleDelete: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
};

type Props = {
  children: (handler: Handler) => ReactNode;
};

const TaskActionsProviders = ({children}: Props) => {
  const mutationComplete = useMutationTaskComplete();
  const mutationUpdate = useMutationTaskUpdate();
  const mutationDelete = useMutationTaskDelete();

  useEffect(() => {
    const error =
      (mutationComplete.error as string) ||
      (mutationUpdate.error as string) ||
      (mutationDelete.error as string);

    if (error) toast.error(error);
  }, [mutationComplete.error, mutationUpdate.error, mutationDelete.error]);

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

  const handleUpdate = useCallback(
    (id: number, task: Omit<TaskBody, "userId">) => {
      mutationUpdate.mutate({id, task});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleDelete = useCallback(
    (id: number) => {
      mutationDelete.mutate(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return children({handleUpdate, handleDelete, handleComplete});
};

export default TaskActionsProviders;
