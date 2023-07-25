import {ChangeEvent} from "react";
import {useHistory} from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
