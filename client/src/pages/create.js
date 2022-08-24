import { Link } from "react-router-dom";

import CoverLetterPage from './coverLetterPage';
import ResumePage from './resumePage';
import LinkedinPage from './linkedinPage';
import { useState } from "react";
import Navbar from "../components/Navbar";

const Create = () => {
 
  const [ currentPage, setCurrentPage ] = useState();
 

  const renderPage = () => {
    if (currentPage === 'Cover Letter') {
      return <CoverLetterPage />;
    }
    if (currentPage === 'Resume') {
      //modal so it takes them to template selection
      return  < ResumePage />;
    }
    return <LinkedinPage />;
  };

  function renderTemplates(event) {
    //change the state to whichever selection is made in the dropdown menu
    console.log(event.target.innerText);
    setCurrentPage(event.target.innerText);
    //create an empty template for the default and get rid of the state defaulting to the cover letter
    //update the current page state to even.target.innerText
    //Week 21!!
  }

  return (
    <div className="card is-shadowless bg-white card-rounded w-100 min-90%-vh">
      <header>
        <nav class="navbar is-light " id="templateNavMenu" role="navigation" aria-label="dropdown navigation">
          <div class="navbar-item has-dropdown  is-hoverable templateCycle" id="templateDropDown">
            <a class="navbar-item">
              Template Selection
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" onClick={renderTemplates}>
                Resume
              </a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item" onClick={renderTemplates}>
                Cover Letter
              </a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item" onClick={renderTemplates}>
                Linkedin
              </a>
            </div>
          </div>
        </nav>
        </header>

      {renderPage()}



     
    </div>
  );
};

export default Create;
