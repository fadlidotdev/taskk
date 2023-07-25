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
};

export default API;
