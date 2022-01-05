import './App.css';
import axios from 'axios'
import {useEffect, useState, useRef} from 'react'
import moment from 'moment';

// #1 npm install axios
// #2 import axios from './axios'
// #3 import useEffect hook
// #4 Make an get request to the github api using axios
// #5 How do we get reference of the input value?
// #6 import useRef and get the ref of the search input
// #7 On click of the search update the user state with the ref 
// #8 After finish search functionality how do you map the response into the code?
// #9 Get the theme switcher to work
// #10 Turn reusable sections of the app to components (Finish rest of hw)

function App() {

  // useEffect(()=>{
  //   const response = axios.get('https://api.github.com/users/octocat')
  //   response.then((res)=> console.log(res.data))
  // }, [])

  const [user, setUser] = useState('octocat')
  const [userData, setUserData] = useState({})
//TO DO
//how to access n get the value of input and setUSer to value

//how do I store the value of input?

  const userRef = useRef()

  useEffect(()=>{
    const getUser= async()=>{
      try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        setUserData(response.data)
        console.log(response.data)
      }
      catch(error) {
        console.log(error)
      }
    }
    return getUser()
  }, [user])

  

  return (
      <div className="App">
        <div className='container'>


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
              <button onClick={()=>setUser(userRef.current.value)} id="search">Search</button>
            </div>
          </div>

          <div id="error">
            <p>User not found</p>
          </div>

          <div className="content">
    
            <div className="profile">
              <div className="profile_frame">
                <img id = "avatar"src={userData.avatar_url || "./assets/profilePlaceholder.png"} alt=""/>
              </div>
            </div>

            <div className="user">

              <div className="user_info">

                <div className="name" >

                  <h3 id = "name">{userData.name}</h3>

                  <div className="username">
                    <p id="login">@{userData.login}</p>
                  </div>
                </div>
          
                <div className="date">
                  <p id="date">Joined {moment(userData.created_at).format('Do MMM YYYY')}</p>
                </div>
              </div>
    
              <div className="bio">
                <p id = "bio">{userData.bio}</p>
              </div>


              <div className="stats_container" id="statistics">

                <div className="stats">
                  <p>Repos</p>
                  <p id="repo">{userData.public_repos}</p>
                </div>

                <div className="stats">
                  <p>Followers</p>
                  <p id="followers">{userData.followers}</p>
                </div>

                <div className="stats">
                  <p>Following</p>
                  <p id="following">{userData.followers}</p>
                </div>

              </div>

              <div className="links_container">

                <div className="left">
                 <div className="info">
                    <img src="./assets/icon-location.svg" alt=""/>
                    <p id="location">{userData.location || 'Not available'}</p>
                  </div>
                  <div className="info">
                    <img src="./assets/icon-website.svg" alt=""/>
                    <a href="link" id = "blog">{userData.blog || 'Not available'}</a>
                  </div>
                </div>

                <div className="right">
                  <div className="info">
                    <img src="./assets/icon-twitter.svg" alt=""/>
                    <p id ="twitter">{userData.twitter_username || 'Not available'}</p>
                  </div>
                  <div className="info">
                    <img src="./assets/icon-company.svg" alt=""/>
                  <p id= "company">{userData.company || 'Not available'}</p>
                  </div>
                </div>

              </div>
            </div>


    

    
    
    
          </div>

       </div>
     </div>

  );
}

export default App;
