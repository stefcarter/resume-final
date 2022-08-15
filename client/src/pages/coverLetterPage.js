import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const CoverLetterPage = () => {

    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

    const matchupList = data?.matchups || [];

    return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>
                    
                </div>
            </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <Link to =".login">
                            <button class="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            </Link>
                            <Link to = "./signup">
                            <button class="button is-light">
                                Log in
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </nav>
        
         <div class="control">
            <input class="input is-focused" type="text" placeholder="Focused input"></input>
        </div>
    </div>

{loading ? (
            <div> Loading...</div >
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
    </div >


);
};

export default CoverLetterPage;