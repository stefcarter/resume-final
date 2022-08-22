import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Coral from '../images/Coral-Resume.png';
import Muse from '../images/Muse-Resume.png';
import Swiss from '../images/Swiss-Resume.png';
import Navbar from "../components/Navbar";

const ResumePage = () => {
    
    const { loading, data } = useQuery(QUERY_MATCHUPS,
        {
            fetchPolicy: "no-cache"
        });

        const matchupList = data?.matchups || [];

        return (
            <div className="columns card is-shadowless bg-white card-rounded w-100 min-90%-vh">
            
            <div className=''>
            <Navbar/>
            
            <h1 className="is-size-1 has-text-centered">Choose Resume Template!</h1>
            </div>
     
  <div className='card'>

  
  <div className="column field" >
    <p >Please choose resume template you would like to use</p>
    <br>
    </br>
    <a href="https://docs.google.com/document/d/1v4OqekDstGXCxovKn1s2DTc8yAA8tNlJ7HLHdk2wha8/edit" target="_blank">Muse Template</a><figure className="image is-square">
  <img id="muse" src={Muse}></img>
</figure>
<br>
</br>
<br>
</br>
    <a href="https://docs.google.com/document/d/1WR_axh5A9t1jwER_5mFCIcr5I1oNqm4cB1PHAQEEWqc/edit" target="_blank">Swiss template</a>
    <figure className="image is-square">
  <img id="swiss" src={Swiss}></img>
</figure>
<br>
</br>
<br>
</br>
          <a href="https://docs.google.com/document/d/1YXK0bZ-PysaponGwiT-1lHzQgjRdFzGtJi7-aB2sK9A/edit#" target="_blank" >Coral Template</a>
    <figure className="image is-square">
  <img id="coral" src={Coral}></img>
</figure>
  </div>

                </div></div>
        )
};


export default ResumePage;