import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import CoverLetterPage from './coverLetterPage';
import ResumePage from './resumePage';
import LinkedinPage from './linkedinPage';
import { useState } from "react";

const Create = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

const [currentPage,setCurrentPage] = useState("Cover Letter")

  const matchupList = data?.matchups || [];

  const renderPage = () => {
    if (currentPage === 'Cover Letter') {
      return <CoverLetterPage />;
    }
    if (currentPage === 'Resume') {
      return <ResumePage/>;
    }
    return <LinkedinPage />;
  };

  function renderTemplates(event) {
    //change the state to whichever selection is made in the dropdown menu
 console.log(event.target.innerText);
 //update the current page state to event.target.innerText
 //Week 21!!
  }

  return (
    <div className="card is-shadowless bg-white card-rounded w-100 min-90%-vh">
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

                <Link to="/login">
                  <button class="button is-info is-light">
                    <strong>Log in</strong>
                  </button>
                </Link>
                <Link to="/signup">
                  <button class="button is-info">Create Account</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <nav class="navbar is-light " id = "templateNavMenu" role="navigation" aria-label="dropdown navigation">
          <div class="navbar-item has-dropdown  is-hoverable templateCycle" id= "templateDropDown">
            <a class="navbar-item">
              Template Selection
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"onClick = {renderTemplates}>
                Resume
              </a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item"onClick = {renderTemplates}>
                Cover Letter
              </a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item"onClick = {renderTemplates}>
                Linkedin
              </a>
            </div>
          </div>
        </nav>
      </section>

    {renderPage()}



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
