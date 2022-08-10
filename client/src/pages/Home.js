import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (

    <div className="card bg-white card-rounded w-100 min-100-vh">
    <nav class="navbar">
  <div class="container">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start ">
       <Link to = '/create'>
        <button class="navbar-item is-link is-inverted">
          Get Started!
        </button>
        </Link>
      </div>


     
        

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link to= '/login'>
            <button class="button is-info is-light">Login</button>
            </Link>
            <Link to = '/signup'>
            <a class="button is-info">Create Account</a>
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
    
    <p>
      This is where we can help you create a resume, cover letter or Linkedin!  Just signup or login and get started!
    </p>
  </div>
</section>
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

export default Home;
