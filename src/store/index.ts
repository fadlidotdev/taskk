import {atomWithStorage} from "jotai/utils";
import constants from "../utils/constants";

export const atomDarkMode = atomWithStorage("darkMode", false);

export const atomAccessToken = atomWithStorage<string | null>(
  constants("accessToken"),
  localStorage.getItem(constants("accessToken")) ?? null,
);
export const atomUserProfile = atomWithStorage(constants("userProfile"), "");
