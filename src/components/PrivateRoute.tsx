import {useEffect} from "react";
import {RouteProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props extends RouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({children}: Props) => {
  const {accessToken} = useAuth();

  useEffect(() => {
    if (!accessToken) window.location.replace("/login");
  }, [accessToken]);

  return children;
};

export default PrivateRoute;
