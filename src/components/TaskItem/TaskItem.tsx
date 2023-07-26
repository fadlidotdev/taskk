import {useState} from "react";
import TaskForm, {TaskFormValues} from "../TaskForm/TaskForm";
import {TaskBody} from "../../api/tasks";
import {Button, Checkbox} from "../common";
import {classes} from "../../utils/core";

type Props = {
  id: number;
  text: string;
  completed: boolean;
  onUpdate: (id: number, task: Omit<TaskBody, "userId">) => void;
  onDelete: (id: number) => void;
  onComplete: (id: number, state: boolean) => void;
};

const TaskItem = (props: Props) => {
  const {id, text, completed, onComplete, onUpdate, onDelete} = props;

  const [edit, setEdit] = useState(false);

  const handleEdit = (taskFormValues: TaskFormValues) => {
    const {completed, text} = taskFormValues;

    onUpdate(id, {
      todo: text,
      completed,
    });

    setEdit(false);
  };

  if (edit)
    return (
      <TaskForm
        edit
        initialTextValue={text}
        initialCompleteValue={completed}
        onSubmit={handleEdit}
      />
    );

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <Checkbox
          id={id.toString()}
          label={text}
          labelClass={classes(completed && "line-through")}
          checked={completed}
          onChange={(e) => onComplete(id, e.target.checked)}
        />
      </div>

      <div className="flex gap-1">
        <Button size="small" variant="alternate" onClick={() => setEdit(true)}>
          Edit
        </Button>
        <Button size="small" variant="ghost" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
