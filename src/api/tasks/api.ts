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

  update: (id: number, data: TaskBody) =>
    http({
      method: "PUT",
      url: `/todos/${id}`,
      data,
    }),

  delete: (id: number) =>
    http({
      method: "DELETE",
      url: `/todos/${id}`,
    }),
};

export default API;
