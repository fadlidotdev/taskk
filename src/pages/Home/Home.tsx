import {useEffect, useMemo, useState} from "react";

import {toast} from "react-hot-toast";
import {useQueryTaskGetAll} from "../../api/tasks";
import DarkMode from "../../components/DarkMode";
import Greeting from "../../components/Greeting";
import TaskCreate from "../../components/TaskCreate";
import TaskListComplete from "../../components/TaskListComplete";
import TaskListUncomplete from "../../components/TaskListUncomplete";
import TaskSearch from "../../components/TaskSearch";
import TaskSummary from "../../components/TaskSummary";
import {Button, ContentLoader} from "../../components/common";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const {logout} = useAuth();

  const [search, setSearch] = useState("");

  const {data, isLoading, error} = useQueryTaskGetAll();

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
      <header className="flex items-start justify-between">
        <div className="space-y-2">
          <Greeting />
          {!isLoading && <TaskSummary count={uncompleteTasks.length} />}
        </div>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="small"
            onClick={() => {
              logout();
            }}>
            Log out
          </Button>

          <DarkMode />
        </div>
      </header>

      <div className="my-4">
        <TaskSearch search={search} onSearchChange={setSearch} />
      </div>

      <main>
        <TaskCreate />

        <div className="mt-8 space-y-4">
          {isLoading ? (
            <ContentLoader height={200} isRounded />
          ) : (
            <>
              <TaskListUncomplete tasks={uncompleteTasks} />

              {completedTasks.length > 0 ? (
                <TaskListComplete tasks={completedTasks} />
              ) : null}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
