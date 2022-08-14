import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

<<<<<<< HEAD
const coverLetter = () => {
    const {loading, data} = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

const matchupList = data?.matchups || [];

return (
    <div className="card bg-white card-rounded w-100 min-80-vh">
    <nav class="navbar is-fullheight-with-navbar">
        <div class="container">
            <textarea id="cvl" rows="20" columns="40"></textarea>
        </div>
    </nav>
    </div>
)};

=======
const CoverLetterPage = () =>{

    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

    const matchupList = data?.matchups || [];

return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
       
        <div class="control">
            <input class="input is-focused" type="text" placeholder="Focused input"></input>
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


);
};

export default CoverLetterPage;
>>>>>>> 0ac2c5c968c81573a552b80559380c861d7afeb9
