import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Navbar from "../components/Navbar";
const CoverLetterPage = () => {

    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

    const matchupList = data?.matchups || [];

    return (

    <div className="card bg-white card-rounded w-100 min-80-vh">
       <Navbar/>
        
        <div id="pageBody">
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
                            <p>- Make sure to introduce yourself</p>
                            <p>- Don't forget to thank them for giving you the opportunity to work for them</p>
                            <p>- Consider talking lightly about your credentials</p>
                        </div>
                        <textarea class="textarea" id="introParagraph" placeholder="Introductory Paragraph" rows="10"></textarea>
                    </div>
                </div>
                <div class="column" id="midSection">
                    <div class="field">
                        <div class ="box" id="midParaSuggestions">
                            <p>- Be sure to explain why you would be a good fit for their company</p>
                            <p>- Go into more details about your credentials</p>
                            <p>- Gloss over personal accomplishments that relate to the position at hand</p>
                            <p>- Consider describing yourself with positive personality traits</p>
                            <p>- e.g. "outstanding leadership skills", "very cooperative in teams", "goal driven" etc.</p>
                        </div>
                        <textarea class="textarea" id="middleParagraph" placeholder="Middle Paragraph" rows="10"></textarea>
                    </div>
                </div>
                <div class="column" id="conclusionSection">
                    <div class="field">
                        <div class="box" id="closingSuggestions">
                            <p>- This paragraph should act as a wrap to your cover letter</p>
                            <p>- You should summarize the points you made throughout the paper</p>
                            <p>- Be sure to thank them again for allowing you the opportunity to work for them</p>
                            <p>- Consider showing your eagerness to stay in contact with the recruiter/company</p>
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
                </div>
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