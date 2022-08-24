import { Link } from 'react-router-dom';

const Home = () => {
  
  return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
      <nav class="navbar is-fullheight-with-navbar has-background-grey-lighter" id="homeNav">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start ">
              <Link to='/Create'>
                <button class="button is-info is-light" id = "btnHomeNav">Get Started!</button>
              </Link>
            </div>
 
            <div class="navbar-end">

              <div class="navbar-item" id = "homeNavBarContainer">
                <div class="buttons">
                  <Link to='/login'>
                    <button class="button is-info is-light" id="credentialsBtn1">Log in</button>
                  </Link>
                  <Link to='/signup'>
                    <button class="button is-info"id="credentialsBtn2">Create Account</button>
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
            Build-A-Career 
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