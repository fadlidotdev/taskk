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
        <>
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
        </>
      )}
    </TaskActionsProviders>
  );
};

export default TaskList;
