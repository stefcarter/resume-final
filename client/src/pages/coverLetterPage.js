import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import DefaultPage from '../coverLetterLayouts/DefaultPage';
// import jsPDF from 'jspdf';
const CoverLetterPage = () => {

//   const coverLetterRender = document.getElementById("coverLetterSubmit");

//   coverLetterRender.addEventListner ("click", () => {

//     return <DefaultPage />;
//   });


    return (

    <div className="card bg-white card-rounded w-100 min-90%-vh">
         <Navbar/>
      
        <div className = "container-fluid is-max-widescreen" id = "coverLetterOverall">
            <div class="columns" id="letterBody">
            <h1 className="is-size-1 has-text-centered"> Cover Letter Creater!</h1>
                <div className="column" id="openerSection">
                    <br></br>
                    <p id="autoInput">Dear</p>
                    <div id="intro">
                        <textarea class="textarea" placeholder="Company/Recruiter Name" rows="1"></textarea>
                    </div>
                </div>
                <div className="column" id="introSection">
                    <div className="field">
                        <div className="box" id="openingSuggestions">
                            <p>- Make sure to introduce yourself</p>
                            <p>- Don't forget to thank them for giving you the opportunity to work for them</p>
                            <p>- Consider talking lightly about your credentials</p>
                        </div>
                        <textarea className="textarea" id="introParagraph" placeholder="Introductory Paragraph" rows="10"></textarea>
                    </div>
                </div>
                <div className="column" id="midSection">
                    <div className="field">
                        <div className ="box" id="midParaSuggestions">
                            <p>- Be sure to explain why you would be a good fit for their company</p>
                            <p>- Go into more details about your credentials</p>
                            <p>- Gloss over personal accomplishments that relate to the position at hand</p>
                            <p>- Consider describing yourself with positive personality traits</p>
                            <p>- e.g. "outstanding leadership skills", "very cooperative in teams", "goal driven" etc.</p>
                        </div>
                        <textarea class="textarea" id="middleParagraph" placeholder="Middle Paragraph" rows="10"></textarea>
                    </div>
                </div>
                <div className="column" id="conclusionSection">
                    <div className="field">
                        <div className="box" id="closingSuggestions">
                            <p>- This paragraph should act as a wrap to your cover letter</p>
                            <p>- You should summarize the points you made throughout the paper</p>
                            <p>- Be sure to thank them again for allowing you the opportunity to work for them</p>
                            <p>- Consider showing your eagerness to stay in contact with the recruiter/company</p>
                        </div>
                        <textarea class="textarea" id="closingParagraph" placeholder="Closure Paragraph" rows="10"></textarea>
                    </div>
                </div>
                <div className="column" id="outroSection">
                    <p id="autoInput">Sincerely,</p>
                    <div id="contactInfo">
                        <textarea class="textarea" placeholder="User Contact Info" rows="1"></textarea>
                    </div>
                </div>
                <div className="field" id="buttons">
                    <button className="button is-success" id="coverLetterSubmit">Export Cover Letter</button>
                </div>
                <br>
                </br>
                <div id= "captureCoverLetter">
                    {}

                </div>
            </div>
        </div>     
</div>
);
};

export default CoverLetterPage;