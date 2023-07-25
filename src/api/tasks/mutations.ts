import {useMutation, useQueryClient} from "@tanstack/react-query";
import API from "./api";
import {APIGetAllTaskResponse} from ".";

export const useMutationCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.create,
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({queryKey: ["tasks"]});

      const previousTasks = queryClient.getQueryData(["tasks"]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData<APIGetAllTaskResponse>(["tasks"], (old: any) => {
        const response = old as APIGetAllTaskResponse;

        const oldTasks = response.todos;
        const updatedTasks = [
          {
            // TODO: Update this to use random id
            id: 11,
            ...newTask,
          },
          ...oldTasks,
        ];

        return {
          ...old,
          todos: updatedTasks,
        };
      });

      return {previousTasks};
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["todos"], context?.previousTasks);
    },
    onSettled: () => {
      // queryClient.invalidateQueries({queryKey: ["tasks"]});
    },
  });
};
