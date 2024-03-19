import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate() // Usenavigate to redirect to the page

  useEffect(() => { // UseEffect is used to set the condition for redirection
    setTimeout(() => { // Set the timeout
      navigate('/home') // Redirect path to '/home'
    }, 2000) // set time 2000ms which is equal to 2seconds
  }, [])
  return (
    <div>
      <h1>Welcome to my Site!</h1>
    </div>
  )
}

export default WelcomePage
