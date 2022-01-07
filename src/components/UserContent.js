import React from 'react'
import moment from 'moment';
import { useSelector} from 'react-redux'

function UserContent() {

  const userData = useSelector(state => state.userData.data)

  return (
    <div className="content">

    <div className="profile">
      <div className="profile_frame">
        <img id = "avatar"src={userData.avatar_url ? userData.avatar_url : "./assets/profilePlaceholder.png"} alt=""/>
      </div>
    </div>
  
    <div className="user">
  
      <div className="user_info">
  
        <div className="name" >
  
          <h3 id = "name">{userData.name ? userData.name : 'Not available'}</h3>
  
          <div className="username">
            <p id="login">@{userData.login}</p>
          </div>
        </div>
  
        <div className="date">
          <p id="date">Joined {moment(userData.created_at).format('Do MMM YYYY')}</p>
        </div>
      </div>
  
      <div className="bio">
        <p id = "bio">{userData.bio ? userData.bio: 'Not available'}</p>
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
            <p id="location">{userData ?userData.location : 'Not available'}</p>
          </div>
          <div className="info">
            <img src="./assets/icon-website.svg" alt=""/>
            <a href={userData.blog} id = "blog">{userData.blog ? userData.blog : 'Not available'}</a>
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
  )
}

export default UserContent
