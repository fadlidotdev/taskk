import {useMutation} from "@tanstack/react-query";
import API from "./api";
import {APILoginBody, APILoginResponse} from "./types";

export const useMutationLogin = () => {
  return useMutation<APILoginResponse, string, APILoginBody>({
    mutationFn: API.login,
  });
};
