import { useEffect, useContext } from "react";
import { CookiesContext } from '../../utils/context';
import { UserCookies } from '../../utils/cookie-handler';
import { Loader, Dimmer, Button, Input } from "semantic-ui-react";
import { useLazyQuery } from "@apollo/client";
import { useLogout } from "../../hooks/logout";
import USER from "./user_query";
import './Account.css';

const Account = () => {
  const { cookies } = useContext(CookiesContext);
  const [ logout ] = useLogout();
  const [getUserDetails, { data: fetchedUserDetails, loading, error }] = useLazyQuery(USER,  
    { context: { headers: { authorization: `Bearer ${cookies[UserCookies.USER]}` } } });

  useEffect(() => {
    getUserDetails({ variables: { userId: cookies[UserCookies.USER_ID] } });
  }, []);

  return ( <div className='accounts-container' role={'contentinfo'}>
    <div className='user-details-container'>
       <Dimmer active={loading}>
        <Loader 
         active={loading} 
         size="large"
        > 
          fetching User Details....
        </Loader>
      </Dimmer>  
      <div className='user-details-row' style={{ "justifyContent": "center" }}>
        <h1> User Details</h1>    
      </div>
      <div className='user-details-row'>
       <h3>First Name: </h3>
       <Input 
         placeholder='.....' 
         value={fetchedUserDetails?.user?.firstName}
         disabled
       />
      </div>
      <div className='user-details-row'>
       <h3>last Name: </h3>
       <Input 
         placeholder='.....' 
         value={fetchedUserDetails?.user?.lastName}
         disabled
       />
      </div>
      <Button onClick={logout} color='red'>logout</Button>
    </div>
  </div>)  
}

export default Account;