import {useEffect} from "react";
import useAuth from "../hooks/useAuth";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({children}: Props) => {
  const {accessToken} = useAuth();

  useEffect(() => {
    if (!accessToken) window.location.replace("/login");
  }, [accessToken]);

  return children;
};

export default PrivateRoute;
