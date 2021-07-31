export const VERIFED_KEY = "@CODEBLUE_V_KEY";
export const isVerified = () => localStorage.getItem(VERIFED_KEY) !== null;
export const getVerifiedStatus = () => localStorage.getItem(VERIFED_KEY);
export const setVerifiedStatus = (status: string) => {
  localStorage.setItem(VERIFED_KEY, status);
};
export const clearVerifiedStatus = () => {
  localStorage.removeItem(VERIFED_KEY);
};
