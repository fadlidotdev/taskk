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
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.todo}
            completed={task.completed}
            onUpdate={() => {}}
            onComplete={() => {}}
            onDelete={() => {}}
          />
        ))}
      </TaskActionsProvider>
    </section>
  );
};

export default TaskListUncomplete;
