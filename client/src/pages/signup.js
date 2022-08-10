import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Signup = () => {
    const {loading, data} = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });

const matchupList = data?.matchups || [];

return (
  

    <div className="card bg-white card-rounded w-100 min-100-vh">
         <h1> Signup! </h1>
<div class="card">
    <div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
  {/* id for grabbing email is signupEmail */}
  <input id="signupEmail" class="input is-primary" type="text" placeholder="Email"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>

<div class="field">
  <label class="label" type="password">Password</label>
  <div class="control has-icons-left has-icons-right">
  {/* Id for grabbing password is signupPassword */}
  <input id="signupPassword" type="password" class="input is-primary"  placeholder="Password"></input>
  
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>
</div>
<button class="button is-success" id="loginBtn">Signup!</button>

</div>

);

};

export default Signup;