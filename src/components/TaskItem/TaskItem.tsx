import {useState} from "react";
import TaskForm, {TaskFormValues} from "../TaskForm/TaskForm";
import {TaskBody} from "../../api/tasks";
import {Button, Checkbox} from "../common";

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
        <Checkbox
          label={text}
          checked={completed}
          onChange={(e) => onComplete(e.target.checked)}
        />
      </div>

      <div className="flex gap-1">
        <Button size="small" variant="alternate" onClick={() => setEdit(true)}>
          Edit
        </Button>
        <Button size="small" variant="ghost" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
