import {Task} from "../../api/tasks";
import TaskActionsProvider from "../TaskActionsProvider";
import TaskItem from "../TaskItem";

type Props = {
  tasks: Task[];
};

const TaskListUncomplete = (props: Props) => {
  const {tasks} = props;

  return (
    <section>
      <TaskActionsProvider>
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
      </TaskActionsProvider>
    </section>
  );
};

export default TaskListUncomplete;
