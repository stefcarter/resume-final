import { Link } from 'react-router-dom';
import Coral from '../images/Coral-Resume.png';
import Muse from '../images/Muse-Resume.png';
import Swiss from '../images/Swiss-Resume.png';
import Navbar from "../components/Navbar";

const ResumePage = () => {
  
const resumeStyling={

  width: "150px",
  height: "150px",
  border: "5px",
  borderColor: "black"
}

  return (
    <div className="card  bg-white card-rounded w-100 min-90%-vh"id = 'resumeCardContainer'>
       <Navbar />
      <div className='is-max-widescreen columns is-shadowless' id= "resumeColumnContainer">
        <div className = "container column is-max-widscreen is-shadowless has-text-centered">
        <div className="column" >
          <h1 className="is-size-2 has-text-centered">Choose Resume Template!</h1>
          <p >Please choose resume template you would like to use</p>
        </div>
        {/* Add pagnation for these resumes so it cycles through them also style dem they are HUGE >:c */}
        <div className="column">
          <a href="https://docs.google.com/document/d/1v4OqekDstGXCxovKn1s2DTc8yAA8tNlJ7HLHdk2wha8/edit" target="_blank">Muse Template</a>
          <figure className="image is-square">
            <img id="muse" 
                  src={Muse}>
                  </img>
          </figure>
          <br>
          </br>
        </div>
        <div className="column">
          <br>
          </br>
          <a href="https://docs.google.com/document/d/1WR_axh5A9t1jwER_5mFCIcr5I1oNqm4cB1PHAQEEWqc/edit" target="_blank">Swiss template</a>
          <figure className="image is-square">
            <img id="swiss" src={Swiss}></img>
          </figure>
          <br>
          </br>
        </div>
        <div className="column">
          <br>
          </br>
          <a href="https://docs.google.com/document/d/1YXK0bZ-PysaponGwiT-1lHzQgjRdFzGtJi7-aB2sK9A/edit#" target="_blank" >Coral Template</a>
          <figure className="image is-square">
            <img id="coral" src={Coral}></img>
          </figure>
        </div>
      </div>
    </div>
    </div>

  )
};
export default ResumePage;