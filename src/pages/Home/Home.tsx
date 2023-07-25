import {useEffect, useMemo, useState} from "react";

import {useQueryTaskGetAll} from "../../api/tasks";
import Greeting from "../../components/Greeting";
import TaskCreate from "../../components/TaskCreate";
import TaskListComplete from "../../components/TaskListComplete";
import TaskListUncomplete from "../../components/TaskListUncomplete";
import TaskSearch from "../../components/TaskSearch";
import TaskSummary from "../../components/TaskSummary";
import {toast} from "react-hot-toast";

const Home = () => {
  const [search, setSearch] = useState("");

  const {data, isLoading, error} = useQueryTaskGetAll();
  console.log("🚀 ~ Home ~ data:", data);
  console.log("🚀 ~ Home ~ error:", error);
  console.log("🚀 ~ Home ~ isLoading:", isLoading);

  const uncompleteTasks = useMemo(
    () =>
      data.filter(
        (task) =>
          !task.completed &&
          task.todo.toLowerCase().includes(search.toLowerCase()),
      ),
    [data, search],
  );

  const completedTasks = useMemo(
    () => data.filter((task) => task.completed),
    [data],
  );

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
      <header className="flex justify-between max-w-2xl p-5">
        <div>
          <Greeting />
          <TaskSummary count={uncompleteTasks.length} />
        </div>

        <TaskSearch search={search} onSearchChange={setSearch} />

        {/* TODO: Add this to layout */}
        <div className="flex">
          <button>Dark Mode</button>
          <button>Log out</button>
        </div>
      </header>

      <main className="max-w-lg p-5">
        <TaskCreate />

        <TaskListUncomplete tasks={uncompleteTasks} />

        <TaskListComplete tasks={completedTasks} />
      </main>
    </>
  );
};

export default Home;
