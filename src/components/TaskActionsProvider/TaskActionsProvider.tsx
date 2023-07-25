import {ReactNode} from "react";

type Props = {
  children: ReactNode;
};

const TaskActionsProvider = (props: Props) => {
  const {children} = props;

  return children;
};

export default TaskActionsProvider;
