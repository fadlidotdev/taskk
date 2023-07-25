type Props = {
  count: number;
};

const TaskSummary = ({count}: Props) => {
  return <p>You've got {count} tasks coming up, get it done!</p>;
};

export default TaskSummary;
