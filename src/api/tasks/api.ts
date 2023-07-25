import {TaskBody} from ".";
import {createHttp} from "../../utils/http";

const http = createHttp({isAuth: true});

const API = {
  getAll: () =>
    http({
      method: "GET",
      url: "/todos",
    }).then((res) => res),

  create: (data: TaskBody) =>
    http({
      method: "POST",
      url: "/todos/add",
      data,
    }),

  complete: (data: {id: number; completed: boolean}) =>
    http({
      method: "PATCH",
      url: `/todos/${data.id}`,
      data: {
        completed: data.completed,
      },
    }),

  update: (data: {id: number; task: Omit<TaskBody, "userId">}) =>
    http({
      method: "PUT",
      url: `/todos/${data.id}`,
      data: {
        ...data.task,
      },
    }),

  delete: (id: number) =>
    http({
      method: "DELETE",
      url: `/todos/${id}`,
    }),
};

export default API;
