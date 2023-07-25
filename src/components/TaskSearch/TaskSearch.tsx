import {ChangeEvent, Dispatch, SetStateAction} from "react";

type Props = {
  search: string;
  onSearchChange: Dispatch<SetStateAction<string>>;
};

const TaskSearch = ({search, onSearchChange}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search taskk"
      value={search}
      onChange={handleChange}
    />
  );
};

export default TaskSearch;
