import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";

const Create = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-100 min-90%-vh">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {/* Is the home going to take the user to landing page or the create page? Carter says the landing page for now */}
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="./" class="navbar-item is-info is-outlined">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                
                <Link to=".login">
                  <button class="button is-info is-light">
                    <strong>Log in</strong>
                  </button>
                </Link>
                <Link to="./signup">
                  <button class="button is-info">Create Account</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
  );
};

export default Create;
