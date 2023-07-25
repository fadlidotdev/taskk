type Task = {
  title: string;
  completed: boolean;
};

type Props = {
  onSubmit: (task: Task) => void;
};

const TaskForm = (props: Props) => {
  const {onSubmit} = props;
  console.log("🚀 ~ TaskForm ~ onSubmit:", onSubmit);

  return (
    <form>
      <input type="checkbox" />
      <input type="text" placeholder="Add a new task..." />
      <button>Submit</button>
    </form>
  );
};

export default TaskForm;
