import TaskForm from "../TaskForm/TaskForm";

type Props = {
  title: string;
  completed: boolean;
  onUpdate: () => void;
  onDelete: () => void;
  onComplete: (state: boolean) => void;
};

const TaskItem = (props: Props) => {
  const {title, completed, onComplete} = props;

  // TODO: Move this into state
  const edit = false;

  if (edit) return <TaskForm onSubmit={() => {}} />;

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onComplete(e.target.checked)}
        />
        <span>{title}</span>
      </div>

      <div className="flex gap-1">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
