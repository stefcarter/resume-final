import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

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

