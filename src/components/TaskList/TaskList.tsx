import {Task} from "../../api/tasks";
import TaskActionsProviders from "../TaskActionsProvider/TaskActionsProvider";
import TaskItem from "../TaskItem/TaskItem";

type Props = {
  tasks: Task[];
};
const TaskList = (props: Props) => {
  const {tasks} = props;

  return (
    <TaskActionsProviders>
      {({handleComplete, handleUpdate, handleDelete}) => (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              text={task.todo}
              completed={task.completed}
              onComplete={(completed) => handleComplete(task.id, completed)}
              onUpdate={(data) => handleUpdate(task.id, data)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      )}
    </TaskActionsProviders>
  );
};

export default TaskList;
