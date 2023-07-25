import {useQuery} from "@tanstack/react-query";
import API from "./api";
import {useMemo} from "react";
import {APIGetAllTaskResponse} from ".";

export const useQueryTaskGetAll = () => {
  const {data, ...others} = useQuery<APIGetAllTaskResponse, string>({
    queryKey: ["tasks"],
    queryFn: () => API.getAll(),
  });

  // TODO: Update arbitary value user id
  const filteredOwnByUser = useMemo(() => {
    return data?.todos.filter((todo) => todo.userId === 15);
  }, [data]);

  return {
    data: filteredOwnByUser || [],
    ...others,
  };
};
