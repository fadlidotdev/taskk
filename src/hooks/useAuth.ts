import {useContext} from "react";
import {appContext} from "../contexts/AppContextsProvider";

const useAuth = () => {
  const {accessToken, userProfile, login, logout} = useContext(appContext);

  return {
    accessToken,
    userProfile,
    login,
    logout,
  };
};
export default useAuth;
