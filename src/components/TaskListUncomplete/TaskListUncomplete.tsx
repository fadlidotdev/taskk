import {Task} from "../../api/tasks";
import TaskList from "../TaskList";

type Props = {
  tasks: Task[];
};

const TaskListUncomplete = (props: Props) => {
  const {tasks} = props;

  return (
    <section>
      <TaskList tasks={tasks} />
    </section>
  );
};

export default TaskListUncomplete;
