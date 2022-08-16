import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const resumePage = () => {
    
    const { loading, data } = useQuery(QUERY_MATCHUPS,
        {
            fetchPolicy: "no-cache"
        });

        const matchupList = data?.matchups || [];

        return (
            <div className="card bg-white card-rounded w-100 min-90%-vh">
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
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Tech
      </a>
      <a href="#" class="dropdown-item is-active">
        Real Estate
      </a>
      <a href="#" class="dropdown-item">
        Engineer
      </a>
      <hr class="dropdown-divider"></hr>
      <a href="#" class="dropdown-item">
        Mechanic
      </a>
    </div>
  </div>
</div>
                </div>
        )
};
