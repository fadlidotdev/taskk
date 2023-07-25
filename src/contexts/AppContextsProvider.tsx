import {useAtom, useSetAtom} from "jotai";
import {RESET} from "jotai/utils";
import {createContext, useMemo} from "react";
import {APILoginResponse} from "../api/tasks/auth";
import {atomAccessToken, atomDarkMode, atomUserProfile} from "../store";

export const appContext = createContext<{
  accessToken: string | null;
  userProfile: APILoginResponse | null;
  login: (data: APILoginResponse) => void;
  logout: VoidFunction;
}>({
  accessToken: null,
  userProfile: null,
  login: () => {},
  logout: () => {},
});

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AppContextProvider = ({children}: Props) => {
  const [accessToken, setAccessToken] = useAtom(atomAccessToken);

  const [darkMode, setDarkMode] = useAtom(atomDarkMode);
  console.log("🚀 ~ AppContextProvider ~ darkMode:", darkMode, setDarkMode);

  const [userProfile, setUserProfile] = useAtom(atomUserProfile);
  const storeAccessToken = useSetAtom(atomAccessToken);

  const parsedUserProfile = useMemo(() => {
    if (!userProfile) return null;

    try {
      return JSON.parse(userProfile);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("Error while parsing user profile from localStorage");
    }
  }, [userProfile]);

  const login = (data: APILoginResponse) => {
    storeAccessToken(data.token);
    setUserProfile(JSON.stringify(data));
  };

  const logout = () => {
    setAccessToken(RESET);
    setUserProfile(RESET);
    window.location.replace("/login");
  };

  return (
    <appContext.Provider
      value={{accessToken, userProfile: parsedUserProfile, login, logout}}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
