import useAuth from "../../hooks/useAuth";

const Greeting = () => {
  const {userProfile} = useAuth();

  return <h1>Welcome back, {userProfile?.firstName}</h1>;
};

export default Greeting;
