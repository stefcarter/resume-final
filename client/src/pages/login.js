import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Navbar from "../components/Navbar";

const Login = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache",
  // });

  // const matchupList = data?.matchups || [];

  const [formState, setFormState] = useState({ 
    email: '', 
    password: '' });

  const [login, { error, data }] = useMutation(LOGIN_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  try {
    const { data } = await login({
      variables: { ...formState },
    });
    console.log(data);
    Auth.login(data.login.token);
    
  } catch (e) {
    console.error(e);
  }

  // clear form values
  setFormState({
    email: '',
    password: '',
  });
};
return (
  <div className="card is-shadowless bg-white card-rounded w-100 min-90%-vh">
    <Navbar />
​
    <div className="card" id="loginContainerCard">
      <h1> Login!! </h1>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          {/* id for grabbing email is loginEmail  */}
          <input
            id="loginEmail"
            className="input is-primary"
            type="text"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          ></input>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
​
      <div className="field">
        <label className="label" type="password">
          Password
        </label>
        <div className="control has-icons-left has-icons-right">
          {/* Id for grabbing password is loginPassword  */}
          <input
            id="loginPassword"
            type="password"
            name="password"
            className="input is-primary"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          ></input>
          {/* fix the icons not showing up in the input fields down below */}
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
      <div id="btnContainer">
        <button className="button is-success" id="loginBtn" onClick={handleFormSubmit}>
          Login
        </button>
      </div>
    </div>
  </div>
);
};

export default Login;
