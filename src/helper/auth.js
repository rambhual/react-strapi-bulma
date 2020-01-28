import cookie from "js-cookie";

export const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1
  });
};

export const getCookie = key => {
  return cookie.get(key);
};

export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setUserInLocalStorage("user", data.user);
  next();
};
export const setUserInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const signOut = () => {
  cookie.remove("token");
  localStorage.removeItem("user");
};
export const getUserFromLocalStorage = key => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};
