import Greeting from "../../components/Greeting";
import TaskCreate from "../../components/TaskCreate";
import TaskListComplete from "../../components/TaskListComplete";
import TaskListUncomplete from "../../components/TaskListUncomplete";
import TaskSearch from "../../components/TaskSearch";
import TaskSummary from "../../components/TaskSummary";

const UNCOMPLETED = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: false,
    userId: 1,
  },
  {id: 2, todo: "Do another thing", completed: false, userId: 1},
];

const COMPLETED = [
  {id: 3, todo: "Completed todo 1", completed: true, userId: 1},
  {id: 4, todo: "Completed todo 2", completed: true, userId: 1},
];

const Home = () => {
  return (
    <>
      <header className="flex justify-between max-w-2xl p-5">
        <div>
          <Greeting />
          <TaskSummary />
        </div>

        <TaskSearch />

        {/* TODO: Add this to layout */}
        <div className="flex">
          <button>Dark Mode</button>
          <button>Log out</button>
        </div>
      </header>

      <main className="max-w-lg p-5">
        <TaskCreate />

        <TaskListUncomplete tasks={UNCOMPLETED} />

        <TaskListComplete tasks={COMPLETED} />
      </main>
    </>
  );
};

export default Home;
