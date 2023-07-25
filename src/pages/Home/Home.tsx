const UNCOMPLETED = [
  {id: 1, todo: "Do something nice for someone I care about", completed: false},
  {id: 2, todo: "Do another thing", completed: false},
];

const COMPLETED = [
  {id: 3, todo: "Completed todo 1", completed: true},
  {id: 4, todo: "Completed todo 2", completed: true},
];

const Home = () => {
  return (
    <>
      <header className="flex justify-between p-5">
        <div>
          <h1>Welcome back, Stan</h1>
          <p>You've got 7 tasks coming up, get it done!</p>
        </div>

        <div>
          <input type="text" placeholder="Search taskk" />
        </div>

        <div className="flex">
          <button>Dark Mode</button>
          <button>Log out</button>
        </div>
      </header>

      <main className="p-5">
        <form>
          <input type="checkbox" />
          <input type="text" placeholder="Add a new task..." />
          <button>Add</button>
        </form>

        <section>
          {UNCOMPLETED.map((task) => (
            <div key={task.id}>
              <input type="checkbox" />
              <span>{task.todo}</span>
            </div>
          ))}
        </section>

        <section>
          <div className="flex gap-1">
            <h2>Completed tasks</h2>
            <button>toggle</button>
          </div>

          {COMPLETED.map((task) => (
            <div key={task.id}>
              <input type="checkbox" checked />
              <span>{task.todo}</span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
