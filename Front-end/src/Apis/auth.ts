export const Token_key = "@MyToken-Key"
export const isAuthenticated = () => localStorage.getItem(Token_key) !== null;
export const isRemember = () => localStorage.getItem("@Remember") !== null;
export const getToken = () => localStorage.getItem(Token_key);
export const signIn = (token: string) => localStorage.setItem(Token_key, token);
export const Remember = (Value: string) => localStorage.setItem("@Remember", Value);
export const signOut = () => localStorage.removeItem(Token_key);