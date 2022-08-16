import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";

const Signup = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];


  return (
    <div className="card bg-white card-rounded w-100 min-90%-vh" >
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href ="/" className="navbar-item is-info is-outlined">
        Home
      </a>


          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="./login">
                  <button class="button is-info is-light">
                    <strong>Log in</strong>
                  </button>
                </Link>
                <Link to="./signup">
                  <button class="button is-info">
                  <strong>create Account</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  </div>
</nav>
      <div class="card" id="singupContainerCard">
        <h1> Signup! </h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            {/* id for grabbing email is signupEmail */}
            <input
              id="signupEmail"
              class="input is-primary"
              type="text"
              placeholder="Email"
            ></input>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label" type="password">
            Password
          </label>
          <div class="control has-icons-left has-icons-right">
            {/* Id for grabbing password is signupPassword */}
            <input
              id="signupPassword"
              type="password"
              class="input is-primary"
              placeholder="Password"
            ></input>


            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
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
  
</div>


);

};

export default Signup;
