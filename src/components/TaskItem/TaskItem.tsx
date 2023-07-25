import {useState} from "react";
import TaskForm, {TaskFormValues} from "../TaskForm/TaskForm";
import {TaskBody} from "../../api/tasks";

type Props = {
  text: string;
  completed: boolean;
  onUpdate: (task: Omit<TaskBody, "userId">) => void;
  onDelete: () => void;
  onComplete: (state: boolean) => void;
};

const TaskItem = (props: Props) => {
  const {text, completed, onComplete, onUpdate, onDelete} = props;

  const [edit, setEdit] = useState(false);

  const handleEdit = (taskFormValues: TaskFormValues) => {
    const {completed, text} = taskFormValues;

    onUpdate({
      todo: text,
      completed,
    });

    setEdit(false);
  };

  if (edit)
    return <TaskForm edit initialTextValue={text} onSubmit={handleEdit} />;

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onComplete(e.target.checked)}
        />
        <span>{text}</span>
      </div>

      <div className="flex gap-1">
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
