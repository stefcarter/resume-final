import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Coral from '../images/Coral-Resume.png';
import Muse from '../images/Muse-Resume.png';
import Swiss from '../images/Swiss-Resume.png';

const ResumePage = () => {
    
    const { loading, data } = useQuery(QUERY_MATCHUPS,
        {
            fetchPolicy: "no-cache"
        });

        const matchupList = data?.matchups || [];

        return (
            <div className="columns card is-shadowless bg-white card-rounded w-100 min-90%-vh">
            <nav className="navbar" role="navigation" aria-label="main navigation"></nav>
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>
    
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="dropdown is-active">
  {/* <div className="dropdown-trigger column">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>What field are you looking for?</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div> */}
  {/* <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        Mechanic
      </a>
      <a className="dropdown-item">
        Tech
      </a>
      <a href="#" className="dropdown-item ">
        Real Estate
      </a>
      <a href="#" className="dropdown-item">
        Engineer
      </a>
      </div>
     <br>
     </br>
    </div> */}
  </div>
  <div className="column">
    <p >Please choose resume template you would like to use</p>
    <br>
    </br>
    <a>Muse Template</a><figure className="image is-square">
  <img id="muse" src={Muse}></img>
</figure>
<br>
</br>
<br>
</br>
    <a>Swiss template</a>
    <figure className="image is-square">
  <img id="swiss" src={Swiss}></img>
</figure>
<br>
</br>
<br>
</br>
          <a>Coral Template</a>
    <figure className="image is-square">
  <img id="coral" src={Coral}></img>
</figure>
  </div>

                </div>
        )
};


export default ResumePage;