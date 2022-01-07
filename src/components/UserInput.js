import React from 'react'
// import { useRef} from 'react'
import {setUser} from '../store/userSlice'
// import {useDispatch} from 'react-redux'


function UserInput({userRef, dispatch}) {


 

  return (
    <div className='UserInput'>
      <div className="header">
        <h4>devfinder</h4>
        <div className="darkMode" >
          <p id="modeText">DARK</p>
          <img src="./assets/icon-moon.svg" id = "dark_btn"alt=""/>
        </div>        
      </div>

      <div className="search" id="search_container">
        <img src="./assets/icon-search.svg" alt=""/>
        <input ref={userRef} id ="input" type="text" placeholder="Search Github username..."/>
        <div className="search_btn">
          <button onClick={()=>dispatch(setUser(userRef.current.value))}  id="search">Search</button>
        </div>
        {/*  */}
      </div>

      <div id="error">
        <p>User not found</p>
      </div>
    </div>
   
  )
  
}

export default UserInput
