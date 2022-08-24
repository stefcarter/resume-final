import { Link } from 'react-router-dom';

const Home = () => {
  
  return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
      <nav class="navbar is-fullheight-with-navbar">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start ">
              <Link to='/coverLetterPage'>
                <button class="button is-info is-light">Cover Letter</button>
              </Link>
              <Link to='/resumePage'>
                    <button class="button is-info is-light">Resume</button>
                  </Link>
                  <Link to='/linkedinPage'>
                    <button class="button is-info is-light">Linkedin</button>
                  </Link>
           
              

            </div>
 
            <div class="navbar-end">

              <div class="navbar-item">
                <div class="buttons">
                  <Link to='/login'>
                    <button class="button is-info is-light">Log in</button>
                  </Link>
                  <Link to='/signup'>
                    <button class="button is-info">Create Account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <p class="title">
            Career Planner
          </p>

          {/* <p>
      This is where we can help you create a resume, cover letter or Linkedin!  Just signup or login and get started!
    </p> */}
        </div>
      </section>
    </div>


  );
};

export default Home;