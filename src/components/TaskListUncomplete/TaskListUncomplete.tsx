import {Task} from "../../api/tasks";
import TaskList from "../TaskList";
import {Card} from "../common";

type Props = {
  tasks: Task[];
};

const TaskListUncomplete = (props: Props) => {
  const {tasks} = props;

  if (tasks.length === 0) return null;
  return (
    <Card className="p-8">
      <TaskList tasks={tasks} />
    </Card>
  );
};

export default TaskListUncomplete;
