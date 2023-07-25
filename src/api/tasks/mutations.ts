import {useMutation, useQueryClient} from "@tanstack/react-query";
import API from "./api";
import {APIGetAllTaskResponse} from "./types";
import {getRandomNumber} from "../../utils/core";

export const useMutationTaskCreate = () => {
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
            id: getRandomNumber(),
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

export const useMutationTaskComplete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.complete,
    onMutate: async (selectedTask) => {
      await queryClient.cancelQueries({queryKey: ["tasks"]});

      const previousTasks = queryClient.getQueryData(["tasks"]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData<APIGetAllTaskResponse>(["tasks"], (old: any) => {
        const response = old as APIGetAllTaskResponse;

        const oldTasks = response.todos;
        const updatedTasks = oldTasks.map((task) => {
          if (task.id === selectedTask.id) {
            return {
              ...task,
              completed: selectedTask.completed,
            };
          }

          return task;
        });

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

export const useMutationTaskUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.update,
    onMutate: async (selectedTask) => {
      await queryClient.cancelQueries({queryKey: ["tasks"]});

      const previousTasks = queryClient.getQueryData(["tasks"]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData<APIGetAllTaskResponse>(["tasks"], (old: any) => {
        const response = old as APIGetAllTaskResponse;

        const oldTasks = response.todos;
        const updatedTasks = oldTasks.map((task) => {
          if (task.id === selectedTask.id) {
            return {
              ...task,
              ...selectedTask.task,
            };
          }

          return task;
        });

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

export const useMutationTaskDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.delete,
    onMutate: async (selectedId) => {
      await queryClient.cancelQueries({queryKey: ["tasks"]});

      const previousTasks = queryClient.getQueryData(["tasks"]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData<APIGetAllTaskResponse>(["tasks"], (old: any) => {
        const response = old as APIGetAllTaskResponse;

        const oldTasks = response.todos;
        const updatedTasks = oldTasks.filter((task) => task.id !== selectedId);

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
