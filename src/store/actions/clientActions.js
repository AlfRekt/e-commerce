import axiosInstance from "../../api/axiosInstance";


export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length > 0) return;

  return axiosInstance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => console.error("Roller alınamadı:", err));
};
export const loginUser = (credentials) => (dispatch) => {
  return axiosInstance.post("/login", credentials).then((res) => {
    dispatch(setUser(res.data));
    axiosInstance.defaults.headers.common["Authorization"] = res.data.token;
    return res.data;
  });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  delete axiosInstance.defaults.headers.common["Authorization"];

  dispatch(setUser({}));
};

export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  axiosInstance.defaults.headers.common["Authorization"] = token;

  return axiosInstance
    .get("/verify")
    .then((res) => {
      dispatch(setUser(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));

      const newToken = res.data.token;
      if (newToken) {
        localStorage.setItem("token", newToken);
        axiosInstance.defaults.headers.common["Authorization"] = newToken;
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axiosInstance.defaults.headers.common["Authorization"];
    });
};

export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });