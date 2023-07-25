type Props = {
  count: number;
};

const className = "text-sm font-light text-gray-500";

const TaskSummary = ({count}: Props) => {
  if (count === 0) return <p className={className}>No tasks left. Relax!</p>;

  return (
    <p className={className}>
      You've got {count} tasks coming up, get it done!
    </p>
  );
};

export default TaskSummary;
