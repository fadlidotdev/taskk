import {createHttp} from "../../utils/http";

const http = createHttp({isAuth: true});

const API = {
  getAll: () =>
    http({
      method: "GET",
      url: "/todos",
    }),
};

export default API;
