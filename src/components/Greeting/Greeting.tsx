import useAuth from "../../hooks/useAuth";

const Greeting = () => {
  const {userProfile} = useAuth();

  return (
    <h1 className="text-2xl font-semibold">
      Welcome back,{" "}
      <span className="text-orange-400 dark:text-orange-700">
        {userProfile?.firstName}
      </span>
    </h1>
  );
};

export default Greeting;
