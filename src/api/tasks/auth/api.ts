import {createHttp} from "../../../utils/http";
import {APILoginBody} from "./types";

const http = createHttp({isAuth: true});

const API = {
  login: async (params: APILoginBody) =>
    http({
      method: "POST",
      url: "/auth/login",
      data: params,
    }),
};

export default API;
