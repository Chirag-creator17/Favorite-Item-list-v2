import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/todos");
      } 
    });
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
      <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" 
                       name="username" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username"/>
        </div>
        <div className="form-group">
                <label htmlFor="password">Password </label>
                <input type="password" 
                       name="password" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
        </div>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Log in </button>
            </form>
    </div>
  );
};

export default Login;
