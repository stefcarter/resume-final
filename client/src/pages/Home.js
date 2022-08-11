import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
    <nav class="navbar is-fullheight-with-navbar">
  <div class="container">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start ">
        <a href="./create" class="navbar-item">
          Get Started!
        </a>

      </div>
      <div className="card-body m-5">
        <h2 className="s-50">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.X</h2>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link to= './login'>
            <button class="button is-info is-light">Login</button>
            </Link>
            <Link to = './signup'>
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
>>>>>>> 2f5b2a2b916c4696e51938b4f60715828d1d24aa
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
      <div className="card-footer text-center m-3">
        <h2></h2>
        <Link to="/Login">
          <button className="btn btn-lg btn-danger">Login</button>
        </Link>
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/Signup">
          <button className="btn btn-lg btn-danger">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
