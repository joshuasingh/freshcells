import { useEffect, useContext } from "react";
import { CookiesContext } from '../../utils/context';
import { UserCookies } from '../../utils/cookie-handler';
import { Label, Loader, Dimmer, Button } from "semantic-ui-react";
import { useLazyQuery } from "@apollo/client";
import { useLogout } from "../../hooks/logout";
import USER from "./user_query";

const Account = () => {
  const { cookies } = useContext(CookiesContext);
  const [ logout ] = useLogout();
  const [getUserDetails, { data: fetchedUserDetails, loading, error }] = useLazyQuery(USER,  
    { context: { headers: { authorization: `Bearer ${cookies[UserCookies.USER]}` } } });

  useEffect(() => {
    getUserDetails({ variables: { userId: cookies[UserCookies.USER_ID] } });
  }, []);

  return (<div>
     <Dimmer active={loading}>
      <Loader 
       active={loading} 
       size="large"
      > 
        fetching User Details....
      </Loader>
    </Dimmer>  
    <h1> User Details</h1>
    <div>
     <Label>First Name: </Label>
     <Label>{fetchedUserDetails?.user?.firstName}</Label>   
    </div>
    <div>
     <Label>last Name: </Label>
     <Label>{fetchedUserDetails?.user?.lastName}</Label>   
    </div>
    <Button onClick={logout}>logout</Button>
  </div>)  
}

export default Account;