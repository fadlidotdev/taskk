import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {TextField} from "../common";

type Props = {
  search: string;
  onSearchChange: Dispatch<SetStateAction<string>>;
};

const TaskSearch = ({search, onSearchChange}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField
      placeholder="Search taskk"
      value={search}
      onChange={handleChange}
    />
  );
};

export default TaskSearch;
