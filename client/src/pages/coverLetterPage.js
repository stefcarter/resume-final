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
                <div className="navbar-start">
                    <a className="navbar-item">
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

        
        <div class="columns" id="letterBody">
            <div class="column" id="openerSection">
                <p id="autoInput">Dear</p>
                <div id="intro">
                    <textarea class="textarea" placeholder="Company/Recruiter Name" rows="1"></textarea>
                </div>
            </div>
            <div class="column" id="introSection">
                <div class="field">
                    <div class="box" id="openingSuggestions">
                        - Make sure to introduce yourself
                        - Don't forget to thank them for giving you the opportunity to work for them
                        - Consider talking lightly about your credentials
                    </div>
                    <textarea class="textarea" id="introParagraph" placeholder="Introductory Paragraph" rows="10"></textarea>
                </div>
            </div>
            <div class="column" id="midSection">
                <div class="field">
                    <div class ="box" id="midParaSuggestions">
                        - Be sure to explain why you would be a good fit for their company
                        - Go into more details about your credentials
                        - Gloss over personal accomplishments that relate to the position at hand
                        - Consider describing yourself with positive personality traits
                        - e.g. "outstanding leadership skills", "very cooperative in teams", "goal driven" etc.
                    </div>
                    <textarea class="textarea" id="middleParagraph" placeholder="Middle Paragraph" rows="10"></textarea>
                </div>
            </div>
            <div class="column" id="conclusionSection">
                <div class="field">
                    <div class="box" id="closingSuggestions">
                        - This paragraph should act as a wrap to your cover letter
                        - You should summarize the points you made throughout the paper
                        - Be sure to thank them again for allowing you the opportunity to work for them
                        - Consider showing your eagerness to stay in contact with the recruiter/company
                    </div>
                    <textarea class="textarea" id="closingParagraph" placeholder="Closure Paragraph" rows="10"></textarea>
                </div>
            </div>
            <div class="column" id="outroSection">
                <p id="autoInput">Sincerely,</p>
                <div id="contactInfo">
                    <textarea class="textarea" placeholder="User Contact Info" rows="1"></textarea>
                </div>
            </div>
            <div class="field" id="buttons">
                <input class="button" id="review" type="submit" value="Review Letter"></input>
                <input class="button" id="preview" type="submit" value="Preview Letter"></input>
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
</div>
);
};

export default CoverLetterPage;