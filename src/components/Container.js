import React from 'react'
import UserContent from '../components/UserContent';
import UserInput from '../components/UserInput';

function Container({userRef,  setUserData, dispatch, }) {
  return (
<div className='container'>
<UserInput userRef = {userRef} dispatch = {dispatch}/>

<UserContent userRef = {userRef}   setUserData={setUserData}/>

</div>
  )
}

export default Container
