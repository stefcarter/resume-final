import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Signup = () => {
    const {loading, data} = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

const matchupList = data?.matchups || [];

return (
    <div className="card bg-white card-rounded w-100 min-90%-vh" >
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href ="/" className="navbar-item is-info is-outlined">
        Home
      </a>

    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to = '/login'>
          <button className="button is-info is-light">
            <strong>Log in</strong>
          </button>
          </Link>
          <Link to = '/signup'>
          <button className="button is-info">
            Creat Account
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
<div className="card" id='singupContainerCard' >
         <h1> Signup! </h1>
    <div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
  {/* id for grabbing email is signupEmail */}
  <input id="signupEmail" className="input is-primary" type="text" placeholder="Email"></input>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>

<div className="field">
  <label className="label" type="password">Password</label>
  <div className="control has-icons-left has-icons-right">
  {/* Id for grabbing password is signupPassword */}
  <input id="signupPassword" type="password" className="input is-primary"  placeholder="Password"></input>
  
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>

</div>

</div>

);

};

export default Signup;