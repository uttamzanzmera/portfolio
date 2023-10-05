import React from 'react'
import { useParams ,useLocation ,useNavigate} from "react-router-dom";

function User() {
    const {fname,lname} =  useParams();
    const location = useLocation();
    const history = useNavigate ();
    console.log(history);
    document.title = `Welcome ${fname}`
  return (
   <>
   <h1>Welcome {fname} {lname} </h1>
   <h2>You are at URL : {location.pathname} </h2>

    {location.pathname === `/User/uttam/zanzmera` ? (
      <button onClick={() => history('/')}>Home page </button>) : null
    }
   </>
  )
}

export default User
