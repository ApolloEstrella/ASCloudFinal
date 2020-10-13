import React from "react";
import StorageService from "../../services/storage.service";
import { useHistory } from "react-router-dom";
import store from "../../store";
import { SET_LOGIN } from "../../actions/companyAction";
import { Redirect } from "react-router"

const Logout = () => {
  const storageService = new StorageService();
  const history = useHistory();

  storageService.secureStorage.setItem("isLogin", false);
  storageService.secureStorage.setItem("rememberMe", false);
  store.dispatch({
    type: SET_LOGIN,
    payload: { isLogin: false },
  });

  
  
  return <Redirect to="/" push={true} />;
};

export default Logout;
