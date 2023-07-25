import {ChangeEvent, useState} from "react";
import {Button, Checkbox, TextField} from "../common";

export type TaskFormValues = {
  text: string;
  completed: boolean;
};

type Props = {
  edit?: boolean;
  initialTextValue?: string;
  initialCompleteValue?: boolean;
  onSubmit: (task: TaskFormValues) => void;
};

const TaskForm = (props: Props) => {
  const {
    edit,
    initialTextValue = "",
    initialCompleteValue = false,
    onSubmit,
  } = props;

  const [text, setText] = useState(initialTextValue);
  const [completed, setCompleted] = useState(initialCompleteValue);

  const clearForm = () => {
    setText("");
    setCompleted(false);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) return;

    onSubmit({text, completed});
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="flex items-center w-full gap-2 mr-2">
        <Checkbox
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <TextField
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          divClass="w-full"
        />
      </div>
      <Button variant={edit ? "alternate" : "main"} type="submit">
        {edit ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default TaskForm;
