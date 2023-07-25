import {Task} from "../../api/tasks";
import useDisclosure from "../../hooks/useDisclosure";
import TaskList from "../TaskList";
import {Card, IconButton} from "../common";

type Props = {
  tasks: Task[];
};

const TaskListComplete = (props: Props) => {
  const {tasks} = props;

  const [open, {onToggle}] = useDisclosure(true);

  return (
    <section>
      <div className="flex items-center justify-between gap-4 mb-2">
        <h2 className="text-lg font-bold">Completed tasks {tasks.length}</h2>
        <IconButton size="small" variant="ghost" onClick={onToggle}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </IconButton>
      </div>

      {open && (
        <Card className="p-8">
          <TaskList tasks={tasks} />
        </Card>
      )}
    </section>
  );
};

export default TaskListComplete;
