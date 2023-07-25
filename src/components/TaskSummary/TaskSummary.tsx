type Props = {
  count: number;
};

const TaskSummary = ({count}: Props) => {
  if (count === 0) return <p>No tasks left. Relax!</p>;

  return <p>You've got {count} tasks coming up, get it done!</p>;
};

export default TaskSummary;
