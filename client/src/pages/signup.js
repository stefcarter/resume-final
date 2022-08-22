import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import Navbar from "../components/Navbar";

const Signup = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache",
  // });

  // const matchupList = data?.matchups || [];

  const [formState, setFormState] = useState ({
    name: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(CREATE_USER);

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
      console.log("start of try")
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log("inside try")
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="card is-shadowless bg-white card-rounded w-100 min-90%-vh" >
      <Navbar/>
      <div className="card" id="singupContainerCard">
        <h1> Signup! </h1>
        {/* <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right"> */}
            {/* id for grabbing email is signupEmail */}
            {/* <input
              // id="signupEmail"
              className="input is-primary"
              type="text"
              placeholder="Email"
              value={formState.name}
              onChange={handleChange}
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div> */}

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            {/* id for grabbing email is signupEmail */}
            <input
              id="signupEmail"
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
        <div className="field">
          <label className="label" type="password">
            Password
          </label>
          <div className="control has-icons-left has-icons-right">
            {/* Id for grabbing password is signupPassword */}
            <input
              id="signupPassword"
              type="password"
              name="password"
              className="input is-primary"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            ></input>
            
          </div>
          <div id="btnContainer">
            <button className="button is-success" id="loginBtn" onClick={handleFormSubmit}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;