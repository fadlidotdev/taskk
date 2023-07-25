import {Task} from "../../api/tasks";
import useDisclosure from "../../hooks/useDisclosure";
import TaskList from "../TaskList";

type Props = {
  tasks: Task[];
};

const TaskListComplete = (props: Props) => {
  const {tasks} = props;

  const [open, {onToggle}] = useDisclosure();

  return (
    <section>
      <div className="flex gap-1">
        <h2>Completed tasks {tasks.length}</h2>
        <button onClick={onToggle}>show completed</button>
      </div>

      {open && <TaskList tasks={tasks} />}
    </section>
  );
};

export default TaskListComplete;
