import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import Navbar from "../components/Navbar";

const Signup = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card is-shadowless bg-white card-rounded w-100 min-90%-vh" >
      <Navbar/>
      <div className="card" id="singupContainerCard">
        <h1> Signup! </h1>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            {/* id for grabbing email is signupEmail */}
            <input
              id="signupEmail"
              className="input is-primary"
              type="text"
              placeholder="Email"
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
              className="input is-primary"
              placeholder="Password"
            ></input>
              <div className="field">
          <label className="label" type="password">
            Password
          </label>
          <div className="control has-icons-left has-icons-right">
            {/* Id for grabbing password is signupPassword */}
            <input
              id="signupPasswordConfirm"
              type="password"
              className="input is-primary"
              placeholder="Confirm Password"
            ></input>


            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>

        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div id="btnContainer">
          <button className="button is-success" id="loginBtn">
            Login
          </button>
        </div>

    </div>
    </div>
    </div>

  );

};

export default Signup;
