const constantsObject = {
  accessToken: "__accessToken",
  userProfile: "__userProfile",
};

export type Constant = keyof typeof constantsObject;

const constants = (name: Constant) => constantsObject[name];

export default constants;
