import {ChangeEvent, useState} from "react";

export type TaskFormValues = {
  text: string;
  completed: boolean;
};

type Props = {
  onSubmit: (task: TaskFormValues) => void;
};

const TaskForm = (props: Props) => {
  const {onSubmit} = props;

  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

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
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
